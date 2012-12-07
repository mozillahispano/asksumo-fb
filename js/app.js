$(document).ready(function() {	

	$.getJSON('https://support.mozilla.org/' + lang_search + '/search?sortby_documents=helpful&w=1&a=1&format=json&callback=?', function (data) {
		$.each(data, function (key, val) {			
            $.each(val, function (key2, val2) {            	
            	if(val2.rank < 3){
            		$(".resjson2").append("<li class=listar><a href=https://support.mozilla.org"+ val2.url +" target=_blank > " + val2.title + "<a></li>");
            	}
            });
        });
	});

	$.getJSON('https://support.mozilla.org/' + lang_search + '/search?topics=hot&a=1&w=1&format=json&callback=?', function (data) {
		$.each(data, function (key, val) {			
            $.each(val, function (key2, val2) {            	
            	if(val2.rank < 3){
            		$(".resjson").append("<li class=listar><a href=https://support.mozilla.org"+ val2.url +" target=_blank > " + val2.title + "<a></li>");
            	}
            });
        });
	});

	$('.mensaje').hide();
	$('.mensaje_error').hide();
	$('#res').hide();	

	$('div#form form').submit(function () {

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
	            $.each(data, function (key, val) {
	                $.each(val, function (key2, val2) {
	                    if (typeof val2.title == "undefined") { } else if(val2.type != 'question') {	                    	
	                        $('#res').show();
	                        var titulo = $('<li><a href=https://support.mozilla.org' + val2.url +' target=_blank>' + val2.title + '</a></li>');
	                        var descripcion = $('<li>' + val2.search_summary + '</li>');

	                        $("#holder").append(titulo);
	                        $("#holder").append(descripcion);
	                        $("ul.pagination").quickPagination();
	                        //$("#res").hide();	        
	                    }
	                });
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
				

	});

	$('#btnbuscar').click(function () {

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
	            $.each(data, function (key, val) {
	                $.each(val, function (key2, val2) {
	                    if (typeof val2.title == "undefined") {} else if(val2.type != 'question') {	                    	
	                        $('#res').show();
	                        var titulo = $('<li><a href=https://support.mozilla.org' + val2.url +' target=_blank>' + val2.title + '</a></li>');
	                        var descripcion = $('<li>' + val2.search_summary + '</li>');

	                        $("#holder").append(titulo);
	                        $("#holder").append(descripcion);
	                        $("ul.pagination").quickPagination();
	                        //$('#res').hide();
	                    }
	                });
	            });

	            //$('#holder2').html($('#holder'));
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

	});

});
