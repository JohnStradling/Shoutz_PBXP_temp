﻿$(function(){
    var shoutzPopupStatus = 0;

    function centerPopup(popupWin, backgd) {
        var windowWidth = $(window).width();
        var windowHeight = $(window).innerHeight();
        var hRatio = (windowWidth - 20) / 672;
        var vRatio = (windowHeight - 20) / 372;
        var ratio = (hRatio < vRatio) ? hRatio : vRatio;
        var popupWidth = Math.round(672 * ratio);
        var popupHeight = Math.round(372 * ratio);
        
        popupWin.css({
            "position": "absolute",
            "top": Math.round((windowHeight - popupHeight) / 2),
            "left": Math.round((windowWidth - popupWidth) / 2),
            "width": popupWidth,
            "height": popupHeight
        });
        popupWin.find('#shoutzPopupImg').css({
            "width": Math.round(664 * ratio * ratio),
            "height": Math.round(360 * ratio * ratio)
        });
        popupWin.find('#shoutzCloseImg').css({
            "width": Math.round(100 * ratio),
            "height": Math.round(100 * ratio),
            "border":"0px solid transparent"
        });
        popupWin.find('#shoutzDnldImg').css({
            "width": Math.round(576 * ratio),
            "height": Math.round(85 * ratio),
            "left": Math.round(37 * ratio),
            "bottom": Math.round(31 * ratio)
        });
        popupWin.find('#shoutzMsg').css({
            "position":"absolute",
            "width": Math.round(664 * ratio),
            "height": Math.round(360 * ratio)
        });
    }

    function loadPopup(popupWin, backgd) {
        centerPopup(popupWin, backgd);
        if (shoutzPopupStatus == 0) {
            backgd.css({
                "opacity": "0.7"
            });
            backgd.fadeIn("slow");
            popupWin.fadeIn("slow");
            shoutzPopupStatus = 1;
        }
      	//_gaq.push(['shoutz._trackEvent', 'shoutzPopup', 'viewed','Popup',1]);
    }

    function disablePopup(popupWin, backgd) {
        if (shoutzPopupStatus == 1) {
            backgd.fadeOut("slow");
            popupWin.fadeOut("slow");
            shoutzPopupStatus = 0;
        }
    }

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
	
	/*var amt = $('meta[name=apple-itunes-app]');
		amt = amt.length ? amt : $('<meta name="apple-itunes-app" />').appendTo('head');
		amt.attr('content', 'app-id=464309202');
		var gmt = $('meta[name=google-play-app]');
		gmt = gmt.length ? gmt : $('<meta name="google-play-app" />').appendTo('head');
		gmt.attr('content', 'id=com.shoutz.shoutzapp&referrer=utm_source%3Dpowerball.com%26utm_medium%3DPowerBall-Live-Player%26utm_term%3Dpowerball%26utm_campaign%3DPowerball%2520Live%2520Player');
		var omt = $('meta[name=author]');
		omt = omt.length ? omt : $('<meta name="author" />').appendTo('head');
		omt.attr('content', 'Shoutz, Inc');
	*/
	
		//$('head').append('<link rel="stylesheet" href="http://shoutz-pbexptest.azurewebsites.net/mobile/jquery.smartbanner.css" type="text/css" media="screen" />');
		//$('head').append('<script src="http://powerballexp.shoutz.com/mobile/jquery.smartbanner.js"></script>');
		//console.log("Smartbanner");
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
   
    if (isiDevice || isAndroid || isWindowsPhone ) 
	{
    	var timeoutID;
    	// Check for shoutz cookie
    	
		var cookied = getCookieValue("powerballMobileShoutzPromptnull");
    	if(!cookied){
    		// If no cookie set, set the cookie to expire overnight
    		setCookieExpireAtMidnight("powerballMobileShoutzPrompt","visited");
    		// Create the popup
        	var d = new Date();
			var n = d.getTime(); 
			//if (n%2 == 1)
			//{
				$(document).ready(smartbanner());
			/*}
			else
			{
				var fqdn_prefix = "http://d3jdb2tpvzr5pz.cloudfront.net/remoteimg/";
				$('#container').prepend('<div id="shoutzPopup" style="height:372px;width:672px;display:none;position:fixed;background:transparent;border:none;z-index:2"><img id="shoutzMsg" src="http://d3jdb2tpvzr5pz.cloudfront.net/remoteimg/download_prompt_5-7.png" style="border:none;position:absolute;bottom:0px;left:0px"/><a id="closeShoutzPopup" href="#" style="position:absolute;top:0;right:0;border:none"><div id="shoutzCloseImg" style="border:none"></div></a><a id="shoutzDnld" href="#" style="border:none"><img id="shoutzDnldImg" src="' + fqdn_prefix + 'click.png" style="border:none;position:absolute;bottom:36px;left:176px"/></a></div><div id="shoutzPopupBkgd" style="display:none;position:fixed;height:100%;width:100%;top:0;left:0;background:#000;border:none;z-index:1"></div>');
				// Display the popup
				loadPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
			}*/
	  	}
    
        $('#closeShoutzPopup').click(function (ev) {
            ev.preventDefault();
            disablePopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
            return false;
        });

        $('#shoutzDnld').click(function (ev) {
            ev.preventDefault();
			
			if (/android/i.test(navigator.userAgent||navigator.vendor||window.opera)) {
				//_gaq.push(['shoutz._trackPageview','/powerball/shoutzPopup/Android-Markete-Btn']);
				//_gaq.push(['shoutz._trackEvent','shoutzPopup', 'clicked', 'Android-Market-Btn']);
            	window.location = "https://play.google.com/store/apps/details?id=com.shoutz.shoutzapp&referrer=utm_source%3DPowerball%26utm_medium%3DDLPrompt";
            } else {
                //_gaq.push(['shoutz._trackPageview','/powerball/shoutzPopup/iOS-Appstore-Btn']);
                //_gaq.push(['shoutz._trackEvent', 'shoutzPopup','clicked','iOS-Appstore-Btn']);
                window.location = "https://itunes.apple.com/us/app/shoutz/id464309202?ls=1&mt=8";
            }
            return false;
        });
    }	
    
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-39918670-1', 'shoutz.com');
	ga('send', 'pageview');
    
	function redirectPage(locale) {
  		window.clearTimeout(timeoutID);
    	//window.location = locale;
	}
	
    $(window).bind('orientationchange', function() {
		location.reload();
    	centerPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
    });	
  	$(window).resize(function() {
  		centerPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
	});
});
  
