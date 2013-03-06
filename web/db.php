<?php 
if (isset($_REQUEST['subscribe']))
{
	//echo $_REQUEST['subscribe'];
	$result = SaveEmail($_REQUEST['subscribe']);
	if ($result == 0)
	{
		$msg = "Failed to connect";
	}
	if ($result == 1)
	{
		$msg = "Failed to save data";
	}
	if ($result == 2)
	{
		$msg = "Thanks, we'll remind you in a bit!";
	}
	echo $msg;
}
else 
{
	//echo "No email";
}
function SaveEmail($Email) 
{
   $serverName = "198.61.140.158";
   $userName = 'Hermes';
   $userPassword = 'M3ss3ng3r';
   $dbName = "Cerberus-DEV";
     
   $conn_array = array (
			"UID" => $userName, 
			"PWD" => $userPassword, 
			"Database" => $dbName,
			"Encrypt" => 1,
			"TrustServerCertificate" => 1) ;

	$conn = sqlsrv_connect($serverName , $conn_array);

   if($conn === false)
   {
     //FatalError("Failed to connect...");
	 //echo '<script type="text/javascript">alert("Failed to connect...");</script>';
	 return 0;
   }

    $sql = "insert into Stage.ExperienceEmails(Email) values(?)";
	$stmt = sqlsrv_prepare($conn,$sql,array(&$Email));
   
   
   if (sqlsrv_execute($stmt))
   {
	   //echo '<script type="text/javascript">alert("Success!");</script>';
	   return 2;
   }
   else 
   {
     //FatalError("Failed to insert data into test table: ");
	 //echo '<script type="text/javascript">alert("Failed to save...");</script>';
	 die( print_r( sqlsrv_errors(), true));
	 return 1;
   
   }  	 
}

function FatalError($errorMsg)
{
    Handle_Errors();
}


function Handle_Errors()
{
    $errors = sqlsrv_errors(SQLSRV_ERR_ERRORS);
    $count = count($errors);
    if($count == 0)
    {
       $errors = sqlsrv_errors(SQLSRV_ERR_ALL);
       $count = count($errors);
    }
    if($count > 0)
    {
      for($i = 0; $i < $count; $i++)
      {
         echo $errors[$i]['message']."\n";
      }
    }
}
?>