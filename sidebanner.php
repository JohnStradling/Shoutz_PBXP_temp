<!doctype html>
<html>
    <head>
		<link rel="stylesheet" href="../css/playerframework.min.css">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="../js/playerframework.min.js"></script>
		
		<script src="http://jwpsrv.com/library/GECigDHrEeOughIxOUCPzg.js"></script>

		<script src="../js/detect.js"></script>

<?php
	function ae_detect_ie()
	{
		if (isset($_SERVER['HTTP_USER_AGENT']) && 
		(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false))
			return true;
		else
			return false;
	}
	$url = "http://nspaces.shoutzadman.com/showad.aspx?AT=edd98a3a-679c-4b62-ba73-6a5202fa9899&AID=779379c1-e4d1-477b-af27-5737ec88a8dc&CA=True&CT=True&IPC=False&TM=False&IR=2-8-24&eid=8&eit=2";
	
	// create curl resource
	$ch = curl_init($url);

	//set options to return the transfer as a string
	curl_setopt($ch, CURLOPT_HEADER, 0);    
//    curl_setopt($ch, CURLOPT_POST, 1); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,2);
    
	// $output contains the output string
	$output = curl_exec($ch);
	if ($output === false)
	{
		echo "nTorus down";
		//This is where the default calls go
	}
	else
	{
		$output = substr( $output, 3 );
		$output = trim($output);
	//echo $output;	
		// close curl resource to free up system resources
		curl_close($ch);
		
		$result = simplexml_load_string ($output, 'SimpleXmlElement', LIBXML_NOERROR+LIBXML_ERR_FATAL+LIBXML_ERR_NONE);
		if (false == $result) {
			echo 'error';
		}
		else {
			$VAST = new SimpleXMLElement($output);
		}

	//var_dump($VAST);

		$clickthru = $VAST->Ad->InLine->Creatives->Creative[1]->CompanionAds->Companion->CompanionClickThrough;
		
		foreach ($VAST->Ad->InLine->Creatives->Creative[0]->Linear->TrackingEvents->Tracking as $track)
		{
			switch((string) $track['event']) { // Get attributes as element indices
			case 'start':
				$vc_start = (string)$track;
				break;
			case 'firstQuartile':
				$vc_q1 = (string)$track;
				break;
			case 'midpoint':
				$vc_mid = (string)$track;
				break;
			case 'thirdQuartile':
				$vc_q3 = (string)$track;
				break;
			case 'complete':
				$vc_end = (string)$track;
				break;
			case 'pause':
				$vc_pause = (string)$track;
				break;
			}
		}
		
		foreach ($VAST->Ad->InLine->Creatives->Creative[1]->CompanionAds->Companion as $img)
		{
			$imgHeight = $img['height'];
			$imgWidth = $img['width'];
		}
		//echo $imgWidth . '<br />' . $imgHeight . '<br />';
		$imgHeight = $imgHeight * (160.00/ $imgWidth);
	?>
		</head>
		<body>
			<div>
	<?php
		if (ae_detect_ie())
		{
	?>
				<!--<video id="vidad" class="pf-video" width="160" height="120" controls="controls" muted="true" >
					<source src="<?php echo $VAST->Ad->InLine->Creatives->Creative[0]->Linear->MediaFiles->MediaFile; ?>" type="video/mp4" />
				</video>
				<script type="text/javascript">
					var VastPlayer = new PlayerFramework.Player("vidad");
					
					var amountPlayed = 0;
					var vidstatus = "Paused";
					var t;
					
					function vastCallBack() {
						console.log("vastCallBack run");
						var curr = VastPlayer.currentTime();
						var dur = VastPlayer.duration();
						
						if ((amountPlayed==0)&&(curr > 0))
						{
							$.get("<?php echo $vc_start; ?>");
							vidstatus = "Playing";
							amountPlayed = 1;
							console.log("Video is playing");
						}
						if ((curr/dur > 0.25)&&(amountPlayed < 25))
						{
							$.get("<?php echo $vc_q1; ?>");
							vidstatus = "Playing";
							amountPlayed = 25;
							console.log("Video at 25%");
						}
						if ((curr/dur > 0.5)&&(amountPlayed < 50))
						{
							$.get("<?php echo $vc_mid; ?>");
							vidstatus = "Playing";
							amountPlayed = 50;
							console.log("Video at 50%");
						}
						if ((curr/dur > 0.75)&&(amountPlayed < 75))
						{
							$.get("<?php echo $vc_q3; ?>");
							vidstatus = "Playing";
							amountPlayed = 75;
							console.log("Video at 75%");
						}
						if ((curr==dur)&&(amountPlayed < 100))
						{
							$.get("<?php echo $vc_end; ?>");
							vidstatus = "Ended";
							amountPlayed = 100;
							console.log("Video is done");
						}
						if((VastPlayer.paused() == true)&&(vidstatus=="Playing"))
						{
							var pauseUrl = "<?php echo $vc_pause; ?>";
							pauseUrl = pauseUrl.replace("[pausedTime]", curr);
							$.get(pauseUrl);
							vidstatus = "Paused";
							console.log("Video is paused");
						}
						if (vidstatus == "Ended")
						{
							clearInterval(t);
							console.log("Ready for new video");
						}
						
					}
					
					$(document).ready(function() {
						//t = setInterval(function(){vastCallBack()},1000);
					});
				</script>-->
	<?php
		}
		else
		{
	?>
				<div name="player" id="player">
				</div>
				<script type="text/javascript">
					if(is_ie && !is_flash)
					{
						document.write('<p style="height:120;width:160;"><a href="<?php echo $VAST->Ad->InLine->Creatives->Creative[0]->Linear->MediaFiles->MediaFile; ?>">Click to view video</a></p>');
					}
					else {
						jwplayer("player").setup({
							file: "<?php echo $VAST->Ad->InLine->Creatives->Creative[0]->Linear->MediaFiles->MediaFile; ?>",
							height: 120,
							width: 160,
							controls: true,
							mute: true,
							primary: "html5"
						});
					}
				</script>
				<script type="text/javascript">
					//var VastPlayer = new PlayerFramework.Player("vidad");
					
					var amountPlayed = 0;
					var vidstatus = "Paused";
					var t;
					
					jwplayer("player").onPause(function(){
						if (vidstatus=="Playing")
						{
							var pauseUrl = "<?php echo $vc_pause; ?>";
							console.log(pauseUrl);
							pauseUrl = pauseUrl.replace("[pausedTime]", jwplayer().getPosition());
							console.log(pauseUrl);
							$.get(pauseUrl);
							vidstatus = "Paused";
							console.log("Video is paused");
						}
					});
					jwplayer("player").onComplete(function(event) {
							$.get("<?php echo $vc_end; ?>");
							vidstatus = "Ended";
							amountPlayed = 100;
							console.log("Video is done");
					});
					function vastCallBack() {
						console.log("vastCallBack run");
						//var curr = VastPlayer.currentTime();
						//var dur = VastPlayer.duration();
						var curr = jwplayer().getPosition();
						var dur = jwplayer().getDuration();
						
						if ((amountPlayed==0)&&(curr > 0))
						{
							$.get("<?php echo $vc_start; ?>");
							vidstatus = "Playing";
							amountPlayed = 1;
							console.log("Video is playing");
						}
						if ((curr/dur > 0.25)&&(amountPlayed < 25))
						{
							$.get("<?php echo $vc_q1; ?>");
							vidstatus = "Playing";
							amountPlayed = 25;
							console.log("Video at 25%");
						}
						if ((curr/dur > 0.5)&&(amountPlayed < 50))
						{
							$.get("<?php echo $vc_mid; ?>");
							vidstatus = "Playing";
							amountPlayed = 50;
							console.log("Video at 50%");
						}
						if ((curr/dur > 0.75)&&(amountPlayed < 75))
						{
							$.get("<?php echo $vc_q3; ?>");
							vidstatus = "Playing";
							amountPlayed = 75;
							console.log("Video at 75%");
						}
						/*if ((curr==dur)&&(amountPlayed < 100))
						{
							$.get("<?php echo $vc_end; ?>");
							vidstatus = "Ended";
							amountPlayed = 100;
							console.log("Video is done");
						}
						if((VastPlayer.paused() == true)&&(vidstatus=="Playing"))
						{
							var pauseUrl = "<?php echo $vc_end; ?>";
							pauseUrl = pauseUrl.replace("[pausedTime]", curr);
							$.get(pauseUrl);
							vidstatus = "Paused";
							console.log("Video is paused");
						}*/
						if (vidstatus == "Ended")
						{
							clearInterval(t);
							console.log("Ready for new video");
						}
						
					}
					jwplayer().onReady(function() {
							//VastPlayer.play();
							t = setInterval(function(){vastCallBack()},1000);
							jwplayer("player").play();
						});
				</script>
	<?php
		}
	?>
			</div>
			<div>
				<a href="<?php echo $clickthru; ?>" target="_new" style="border:none;">
					<img src="<?php echo $VAST->Ad->InLine->Creatives->Creative[1]->CompanionAds->Companion->HTMLResource; ?>" width="160" height="<?php echo $imgHeight ?>"  style="border:none;" />
				</a>	
			</div>
		</body>
	</html>
<?php
	}
?>