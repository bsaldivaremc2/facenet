var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('dummy_canvas');
var ctx = canvas.getContext('2d');
function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
    var img = new Image();
    img.onload = function(){
      canvas.width = img.width//256//192;//img.width;
      canvas.height = img.height//256//256;//img.height;
      var canvas_w = img.width;
      var canvas_h = img.height;
      //ctx.drawImage(img,0,0);
      //var imgData = context.getImage
      ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
      //ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas_w,canvas_h);//212936
      var uri = canvas.toDataURL('image/png'),
      b64 = uri.replace(/^data:image.+;base64,/, '');
      json_data['img64']=b64;
      main_img = img;

      //Display canvas
      $("#display_canvas").remove();
      //var display_canvas_html = '<canvas id="display_canvas" height="512" id="canvas_face" width="512" ></canvas>';
      $("#main_canvas").append(display_canvas_html);
      var canvasd = document.getElementById('display_canvas');
      var ctxd = canvasd.getContext('2d');

      var img_max_wd = Math.max(img.width,img.height);
      if (img_max_wd>max_wh)
      {
        var image_factor = max_wh/img_max_wd;
        canvas_w = canvas_w*image_factor;
        canvas_h = canvas_h*image_factor;
      }
      ctxd.drawImage(img,0,0,img.width,img.height,0,0,canvas_w,canvas_h);
      //ctxd.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
}
