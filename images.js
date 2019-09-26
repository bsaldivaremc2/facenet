$( function() {
 $( "#send_img_btn" ).on('click touch',function() {

  console.log(send_msg);
  //var image_l = image_dic['image'].length;
  $('#message').html(send_msg);
  var input = json_data;
  //console.log(input);
  Algorithmia.client(target_cloud_client)
      .algo(target_cloud_algo) // timeout is optional
      .pipe(input)
      .then(function(output) {
         console.log(output);
         $('#message').html(output);
         var faces = output['result']['faces'];
         use_faces(faces);
      });
 });

  $( "#clear_results_btn" ).on('click touch',function() {
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
