$( function() {
 $( "#send_img_btn" ).on('click touch',function() {

  console.log(send_msg);
  //var image_l = image_dic['image'].length;
  $('#message').html(send_msg);
  var input = json_data;
  Algorithmia.client("simGARGu+tInKtSfK5AMdtMmzy11")
      .algo("bsaldivar/cofundrecognition/0.1.4?timeout=300") // timeout is optional
      .pipe(input)
      .then(function(output) {
         console.log(output);
         $('#message').html(output);
         var faces = output['result']['faces'];
         var total_faces = faces.length;
         for(var i = 0;i<total_faces;i++)
         {
           var face = faces[i];//keys: box, confidence, keypoints (face points), top , topn
           //top is a list, where each object has the keys: distance, name, top
           var similar_people = face['top'];
           var result_id = results_canvas_id_base+results_counter;
           var description = "Looks like: ";
           for (j=0;j<Math.min(similar_people.length,TOP_N);j++)
           {
             topx = similar_people[j];
             var distance = Math.round(topx['distance'],0);
             description+=topx['name']+" (Difference: "+distance+")</br>";
           }
           description+="</br> The lower the distance the higher the similarity."
           create_result_row("right","",description);
           draw_on_canvas(face['box'],result_id);
         }
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
});//End of loop functions
