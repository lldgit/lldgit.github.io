
var str ="Piraten-Bowling";
var url1=document.URL;
if (url1.indexOf(str) != -1) {
	$('#sidebar').animate({ marginTop: '100px'}, 1000);
	$('#maincontent').animate({ marginTop: '100px'}, 1000);
	var rumble="<div id=\"funbox\"></div><img src=\"http://lldgit.github.io/bigger.png\">";
	$( "#funbox" ).replaceWith(rumble);
}


if(test==100) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/Jetzt-Tickets-sichern/\" id=\"rumblebumble\" style=\"background-color:#da291c;\" onClick=\"_gaq.push([\'_trackEvent\', \'Stoerer\', \'Navi\', \'Online-Tickets\']);\">Online-Tickets</a>";
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
if(test==100) {
     var rumble2="<a href=\"/Jetzt-Tickets-sichern/\" class=\"topstoerer\" onClick=\"_gaq.push([\'_trackEvent\', \'Stoerer\', \'Content\', \'FamilienticketsHalloween\']);\">Für kurze Zeit: Tageskarte nur 25 &euro; und gruselige Halloween-Wochen erleben &raquo;</a><div class=\"c\"></div>";
$( ".c:first" ).replaceWith(rumble2);
}

