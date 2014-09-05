require(["jquery", "jquery.reveal", "jquery.quick.pagination.min"], function($){

	function Search() {

		if ($('#txtbuscar').val().length < 1) {
			$('.mensaje').hide();
			$('.mensaje_error').fadeIn(100);
			$('.mensaje_error').html(error_msg1);
			$('.mensaje_error').delay(2000).fadeOut('slow');
		}	        

		$('#holder').html("");
		var b = $("#txtbuscar").val();
		$.getJSON('https://support.mozilla.org/' + lang_search + '/search?q=' + b + '&format=json&callback=?', function (data) {

			if (typeof data.message == "undefined") {
				$.each(data.results, function (key, val) {
					console.log(val);
					if (typeof val.title == "undefined") { } else if(val.type != 'question') {	                    	
						$('#res').show();
						var titulo = $('<li><a href=https://support.mozilla.org' + val.url +' target=_blank>' + val.title + '</a></li>');
						var descripcion = $('<li>' + val.search_summary + '</li>');

						$("#holder").append(titulo);
						$("#holder").append(descripcion);
						$("ul.pagination").quickPagination();
						//$("#res").hide();	        
					}					
				});

				//$('#main2').html($('#main'));
				if($('#holder').html() == ""){
					$('.mensaje_error').hide();
					$('.mensaje').fadeIn(100);
					$('.mensaje').html(error_msg2);
					$('.mensaje').delay(2000).fadeOut('slow');
					$('#res').hide();
				}else {
					$('#myModal').reveal({
						animation: 'fadeAndPop',                   
						animationspeed: 300,                       
						closeonbackgroundclick: true,              
						dismissmodalclass: 'close-reveal-modal'    
					});	
				}
				

			} else {
				$('.mensaje_error').hide();
				$('.mensaje').fadeIn(100);
				$('.mensaje').html(error_msg2);
				$('.mensaje').delay(2000).fadeOut('slow');
				$('#res').hide();	            
			}

		});

	}
	
	$(function() {

		$.getJSON('https://support.mozilla.org/' + lang_search + '/search?sortby_documents=helpful&w=1&a=1&format=json&callback=?', function (data) {
			$.each(data.results, function (key, val) {
				if(val.rank < 3){
					$(".resjson2").append("<li class=listar><a href=https://support.mozilla.org"+ val.url +" target=_blank > " + val.title + "<a></li>");
				}
			});
		});

		$.getJSON('https://support.mozilla.org/' + lang_search + '/search?topics=hot&a=1&w=1&format=json&callback=?', function (data) {
			$.each(data.results, function (key, val) {
				if(val.rank < 3){
					$(".resjson").append("<li class=listar><a href=https://support.mozilla.org"+ val.url +" target=_blank > " + val.title + "<a></li>");
				}
			});
		});

		$('.mensaje').hide();
		$('.mensaje_error').hide();
		$('#res').hide();	

		$('div#form form').submit(function () {
			Search();
		});

		$('#btnbuscar').click(function () {
			Search();
		});

	});

});
