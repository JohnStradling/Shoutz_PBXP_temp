<?php
function insert($new_email){

	$db_host = '192.168.100.155';
$db_name = 'Cerberus';
$db_user = 'Hermes';
$db_pass = 'M3ss3ng3r';
ini_set("display_errors", 1);

// Connect to MSSQL 
?>

<?php

$conn_array = array (
			"UID" => $db_user, 
			"PWD" => $db_pass, 
			"Database" => $db_name,
			"Encrypt" => 1,
			"TrustServerCertificate" => 1) ;

$conn = sqlsrv_connect($db_host , $conn_array);
if(!@conn) die ("Could not connect");

$sql = "insert into Stage.ExperienceEmails(Email) values(?)";
$stmt = sqlsrv_prepare($conn,$sql,array(&$new_email));

/* degbug */
/*$stmt2 = sqlsrv_execute($stmt);
if( $stmt2 === false ) {
     die( print_r( sqlsrv_errors(), true));
} else{
echo "added";	
}
*/

/* LIVE */

if(sqlsrv_execute($stmt)){
return true;	
}
else{
	return false;
	}

/* */


/*
$sql = "select * from Stage.FacebookEmails";

$qry = sqlsrv_query($conn,$sql);
$qry = sqlsrv_fetch_array($qry);
var_dump($qry);
*/


//var_dump( $row );
sqlsrv_close( $conn );
}

function select_all_email_addresses(){
	
		$db_host = '192.168.100.155';
$db_name = 'Cerberus';
$db_user = 'Hermes';
$db_pass = 'M3ss3ng3r';
ini_set("display_errors", 1);

// Connect to MSSQL 
?>

<?php

$conn_array = array (
			"UID" => $db_user, 
			"PWD" => $db_pass, 
			"Database" => $db_name,
			"Encrypt" => 1,
			"TrustServerCertificate" => 1) ;

$conn = sqlsrv_connect($db_host , $conn_array);



$sql = "select Email from Stage.ExperienceEmails";

$qry = sqlsrv_query($conn,$sql);
while($row = sqlsrv_fetch_array($qry)){

echo "<p>";
var_dump($row);
echo "</p>";	
	
}



//var_dump( $row );
sqlsrv_close( $conn );

}
?>