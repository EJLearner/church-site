<?php

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$page=$_GET["p"];

switch ($page)
{
case ("sermons");
	$title="Sermons";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\sermonsubsub.jpg\"><h3 class=\"subsubmenutitle\">About Pastor Yeargin's Teachings</h3><p>The members of City Temple count ourselves blessed to have in our church, not only one of the finest preachers, but one of the most outstanding teachers.  Rev. Dr. Grady A. Yeargin, Jr. takes scriptures you may have read countless times and finds new insights to explore.  He is a very learned pastor and is constantly reading and educating himself in order to provide us with a very holistic and all-encompassing way to understand the bible and the God we serve.  Pastor Yeargin also encourages us to read the Word for ourselves so we may be able to &ldquo;rightly divide the word of truth.&rdquo;</p>

<h3 class=\"subsubmenutitle\">Purchasing CDs</h3>
<p>Purchase CDs of Pastor Yeargin and the pulpit staff&rsquo;s sermons.</p>

<h3 class=\"subsubmenutitle\">Have any questions?</h3>
<p>If you have questions about the sermons, please call Pastor Yeargin at (410)&nbsp;462-4802 or <a href=\"mailto:pastor@thecitytemple.org\">e-mail</a> him.</p>
";
break;
case ("dance");
	$title="Liturgical Dance";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\dancesubsub.jpg\"><p>The Dance Ministry is comprised of both men and women of all ages and backgrounds who have come together for the purposes of praising and worshipping our Lord and Saviour, Jesus Christ, through dance and movement!  Our intention is to use our bodies as living sacrifices, holy and acceptable unto God, to release movements that will touch the lives of those who don't have a deep relationship with Christ; heal and deliver the afflicted and suffering; war against principalities; give testimony and thanksgiving unto God for His grace and mercy; and offer an alternative to praising and worshipping the Lord.</p>
<p>In keeping in alignment with the word of God, our movements may be released in dance with music or in interpretation of scripture or prayer.</p>

<h3 class=\"subsubmenutitle\">How to Join</h3>

<p>1.  Be a member of City Temple in good standing.</p>
<p>2. Contact one of the group leaders to schedule a brief orientation.</p>
<p>3. Attend rehearsals.</p> 

<h3 class=\"subsubmenutitle\">Group Leaders</h3>
<p>The dance ministry is currently under the direction of Ministers Lori Ford and Marshell Jenkins.  The group leaders are Beverly Clinton and Kristin Ford.</p>

</p>";
break;
case ("choir");
	$title="Music &amp; Choirs";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\music.jpg\"><p>Praise is our response to the unconditional love of God.  At City Temple, we believe that as praises go up, blessings will come down.  If singing is how you or your child choose to worship God, please consider joining one of our choirs.</p>
	<h3 class=\"subsubmenutitle\">Choirs</h3>
<h3 class=\"greentitle\">Temple Choir</h3><p>The Temple Choir is for seniors age 50 and above.</p>
<h3 class=\"greentitle\">Gospel Ensemble</h3><p>The Gospel Ensemble enjoys singing gospel music at our church home and in the community.  This choir&rsquo;s age range is 30 and above.</p>
<h3 class=\"greentitle\">Youth Choir</h3><p>The youth choir welcomes children currently in elementary through high school.</p>
<h3 class=\"greentitle\">Mass Choir</h3><p>The mass choir makes up members from each choir and also members of the congregation whom do not normally sing on any choir.</p>
";
break;
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html> 
<head>
<link rel="stylesheet" type="text/css" href="default.css">

<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, grady, yeargin" > 
<meta name="description" content="City Temple Baptist Church Webpage" > 
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" > 
<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
<meta name="generator" content="Notepad++" > 
<title>City Temple of Baltimore - <? echo $title ?></title> 
</head>

<body>
<? include "bannerandmenu.php" ?>
<div id="container">
	
<div class="bothsides">
	<div class="leftside">
		<?php include "servicetimesleft.php"?>
	</div>
	<div class="rightside">
		<div class="navchain"><a href="index.php">Home</a> &gt;&gt; <a href="submenu.php?p=worship">Worship</a> &gt;&gt;  <?php echo $h1 ?></div>
		<h1><?php echo $h1 ?></h1>
		<hr>
		<?php echo $righttext ?>
	</div>
</div>

</div>
<?include "footer.php"?>
</body>
</html>