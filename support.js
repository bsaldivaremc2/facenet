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
    <div class="faces_top"></div>
      <div class="face_left">
        <canvas id="canvas_result_`+results_counter+`" ></canvas>
      </div>
      <div class="faces_right">`+faces_right+`</div>
    <div class="faces_bottom">`+description+`</div>
  </div>
  `;
  results_counter+=1;
  //$("#"+parent_id).append(row_html);
  $("#"+parent_id).prepend(row_html);
}
