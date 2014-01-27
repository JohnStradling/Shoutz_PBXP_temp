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
		gmt.attr('content', 'app-id=com.shoutz.shoutzapp&referrer=utm_source%3Dpowerball.com%26utm_medium%3DPowerBall-Live-Player%26utm_term%3Dpowerball%26utm_campaign%3DPowerball%2520Live%2520Player');
		var omt = $('meta[name=author]');
		omt = omt.length ? omt : $('<meta name="author" />').appendTo('head');
		omt.attr('content', 'Shoutz, Inc');
		$('head').append('<link rel="stylesheet" href="http://shoutz-pbexptest.azurewebsites.net/mobile/jquery.smartbanner.css" type="text/css" media="screen" />');
		//$('head').append('<script src="http://powerballexp.shoutz.com/mobile/jquery.smartbanner.js"></script>');
		
		$().smartbanner();
		
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
!function ($) {
    var SmartBanner = function (options) {
        this.origHtmlMargin = parseFloat($('html').css('margin-top')) // Get the original margin-top of the HTML element so we can take that into account
        this.options = $.extend({}, $.smartbanner.defaults, options)

        var standalone = navigator.standalone // Check if it's already a standalone web app or running within a webui view of an app (not mobile safari)
          , UA = navigator.userAgent
          
        // Detect banner type (iOS or Android)
        if (this.options.force) {
            this.type = this.options.force
        } else if (UA.match(/iPad|iPhone|iPod/i) != null) {
            if (UA.match(/Safari/i) != null &&
               (UA.match(/CriOS/i) != null ||
               window.Number(navigator.userAgent.substr(navigator.userAgent.indexOf('OS ') + 3, 3).replace('_', '.')) < 6)) this.type = 'ios' // Check webview and native smart banner support (iOS 6+)
        } else if (UA.match(/Android/i) != null) {
            this.type = 'android'
        } else if (UA.match(/Windows NT 6.2/i) != null && UA.match(/Touch/i) !== null) {
            this.type = 'windows'
        }

        // Don't show banner if device isn't iOS or Android, website is loaded in app or user dismissed banner
        if (!this.type || standalone || this.getCookie('sb-closed') || this.getCookie('sb-installed')) {
            return
        }

        // Calculate scale
        this.scale = this.options.scale == 'auto' ? $(window).width() / window.screen.width : this.options.scale
        if (this.scale < 1) this.scale = 1

        // Get info from meta data
        var meta = $(this.type == 'android' ? 'meta[name="google-play-app"]' :
            this.type == 'ios' ? 'meta[name="apple-itunes-app"]' : 'meta[name="msApplication-ID"]');
        if (meta.length == 0) return

        // For Windows Store apps, get the PackageFamilyName for protocol launch
        if (this.type == 'windows') {
            this.pfn = $('meta[name="msApplication-PackageFamilyName"]').attr('content');
            this.appId = meta.attr('content')[1]
        } else {
            this.appId = /app-id=([^\s,]+)/.exec(meta.attr('content'))[1]
        }

        this.title = this.options.title ? this.options.title : $('title').text().replace(/\s*[|\-·].*$/, '')
        this.author = this.options.author ? this.options.author : ($('meta[name="author"]').length ? $('meta[name="author"]').attr('content') : window.location.hostname)

        // Create banner
        this.create()
        this.show()
        this.listen()
    }

    SmartBanner.prototype = {

        constructor: SmartBanner
    
      , create: function() {
            var iconURL
              , link=(this.options.url ? this.options.url : (this.type == 'windows' ? 'ms-windows-store:PDP?PFN=' + this.pfn : (this.type == 'android' ? 'market://details?id=' : 'https://itunes.apple.com/' + this.options.appStoreLanguage + '/app/id')) + this.appId)
              , inStore=this.options.price ? this.options.price + ' - ' + (this.type == 'android' ? this.options.inGooglePlay : this.type == 'ios' ? this.options.inAppStore : this.options.inWindowsStore) : ''
              , gloss=this.options.iconGloss === null ? (this.type=='ios') : this.options.iconGloss

            $('body').append('<div id="smartbanner" class="'+this.type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+this.title+'</strong><span>'+this.author+'</span><span>'+inStore+'</span></div><a href="'+link+'" class="sb-button"><span>'+this.options.button+'</span></a></div></div>')
            
            if (this.options.icon) {
                iconURL = this.options.icon
            } else if ($('link[rel="apple-touch-icon-precomposed"]').length > 0) {
                iconURL = $('link[rel="apple-touch-icon-precomposed"]').attr('href')
                if (this.options.iconGloss === null) gloss = false
            } else if ($('link[rel="apple-touch-icon"]').length > 0) {
                iconURL = $('link[rel="apple-touch-icon"]').attr('href')
            } else if ($('meta[name="msApplication-TileImage"]').length > 0) {
              iconURL = $('meta[name="msApplication-TileImage"]').attr('content')
            } else if ($('meta[name="msapplication-TileImage"]').length > 0) { /* redundant because ms docs show two case usages */
              iconURL = $('meta[name="msapplication-TileImage"]').attr('content')
            }
            
            if (iconURL) {
                $('#smartbanner .sb-icon').css('background-image','url('+iconURL+')')
                if (gloss) $('#smartbanner .sb-icon').addClass('gloss')
            } else{
                $('#smartbanner').addClass('no-icon')
            }

            this.bannerHeight = $('#smartbanner').outerHeight() + 2

            if (this.scale > 1) {
                $('#smartbanner')
                    .css('top', parseFloat($('#smartbanner').css('top')) * this.scale)
                    .css('height', parseFloat($('#smartbanner').css('height')) * this.scale)
                $('#smartbanner .sb-container')
                    .css('-webkit-transform', 'scale('+this.scale+')')
                    .css('-msie-transform', 'scale('+this.scale+')')
                    .css('-moz-transform', 'scale('+this.scale+')')
                    .css('width', $(window).width() / this.scale)
            }
        }
        
      , listen: function () {
            $('#smartbanner .sb-close').on('click',$.proxy(this.close, this))
            $('#smartbanner .sb-button').on('click',$.proxy(this.install, this))
        }
        
      , show: function(callback) {
            $('#smartbanner').stop().animate({top:0},this.options.speedIn).addClass('shown')
            $('html').animate({marginTop:this.origHtmlMargin+(this.bannerHeight*this.scale)},this.options.speedIn,'swing',callback)
        }
        
      , hide: function(callback) {
            $('#smartbanner').stop().animate({top:-1*this.bannerHeight*this.scale},this.options.speedOut).removeClass('shown')
            $('html').animate({marginTop:this.origHtmlMargin},this.options.speedOut,'swing',callback)
        }
      
      , close: function(e) {
            e.preventDefault()
            this.hide()
            this.setCookie('sb-closed','true',this.options.daysHidden)
        }
       
      , install: function(e) {
            this.hide()
            this.setCookie('sb-installed','true',this.options.daysReminder)
        }
       
      , setCookie: function(name, value, exdays) {
            var exdate = new Date()
            exdate.setDate(exdate.getDate()+exdays)
            value=escape(value)+((exdays==null)?'':'; expires='+exdate.toUTCString())
            document.cookie=name+'='+value+'; path=/;'
        }
        
      , getCookie: function(name) {
            var i,x,y,ARRcookies = document.cookie.split(";")
            for(i=0;i<ARRcookies.length;i++) {
                x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="))
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1)
                x = x.replace(/^\s+|\s+$/g,"")
                if (x==name) {
                    return unescape(y)
                }
            }
            return null
        }
      
      // Demo only
      , switchType: function() {
          var that = this

          this.hide(function () {
              that.type = that.type == 'android' ? 'ios' : 'android'
              var meta = $(that.type == 'android' ? 'meta[name="google-play-app"]' : 'meta[name="apple-itunes-app"]').attr('content')
              that.appId = /app-id=([^\s,]+)/.exec(meta)[1]

              $('#smartbanner').detach()
              that.create()
              that.show()
          })
      }
    }

    $.smartbanner = function (option) {
        var $window = $(window)
        , data = $window.data('typeahead')
        , options = typeof option == 'object' && option
        if (!data) $window.data('typeahead', (data = new SmartBanner(options)))
        if (typeof option == 'string') data[option]()
    }

    // override these globally if you like (they are all optional)
    $.smartbanner.defaults = {
        title: null, // What the title of the app should be in the banner (defaults to <title>)
        author: null, // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
        price: 'FREE', // Price of the app
        appStoreLanguage: 'us', // Language code for App Store
        inAppStore: 'On the App Store', // Text of price for iOS
        inGooglePlay: 'In Google Play', // Text of price for Android
        inWindowsStore: 'In the Windows Store', //Text of price for Windows
        icon: 'http://shoutz-pbexptest.azurewebsites.net/mobile/shoutzicon.ico', // The URL of the icon (defaults to <meta name="apple-touch-icon">)
        iconGloss: null, // Force gloss effect for iOS even for precomposed
        button: 'VIEW', // Text for the install button
        url: null, // The URL for the button. Keep null if you want the button to link to the app store.
        scale: 'auto', // Scale based on viewport size (set to 1 to disable)
        speedIn: 300, // Show animation speed of the banner
        speedOut: 400, // Close animation speed of the banner
        daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
        daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
        force: null // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
    }

    $.smartbanner.Constructor = SmartBanner

}(window.jQuery);
