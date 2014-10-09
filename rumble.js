var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/\" id=\"rumblebumble\" class=\"rumble1\">Jetzt Online-Tickets <strong>25%</strong> günstiger</a>";
	$( "#funbox" ).replaceWith(rumble);
	$( "#rumblebumble" ).switchClass( "rumble1", "rumble2", 1000).delay( 800 );
	$( "#rumblebumble" ).switchClass( "rumble2", "rumble1", 1000).delay( 1600 );
	$( "#rumblebumble" ).switchClass( "rumble1", "rumble2", 1000).delay( 2400 );
	$( "#rumblebumble" ).switchClass( "rumble2", "rumble1", 1000).delay( 3200 );
	$( "#rumblebumble" ).switchClass( "rumble1", "rumble2", 1000).delay( 4000 );
	$( "#rumblebumble" ).switchClass( "rumble2", "rumble1", 1000).delay( 4800 );		
}	

