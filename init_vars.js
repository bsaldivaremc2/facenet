var main_img = "";
var json_data = {"min_face_size": 40};
var face_found_wh = 64;
var max_wh = 512;
var results_counter = 0;
var results_canvas_id_base = 'canvas_result_';
var TOP_N = 3;
var send_msg = "<p>Sending image...(The first time can take up to 1 minute, waking up the dragon...)</p>";
var received_msg = "";
var error_msg = "<p>There was an error, please try the <strong>Send test data to server</strong> or upload a valid image</p>";
var ERASE_RESULT_TIMER = 10;
