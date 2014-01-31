$(function(){
    jQuery.browser.mobile=/android|webOS|iP(hone|ad|od)/i.test(navigator.userAgent||navigator.vendor||window.opera);
    
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
	
	var amt = $('meta[name=apple-itunes-app]');
		amt = amt.length ? amt : $('<meta name="apple-itunes-app" />').appendTo('head');
		amt.attr('content', 'app-id=464309202');
		var gmt = $('meta[name=google-play-app]');
		gmt = gmt.length ? gmt : $('<meta name="google-play-app" />').appendTo('head');
		gmt.attr('content', 'id=com.shoutz.shoutzapp&referrer=utm_source%3Dpowerball.com%26utm_medium%3DPowerBall-Live-Player%26utm_term%3Dpowerball%26utm_campaign%3DPowerball%2520Live%2520Player');
		var omt = $('meta[name=author]');
		omt = omt.length ? omt : $('<meta name="author" />').appendTo('head');
		omt.attr('content', 'Shoutz, Inc');
		
		//$('head').append('<link rel="stylesheet" href="http://shoutz-pbexptest.azurewebsites.net/mobile/jquery.smartbanner.css" type="text/css" media="screen" />');
		//$('head').append('<script src="http://powerballexp.shoutz.com/mobile/jquery.smartbanner.js"></script>');
		console.log("Smartbanner");
		smartbanner();
		
    if (jQuery.browser.mobile) {
    	var timeoutID;
    	// Check for shoutz cookie
    	
		var cookied = getCookieValue("powerballMobileShoutzPrompt");
    	if(!cookied){
    		// If no cookie set, set the cookie to expire overnight
    		setCookieExpireAtMidnight("powerballMobileShoutzPrompt","visited");
    		// Create the popup
        	var fqdn_prefix = "http://d3jdb2tpvzr5pz.cloudfront.net/remoteimg/";
			$('#container').prepend('<div id="shoutzPopup" style="height:372px;width:672px;display:none;position:fixed;background:transparent;border:none;z-index:2"><img id="shoutzMsg" src="http://d3jdb2tpvzr5pz.cloudfront.net/remoteimg/download_prompt_5-7.png" style="border:none;position:absolute;bottom:0px;left:0px"/><a id="closeShoutzPopup" href="#" style="position:absolute;top:0;right:0;border:none"><div id="shoutzCloseImg" style="border:none"></div></a><a id="shoutzDnld" href="#" style="border:none"><img id="shoutzDnldImg" src="' + fqdn_prefix + 'click.png" style="border:none;position:absolute;bottom:36px;left:176px"/></a></div><div id="shoutzPopupBkgd" style="display:none;position:fixed;height:100%;width:100%;top:0;left:0;background:#000;border:none;z-index:1"></div>');
			// Display the popup
        	loadPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
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
	var button;
	
	var standalone = navigator.standalone; // Check if it's already a standalone web app or running within a webui view of an app (not mobile safari)
    var UA = navigator.userAgent;
		  
	var scale = $(window).width() / window.screen.width;
	if (scale < 1) 
		scale = 1;
	
	var force = "none";
	if(force != "none")
	{
		type = options["force"];
	} else if (UA.match(/iPad|iPhone|iPod/i) != null) {
		if (UA.match(/Safari/i) != null &&
		   (UA.match(/CriOS/i) != null ||
		   window.Number(navigator.userAgent.substr(navigator.userAgent.indexOf('OS ') + 3, 3).replace('_', '.')) < 6)) type = 'ios'; // Check webview and native smart banner support (iOS 6+)
	} else if (UA.match(/Android/i) != null) {
		type = 'android';
	} else {
		type = 'windows';
	}
	console.log(type);
	
	author = "Shoutz, Inc";
	
	title = "LotteryHub";
	
	if (type == 'android')
	{ 
		inStore = 'FREE - in the Google Play Store';
	}
	else if (type == 'ios')
	{
		inStore = 'FREE - in the iTunes App Store';
	}
	else
	{
		inStore = 'FREE - in the Windows Marketplace';
	}
	
	console.log(inStore);
	
	if (type=="android")
	{
		link = "https://play.google.com/store/apps/details?id=com.shoutz.shoutzapp&referrer=utm_source%3DPowerball%26utm_medium%3DDLPrompt";
	}
	else if (type=="ios")
	{
		link = "https://itunes.apple.com/us/app/shoutz/id464309202?ls=1&mt=8";
	}
	else if (type=="windows")
	{
		link = "https://play.google.com/store/apps/details?id=com.shoutz.shoutzapp&referrer=utm_source%3DPowerball%26utm_medium%3DDLPrompt";
	}
	
	console.log(link);
	console.log('<div id="smartbanner" class="'+type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+title+'</strong><span>'+author+'</span><span>'+inStore+'</span></div><a href="'+link+'" class="sb-button"><span>VIEW</span></a></div></div>');
	
	$('oneColFixCtr').append('<div id="smartbanner" class="'+type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+title+'</strong><span>'+author+'</span><span>'+inStore+'</span></div><a href="'+link+'" class="sb-button"><span>VIEW</span></a></div></div>');
	
	$('smartbanner').show();
}
    