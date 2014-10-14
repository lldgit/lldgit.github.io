var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/\" id=\"rumblebumble\" style=\"background-color:#da291c;\" onClick=\"_gaq.push([\'_trackEvent\', \'Stoerer\', \'Navi\', \'Jetzt Tickets 25 guenstiger\']);\">Jetzt Online-Tickets <strong>25%</strong> günstiger</a>";
	$( "#funbox" ).replaceWith(rumble);
    for (var i = 0; i < 3; i++ ) {
        $("#rumblebumble")
        		.delay(300).animate( { marginTop: '300px'}, 100 )
        		.animate( { marginTop: '315px'}, 100 )
        		.animate( { marginTop: '300px'}, 100 )
        		.animate( { marginTop: '315px'}, 500 )
       		 .animate( { backgroundColor: "#fe0c0c"}, 500 )
            .animate( { backgroundColor: "#da291c" }, 800 );
            
    }
         

}

