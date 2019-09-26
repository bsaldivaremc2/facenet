$( function() {
 $( "#send_img_btn" ).on('click touch',function() {

  console.log(send_msg);
  //var image_l = image_dic['image'].length;
  $('#message').html(send_msg);
  var input = json_data;
  //console.log(input);
  //validate if image exist
  $.ajax({
    type: "POST",
    url:server,
    data: input,//JSON.stringify(input),
    dataType: 'json'
    }).done(function(data){
      //var output = JSON.stringify(data);
      output = data;
      console.log(output);
      $('#message').html(received_msg);
      var faces = output['result']['faces'];
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
          description+=topx['name']+description_distance_message_start+distance+description_distance_message_end;
          var img_loc = db_img_dir+topx[imagefile_id]+imagefile_extension;
          faces_right_html+='<img src="'+img_loc+'" width="'+face_found_wh+'" height="'+face_found_wh+'"/>';
        }
        description+=description_end;
        create_result_row("right",faces_right_html,description);
        draw_on_canvas(face['box'],result_id);
      }
    }).fail(function(){
      $('#message').html(error_msg);
    });

 });
 $( "#send_test_btn" ).on('click touch',function() {
   //var box = [144,169,322, 444];
   var box = [156,84,57,77];
   var result_id = results_canvas_id_base+results_counter;
   create_result_row("right");
   draw_on_canvas(box,result_id);
   ////

   //var x = 397,y=169,h=161,w = 198;//carlos
   /*
   var x = 144,y=169,h=322,w = 444;
   var crop = {
      top : x,
      left : y,
      right : y+h,
      bottom : x+w,
    };
    var canvasf = document.getElementById('canvas_face');
    var ctxf = canvasf.getContext('2d');
    canvasf.width = crop.right - crop.left;
    canvasf.height = crop.bottom - crop.top;
    ctxf.drawImage(main_img, -crop.left, -crop.top);
    */
   ///

});//End of send_test_btn
  $( "#clear_results_btn" ).on('click touch',function() {
    /*
    $("#display_canvas").remove();
    $("#main_canvas").append(display_canvas_html);
    */
    $("#right").html("");

  });//End of clear_results_btn
  //Start rotate
  $( "#rotate_right" ).on('click touch',function() {
    rotate(direction="right");
  });
  $( "#rotate_left" ).on('click touch',function() {
    rotate(direction="left");
  });  
  //End rotate
});//End of loop functions
