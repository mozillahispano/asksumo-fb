$(document).ready(function() {

$('.mensaje').hide();
$('.mensaje_error').hide();

$('div#form form').submit(function() {

	if($('#txtbuscar').val().length < 1){
		$('.mensaje').hide();
		$('.mensaje_error').fadeIn(100);
		$('.mensaje_error').html("Por favor, rellene este campo.");
		$('.mensaje_error').delay(2000).fadeOut('slow');
		
	}	
	/*var b = $("#txtbuscar").val();
	$('#res').html("");
	$.ajax({      
      type: "post",
      url: 'https://support.mozilla.org/es/search?q=' + b + '&format=json&callback=?',     
      contentType: "application/json; charset=utf-8",
      dataType: "json",      
      success: function(data){
      	//alert(data.);


      	if(data != "Nothing found."){
      		$.each(data, function(key, val) {		    
			    $.each(val, function(key2, val2) {		    		    
			    	if (typeof val2.title == "undefined"){										  
					}else {						
						$('#res').append('<li>' + val2.title + '</li>');											
					}
					//if(val2.title == 0){alert("sdfdsfds");}				
			  	});		  			  		  	
			});
  			
      	 }else {
      	 	alert("sfsdf");
      	 	$.each(data, function(key, val) {
      	 		alert(data);
      	 	});
      	 	/*alert("aaaaaaaaaaa");
      	 	$('.mensaje_error').hide();
			$('.mensaje').fadeIn(100);
			$('.mensaje').html("no hay ninguna referencia");
			$('.mensaje').delay(2000).fadeOut('slow');*/
      	 	
      	// }

      		/*if(data.failed){
      			$('.mensaje_error').hide();
  				$('.mensaje').fadeIn(100);
  				$('.mensaje').html("no hay ninguna referencia");
  				$('.mensaje').delay(2000).fadeOut('slow');
      		}
 
           
       }
   
      
    });*/



	$('#res').html("");
	var b = $("#txtbuscar").val();
	$.getJSON('https://support.mozilla.org/es/search?q=' + b + '&format=json&callback=?',function(data) {
			
			if(typeof data.message == "undefined"){
				$.each(data, function(key, val) {		    
			    $.each(val, function(key2, val2) {		    		    
			    	if (typeof val2.title == "undefined"){										  
					}else {						
						$('#res').append('<li>' + val2.title + '</li>');											
					}							
			  	});			  		  	
			});	
				
			}else{
				$('.mensaje_error').hide();
  				$('.mensaje').fadeIn(100);
  				$('.mensaje').html("no hay ninguna referencia");
  				$('.mensaje').delay(2000).fadeOut('slow');
			}
			
			
		
			
	});
	
	/*if($('#res').val() == 0){
		alert("vaa");

	}*/

});

/*$('div#form form').live('submit',function () {	
	console.log(datos);
	if(datos == 0 ){
  		$('.mensaje_error').hide();
  		$('.mensaje').fadeIn(100);
  		$('.mensaje').html("no hay ninguna referencia");
  		$('.mensaje').delay(2000).fadeOut('slow');
  	}
});*/



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

});


/*
sudo update-alternatives --config gem
.worker:

runtime "node"

exec "foo.js"

dir "where-does-node-keeps-libs"

file "that-config-file-for-libs"

that's all*/