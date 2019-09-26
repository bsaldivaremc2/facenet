var main_img = "";
var json_data = {"min_face_size": 40};
var face_found_wh = 64;
var max_wh = 256;
var results_counter = 0;
var results_canvas_id_base = 'canvas_result_';
var TOP_N = 3;
var ERASE_RESULT_TIMER = 10;
var display_canvas_html = `
<canvas id="display_canvas" height="`+max_wh+`" id="canvas_face" width="`+max_wh+`" ></canvas>
`;

var button_icons_wh = '16px';
var icons_dir='imgs/icons/';
function rotation_text(direction='right',color='white')
{
  var dir_col = {'right':{'white':icons_dir+'rot_clock_white.png','black':icons_dir+'rot_clock_black.png'},
                    'left':{'white':icons_dir+'rot_anti_clock_white.png','black':icons_dir+'rot_anti_clock_black.png'}};
  return '<img src="'+dir_col[direction][color]+'" width="'+button_icons_wh+'" height="'+button_icons_wh+'"/> ';
};

function gears_color(color='white')
{
  return '<img src="'+icons_dir+'gears_'+color+'_32.png" width="'+button_icons_wh+'" height="'+button_icons_wh+'"/> ';
};


//console.log(rotation_text(direction='right',color='white'));
//Cofund
var target_cloud_algo = "bsaldivar/cofundrecognition/0.1.6?timeout=300";
var target_cloud_client = "simGARGu+tInKtSfK5AMdtMmzy11";
var db_img_dir = 'imgs/cofund_faces/';
var imagefile_id='ID';
var imagefile_extension='.jpg';

//Science
var target_cloud_algo = "bsaldivar/facenet_science/0.1.11?timeout=300";
var target_cloud_client = "simGARGu+tInKtSfK5AMdtMmzy11";
var db_img_dir = 'imgs/science/';
var imagefile_id='file';
var imagefile_extension='';

//local
var server="http://127.0.0.1:5000/flask"

//Language setting
var see_more = {'en':'read more','es':'leer más'};

//contact
var html_contact=`Contact: <a href="https://twitter.com/bsaldivaremc2" target="_blank">Bryan Saldivar </a>
<a href="https://twitter.com/_jidemuritala" target="_blank">Babajide Muritala </a>
<a href="https://twitter.com/b_milosh" target="_blank">Michael Bamiloshin   </a>
`;
