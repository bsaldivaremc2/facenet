var main_img = "";
var json_data = {"min_face_size": 40};
var face_found_wh = 64;
var max_wh = 256;
var results_counter = 0;
var results_canvas_id_base = 'canvas_result_';
var TOP_N = 3;

var send_msg = "<p>Sending image...(The first time can take up to 1 minute, waking up the dragon...)</p>";
var received_msg = "";
var error_msg = "<p>There was an error =(). Please try again later or upload another image</p>";
var ERASE_RESULT_TIMER = 10;
var send_image_button_text = "Analyze Image ";
var clear_results_button_text = "Clear results";


var top_header_text = `Which scientists looks similar to you?`;
var top_description_text = `
  Upload your photograph and see which scientists look more similar to you.
   Press the<strong> Choose File </strong> button in order to upload an image.
   Next, after your picture is displayed, press the <strong>`+send_image_button_text+` </strong>.
   The first time it might take a while to warm up, up to 1 minute.
   <a href="https://bsaldivaremc2.github.io/facenet/index_es.html">(Mirar en Español)</a>
   </p>
`;

var description_start = 'Looks like:</br>';
var description_distance_message_start = ' (Difference: ';
var description_distance_message_end = ') </br>';
var description_end = '</br>The lower the Difference the higher the similarity.</br>A value of 30 or lower is very similar';


var display_canvas_html = `
<canvas id="display_canvas" height="`+max_wh+`" id="canvas_face" width="`+max_wh+`" ></canvas>
`;

//Cofund
var target_cloud_algo = "bsaldivar/cofundrecognition/0.1.6?timeout=300";
var target_cloud_client = "simGARGu+tInKtSfK5AMdtMmzy11";
var db_img_dir = 'imgs/cofund_faces/';
var imagefile_id='ID';
var imagefile_extension='.jpg';

//Science
var target_cloud_algo = "bsaldivar/facenet_science/0.1.6?timeout=300";
var target_cloud_client = "simGARGu+tInKtSfK5AMdtMmzy11";
var db_img_dir = 'imgs/science/';
var imagefile_id='file';
var imagefile_extension='';
