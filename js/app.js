$(document).ready(function() {

	$('.mensaje').hide();
	$('.mensaje_error').hide();
	$('#res').hide();

	$('div#form form').submit(function () {

	    if ($('#txtbuscar').val().length < 1) {
	        $('.mensaje').hide();
	        $('.mensaje_error').fadeIn(100);
	        $('.mensaje_error').html("Por favor, rellene este campo.");
	        $('.mensaje_error').delay(2000).fadeOut('slow');

	    }

	    $('#res').html("");
	    var b = $("#txtbuscar").val();
	    $.getJSON('https://support.mozilla.org/es/search?q=' + b + '&format=json&callback=?', function (data) {

	        if (typeof data.message == "undefined") {
	            $.each(data, function (key, val) {
	                $.each(val, function (key2, val2) {
	                    if (typeof val2.title == "undefined") {} else {	                    	
	                        //$('#res').append('<li>' + val2.title + '</li>');
	                        var titulo = $('<a href=https://support.mozilla.org' + val2.url +'>' + val2.title + '</li><br/>');
	                        var descripcion = $('<span>' + val2.search_summary + '</span><br/><br/>');

	                        $("#res").append(titulo);
	                        $("#res").append(descripcion);
	                    }
	                });
	            });

	        } else {
	            $('.mensaje_error').hide();
	            $('.mensaje').fadeIn(100);
	            $('.mensaje').html("no hay ninguna referencia");
	            $('.mensaje').delay(2000).fadeOut('slow');
	        }

	    });

	    $("#form").animate({opacity: 'hide'}, 300);
	    $("#res").animate({opacity: 'show'}, 300);


	});

	$('#btnbuscar').click(function () {

    if ($('#txtbuscar').val().length < 1) {
        $('.mensaje').hide();
        $('.mensaje_error').fadeIn(100);
        $('.mensaje_error').html("Por favor, rellene este campo.");
        $('.mensaje_error').delay(2000).fadeOut('slow');

    }

    $('#res').html("");
    var b = $("#txtbuscar").val();
	    $.getJSON('https://support.mozilla.org/es/search?q=' + b + '&format=json&callback=?', function (data) {

	        if (typeof data.message == "undefined") {
	            $.each(data, function (key, val) {
	                $.each(val, function (key2, val2) {
	                    if (typeof val2.title == "undefined") {} else {
	                        $('#res').append('<li>' + val2.title + '</li>');
	                    }
	                });
	            });

	        } else {
	            $('.mensaje_error').hide();
	            $('.mensaje').fadeIn(100);
	            $('.mensaje').html("no hay ninguna referencia");
	            $('.mensaje').delay(2000).fadeOut('slow');
	        }

	    });

	    $("#form").animate({opacity: 'hide'}, 300);
	    $("#res").animate({opacity: 'show'}, 300);

	});
	
});


