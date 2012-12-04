<?php

require_once __DIR__ . '/ChooseLocale.class.php';

$locale = new tinyL10n\ChooseLocale(array('es', 'en', 'fr'));
$locale->setDefaultLocale('en');
$locale->mapLonglocales = true;

// Bypass locale detection with a lang parameter in the URL?
$lang = (isset($_GET['lang']) && in_array($_GET['lang'], $locale->supportedLocales))
        ? $_GET['lang'] : $locale->getCompatibleLocale();

$lang_file = parse_ini_file(__DIR__ . '/lang/' . $lang . '.properties');   

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
                <h1><?=$lang_file['title']?></h1>
                <p><?=$lang_file['body']?></p>
            </div>
        </div>
        <div id="form">         
            <br/>       
            <form id="buscar" action="javascript:;" method="post" >
                <input type="text" id="txtbuscar"/>
                <a href="#" id="btnbuscar" class="button"><?=$lang_file['btnSearch']?></a>
                <br/><br/>
                <div class="mensaje"></div>
                <div class="mensaje_error"></div>
            </form>
        </div>      
        <br/>       
        <div id="info">
            <h3><?=$lang_file['popular_articles']?></h3>
            <div id="articulos">
                <ul class="resjson" id="list" ></ul>                
            </div>
            <p><?=$lang_file['msg1']?></p>
            <p><?=$lang_file['msg2']?></p>
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
var url_popular_articles = "<?=$lang_file['url_popular_articles']?>";
var error_msg1  = "<?=$lang_file['error_msg1']?>";
var error_msg2  = "<?=$lang_file['error_msg2']?>";
var lang_search = "<?=$lang_file['lang']?>";
</script>
</body>
</html>
