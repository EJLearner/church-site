<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"https://www.w3.org/TR/html4/strict.dtd">

<?php $page=$_GET["p"];
switch ($page)
{
	case("esanders");
	$name="Eugene Sanders";
	$content=
"<h1>Homegoing Service for Eugene Sanders</h1>
Son Of Lilian D Lyde, nephew of Dora Gaskins, cousin of  Minister Charles Gaskins<br>
<br>
<h3>Viewing</h3>
<a href=\"http://www.chatmanharrisfh.com/\">Chatman-Harris Funeral Home</a><br>
5240 Reisterstown Road, Baltimore, MD 21215<br>
Thursday, February 18, 2010 1pm-8pm<br>
<iframe width=\"300\" height=\"300\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=chapman-harris+funeral+home&amp;sll=39.343502,-76.685013&amp;sspn=0.014006,0.026157&amp;gl=us&amp;g=5240+Reisterstown+Rd,+Baltimore,+MD+21215&amp;ie=UTF8&amp;hq=chapman-harris+funeral+home&amp;hnear=5240+Reisterstown+Rd,+Baltimore,+MD+21215&amp;cid=10873325582475284409&amp;ll=39.343724,-76.685772&amp;spn=0.009957,0.012875&amp;z=15&amp;iwloc=A&amp;output=embed\"></iframe><br />
<h3>Funeral</h3>
<p>Friday, February 19, 2010<br>
Family Hour: 12:30pm - 1pm<br>
Funeral to Follow at Chatman-Harris Funeral Home</p>
<h3>Cards Can Be Sent to</h3>
<p>Lillian Lyde<br>
815 Ruscome Lane<br>
Baltimore, MD 21215<br>
</p>
<p>Minister Charles Gaskins<br>
4809 Woodside Drive<br>
Baltimore, MD 21229<br>
</p>
<p>Dora Gaskins<br>
3457 Flannery Lane<br>
Gwynn Oak, MD 21207</p>
";

case("cgaskins");
//defaults
$image = "funeralcross.jpg";
$imageAlt = "Christian Cross With Clouds";

$name="Minister Charles Gaskins";
$serviceSiteWebsite = "https://www.thecitytemple.org";
$serviceSiteName = "The City Temple of Baltimore (Baptist)";
$serviceSiteAddress = "317 Dolphin Street, Baltimore, MD 21217";
$serviceDate = "Saturday, February 3";
$serviceTimeAndInfo =
	"Wake: 10:00 a.m. - 11:00 a.m.<br>
	Funeral: 11:00 a.m.</p>";
$additionalContent ="
<h3 class='ul-header'>Donations May Be Made To:</h3>
<ul>
	<li>John’s Hopkins Cardiovascular Center</li>
	<li>John’s Hopkins Hospital</li>
</ul>
	";

$content=
"<h1>Memorial Service for $name</h1>
<hr>
<div class='information'>
<h3>Memorial Service</h3>
<p><a href='$serviceSiteWebsite'>$serviceSiteName</a><br>
$serviceSiteAddress<br>
$serviceDate<br>
$serviceTimeAndInfo</p>
$additionalContent
</div>
<figure>
	<img src='images/gaskinbio.jpg' alt='Minister Charles Gaskins Picture'>
</figure>
";

break;

case("ddavenport");
		//defaults
		$image = "funeralcross.jpg";
		$imageAlt = "Christian Cross With Clouds";

		$name="Delores Davenport";
		$viewingSiteWebsite = "http://www.mortonfuneralhomes.com/";
		$viewingSiteName = "James A. Morton Funeral Home";
		$viewingSiteAddress = "1701 Laurens St, Baltimore, MD 21217";
		$viewingDate = "Tuesday, March 29";
		$viewingTimeAndInfo =
			"Family Viewing: 2:30 - 3:00 p.m.<br>
			Public Viewing: 3:00 - 7:00 p.m.";
		$serviceSiteWebsite = "https://www.thecitytemple.org";
		$serviceSiteName = "Baltimore City Temple (Baptist)";
		$serviceSiteAddress = "317 Dolphin Street, Baltimore, MD 21229";
		$serviceDate = "Wednesday, March 30";
		$serviceTimeAndInfo =
			"Wake: 11:00 a.m. - 11:30 a.m.<br>
			Funeral: 11:30 a.m.</p>";
		$internMentSite = "Garrison Forest Veteran's Cemetery";
		$internMentAddress = "";
		$additionalContent =
			"<h3>Additional Information</h3>
			<p>Repast will follow internment</p>
			<p>Miss Delores was a dedicated member of the Temple Choir for many years. Please keep Deacon Davenport and the rest of the family in your prayers.
We are asking choir members to bring desserts, a favorite dish, water or punch.<br>Thank you and be blessed.</p>
			";

		$content=
		"<h1>Homegoing Service for $name</h1>
		<hr>
		<figure>
			<img src='images/funeralcross.jpg' alt='Christian Cross With Clouds'>
			<figcaption><a href='https://flic.kr/p/a9TZVv'>\"shining cross\"</a> by fairytaleweaver / CC BY-SA</figcaption>
		</figure>
		<h3>Viewing</h3>
		<a href='$viewingSiteWebsite'>$viewingSiteName</a><br>
		$viewingSiteAddress<br>
		$viewingTimeAndInfo
		<h3>Homegoing Services</h3>
		<p><a href='$serviceSiteWebsite'>$serviceSiteName</a><br>
		$serviceSiteAddress<br>
		$serviceDate<br>
		$serviceTimeAndInfo</p>

		<h3>Internment</h3>
		$internMentSite<br>
		$additionalContent";
	break;
}

?>
<html>
<head>
<?php include "stylelogic.php" ?>

<meta name="keywords" content="baltimore, baptist, city, temple" >
<meta name="description" content="City Temple Baptist Church - <?php echo $name ?> funeral service" >
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="generator" content="Notepad++" >
<title>City Temple Baptist Church - Funeral Service for <?php echo $name ?></title>
</head>

<body>
	<? include "bannerandmenu.php" ?>
	<div id="container">
		<div id = "funeralpagecontent" class="submenucontent">
			<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; Funeral Service for <?php echo $name ?></div>
			<?php echo $content ?>
		</div>
	</div>
	<?php include "footer.php" ?>
</body>
</html>
