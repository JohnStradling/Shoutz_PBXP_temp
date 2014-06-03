function setCookieExpireAtMidnight(name, value){
	  var now = new Date();
	  var expire = new Date();
	  expire.setFullYear(now.getFullYear());
	  expire.setMonth(now.getMonth());
	  expire.setDate(now.getDate()+2);
	  expire.setHours(0);
	  expire.setMinutes(0);
	  document.cookie = name+"="+value+"; expires=" + expire.toString() +";";
	}
	
function getCookieValue(key){
	currentcookie = document.cookie;
	if (currentcookie.length > 0)
	{
		firstidx = currentcookie.indexOf(key + "=");
		if (firstidx != -1)
		{
			firstidx = firstidx + key.length + 1;
			lastidx = currentcookie.indexOf(";",firstidx);
			if (lastidx == -1)
			{
				lastidx = currentcookie.length;
			}
			return unescape(currentcookie.substring(firstidx, lastidx));
		}
	}
	return "";
}
	
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
   	var type;
	var title;
	var author;
	var inStore;
	var icon;
	
	icon = "'http://megamillionsexp.shoutz.com/mobile/logo170x170.png'";
	rating = "http://megamillionsexp.shoutz.com/mobile/stars.png";
	background = "http://megamillionsexp.shoutz.com/mobile/background.png";
	close = "http://megamillionsexp.shoutz.com/mobile/exit-button.png";
	author = "Shoutz, Inc.";
	title = "LotteryHUB-Powerball & Mega Millions";
	inStore = 'FREE - On the App Store';
	
    if (isiDevice || isAndroid || isWindowsPhone || true) 
	{
    	var timeoutID;
    	// Check for shoutz cookie
    	
		var cookied = getCookieValue("megaMillionMobileShoutzPromptnull");
    	if(!cookied){
    		// Create the popup
        	$(document).ready(smartbanner());
	  	}
    }	
    
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-39918670-2', 'shoutz.com');
	ga('send', 'pageview');
    
	
	
    $(window).on('orientationchange', function() {
		location.reload();
    });

	$(window).on('click touchstart', function() {
		closebanner();
    });
	
		
var closeme = true; 

/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 */
function smartbanner() {
	var scale = $(window).width() / window.screen.width;
	if (scale < 1) 
		scale = 1;
	
	wide=$(window).width();
	var now = new Date();
	
	var $prepend = '<div id="smartbanner" style="position:absolute; left:0; top:0px; z-index:9999; border-bottom:0px solid #e8e8e8; width:'+wide+'px; height:73px; -webkit-font-smoothing:antialiased; overflow:hidden; -webkit-text-size-adjust:none; float:left;" allowTransparency="true"><iframe src="http://shoutz-pbexptest.azurewebsites.net/megamillions.php" seamless scrolling="no" frameborder="0" width="'+wide+'" height="73" style="position:static; left:0; top:0px; z-index:10000;"> </iframe></div>';
	console.log($prepend);
	
	$('body').prepend('<div id="smartbanner" style="position:absolute; left:0; top:0px; z-index:9999; border-bottom:0px solid #e8e8e8; height:73px; -webkit-font-smoothing:antialiased; overflow:hidden; -webkit-text-size-adjust:none; float:left;" allowTransparency="true"><iframe src="http://shoutz-pbexptest.azurewebsites.net/megamillions.php" seamless scrolling="no" frameborder="0" width="100%" height="73" style="position:static; left:0; top:0px; z-index:10000;"> </iframe></div>');
	//console.log($('#smartbanner').html());
	//$('#smartbanner').show();
	
	/*$('body').prepend('<div id="smartbanner" style="position:static; left:0; top:0px; z-index:10000; border-bottom:1px solid #e8e8e8; width:'+wide+'px; height:70px; background-image: url('+background+'); box-shadow:0 1px 2px rgba(0,0,0,0.5); -webkit-font-smoothing:antialiased; overflow:hidden; -webkit-text-size-adjust:none; display:none;float:left;"><div style="margin: 0 auto;"><a href="#" onclick="closebanner()" style="position:absolute; left:5px; top:25px; display:block; width:10px; height:10px;"><img src="'+close+'" height="10px" width="10px" style="border:0px;" /></a><span style="position:absolute; left:20px; top:5px; display:block; width:50px; height:50px; background:rgba(0,0,0,0.6); background-size:cover; border-radius:10px; box-shadow:0 1px 3px rgba(0,0,0,0.3);background-image:url('+icon+')"></span><div style="position:absolute; left:75px; top:8px; width:74%; font-family:\'Helvetica Neue\',Helvetica,sans-serif; font-size:12px; line-height:1.2em; color:#6a6a6a; text-shadow:0 1px 0 rgba(255,255,255,0.8);text-align:left;"><span style="display:block; font-size:12px; color:#4d4d4d; line-height: 12px;"><strong>'+title+'</strong><br />'+author+'</span><span style="margin-left:0px;"><img src="'+rating+'" width="67px" height="12px" /></span><br /><span style="font-family:\'Helvetica Neue\',Helvetica,sans-serif; display:block;">'+inStore+'</span></div><a href="http://deeplink.me/lotteryhub.com" onclick="sendme()" style="position:absolute; right:10px; top:25px; padding: 0 10px; min-width: 10%; height:30px; font-size:20px; line-height:18px; text-align:center; color:#6a6a6a; text-decoration:none; text-shadow:0 1px 0 rgba(255,255,255,0.8); vertical-align:middle;"><span style="color:blue;font-family:Helvetica;vertical-align:middle;">View</span></a></div></div>');*/
}

function closebanner()
{
	if (closeme)
	{
		$('#smartbanner').hide();
		// set the cookie to expire overnight
		setCookieExpireAtMidnight("megaMillionMobileShoutzPrompt","visited");
	}
	else
	{
		closeme = true;
		//window.setTimeout(closebanner(), 15000);
	}
}

var canIHazCookiez = function()
{
	setCookieExpireAtMidnight("megaMillionMobileShoutzPrompt","visited");
}
    