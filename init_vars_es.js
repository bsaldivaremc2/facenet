//Spanish messages
var send_msg = "<p>Enviando imagen...(La primera vez puede tardar 1 minuto. Despertando al dragón...)</p>";
var received_msg = "";
var error_msg = "<p>Apareció un error =( . Intenta usar otra imagen o prueba nuevamente dentro de unos minutos =) </p>";
var send_image_button_text = "Analizar imagen ";

var clear_results_button_text = "Borrar resultados";
var rotate_right_text = 'Rotar Imagen en sentido horario';
var rotate_left_text = 'Rotar Imagen en sentido antihorario';

var rotate_right_desc = rotation_text(direction='right',color='black')+rotate_right_text;
var rotate_left_desc = rotation_text(direction='left',color='black')+rotate_left_text;

var rotate_right_button_html = rotation_text(direction='right',color='white')+rotate_right_text;
var rotate_left_button_html = rotation_text(direction='left',color='white')+rotate_left_text;

var send_image_button_html = gears_color(color='white')+' '+send_image_button_text;
var send_image_button_desc = gears_color(color='black')+' '+send_image_button_text;


var top_header_text = `¿A qué científico te pareces?`;
var top_description_text = `
  <p>Sube tu fotografía y mira a qué científico te pareces. Presiona el botón <strong> Choose File </strong>
  para seleccionar la imagen desde tu computador o teléfono móvil.
   Cuando tu imagen se muestre en pantalla presiona el botón <strong>`+send_image_button_desc+` </strong>.
   La primera vez puede tardar hasta 1 minuto.
   <a href="https://bsaldivaremc2.github.io/facenet/">(See in English)</a></br>
   Antes de enviar la imagen verifica que los rostros estén verticalmente colocados (º_º).</br>
   Usar el botón <strong>`+rotate_right_desc+` o `+rotate_left_desc+`</strong> hasta que esto suceda.</br>
   </br>
   (No guardamos ninguna imagen que subas a esta aplicación acorder a las leyes de protección de datos.)
    </p><br/>

`;

var description_start = 'Se parece a:</br>';
var description_distance_message_start = ' (Diferencia: ';
var description_distance_message_end = ') </br>';
var description_end = '</br>Menor la diferencia, más parecido con el científico.<br/> Un valor de 30 o menor es muy similar';

var lang="es";
