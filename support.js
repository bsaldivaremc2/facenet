function draw_on_canvas(box,canvas_id)
{
  var x = box[0],y=box[1],h=box[2],w = box[3];
   var canvasf = document.getElementById(canvas_id);
   var ctxf = canvasf.getContext('2d');
   canvasf.width = face_found_wh;
   canvasf.height = face_found_wh;
   ctxf.drawImage(main_img, x,y,h,w,0,0,face_found_wh,face_found_wh);
}
function create_result_row(parent_id,faces_right="",description="")
{
  var row_html = `
  <div class="faces">
    <div class="faces_top">
        <div class="face_left">
          <canvas id="canvas_result_`+results_counter+`" ></canvas>
        </div>
        <div class="faces_right">`+faces_right+`</div>
    </div>
    <div class="faces_bottom">`+description+`</div>
  </div>
  `;
  results_counter+=1;
  //$("#"+parent_id).append(row_html);
  $("#"+parent_id).prepend(row_html);
}
//file:///home/bsaldivar/Github/facenet/index.html
function rotate(direction="right")
{
  var angle=Math.PI / 2;
  if (direction=="left")
  {
    angle=-Math.PI / 2;
  }
  //Remove everything and paint again with changes
  var hidden_canvas_html = '<canvas id="dummy_canvas"></canvas>';
  $("#dummy_canvas").remove();
  $("#dummy").append(hidden_canvas_html);
  //Display
  $("#display_canvas").remove();
  $("#main_canvas").append(display_canvas_html);

  var img = main_img;
  var img_max_wd = Math.max(img.width,img.height);
  var canvas = document.getElementById('dummy_canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = img.width//256//192;//img.width;
  canvas.height = img.height//256//256;//img.height;
  var canvas_w = img.width;
  var canvas_h = img.height;
  ctx.translate(canvas_w/2, canvas_h/2);
  ctx.rotate(angle);
  ctx.translate(-canvas_w/2, -canvas_h/2);
  ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
  var uri = canvas.toDataURL('image/png'),
  b64 = uri.replace(/^data:image.+;base64,/, '');
  json_data['img64']=b64;
  //Updating main image
  var imgr = new Image();
  imgr.id = "rot";
  imgr.src = uri;
  main_img = imgr;

  var canvasd = document.getElementById('display_canvas');
  var ctxd = canvasd.getContext('2d');
  if (img_max_wd>max_wh)
  {
    var image_factor = max_wh/img_max_wd;
    canvas_w = canvas_w*image_factor;
    canvas_h = canvas_h*image_factor;
  }
  if (img.width==img_max_wd)
  {
    ctxd.translate(canvas_w/2, canvas_h/2);
    ctxd.rotate(angle);
    ctxd.translate(-canvas_w/2, -canvas_h/2);
  }
  ctxd.drawImage(img,0,0,img.width,img.height,0,0,canvas_w,canvas_h);
}
function use_faces(faces)
{
  var total_faces = faces.length;
  for(var i = 0;i<total_faces;i++)
  {
    var face = faces[i];//keys: box, confidence, keypoints (face points), top , topn
    //top is a list, where each object has the keys: distance, name, top
    var similar_people = face['top'];
    var result_id = results_canvas_id_base+results_counter;
    var description = description_start;
    var IDs = []
    var faces_right_html = '  '
    for (j=0;j<Math.min(similar_people.length,TOP_N);j++)
    {
      topx = similar_people[j];
      var distance = Math.round(topx['distance'],0);
      var bio = topx['bio_'+lang];
      var link = topx['web_'+lang];
      description+=topx['name']+': '+bio+' <br><a href="'+link+'" target="_blank">'+see_more[lang]+'</a><br><br>';//+description_distance_message_start+distance+description_distance_message_end;
      var img_loc = db_img_dir+topx[imagefile_id]+imagefile_extension;
      faces_right_html+='<img src="'+img_loc+'" width="'+face_found_wh+'" height="'+face_found_wh+'"/>';
    }
    //description+=description_end;
    create_result_row("right",faces_right_html,description);
    draw_on_canvas(face['box'],result_id);
  }
}
