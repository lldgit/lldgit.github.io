var str="/Entdeckt-LEGOLAND/Restaurant/";
var url1=document.URL;
if(url1.indexOf(str) != -1) {	
	var rumble="<div id=\"funbox\"></div><a href=\"/\" id=\"rumblebumble\" class=\"rumble1\">Jetzt Online-Tickets <strong>25%</strong> günstiger</a>";
	$( "#funbox" ).replaceWith(rumble);
	           var properties = {
               color : 'red'
            };

            var el = $('#rumblebumble .target');

            el.pulse(properties, { pulses : 2 });
         

}	