var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/\" id=\"rumblebumble\">Jetzt Online-Tickets <strong>25%</strong> günstiger</a>";
	$( "#funbox" ).replaceWith(rumble);
  $("#rumblebumble").delay( 800 ).animate({
    boxShadow: '0 0 30px #44f' 
  });
  $("#rumblebumble").delay( 1600 ).animate({
    boxShadow: '0 0 10px #44f'
  });  
}	