function getShoutzAd() {
	var randomnumber=Math.floor(Math.random()*4) +1;
	var adlocation= "http://d3jdb2tpvzr5pz.cloudfront.net/remoteimg/placeholder_ad" + randomnumber + ".png";
	document.getElementById("shoutzimg").innerHTML='<a href="http://powerballexp.shoutz.com/web/"><img src="' + adlocation + '" height="262" width="164" /></a>';
}

/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 */
function smartbanner() {
	var type;
	var title;
	var author;
	var inStore;
	var link;
	var icon;
	
	icon = "'http://shoutz-pbexptest.azurewebsites.net/mobile/logo170x170.png'";
	rating = "http://shoutz-pbexptest.azurewebsites.net/mobile/stars.png";
	background = "http://shoutz-pbexptest.azurewebsites.net/mobile/background.png";
	close = "http://shoutz-pbexptest.azurewebsites.net/mobile/exit-button.png";
	
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
   
            	  
	var scale = $(window).width() / window.screen.width;
	if (scale < 1) 
		scale = 1;
	
	var force = "none";
	if(force != "none")
	{
		type = force;
	} else if(isiDevice)
	{
		type = 'ios';
	}
	else if(isAndroid)
	{
		type = 'android';
	}
	else if(isWindowsPhone)
	{
		type = 'windows';
	}
	else
	{
		type = 'ios';
	}
	
	console.log(type);
	
	author = "";
	
	title = "LotteryHUB-Powerball & Mega Millions";
	
	if (type == 'android')
	{ 
		inStore = 'FREE - in the App Store';
	}
	else if (type == 'ios')
	{
		inStore = 'FREE - in the App Store';
	}
	else
	{
		inStore = 'FREE - in the App Store';
	}
	
	console.log(inStore);
	
	if (type=="android")
	{
		//link = "https://play.google.com/store/apps/details?id=com.shoutz.shoutzapp&referrer=utm_source%3DPowerball.com%26utm_medium%3DSmartBanner";
		link = "http://deeplink.me/lotteryhub.com";
	}
	else if (type=="ios")
	{
		//link = "https://itunes.apple.com/us/app/shoutz/id464309202?ls=1&mt=8";
		link = "http://deeplink.me/lotteryhub.com";
	}
	else if (type=="windows")
	{
		//link = "https://play.google.com/store/apps/details?id=com.shoutz.shoutzapp&referrer=utm_source%3DPowerball%26utm_medium%3DDLPrompt";
		link = "http://deeplink.me/lotteryhub.com";
	}
	
	console.log(inStore);
	console.log("Is iDevice: " + isiDevice);
	console.log("Is Android: " + isAndroid);
	console.log("Is Windows Phone: " + isWindowsPhone);
	
	wide=window.innerWidth;
	
	/*$('body').prepend('<div id="smartbanner" style="position:absolute; left:0; top:0px; border-bottom:1px solid #e8e8e8; width:'+wide+'px; height:189px; background:-webkit-linear-gradient(top, #f4f4f4 0%,#cdcdcd 100%); background-image: -ms-linear-gradient(top, #F4F4F4 0%, #CDCDCD 100%); background-image: -moz-linear-gradient(top, #F4F4F4 0%, #CDCDCD 100%); box-shadow:0 1px 2px rgba(0,0,0,0.5); z-index:9998; -webkit-font-smoothing:antialiased; overflow:hidden; -webkit-text-size-adjust:none; display:none;float:left;"><div style="margin: 0 auto;"><a href="#" onclick="closebanner()" style="position:absolute; left:5px; top:5px; display:block; border:2px solid #fff; width:14px; height:14px; font-family:Helvetica; font-size:15px; line-height:15px; text-align:center; color:#fff; background:#070707; text-decoration:none; text-shadow:none; border-radius:14px; box-shadow:0 2px 3px rgba(0,0,0,0.4); -webkit-font-smoothing:subpixel-antialiased;">&times;</a><span style="position:absolute; left:30px; top:10px; display:block; width:170px; height:170px; background:rgba(0,0,0,0.6); background-size:cover; border-radius:10px; box-shadow:0 1px 3px rgba(0,0,0,0.3);background-image:url('+icon+')"></span><div style="position:absolute; left:195px; top:18px; width:44%; font-family:\'Helvetica Neue\',Helvetica,sans-serif; font-size:24px; line-height:1.2em; font-weight:bold; color:#6a6a6a; text-shadow:0 1px 0 rgba(255,255,255,0.8);"><span style="display:block; font-size:30px; color:#4d4d4d; line-height: 34px;"><strong>'+title+'</strong></span><span style="display:block;font-family:\'Helvetica Neue\',Helvetica,sans-serif;">'+author+'</span><br /><span style="font-family:\'Helvetica Neue\',Helvetica,sans-serif; display:block;">'+inStore+'</span></div><a href="'+link+'" style="position:absolute; right:20px; top:74px; border:1px solid #bfbfbf; padding: 0 10px; min-width: 10%; height:50px; font-size:30px; line-height:24px; text-align:center; font-weight:bold; color:#6a6a6a; background:-webkit-linear-gradient(top, #efefef 0%,#dcdcdc 100%); text-transform:uppercase; text-decoration:none; text-shadow:0 1px 0 rgba(255,255,255,0.8); border-radius:3px; box-shadow:0 1px 0 rgba(255,255,255,0.6),0 1px 0 rgba(255,255,255,0.7) inset;vertical-align:middle;"><span style="color:blue;font-family:Helvetica;vertical-align:middle;">View</span></a></div></div>');
	*/
	$('body').prepend('<div id="smartbanner" style="position:absolute; left:0; top:0px; border-bottom:1px solid #e8e8e8; width:'+wide+'px; height:189px; background:-webkit-linear-gradient(top, #f4f4f4 0%,#ffffff 100%); background-image: -ms-linear-gradient(top, #F4F4F4 0%, #ffffff 100%); background-image: -moz-linear-gradient(top, #F4F4F4 0%, #ffffff 100%); box-shadow:0 1px 2px rgba(0,0,0,0.5); z-index:9998; -webkit-font-smoothing:antialiased; overflow:hidden; -webkit-text-size-adjust:none; display:none;float:left;"><div style="margin: 0 auto;"><a href="#" onclick="closebanner()" style="position:absolute; left:5px; top:85px; display:block; border:0px solid #fff; width:14px; height:14px;"><img src="'+close+'" width="14px" height="14px" /></a><span style="position:absolute; left:30px; top:10px; display:block; width:170px; height:170px; background:rgba(0,0,0,0.6); background-size:cover; border-radius:10px; box-shadow:0 1px 3px rgba(0,0,0,0.3);background-image:url('+icon+')"></span><div style="position:absolute; left:205px; top:8px; width:44%; font-family:\'Helvetica Neue\',Helvetica,sans-serif; font-size:24px; line-height:1.2em; font-weight:bold; color:#6a6a6a; text-shadow:0 1px 0 rgba(255,255,255,0.8);text-align:left;"><span style="display:block; font-size:30px; color:#4d4d4d; line-height: 34px;"><strong>'+title+'</strong></span><span style="margin-left:0px;"><br /><img src="'+rating+'" width="110px" height="24px" /><br />Shoutz, Inc.</span><br /><span style="font-family:\'Helvetica Neue\',Helvetica,sans-serif; display:block;">'+inStore+'</span></div><a href="http://deeplink.me/lotteryhub.com" onclick="sendme()"  style="position:absolute; right:20px; top:70px; border:0px solid #bfbfbf; padding: 0 10px; min-width: 10%; height:30px; font-size:30px; line-height:24px; text-align:center; font-weight:bold; color:#6a6a6a; text-decoration:none; text-shadow:0 1px 0 rgba(255,255,255,0.8); border-radius:3px; box-shadow:0 1px 0 rgba(255,255,255,0.6),0 1px 0 rgba(255,255,255,0.7) inset;vertical-align:middle;"><span style="color:blue;font-family:Helvetica;vertical-align:middle;">View</span></a></div></div>');
	
	$('#smartbanner').show();
	$('.pagetop').css('position', 'relative');
	$('.pagetop').css('top', '175px');
	$('#mainContent').css('position', 'relative');
	$('#mainContent').css('top', '175px');
	
}

function closebanner()
{
	$('#smartbanner').hide();
	$('.pagetop').css('position', 'static');
	$('#mainContent').css('position', 'static');
	
}
    
function sendme()
{
	var link;
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
   	if(isiDevice)
	{
		link = "http://deeplink.me/lotteryhub.com";
		$.post("https://asotrack1.fiksu.com/web_click?appid=464309202&tracking_rev=11&tvalue=xadid%3Df93d1d10-9268-0131-5c4d-22000a989dda");
	}
	else if(isAndroid)
	{
		link = "http://deeplink.me/lotteryhub.com";
		$.post("https://play.google.com/store/apps/details?id=com.shoutz.shoutzapp&referrer=utm_fiksu_adid%3D666102%26");
	}
	else if(isWindowsPhone)
	{
		link = "http://deeplink.me/lotteryhub.com";
	}
	else
	{
		link = "http://deeplink.me/lotteryhub.com";
		$.post("https://asotrack1.fiksu.com/web_click?appid=464309202&tracking_rev=11&tvalue=xadid%3Df93d1d10-9268-0131-5c4d-22000a989dda");
	}
	//window.location.assign(link);
}
    