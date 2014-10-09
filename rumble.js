var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/\" id=\"rumblebumble\">Jetzt <strong>25%</strong> bei Online-Tickets sparen!</a>";
	$( "#funbox" ).replaceWith(rumble);
  $("#rumblebumble").delay( 800 ).animate({
    opacity:'0.5',
  });
  $("#rumblebumble").delay( 1600 ).animate({
    opacity:'1',
  });  
}	