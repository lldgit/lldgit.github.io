var preis_tageskarte_erwachsener_ab="25,00";
var preis_tageskarte_kind_ab="25,00";
var preis_familienkarte_4personen_ab="95,00";
var preis_familienkarte_5personen_ab="109,00";





//AB HIER NICHT MEHR EDITIEREN ODER ES MOEGEN DIE FINGER ABFALLEN
var str="Anreise";
var url1=document.URL;
if(url1.indexOf(str) != -1) {
   var lpolink1="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=27101&amp;productId=176647";
   var lpolink2="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=27101&amp;productId=176647";
   var lpolink3="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=40601&amp;productId=176648"; 
   var lpolink4="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=40601&amp;productId=176649"; 
   var routenlink="1";
}	else {
   var lpolink1="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=27101&amp;productId=176647";
   var lpolink2="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=27101&amp;productId=176647";
   var lpolink3="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=40601&amp;productId=176648"; 
   var lpolink4="https://secure.legoland.de/webapp/wcs/stores/servlet/ProductDisplay?langId=-3&amp;storeId=10663&amp;catalogId=24051&amp;categoryId=40601&amp;productId=176649"; 
}


var sidebarbox='<div class=\"lpo_mid lpo_red\" style=\"width: 98%; margin: 0px; padding: 3px;\">'+
'<h3>Bis zu 30% online sparen</h3>'+
'<ul>'+
'<li class=\"lpo_bigs\"> '+
'<ul class=\"lpo_bigs_second lpo_li\">'+
'<li class=\"secondchild\" style=\"width: 50%;\">Erwachsene</li>'+
'<li class=\"secondchild\" style=\"width: 50%;\">Kinder (3-11)</li>'+
'</ul>'+
'<ul class=\"lpo_bigs_second lpo_li\">'+
'<li class=\"secondchild\" style=\"width: 50%;\"><span><small></small>' + preis_tageskarte_erwachsener_ab + ' €</span></li>'+
'<li class=\"secondchild\" style=\"width: 50%;\"><span><small></small>' + preis_tageskarte_kind_ab  + ' €</span></li>'+
'</ul>'+
'<ul class=\"lpo_bigs_second lpo_li\">'+
'<li class=\"secondchild\" style=\"width: 50%;\">'+
'<div style=\"margin-top: -14px;\"><a class=\"lpo_button lpo_white lpo_fr\" style=\"position:absolute; margin-top:6px; margin-left:40px; height:14px; line-height:14px;\" id=\"lpolink1\" href=\"' + lpolink1 + ' \">Tickets jetzt sichern</a></div>'+
'</li>'+
'<li class=\"secondchild\" style=\"width: 50%;\">'+
'<div style=\"margin-top: -14px;\">&nbsp;</div>'+
'</li>'+
'</ul>'+
'<ul class=\"lpo_bigs_second lpo_li\">'+
'<li class=\"secondchild\" style=\"width: 50%;\">Familie 4 Pers.</li>'+
'<li class=\"secondchild\" style=\"width: 50%;\">Familie 5 Pers.</li>'+
'</ul>'+
'<ul class=\"lpo_bigs_second lpo_li\">'+
'<li class=\"secondchild\" style=\"width: 50%;\"><span><small></small>' + preis_familienkarte_4personen_ab + ' €</span></li>'+
'<li class=\"secondchild\" style=\"width: 50%;\"><span><small></small>' + preis_familienkarte_5personen_ab + ' €</span></li>'+
'</ul>'+
'<ul class=\"lpo_bigs_second lpo_li\" style=\"margin-top: -10px;\">'+
'<li class=\"secondchild\" style=\"width: 50%;\">'+
'<div style=\"margin-top: -14px;\"><a class=\"lpo_button lpo_white lpo_fr\" id=\"lpolink3\" href=\"' + lpolink3 + '\">jetzt sichern</a></div>'+
'</li>'+
'<li class=\"secondchild\" style=\"width: 50%;\">'+
'<div style=\"margin-top: -14px;\"><a class=\"lpo_button lpo_white lpo_fr\" id=\"lpolink4\" href=\"' + lpolink4 + '\">jetzt sichern</a></div>'+
'</li>'+
'</ul>'+
'</li>'+
'</ul>'+
'</div>';
if(routenlink=="1") {
	var sidebarbox=sidebarbox +
	'<div class=\"lpo_mid lpo_red\" style=\"width: 98%; margin: 0px; margin-top: 20px; padding: 3px; background:blue; font-size:13px;\">'+
	'<h3 style=\"color:white; margin-top:5px; margin-bottom:5px;\">Route berechnen</h3>'+
	'<form action=\"http://maps.google.com/maps\" method=\"get\" target=\"_blank\">'+
  '<input class=\"inputbox\" style=\"width:98%;\" type=\"text\" name=\"saddr\" value=\"Startadresse\" onfocus=\"(this.value == \'Startadresse\') && (this.value = \'\')\"'+
  '     onblur=\"(this.value == \'\') && (this.value = \'Startadresse\')\"  style=\"width:100%; border:1px solid lightgrey; font-size:20px; padding:3px;display:block; margin-bottom:5px;\" />'+
  '<input type=\"hidden\" name=\"daddr\" value=\"LEGOLAND Deutschland, LEGOLAND Allee 2, 89312 G&uuml;nzburg, Deutschland\" />'+
  '<input type=\"submit\" style=\"background:white; color:black; border:1px solid white; width:96%; font-size:17px; margin:5px;\" value=\"Karte aufrufen\" />'+
'</form>'+

			
'			</div>';
}
$( "#lposalesboxsidebar" ).replaceWith(sidebarbox);