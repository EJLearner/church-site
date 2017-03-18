<?php 
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$page=$_GET["p"];
$errorlist="";
$valid=FALSE;

foreach ($_REQUEST as $key => $value)
{
$$key=$value;
}

function writeselected($curroption, $curritem_name)
{
	if ($curroption == $curritem_name)
		echo "SELECTED";
}
function isError($field)
{
	global $errorlist;
	if (strpos($errorlist, $field)!==false)
		return ' error';
	elseif ((strpos($field, 'amount')!==false) && (strpos($errorlist, 'below1')!==false))
		return ' error';

}
if ($page=="tithing")
	{
		$title="On-Line Tithing Form";
	}
	elseif ($page=="donating")
	{
		$title="On-Line Donation Form";
	}
	else
		echo 'This page doesn\'t exist';  //send the user to an error page
if (isset($_REQUEST['first_name']))
{
	$sent=TRUE;
}
if ($sent)
{
	if (!(preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i', $email)))
		$errorlist .= 'email,';
}
if ($sent && $page=="tithing")
{
	$amount_arr=array("amount_1" => $amount_1, "amount_2" => $amount_2, "amount_3" => $amount_3, "amount_4" => $amount_4, "amount_5" => $amount_5, "amount_6" => $amount_6, "amount_7" => $amount_7);
	$amount_total=0;
	foreach($amount_arr as $key => $value)
	{
		if(preg_match('/^[0-9]*(\.|\.[0-9]{2})?$/', $value))
		{
			//valid
			$amount_total+=$value;
		}
		else	
		{
			//invalid
			$errorlist .=$key.',';
		}
	}
	if ($amount_total < 1)
	{
		$errorlist .='below1,';
		//below1
	}
}
elseif ($sent && $page=="donating")
{
	if(!preg_match('/^[0-9]*(\.|\.[0-9]{2})?$/', $amount))
	{
		$errorlist .='amount,';
	}
	else if ($amount <=1.00)
	{
		$errorlist .='below1,';
	}
}
if ($errorlist=="" && $sent)
	$valid=TRUE;

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="default.css">
<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, on-line, giving, grady, yeargin, tithe, donation" > 
<meta name="description" content="City Temple Baptist Church Webpage - On-line Giving" > 
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" > 
<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
<meta name="generator" content="Notepad++" > 
<title>City Temple of Baltimore - <?php echo $title ?></title> 
</head>

<body>
<?php include "bannerandmenu.php"?>
	<div id="container">
	<div class="bothsides">
		<div class="leftside"><h3>Keep an Account</h3>
		<hr>
		<p><?php include "financenews.php" ?></p>
		</div>
		<div class="rightside">
			<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; <a class="titlelink" href="submenu.php?p=giving">Giving On-Line</a> &gt;&gt;  <?php echo $title ?></div>
<?php
if ($valid)
{?>
	
	<form name="validform" action="https://www.paypal.com/cgi-bin/webscr" method="post">
	
	<input type="hidden" name="first_name" value="<?php echo $first_name; ?>">
	<input type="hidden" name="last_name" value="<?php echo $last_name; ?>">
	<input type="hidden" name="address1" value="<?php echo $address1; ?>">
	<input type="hidden" name="address2" value="<?php echo $address2; ?>">
	<input type="hidden" name="city" size="20" value="<?php echo $city; ?>">
	<input type="hidden" name="state" size="20" value="<?php echo $state; ?>">
	<input type="hidden" name="zip" size="10" value="<?php echo $zip; ?>">
	<input type="hidden" name="night_phone_a" value="<?php echo $night_phone_a; ?>">
	<input type="hidden" name="email" value="<?php echo $email; ?>">
	<input type="hidden" name="custom" value="<?php echo 'Box:' . $custom; ?>">
	
	<input type="hidden" name="business" value="giving@thecitytemple.org">
	<input type="hidden" name="return" value="http://www.thecitytemple.org/">
	<input type="hidden" name="cancel_return" value="http://www.thecitytemple.org/">
	<input type="hidden" name="no_shipping" value="1">
<?php
	if ($page=="tithing")
	{?>
	<input type="hidden" name="item_name_1" value="Tithes"> 
	<input type="hidden" name="amount_1" value="<?php echo $amount_1+0; ?>">
	<input type="hidden" name="item_name_2" value="General">
	<input type="hidden" name="amount_2" value="<?php echo $amount_2+0; ?>">
	<input type="hidden" name="item_name_3" value="Benevolence">  
	<input type="hidden" name="amount_3" value="<?php echo $amount_3+0; ?>">
	<input type="hidden" name="item_name_4" value="Building">  
	<input type="hidden" name="amount_4" value="<?php echo $amount_4+0; ?>">
	<input type="hidden" name="item_name_5" value="Missions">  
	<input type="hidden" name="amount_5" value="<?php echo $amount_5+0; ?>">
	<input type="hidden" name="item_name_6" value="Pledge">  
	<input type="hidden" name="amount_6" value="<?php echo $amount_6+0; ?>">
	<input type="hidden" name="item_name_7" value="Outreach">  
	<input type="hidden" name="amount_7" value="<?php echo $amount_7+0; ?>">
	<input type="hidden" name="cmd" value="_cart">
	<input type="hidden" name="upload" value="1">
	<?php 
	}
	
	elseif ($page=="donating")
	{?>
	<input type="hidden" name="amount" value="<?php echo $amount?>">
	<input type="hidden" name="cmd" value="_donations">
	<!--<input type="hidden" name="item_name" value="City Temple Baptist Church Donation">-->
	<input type="hidden" name="item_name" value="<?php echo $item_name; ?>">
	<?php 
	}?>
	<script type="text/javascript">
	<!--
	document.validform.submit();
	//-->
	</script>
	<p>Your information has been validated.  Press submit to continue.</p>
	<div class="submitbutton"><input type="submit" name="submit" value="Continue"></div>
	</form>
	
<?php 	
}
else
{?>
<form action="onlinegiving.php?p=<?php echo $page; ?>" method="post">
This information is only used for processing of electronic transactions.  Please contact the church office if you need to update your City Temple contact information.
<div class="mandatoryfield">*denotes a mandatory field</div>
<div class="errorlist">
<?php 
if (strpos($errorlist, 'below1')!==false)
	echo 'Please enter a total dollar amount above $1.00<br>';
if (strpos($errorlist, 'email')!==false)
	echo 'Please enter a valid e-mail address<br>';
if (strpos($errorlist, 'amount')!==false)
	echo 'Please enter valid dollar amounts<br>';
?>
</div>
<br>
<br>

<div class="formline"><div class="label">First Name:</div> <input type="text" name="first_name" value="<?php echo $first_name; ?>" size="20" maxlength="100"></div>

<div class="formline"><div class="label">Last Name:</div> <input type="text" name="last_name" value="<?php echo $last_name; ?>" size="20" maxlength="100"></div>

<div class="formline"><div class="label">Address:</div> <input type="text" name="address1" value="<?php echo $address1; ?>" size="20" maxlength="100"></div>

<div class="formline"><div class="label">Address cont.:</div> <input type="text" name="address2" value="<?php echo $address2; ?>" size="20" maxlength="100"></div>

<div class="formline"><div class="label">City:</div> <input type="text" name="city" size="20" value="<?php echo $city; ?>" maxlength="100"></div>

<div class="formline"><div class="label">State:</div> <input type="text" name="state" size="20" value="<?php echo $state; ?>" maxlength="100"></div>

<div class="formline"><div class="label">Zipcode:</div> <input type="text" name="zip" size="10" value="<?php echo $zip; ?>" maxlength="100"></div>

<div class="formline"><div class="label" >Phone:</div> <input type="text" name="night_phone_a" value="<?php echo $night_phone_a; ?>" size="20" maxlength="100"></div>

<div class="formline"><div class="label<?php echo isError('email')?>">Email<span class="importantstar">*</span>:</div> <input type="text" name="email" value="<?php echo $email; ?>" size="20" maxlength="100"></div>
<div class="formline"><div class="label">Box #:</div> <input type="text" name="custom" value="<?php echo $custom; ?>" size="10" maxlength="100"></div>

<input type="hidden" name="business" value="giving@thecitytemple.org">
<input type="hidden" name="return" value="http://www.thecitytemple.org/">
<input type="hidden" name="cancel_return" value="http://www.thecitytemple.org/">
<input type="hidden" name="no_shipping" value="1">

<?php
if ($page=="tithing")
{
//echo 'This is a tithing page';
echo '<input type="hidden" name="item_name_1" value="Tithes"> 
<div class="formline"><div class="label' . isError('amount_1') . '"  >Tithes:</div> <input type="text" name="amount_1" value="' . $amount_1 . '" size="10" maxlength="100"> USD</div>
 
<input type="hidden" name="item_name_2" value="General"> 
<div class="formline"><div class="label' . isError('amount_2') . '">General Offering:</div><input type="text" name="amount_2" value="' . $amount_2 . '" size="10" maxlength="100"> USD</div>

<input type="hidden" name="item_name_3" value="Benevolence">  
<div class="formline"><div class="label' . isError('amount_3') . ' ">Benevolence:</div> <input type="text" name="amount_3" value="' . $amount_3 . '"  size="10" maxlength="100"> USD</div>
 
<input type="hidden" name="item_name_4" value="Building">  
<div class="formline"><div class="label' . isError('amount_4') . '">Building Fund:</div> <input type="text" name="amount_4" value="' . $amount_4 . '"  size="10" maxlength="100"> USD</div> 

<input type="hidden" name="item_name_5" value="Missions">  
<div class="formline"><div class="label' . isError('amount_5') . ' ">Missions:</div> <input type="text" name="amount_5" value="' . $amount_5 . '"  size="10" maxlength="100"> USD</div> 

<input type="hidden" name="item_name_6" value="Pledge">  
<div class="formline"><div class="label' . isError('amount_6') . '">Pledge Offering:</div> <input type="text" name="amount_6" value="' . $amount_6 . '"  size="10" maxlength="100"> USD</div> 

<input type="hidden" name="item_name_7" value="Outreach">  
<div class="formline"><div class="label' . isError('amount_7') . ' ">Outreach:</div> <input type="text" name="amount_7" value="' . $amount_7 . '"  size="10" maxlength="100"> USD</div>';
?>
<input type="hidden" name="cmd" value="_cart">
<input type="hidden" name="upload" value="1">
<?php
}
elseif ($page=="donating")
{
?>
	<div class="formline"><div class="label<?php echo isError('amount')?>">Amount<span class="importantstar">*</span>:</div> <input type="text" name="amount" value="<?php echo $amount?>" size="20" maxlength="100">USD</div>
	<div id="donatingto" class="formline"><div class="label">Donating To:</div>
	<select name="item_name">
		<option value="City Temple Baptist Church Donation" <?php echo writeselected("City Temple Baptist Church Donation", $item_name)?>>General Church Fund</option>
		<option value="Outreach Donation" <?php echo writeselected("Outreach Donation", $item_name)?>>Outreach</option>
		<option value="William Bryant Scholarship Fund Donation" <?php echo writeselected("William Bryant Scholarship Fund Donation", $item_name)?>>William Bryant Scholarship Fund</option>
		<option value="Youth Ministry Donation" <?php echo writeselected("Youth Ministry Donation", $item_name)?>>Youth Ministry</option>
	</select>
	</div>
<input type="hidden" name="cmd" value="_donations">
	<!--<input type="hidden" name="item_name" value="City Temple Baptist Church Donation">-->
<?php
}
?>
<BR>
<BR>
<div class="submitbutton"><input type="submit" name="submit" value="submit"></div>


</FORM>
<?php } ?>		
			
		</div> <!--end rightside-->
	</div> <!--end bothsides-->
	
</div> <!--end container-->
<?php include "footer.php"; ?>
</body>
</html>