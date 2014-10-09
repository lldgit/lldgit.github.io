var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/\" id=\"rumblebumble\">Jetzt Online-Tickets <strong>25%</strong> günstiger</a>";
	$( "#funbox" ).replaceWith(rumble);
  $("#rumblebumble").delay( 800 ).animate({
    box-shadow:'0 0 9px #333',
  });
  $("#rumblebumble").delay( 1600 ).animate({
    background-color:'#e33100',
    box-shadow:'0 0 18px #e33100',    
  });
    $("#rumblebumble").delay( 2400 ).animate({
    box-shadow:'0 0 9px #333',
  });  
}	

	@-webkit-keyframes redPulse {
	  from { background-color: #bc330d; -webkit-box-shadow: 0 0 9px #333; }
	  50% { background-color: #e33100; -webkit-box-shadow: 0 0 18px #e33100; }
	  to { background-color: #bc330d; -webkit-box-shadow: 0 0 9px #333; }
	}