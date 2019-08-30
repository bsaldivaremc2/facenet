var main_img = "";
var json_data = {"min_face_size": 40};
var face_found_wh = 64;
var max_wh = 256;
var results_counter = 0;
var results_canvas_id_base = 'canvas_result_';
var TOP_N = 3;
var send_msg = "<p>Sending image...(The first time can take up to 1 minute, waking up the dragon...)</p>";
var received_msg = "";
var error_msg = "<p>There was an error, please try the <strong>Send test data to server</strong> or upload a valid image</p>";
var ERASE_RESULT_TIMER = 10;
var send_image_button_text = "Analyze Image ";
var clear_results_button_text = "Clear results";
var db_img_dir = 'imgs/cofund_faces/';

var top_header_text = `COFUND Fellow identifier`;
var top_description_text = `
  <p>Find which <a href="http://www.urv.cat/en/research/support/programmes/marti-franques/cofund/fellows/" target="_blank">
   COFUND Fellow</a> looks more similar to you.</br>
   Press the<strong> Choose File </strong> button in order to upload an image.
   Next, after your picture is displayed, press the <strong>`+send_image_button_text+` </strong>.
   The first time it might take a while to warm up, up to 1 minute.</p>
`;
var display_canvas_html = `
<canvas id="display_canvas" height="`+max_wh+`" id="canvas_face" width="`+max_wh+`" ></canvas>
`;
