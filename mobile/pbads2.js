$(document).ready(function(){
	$.ajaxSettings.cache = false;
	//$('#topad').load("http://shoutz-pbexptest.azurewebsites.net/pbadpull.php?adtype=topad");
	//$('#sidead').load("http://shoutz-pbexptest.azurewebsites.net/pbadpull.php?adtype=sidead");
	//$('#bottomad').load("http://shoutz-pbexptest.azurewebsites.net/pbadpullwohw.php?adtype=bottomad");
	makeAd("topad", true);
	makeAd("sidead", true);
	makeAd("bottomad", false);
});

function sendCallBack(cbURL) {
			$.post(cbURL);
		}
		
function makeAd(adtype, useDimensions) {
	$.ajaxSettings.cache = false;
	var url;
	if (adtype=="topad")
	{
		url = "http://nspaces.shoutzadman.com/showad.aspx?AT=a96ca6ce-e931-4639-afe1-f03bb6af3f34&AID=a7904d2b-c072-4e40-804a-89dff0efa40e&CA=True&CT=True&IPC=False&TM=False&IR=2-13-41&eid=13&eit=2";
	}
	if (adtype=="sidead")
	{
		url = "http://nspaces.shoutzadman.com/showad.aspx?AT=11ccf76b-7a67-437c-9af5-69162e3aa601&AID=fdd10a3c-1c8b-468f-8ce9-2ab94e7ac42f&CA=True&CT=True&IPC=False&TM=False&IR=2-13-40&eid=13&eit=2";
	}
	if (adtype=="bottomad")
	{
		url = "http://nspaces.shoutzadman.com/showad.aspx?AT=05e3c507-0bf7-46e0-866e-135376fd9e37&AID=88e59195-cf6c-45da-a26a-2e2f8181b2dc&CA=True&CT=True&IPC=False&TM=False&IR=2-13-42&eid=13&eit=2&w=300&h=100";
	}
	$.get(url,function(data,status){
		var obj = eval (data); 
		console.log(obj);
		var htm;
		if (useDimensions)
		{
			htm = '<a href="' + obj[0].compCallBackUrl + '" target="_new" style="text-decoration:none;"><img src="' + obj[0].assetUrl + '" height="' + obj[0].height + '" width="' + obj[0].width + '" /></a>';
		}
		else
		{
			htm = '<a href="' + obj[0].compCallBackUrl + '" target="_new" style="text-decoration:none;"><img src="' + obj[0].assetUrl + '" /></a>';
		}
		console.log(htm);
		var loc = "#" + adtype;
		console.log(loc);
		$(loc).html(htm);
   });
}