var str="/bus";
var url1=document.URL;
var finderror=5;
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="/firmen";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="/gruppen";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}

var str="/en/";
var url1=document.URL;
if(url1.indexOf(str) == -1 && finderror==1) {	
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

