/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


var wort = "/en/";
var url1=document.URL;
	if (url1.indexOf(wort) != -1 ) {
		var lang="en";
	}	else {
		var lang="de";	
	}





var index;
var stopp = 0;
var stopwort=["bus","firmen","presse","preise","tickets"];
for(index = 0; index < stopwort.length; index++) {
    var wort = stopwort[index].toLowerCase();
    var url1=document.URL.toLowerCase();
	if (url1.indexOf(wort) != -1 ) {
		var stopp=1;
	}	
}





var str ="Piraten-Bowling";
var url1=document.URL;
if (url1.indexOf(str) != -1 && stopp==0) {


var rumble="<ul class=\"langselect\"><\/ul><div id=\"nllayer\" style=\"position:absolute; display:none; background:blue; height:550px; z-index:100; display:hidden; margin-top:-40px; width:600px; margin-left:150px;\"><\/div>";
$( ".langselect" ).replaceWith(rumble);



	

if($.cookie('lldbig2') === undefined || $.cookie('lldbig2') === null) {
	var anzahl=0;
} else {
	var anzahl=$.cookie('lldbig2');
}
	if(anzahl < 4 && $.cookie('keinlayer')!="1") {
	
	
	$('#sidebar').animate({ marginTop: '120px'}, 1000);
	$('#maincontent').animate({ marginTop: '120px'}, 1000);
	var rumble="<div id=\"funbox\"><a href=\"#\" onClick=\"javascript:keinlayer();\" style=\"position:absolute; margin-top:77px; text-decoration:none; border:none; border-radius:20px; padding:3px; padding-left:8px; padding-right:8px; margin-left:67px; z-index:100; font-weight:bold; font-size:17px; background:white;\" >x<\/a></div><img src=\"http://lldgit.github.io/bigger.png\"  id=\"himage\" style=\"position:absolute; border:none; border-radius:5px; margin-top:150px; opacity:0; width:890px; \">";
	$( "#funbox" ).replaceWith(rumble);
	$('#himage').animate({ opacity: 1}, 1500);
	$.removeCookie('lldbig2', { path: '/' });	
	$.cookie('lldbig2', parseInt(anzahl)+parseInt(1), { path: '/' });
	
	} else {
		var biglayer=1;
	}
	
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}
addEvent(window,"load",function(e) {
    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
            if ( $( "#nllayer" ).is( ":hidden" ) ) {
    //$( "#nllayer" ).slideDown( "slow" );
  } else {
   
  }
        }
    });
});




}






if(biglayer==1) {
	
$.getScript('http://resortinteraction.com/dyn/dyn.js', function(e) {
		
			if(rain==1) {
		$('#sidebar').css("margin-top", "120px");
	}	
    });
	
}













function keinlayer() {
	$.cookie('keinlayer', "1", { path: '/' });
	$('#sidebar').animate({ marginTop: '0px'}, 1000);
	$('#maincontent').animate({ marginTop: '0px'}, 1000);
	var rumble="<div id=\"funbox\"></div>";
	$( "#funbox" ).replaceWith(rumble);
	$('#himage').animate({ opacity: 0}, 800);
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

