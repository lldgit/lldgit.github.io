var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"clouds\"></div><a href="/" id=\"rumblebumble\">test</a>";
	$( "#clouds" ).replaceWith(rumble);
	$('#rumblebumble').jrumble();
	$('#rumblebumble').trigger('startRumble');
}	