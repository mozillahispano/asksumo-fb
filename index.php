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
				<h1>Do you need help?</h1>
				<p>Has llegado el lugar adecuado. Busca en nuestro sitio o lista los artículos más populares. Si no puedes encontrar la respuesta a tu pregunta, nuestra comunidad de voluntarios te ayudarán.</p>
			</div>
		</div>
		<div id="form">			
			<br/>		
			<form id="buscar" action="javascript:;" method="post" >
				<input type="text" id="txtbuscar"/>
				<a href="#" id="btnbuscar" class="button">Buscar</a>
				<br/><br/>
				<div class="mensaje"></div>
				<div class="mensaje_error"></div>
			</form>
		</div>		
		<br/>		
		<div id="info">
			<h3>Artículos populares</h3>
			<div id="articulos">
				<ul class="resjson" id="list" ></ul>				
			</div>
			<p>¿Necesitas más ayuda? Navega por los artículos de <a href="http://support.mozilla.org/es/home" target="_blank">nuestra web de asistencia</a>, o pregunta a nuestros voluntarios en <a href="https://www.mozilla-hispano.org/foro/viewforum.php?f=1" target="_blank">nuestros foros</a>.</p>
			<p>¿Sabías que la ayuda es brindada por voluntarios como tú? Descubre <a href="https://www.mozilla-hispano.org/documentacion/Colabora" target="_blank">cómo participar</a>.</p>
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
</body>
</html>
