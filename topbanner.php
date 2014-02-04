<!doctype html>
<html>
    <head>
<?php
	// create curl resource
	$ch = curl_init();

	// set url
	curl_setopt($ch, CURLOPT_URL, "http://nspaces.shoutzadman.com/showad.aspx?AT=11ccf76b-7a67-437c-9af5-69162e3aa601&AID=111c5c37-c7c9-4ce5-981b-4bd17be9bdb4&CA=True&CT=True&IPC=False&TM=False&IR=2-8-26&eid=8&eit=2");

	//return the transfer as a string
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	// $output contains the output string
	$output = curl_exec($ch);

	// close curl resource to free up system resources
	curl_close($ch);

	//var_dump(json_decode($output, true));
	$ad = json_decode($output, true);
	
	if (isset($_REQUEST["cnt"]))
	{
		$cnt = $_REQUEST["cnt"];
	}
	else
	{
		$cnt = 0;
	}
	$cnt = $cnt + 1;
?>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript">
		var	t;
		function sendCallBack() {
			$.get("<?php echo $ad[0]["callBackUrl"]; ?>");
		}
<?php
	if ($cnt <=5 )
	{
?>
		function getNewAd() {
			window.location.replace("http://lotteryhub.com/includes/topbanner.php?cnt=<?php echo $cnt; ?>");
		}
		$(document).ready(function() {
			t = setTimeout(function(){getNewAd()},5000);
			});
		window.blur(function() {
			clearTimeout(t);
		});
		window.focus(function() {
			t = setTimeout(function(){getNewAd()},5000);
		});
<?php
	}
?>
	</script>
	</head>
	<body>
		<a href="<?php echo $ad[0]["ctUrl"]; ?>" target="_new" onclick="sendCallBack()">
			<img src="<?php echo $ad[0]["assetUrl"]; ?>" height="<?php echo $ad[0]["height"]; ?>" width="<?php echo $ad[0]["width"]; ?>" />
		</a>
	</body>
</html>