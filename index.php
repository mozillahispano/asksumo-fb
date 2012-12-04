<?php

require_once './ChooseLocale.class.php';

$site = array('es', 'en', 'fr');

$locale = new tinyL10n\ChooseLocale($site);

$locale->setDefaultLocale('en');

$locale->mapLonglocales = true;

$default_locale = $locale -> getDefaultLocale();

$df = 'lang/' . $default_locale . '.properties';

$title;
$body;
$btnSearch;
$popular_articles;
$url_popular_articles;
$msg1;
$msg2;
$error_msg1;
$error_msg2;
$lang_search;

if($locale->getCompatibleLocale() != $locale -> getDefaultLocale()){	
		
	$df = 'lang/' . $locale->getCompatibleLocale() . '.properties';
	
	$lang_file = parse_ini_file($df);
		
	$title = $lang_file['title'];
	$body = $lang_file['body'];
	$btnSearch = $lang_file['btnSearch'];
	$popular_articles = $lang_file['popular_articles'];
	$url_popular_articles = $lang_file['url_popular_articles'];
	$msg1 = $lang_file['msg1'];
	$msg2 = $lang_file['msg2'];
	$error_msg1 = $lang_file['error_msg1'];
	$error_msg2 = $lang_file['error_msg2'];
	$lang_search = $lang_file['lang'];
	
} else {
	
	$lang_file = parse_ini_file($df);	

	$title = $lang_file['title'];
	$body = $lang_file['body'];
	$btnSearch = $lang_file['btnSearch'];
	$popular_articles = $lang_file['popular_articles'];
	$url_popular_articles = $lang_file['url_popular_articles'];
	$msg1 = $lang_file['msg1'];
	$msg2 = $lang_file['msg2'];
	$error_msg1 = $lang_file['error_msg1'];
	$error_msg2 = $lang_file['error_msg2'];
	$lang_search = $lang_file['lang'];	
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Mozilla Hispano APP</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/reveal.css">
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body style="overflow: hidden" >
	<div id="wrapper">
		<div id="tit">			
			<div id="tit1">
				<img src="img/identity-logo-firefox.png" alt="firefox" />
			</div>			
			<div id="tit2">
				<h1><?php echo $title ?></h1>
				<p><?php echo $body ?></p>
			</div>
		</div>
		<div id="form">			
			<br/>		
			<form id="buscar" action="javascript:;" method="post" >
				<input type="text" id="txtbuscar"/>
				<a href="#" id="btnbuscar" class="button"><?php echo $btnSearch ?></a>
				<br/><br/>
				<div class="mensaje"></div>
				<div class="mensaje_error"></div>
			</form>
		</div>		
		<br/>		
		<div id="info">
			<h3><?php echo $popular_articles ?></h3>
			<div id="articulos">
				<ul class="resjson" id="list" ></ul>				
			</div>
			<p><?php echo $msg1 ?></p>
			<p><?php echo $msg2 ?></p>
		</div>
	</div>

	<div id="myModal" class="reveal-modal">
    	<div id="res">
			<div id="main">
				<ul id="holder" class="pagination">		
				</ul>											
			</div>
		</div>
    	<a class="close-reveal-modal">&#215;</a>
	</div>

<!-- js -->
<script src="js/jquery.js"></script>
<script src="js/jquery.reveal.js"></script>
<script src="js/jquery.quick.pagination.min.js"></script>
<script src="https://connect.facebook.net/en_US/all.js"></script>
<script src="js/app.js"></script>
<script src="js/faceconfig.js"></script>
<script type="text/javascript">
var url_popular_articles = "<?php echo $url_popular_articles ?>";
var error_msg1 = "<?php echo $error_msg1 ?>";
var error_msg2 = "<?php echo $error_msg2 ?>";
var lang_search = "<?php echo $lang_search ?>";
</script>
</body>
</html>
