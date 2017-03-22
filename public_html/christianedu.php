<?php
if (isset($_GET['p'])) {
		$page=$_GET['p'];
} else {
	$page='';
};

function randomquote()
{
	$quotes=array(
	"&ldquo;But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To Him be the glory both now and to the day of eternity. Amen.&rdquo;"
	,"&ldquo;An intelligent heart acquires knowledge, and the ear of the wise seeks knowledge. Proverbs 18:15&rdquo;"
	,"&ldquo;Give instruction to a wise man, and he will be still wiser; teach a righteous man, and he will increase in learning. Proverbs 9:9&rdquo;"
	,"&ldquo;Everyone who goes on ahead and does not abide in the teaching of Christ, does not have God. Whoever abides in the teaching has both the Father and the Son. 2 John 1:9&rdquo;"
	,"&ldquo;Apply your heart to instruction and your ear to words of knowledge. Proverbs 23:12&rdquo;"
	,"&ldquo;And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise. You shall bind them as a sign on your hand, and they shall be as frontlets between your eyes. You shall write them on the doorposts of your house and on your gates. Deuteronomy 6:6-9&rdquo;"
	,"&ldquo;Things that we have heard and known, that our fathers have told us. We will not hide them from their children, but tell to the coming generation the glorious deeds of the Lord, and his might, and the wonders that he has done. He established a testimony in Jacob and appointed a law in Israel, which he commanded our fathers to teach to their children, that the next generation might know them, the children yet unborn, and arise and tell them to their children, so that they should set their hope in God and not forget the works of God, but keep his commandments... Psalm 78: 3-8&rdquo;"
	,"&ldquo;Whoever walks with the wise becomes wise, but the companion of fools will suffer harm. Proverbs 13:20&rdquo;"
	,"&ldquo;Iron sharpens iron, and one man sharpens another. Proverbs 27:17&rdquo;"
	);

	return $quotes[rand(0,count($quotes)-1)];
}

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<link rel="stylesheet" type="text/css" href="christianed.css">
<link rel="icon" type="image/png" href="images/favicon.png">

<script src="ideaform.js"></script>

<meta name="keywords" content="baltimore, baptist, city, temple, christian, education, church, grady, yeargin" >
<meta name="description" content="City Temple Baptist Church - Christian Education Page" >
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1" >
<title id='title'>City Temple of Baltimore - Christian Education</title>
</head>
<body>
<div id="header"><img src="images\chrisedtopbanner.png" alt=""></div>
<div id="menubar">
<ul class="cfm">
	<li><a href="christianedu.php?p=welcome">Welcome</a></li>
	<li><a href="christianedu.php?p=who">Who We are</a></li>
	<li><a href="christianedu.php?p=why">Why We Are Here</a></li>
	<li><a href="christianedu.php?p=where">Where We Are Going</a></li>
	<li><a href="christianedu.php?p=what">What's In Store</a></li>
	<li class="lastmenuitem"><a href="christianedu.php?p=opinion">Tell Us What You Think</a></li>
</ul>
</div>
<div id="maincontent" class="cf">
	<?
		include 'dynamicCEcontent.php';
		if ($page=="opinion") {echo $ideaform;}
		else if ($page=='who') {echo $whocontent;}
		else if ($page=='where') {echo $wherecontent;}
		else if ($page=='why') {echo $whycontent;}
		else if ($page=='what') {echo $whatcontent;}
		else if ($page=="instreg") {echo $instregform;}
		else if ($page=='opinionsent') {echo $opinionsent;}
		else {
			echo $welcomecontent;
		}
	?>
</div>
<p id="bottomquote"><?php echo randomquote();?></p>
<div id="footerbar">
<div id="footer" class="cf">
	<div id="footerlinks">
	<div class="footlinklist cf">
	<h3>About Us</h3>
	<ul>
		<li><a href="christianedu.php?p=who">Who We Are</a></li>
		<li><a href="christianedu.php?p=why">Why We Are Here</a></li>
		<li><a href="christianedu.php?p=where">Where Are We Going</a></li>
	</ul>
	</div>
	<div class="footlinklist">
	<h3>Learn More</h3>
	<ul>
		<li><a href="christianedu.php?p=what">What's In Store</a></li>
		<li><a href="/blog/">Pastor's Blog</a></li>
		<li><a href="aboutpage.php?p=membership">Join Our Church</a></li>
	</ul>
	</div>
	<div class="footlinklist">
	<h3>Participate</h3>
	<ul>
		<li><a href="christianedu.php?p=opinion">Tell Us What You Think</a></li>
		<li><a href="christianedu.php?p=welcome">Take Our Survey</a></li>
		<li><a href="submenu.php?p=giving">Donate</a></li>
		<li><a href="christianedu.php?p=instreg">Register</a></li>
		<li><a href="ministries.php">Join A Ministry</a></li>
	</ul>
	</div>
	</div>
	<div id="socialcopyright">
		<a href="https://www.facebook.com/thecitytemple"><img src="images\smfbblack.png" alt="FaceBook Icon"></a>
		<a href="https://twitter.com/thecitytemple"><img src="images\smtwblack.png" alt="Twitter Icon"></a>
		<a href="mailto:church@thecitytemple.org"><img src="images\smmailblack.png" alt="Mail Us"></a>
		<p>&copy; <?php echo date("Y"); ?> The City Temple (Baptist) Church</p>
	</div>
</div>
</div>
</body>
</html>
