<?php
	if (!class_exists('Mobile_Detect'))require_once('mobiledetect/Mobile_Detect.php');
	$detect = new Mobile_Detect;
	if($detect->isiOS())
	{
		$device = 'iOS';
	}
	else if( $detect->isAndroidOS() )
	{
		$device = 'Android';
	}
	else if ( $detect->isWindowsPhoneOS() )
	{
		$device = 'Windows';
	}
	else if( $detect->isMobile() )
	{
		$device = 'Mobile';
	}
	else 
	{
		$device = 'Other';
	}
	$icon = "mobile/logo170x170.png";
	$rating = "mobile/stars.png";
	$background = "mobile/background.png";
	$close = "mobile/exit-button.png";
	$author = "Shoutz, Inc.";
	$title = "LotteryHUB-Powerball & Mega Millions";
	$inStore = 'FREE - On the App Store';
?>
<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
$('#viewlink').click(function (e){
	e.preventDefault();
	parent.canIHazCookiez();
	sendme();
});

$(document).ready(function() {

  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }

  _fbq.push(['addPixelId', '1455703628001977']);

});

window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);

function sendme()
{
	var link;
	var fiksu;
<?php
	switch ($device)
	{
		case "iOS":
			echo 'link = "http://deeplink.me/lotteryhub.com";';
			echo 'fiksu = "https://asotrack1.fiksu.com/web_click?appid=464309202&tracking_rev=11&tvalue=xadid%3Da89406b0-9117-0131-72d1-123139022909"';
			$fixsu = true;
			break;
		case "Android":
			echo 'link = "http://deeplink.me/lotteryhub.com";';
			echo 'fiksu = "https://asotrack1.fiksu.com/web_click?appid=464309202&tracking_rev=11&tvalue=xadid%3Da89406b0-9117-0131-72d1-123139022909"';
			$fixsu = true;
			break;
		case "Windows":
			echo 'link = "http://www.windowsphone.com/en-us/store/app/lotteryhub/96789abb-e3a2-432f-b366-979ca81f05f1";';
			$fixsu = false;
			break;
		case "Mobile":
			echo 'link = "http://m.lotteryhub.com";';
			$fixsu = false;
			break;
		case "Other":
			echo 'link = "http://lotteryhub.com";';
			$fixsu = false;
			break;
		
	}
	if ($fixsu)
	{
		echo '$.post(fiksu);';
	}
?>
	
	window.location.assign(link);
}
</script>
</head>
<body>
	<noscript>
		<img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=1455703628001977&amp;ev=NoScript" />
	</noscript>
	
	<div id="smartbanner" style="position:static; left:0; top:0px; z-index:10000; border-bottom:1px solid #e8e8e8; width:'+wide+'px; height:70px; background-image: url(<?php echo $background; ?>);background-color:#cac4cf; box-shadow:0 1px 2px rgba(0,0,0,0.5); -webkit-font-smoothing:antialiased; overflow:hidden; -webkit-text-size-adjust:none; float:left;">
		<div style="margin: 0 auto;">
			<a href="#" onclick="parent.closebanner()" style="position:absolute; left:5px; top:25px; display:block; width:10px; height:10px;">
				<img src="<?php echo $close; ?>" height="10px" width="10px" style="border:0px;" />
			</a>
			<span style="position:absolute; left:20px; top:5px; display:block; width:50px; height:50px; background:rgba(0,0,0,0.6); background-size:cover; border-radius:10px; box-shadow:0 1px 3px rgba(0,0,0,0.3);background-image:url(<?php echo $icon; ?>)"></span>
			<div style="position:absolute; left:75px; top:8px; width:74%; font-family:\'Helvetica Neue\',Helvetica,sans-serif; font-size:12px; line-height:1.2em; color:#6a6a6a; text-shadow:0 1px 0 rgba(255,255,255,0.8);text-align:left;">
				<span style="display:block; font-size:12px; color:#4d4d4d; line-height: 12px;">
					<strong><?php echo $title; ?></strong><br /><?php echo $author; ?>
				</span>
				<span style="margin-left:0px;">
					<img src="<?php echo $rating; ?>" width="67px" height="12px" />
				</span><br />
				<span style="font-family:\'Helvetica Neue\',Helvetica,sans-serif; display:block;">
					<?php echo $inStore; ?>
				</span>
			</div>
			<a id="viewlink" name="viewlink" href="#" style="position:absolute; right:10px; top:25px; padding: 0 10px; min-width: 10%; height:30px; font-size:20px; line-height:18px; text-align:center; color:#6a6a6a; text-decoration:none; text-shadow:0 1px 0 rgba(255,255,255,0.8); vertical-align:middle;">
				<span style="color:blue;font-family:Helvetica;vertical-align:middle;">View</span>
			</a>
		</div>
	</div>
</body>
</html>