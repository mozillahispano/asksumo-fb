$('.mensaje').hide();
$('#buscar').submit(function() {
	$('#res').hide();		
	$('#res').html("");
	var b = $("#txtbuscar").val();
	$.getJSON('https://support.mozilla.org/es/search?q=' + b + '&format=json&callback=?',function(data) {		 

		$.each(data, function(key, val) {		    
		    $.each(val, function(key2, val2) {
			    	if (typeof val2.title == "undefined"){										  
					}else {						
						$('#res').append('<li>' + val2.title + '</li>');
						$('#res').show();
						$('#form').hide();					
					}					
		  	});
		  	if(val == 0 ){
		  		$('.mensaje').fadeIn(100);
		  		$('.mensaje').html("no hay ninguna referencia");
		  	} 
		});
	});	
});

$('#btnbuscar').click(function() {
	$('#res').html("");
	var b = $("#txtbuscar").val();
	$.getJSON('https://support.mozilla.org/es/search?q=' + b + '&format=json&callback=?',function(data) {		 

		$.each(data, function(key, val) {		    
		    $.each(val, function(key2, val2) {
		    	if (typeof val2.title == "undefined")
				{										  
				}else {
					
					$('#res').append('<li>' + val2.title + '</li>');					
				}		    	
		  	});
		  	if(val == 0 ){
		  		$('.mensaje').fadeIn(100);
		  		$('.mensaje').html("no hay ninguna referencia");
		  	} 
		});
	});	
});
