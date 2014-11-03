!function(a,b){typeof define=="function"?define(b):typeof module!="undefined"&&module.exports?module.exports.browser=b():this[a]=b()}("bowser",function(){function p(){if(c)return{msie:b,version:a.match(/msie (\d+(\.\d+)?);/i)[1]};if(d)return{webkit:b,chrome:b,version:a.match(/chrome\/(\d+(\.\d+)?)/i)[1]};if(h)return{webkit:b,touchpad:b,version:a.match(/touchpad\/(\d+(\.\d+)?)/i)[1]};if(f||g){o={webkit:b,mobile:b,ios:b,iphone:f,ipad:g},n.test(a)&&(o.version=a.match(n)[1]);return o}if(i)return{webkit:b,android:b,mobile:b,version:a.match(n)[1]};if(e)return{webkit:b,safari:b,version:a.match(n)[1]};if(j)return{opera:b,version:a.match(n)[1]};if(l){o={gecko:b,mozilla:b,version:a.match(/firefox\/(\d+(\.\d+)?)/i)[1]},k&&(o.firefox=b);return o}if(m)return{seamonkey:b,version:a.match(/seamonkey\/(\d+(\.\d+)?)/i)[1]}}var a=navigator.userAgent,b=!0,c=/msie/i.test(a),d=/chrome/i.test(a),e=/safari/i.test(a)&&!d,f=/iphone/i.test(a),g=/ipad/i.test(a),h=/touchpad/i.test(a),i=/android/i.test(a),j=/opera/i.test(a),k=/firefox/i.test(a),l=/gecko\//i.test(a),m=/seamonkey\//i.test(a),n=/version\/(\d+(\.\d+)?)/i,o,q=p();q.msie&&q.version>=7||q.chrome&&q.version>=10||q.firefox&&q.version>=4||q.safari&&q.version>=5||q.opera&&q.version>=10?q.a=b:q.msie&&q.version<7||q.chrome&&q.version<10||q.firefox&&q.version<4||q.safari&&q.version<5||q.opera&&q.version<10?q.c=b:q.x=b;return q})
var browsererror=2;
var finderror=2
if (bowser.msie) {
  var browsererror=2;
}
if (bowser.safari) {
  var browsererror=2;
}
var str="Bus";
var url1=document.URL;
var finderror=1;
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="Firmen";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="adventskalender";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="Presse";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="Preise-und-Tickets";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="Prices-and-Tickets";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="bus";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="firmen";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="Gruppen";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="gruppen";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="/winterangebote";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="Jetzt-Tickets-sichern";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
var str="LEGOLAND-Feriendorf";
if(url1.indexOf(str) != -1) {	
	var finderror=2;
}
if(url1=="http://www.legoland.de/") {
	var finderror=2;
}
var str="/en/";
var url1=document.URL;
if(url1.indexOf(str) == -1 && finderror==1 && browsererror==1) {	
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


if(url1.indexOf(str) == -1 && finderror==1) {	
     var rumble2="<a href=\"/Jetzt-Tickets-sichern/\" class=\"topstoerer\" onClick=\"_gaq.push([\'_trackEvent\', \'Stoerer\', \'Content\', \'FamilienticketsHalloween\']);\">Für kurze Zeit: Tageskarte nur 25 &euro; und gruselige Halloween-Wochen erleben &raquo;</a><div class=\"c\"></div>";
$( ".c:first" ).replaceWith(rumble2);
}

