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
            "width": Math.round(664 * ratio),
            "height": Math.round(360 * ratio)
        });
        popupWin.find('#shoutzCloseImg').css({
            "width": Math.round(100 * ratio),
            "height": Math.round(100 * ratio),
            "border":"0px solid transparent"
        });
        popupWin.find('#shoutzDnldImg').css({
            "width": Math.round(310 * ratio),
            "height": Math.round(74 * ratio),
            "left": Math.round(177 * ratio),
            "bottom": Math.round(50 * ratio)
        });
        popupWin.find('#shoutzMsg').css({
            "position":"absolute",
            "width": Math.round(740 * ratio * 0.7),
            "height": Math.round(200 * ratio * 0.7),
            "left": Math.round(177 * ratio * 0.4),
            "bottom": Math.round(120 * ratio)
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
    }

    function disablePopup(popupWin, backgd) {
        if (shoutzPopupStatus == 1) {
            backgd.fadeOut("slow");
            popupWin.fadeOut("slow");
            shoutzPopupStatus = 0;
        }
    }

    if (jQuery.browser.mobile) {
    	
        var fqdn_prefix = "http://208.78.97.108/Powerball/Images/";
        $('#container').prepend('<div id="shoutzPopup" style="height:372px;width:672px;display:none;position:fixed;background:transparent;border:none;z-index:2"><img id="shoutzPopupImg" src="shoutz_popup_blank.png" style="border:none;position:absolute;bottom:0;left:0"/><a id="closeShoutzPopup" href="#" style="position:absolute;top:0;right:0;border:none"><div id="shoutzCloseImg" style="border:none"></div></a><img id="shoutzMsg" src="message.png" style="border:none;position:absolute;bottom:0px;left:0px"/><a id="shoutzDnld" href="#" style="border:none"><img id="shoutzDnldImg" src="' + fqdn_prefix + 'click_here.png" style="border:none;position:absolute;bottom:36px;left:176px"/></a></div><div id="shoutzPopupBkgd" style="display:none;position:fixed;height:100%;width:100%;top:0;left:0;background:#000;border:none;z-index:1"></div>');
        $('#closeShoutzPopup').click(function (ev) {
            ev.preventDefault();
            disablePopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
            return false;
        });
        $('#shoutzDnld').click(function (ev) {
            ev.preventDefault();
            if (/android/i.test(navigator.userAgent||navigator.vendor||window.opera)) {
                window.location = "https://play.google.com/store/apps/details?id=com.shoutz.android&hl=en";
            } else {
                window.location = "https://itunes.apple.com/us/app/shoutz/id464309202?mt=8";
            }
            return false;
        });
        loadPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
    }

	$(window).bind('orientationchange', function() {
		location.reload();
    	centerPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
    });	
  	$(window).resize(function() {
  		centerPopup($('#shoutzPopup'), $('#shoutzPopupBkgd'));
	});
	
});
