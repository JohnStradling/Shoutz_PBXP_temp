﻿/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(function(){
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
		
    if (jQuery.browser.mobile) {
    	var timeoutID;
    	// Check for shoutz cookie
    	
		var cookied = getCookieValue("powerballMobileShoutzPromptnull");
    	if(!cookied){
    		// If no cookie set, set the cookie to expire overnight
    		setCookieExpireAtMidnight("powerballMobileShoutzPrompt","visited");
    		// Create the popup
        	var d = new Date();
			var n = d.getTime(); 
			if (n%2 == 1)
			{
				$(document).ready(smartbanner());
			}
			else
			{
				var fqdn_prefix = "http://d3jdb2tpvzr5pz.cloudfront.net/remoteimg/";
				$('#container').prepend('<div id="shoutzPopup" style="height:372px;width:672px;display:none;position:fixed;background:transparent;border:none;z-index:2"><img id="shoutzMsg" src="http://d3jdb2tpvzr5pz.cloudfront.net/remoteimg/download_prompt_5-7.png" style="border:none;position:absolute;bottom:0px;left:0px"/><a id="closeShoutzPopup" href="#" style="position:absolute;top:0;right:0;border:none"><div id="shoutzCloseImg" style="border:none"></div></a><a id="shoutzDnld" href="#" style="border:none"><img id="shoutzDnldImg" src="' + fqdn_prefix + 'click.png" style="border:none;position:absolute;bottom:36px;left:176px"/></a></div><div id="shoutzPopupBkgd" style="display:none;position:fixed;height:100%;width:100%;top:0;left:0;background:#000;border:none;z-index:1"></div>');
				// Display the popup
				loadPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
			}
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
	
	icon = "'http://shoutz-pbexptest.azurewebsites.net/mobile/icon170x170.png'";
	
	var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
   
            	  
	var scale = $(window).width() / window.screen.width;
	if (scale < 1) 
		scale = 1;
	
	var force = "none";
	if(force != "none")
	{
		type = force;
	} else if(agentID)
	{
		type = 'ios';
	}
	else if(deviceAgent.match(/(android)/);
	{
		type = 'android';
	}
	else
	{
		type = 'ios';
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
		link = "https://play.google.com/store/apps/details?id=com.shoutz.shoutzapp&referrer=utm_source%3DPowerball.com%26utm_medium%3DSmartBanner";
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
	
	
	$('#container').prepend('<div id="smartbanner" style="position:static; left:0; top:0px; border-bottom:1px solid #e8e8e8; width:100%; height:155px; background:-webkit-linear-gradient(top, #f4f4f4 0%,#cdcdcd 100%); background-image: -ms-linear-gradient(top, #F4F4F4 0%, #CDCDCD 100%); background-image: -moz-linear-gradient(top, #F4F4F4 0%, #CDCDCD 100%); box-shadow:0 1px 2px rgba(0,0,0,0.5); z-index:9998; -webkit-font-smoothing:antialiased; overflow:hidden; -webkit-text-size-adjust:none; display:none;float:left;"><div style="margin: 0 auto;"><a href="#" onclick="closebanner()" style="position:absolute; left:5px; top:5px; display:block; border:2px solid #fff; width:14px; height:14px; font-family:Arial; font-size:15px; line-height:15px; text-align:center; color:#fff; background:#070707; text-decoration:none; text-shadow:none; border-radius:14px; box-shadow:0 2px 3px rgba(0,0,0,0.4); -webkit-font-smoothing:subpixel-antialiased;">&times;</a><span style="position:absolute; left:30px; top:10px; display:block; width:100px; height:100px; background:rgba(0,0,0,0.6); background-size:cover; border-radius:10px; box-shadow:0 1px 3px rgba(0,0,0,0.3);background-image:url('+icon+')"></span><div style="position:absolute; left:98px; top:18px; width:44%; font-size:11px; line-height:1.2em; font-weight:bold; color:#6a6a6a; text-shadow:0 1px 0 rgba(255,255,255,0.8);"><strong style="display:block; font-size:13px; color:#4d4d4d; line-height: 18px;">'+title+'</strong><span style="display":block;">'+author+'</span><br /><span style="display":block;">'+inStore+'</span></div><a href="'+link+'" style="position:absolute; right:20px; top:24px; border:1px solid #bfbfbf; padding: 0 10px; min-width: 10%; height:24px; font-size:14px; line-height:24px; text-align:center; font-weight:bold; color:#6a6a6a; background:-webkit-linear-gradient(top, #efefef 0%,#dcdcdc 100%); text-transform:uppercase; text-decoration:none; text-shadow:0 1px 0 rgba(255,255,255,0.8); border-radius:3px; box-shadow:0 1px 0 rgba(255,255,255,0.6),0 1px 0 rgba(255,255,255,0.7) inset;"><span>VIEW</span></a></div></div>');
	
	$('#smartbanner').slideDown(400,'swing');
}

function closebanner()
{
	$('#smartbanner').slideUp(400,'swing');
}
    