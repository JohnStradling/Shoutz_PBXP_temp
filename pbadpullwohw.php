<?php
	// create curl resource
	$ch = curl_init();

	// set url
	switch ($_REQUEST["adtype"])
	{
		case 'topad':
			$url = 'http://nspaces.shoutzadman.com/showad.aspx?AT=a96ca6ce-e931-4639-afe1-f03bb6af3f34&AID=a7904d2b-c072-4e40-804a-89dff0efa40e&CA=True&CT=True&IPC=False&TM=False&IR=2-13-41&eid=13&eit=2';
			break;
		case 'sidead':
			$url = 'http://nspaces.shoutzadman.com/showad.aspx?AT=11ccf76b-7a67-437c-9af5-69162e3aa601&AID=fdd10a3c-1c8b-468f-8ce9-2ab94e7ac42f&CA=True&CT=True&IPC=False&TM=False&IR=2-13-40&eid=13&eit=2';
			break;
		case 'bottomad':
			$url = 'http://nspaces.shoutzadman.com/showad.aspx?AT=05e3c507-0bf7-46e0-866e-135376fd9e37&AID=88e59195-cf6c-45da-a26a-2e2f8181b2dc&CA=True&CT=True&IPC=False&TM=False&IR=2-13-42&eid=13&eit=2&w=300&h=100';
			break;
		default:
			$url = '';
			break;
	}
	curl_setopt($ch, CURLOPT_URL, $url);

	//return the transfer as a string
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	// $output contains the output string
	$output = curl_exec($ch);

	// close curl resource to free up system resources
	curl_close($ch);

	//var_dump(json_decode($output, true));
	$ad = json_decode($output, true);
	
?>
	<a href="<?php echo $ad[0]["callBackUrl"]; ?>" target="_new">
		<img src="<?php echo $ad[0]["assetUrl"]; ?>" />
	</a>
