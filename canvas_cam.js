
'use strict';

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector('span#errorMsg');

const constraints = {
  audio: true,
  video: {
    width: 1280, height: 720
  }
};

// Access webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
}

// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

// Load init
init();

// Draw image
var context = canvas.getContext('2d');
snap.addEventListener("click", function() {
  var vw = 5128;
  var vh = 4096;
  context.drawImage(video,0,0,vw,vh,0,0,1024,720);
  var uri = canvas.toDataURL('image/png'),
  b64 = uri.replace(/^data:image.+;base64,/, '');
  json_data['img64']=b64;
  //Test
  var imgr = new Image();
  imgr.id = "rot";
  imgr.src = uri;
  main_img = imgr;
});
