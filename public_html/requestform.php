<?php
include "../private/confidential.php";

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$page=$_GET["p"];
$errorlist="";
$valid=FALSE;

foreach ($_REQUEST as $key => $value)
{
$$key=$value;
}

if (isset($_REQUEST['submit']))
{
	$sent=TRUE;
}

if ($sent)
{
	$valid = TRUE;

	$multfields=array("cfirst_name" => $cfirst_name, "clast_name" => $clast_name, "cphone" => $cphone);
	foreach($multfields as $key => $value)
	{
		if(empty($value))
		{
			$errorlist .=$key.',';
			$valid = 0;
		}
	}

	if (!(preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i', $cemail)) AND !empty($cemail))
	{
		$errorlist .= 'email,';
	}

	if ($page == "funds")
	{
		$multfields=array("amount" => $amount, "dateneeded" => $dateneeded, "expenses" => $expenses);
		foreach($multfields as $key => $value)
		{
			if(empty($value))
			{
				$errorlist .=$key.',';
				$valid = 0;
			}
		}
	}



}

function addtextline($sProgName,$sLabel,$bImport=FALSE,$iLength=100,$iSize=20)
{
	echo ("

	<div class='formline'><div class='label".isError($sProgName)."'>".$sLabel);
	if ($bImport) {echo ("<span class='importantstar'>*</span>");}

	echo (":</div> <input type='text' name='".$sProgName."' value='".$sProgName."' size='".$iSize."' maxlength='".$iLength."'></div>");
}

function addcheckbox($sProgName,$sLabel,$bImport=FALSE,$iLenth=100,$iSize=20)
{
	echo ("

	<div class='formline'><div class='label".isError($sProgName)."'>".$sLabel);
	if ($bImport) echo ("<span class='importantstar'>*</span>");

	echo (":</div> <input type='text' name='dateneeded' value='".$dateneeded."' size='20' maxlength='100'></div>");
}

function isError($field)
{
	global $errorlist;
	if (strpos($errorlist, $field)!==false)
		return ' error';
}


switch ($page)
{
	default; //and case "funds";
	$page="funds";
	$title = "Request for Funds";
	break;

	case "event";
	$title = "Event Request Form";
	break;
}

$address = preg_replace("/\/.*\//","",__FILE__)."?p=".$page;


?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="default.css">
<META NAME="robots" CONTENT="noindex">
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
<meta name="generator" content="Notepad++" >
<title>City Temple of Baltimore - <?php echo $title ?></title>
</head>

<?
	if ($valid)
		{
		$to=getRequestFormAddress();
		$subject="$title . 'has been submitted'";
		$message="(<Resolve phpmatic> submitted an $title request. Submitted information is below\r\n\r\n";
		$message= $message . "Ministry Leader Name: " . "PHP magic" . "\r\n";
		$message= $message . "Contact First Name: " . $cfirst_name . "\r\n";
		$message= $message . "Contact Last Name: " . $clast_name . "\r\n";
		$message= $message . "Contact Phone: " . $cphone . "\r\n";
		$message= $message . "Contact Email: " . $cemail . "\r\n";
		$message= $message . "Submit Date: " . date("F j, Y, g:i a") . "\r\n";

		if ($page=="funds")
		{
			$message= $message . "Amount: " . $amount . "\r\n";
			$message= $message . "Date Needed: " . $dateneeded . "\r\n";
			$message= $message . "Expenses: " . $expenses . "\r\n";
		}

		if ($page=="event")
		{

		}

		$from = "webmaster@thecitytemple.org";
		$headers = "From:" . $from;
		mail($to,$subject,$message,$headers);

		//header ("location:/index.php?form=sent";

		}
	?>

<body>
<?php include "bannerandmenu.php"?>
	<div id="container">
	<? echo ($page . "<br>" . $title . "<br>" . $address . "<br>") . "Sent " . $sent . "<br>" . "Valid: " . $valid . "<br>" . "Error list: " . $errorlist . "<br>"; ?>



	<form action="<? echo $address ?>" method="post">
	<div class="mandatoryfield">*denotes a mandatory field</div>

	<div class="formline"><div class="label<?php echo isError('cfirst_name')?>">Contact First Name:<span class="importantstar">*</span></div> <input type="text" name="cfirst_name" value="<?php echo ($cfirst_name)?>" size="20" maxlength="100"></div>

	<div class="formline"><div class="label<?php echo isError('clast_name')?>">Contact Last Name:<span class="importantstar">*</span></div> <input type="text" name="clast_name" value="<?php echo $clast_name?>" size="20" maxlength="100"></div>

	<div class="formline"><div class="label<?php echo isError('cphone')?>" >Contact Phone:<span class="importantstar">*</span></div> <input type="text" name="cphone" value="<?php echo $cphone?>" size="20" maxlength="100"></div>

	<div class="formline"><div class="label">Contact Email:</div> <input type="text" name="cemail" value="<?php echo $cemail?>" size="20" maxlength="100"></div>

	<input type="hidden" name="submitdate" value="<?php echo date("F j, Y, g:i a") ?>">
	<input type="hidden" name="submitname" value="<?php echo ("Get this programatatically") ?>">

	<?php if ($page=="funds")
	{
	?>
	<div class="formline"><div class="label<?php echo isError('amount')?>">Amount Requested:<span class="importantstar">*</span></div> <input type="text" name="amount" value="<?php echo $amount?>" size="20" maxlength="100"></div>

	<div class="formline"><div class="label<?php echo isError('dateneeded')?>">Date Needed:<span class="importantstar">*</span></div> <input type="text" name="dateneeded" value="<?php echo $dateneeded?>" size="20" maxlength="100"></div>

	<div class="formline"><div class="label<?php echo isError('expenses')?>">Expenses:<span class="importantstar">*</span></div> <input type="text" name="expenses" value="<?php echo $expenses?>" size="20" maxlength="100"></div>
	<?}
	else if ($page=="event")
	{?>
		<div class="formline"><div class="label<?php echo isError('phone_e')?>">Evening Phone:<span class="importantstar">*</span></div> <input type="text" name="phone_e" value="<?php echo $phone_e?>" size="20" maxlength="100"></div>
		<?
		addtextline($eventtime,"Time of Event",1);
		addcheckbox($diaconate,"Diaconate",1);
		?>
	<?}?>

	<div class="submitbutton"><input type="submit" name="submit" value="Submit"></div>
	</form>



</div> <!--end container-->
<?php include "footer.php"; ?>
</body>
</html>
