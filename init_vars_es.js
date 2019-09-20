var main_img = "";
var json_data = {"min_face_size": 40};
var face_found_wh = 64;
var max_wh = 256;
var results_counter = 0;
var results_canvas_id_base = 'canvas_result_';
var TOP_N = 3;

//Spanish messages
var send_msg = "<p>Enviando imagen...(La primera vez puede tardar 1 minuto. Despertando al dragón...)</p>";
var received_msg = "";
var error_msg = "<p>Apareció un error =( . Intenta usar otra imagen o prueba nuevamente dentro de unos minutos =) </p>";
var ERASE_RESULT_TIMER = 10;
var send_image_button_text = "Analizar imagen ";
var clear_results_button_text = "Borrar resultados";


var top_header_text = `¿A qué científico te pareces?`;
var top_description_text = `
  <p>Sube tu fotografía y mira a qué científico te pareces. Presiona el botón <strong> Choose File </strong>
  para seleccionar la imagen desde tu computador o teléfono móvil.
   Cuando tu imagen se muestre en pantalla presiona el botón <strong>`+send_image_button_text+` </strong>.
   La primera vez puede tardar hasta 1 minuto.</p>
`;

var description_start = 'Se parece a:</br>';
var description_distance_message_start = ' (Diferencia: ';
var description_distance_message_end = ') </br>';
var description_end = '</br>Menor la diferencia, más parecido con el científico.<br/> Un valor de 30 o menor es muy similar';


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
