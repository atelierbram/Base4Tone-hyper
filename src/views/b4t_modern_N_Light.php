<?php
error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('html_errors', false);

include_once "../db/schemes/vars-hex-b4t_modern-n.php";
$url_file = "https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Modern_N_Light.js";

echo "/* colorscheme: $scheme by $author\n";
echo " * project: $url_project\n";
echo " * $url_file\n";

include_once "../db/templates/hyper/light.php";
