var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/\" id=\"rumblebumble\" style=\"background-color:#da291c;\">Jetzt Online-Tickets <strong>25%</strong> günstiger</a>";
	$( "#funbox" ).replaceWith(rumble);
    for (var i = 0; i < 3; i++ ) {
        $("#rumblebumble")
       		 .animate( { backgroundColor: "#fe0c0c" }, 500 )
            .animate( { backgroundColor: "#da291c" }, 800 );
            
    }
         

}