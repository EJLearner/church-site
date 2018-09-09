<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$page=$_GET["p"];

switch ($page)
{
case ("mlktribute-2010");
	$title="City Temple &mdash; Martin Luther King Jr, Tribute";
	$morekeywords=",martin, luther, king, jr, tribute";
	break;
case ("organscape");
	$title="Artscape to OrganScape";
	$morekeywords=",organ, artscape, music, kenneth, dean";
	$description="Organscape Page";
	break;
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd"> 
 
<html> 
<head> 
<link rel="stylesheet" type="text/css" href="default.css">

<meta name="keywords" content="baltimore, baptist, city, temple, christian, church<?php echo $morekeywords;?>"> 
<meta name="description" content="City Temple Baptist Church - <?php echo $description;?>"> 
<meta name="generator" content="notepad++" > 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
 
<title><?php echo $title?></title> 
 
</head> 
 
<body> 
<?php include "bannerandmenu.php"?> 
	<div id="container"> 
	<div class="eventpagecontent"> 
		<div class="navchain"><A class="titlelink" href="index.php">Home</A> &gt;&gt; <? echo $title?></div>
		<?php
		switch($page)
		{
			case ("organscape");?>
				<div style="text-align:center;">
				<h1>Artscape to OrganScape</h1>
				<img src="images/organclip-exp-sep2010.png"><br>
				<span style="font-style:italic; font-size:115%">featuring</span>
				<p style="font-size:180%;">Organists from the Mt. Royal Bolton Hill Cultural District Performing<br> on the Historic Adam Stein 144 Rank Pipe Organ</p>
				<p style="line-height:150%;">
				Dr. Kenneth M. Dean, Jr.<br>
				Dr. Gloria F. Thompson<br>
				Charles Arnette<br>
				Patrick Alston<br>
				Nashela Marie Hargrove<br>
				Warren Hood<br>
				Dennis Minor<br>
				</p>
				<p style="font-size:180%;">Saturday, July 16, 2011 at 1:00 p.m.</p>
				<p>
				<span style="font-size:133%;">The City Temple of Baltimore (Baptist)</span><br>
				317 Dolphin Street<br>
				Baltimore, MD  21217<br>
				</p>
				<p>
				Pastor:  Reverend Dr. Grady A. Yeargin, Jr.<br>
				Minister of Music:  Dr. Kenneth M. Dean, Jr.<br>
				Chairperson Culture and Fine Arts Committee: Mrs. Nadena Holden<br>
				Chairperson Perpetual Organ Committee:  Mrs. Linda Alexander<br>
				</p>
				</div>
			<?
			break;
		}?>

	</div> 
	
</div> 
<?php include "footer.php"?>
</body> 
</html>