FB.init({
	appId : '359127647514017',
	status : true, 
	cookie : true, 
	xfbml : true 
});

window.fbAsyncInit = function() {
	FB.Canvas.setAutoGrow();
}

function sizeChangeCallback() {
	FB.Canvas.setSize({ width: 795, height: 805});
}		
