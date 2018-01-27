<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="default.css">
	<link rel="icon" type="image/png" href="images/favicon.png">
	<? include "dayscriptset.php"; ?>

	<? include "anythingslidercode.php"; ?>
	<!--<script type="text/javascript" src="tFader.js"></script> -->
	<script type="text/javascript" src="popup.js"></script>
	<script>
		var openOnClick = function(event, target, whRatio){
			var location = event.currentTarget.getAttribute('href');
			event.preventDefault();
			var height = window.outerHeight * .8;
			var width = height * whRatio;

			newWindow = window.open(location, target, 'height=' + height +' , width=' + width + ',toolbar=no,directories=no,status=no,menubar=no, titlebar=no, toolbar=no, location=no');

			newWindow.onload = function() {
				var css = 'img {width:100%}';
				var head = newWindow.document.head;
				var style = newWindow.document.createElement('style');

				style.type = 'text/css';

				if (style.styleSheet){
				  style.styleSheet.cssText = css;
				} else {
				  style.appendChild(newWindow.document.createTextNode(css));
				}

				newWindow.document.getElementsByTagName('head')[0].appendChild(style);

			};


			return null;
		}
	</script>


	<meta name="verify-v1" content="3wCodnfg43veeFCH3Vs1Fr8lMJCUKtJ5myjNZ35+qeo=">
	<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, grady, yeargin" >
	<meta name="description" content="City Temple Baptist Church Webpage" >
	<meta name="revised" content="Earl Jones, <?php echo date("F d Y H:i:s.", filemtime(__FILE__))?>" >
	<meta name="generator" content="Notepad++" >
	<title>City Temple of Baltimore</title>

</head>
<body onload="popwindow()">

<?php include "bannerandmenu.php" ?>
<?php include "sliderhead.php" ?>

<?if ((date('U') < strtotime("2016-01-25")) & (TRUE))
{?>
<div id="urgentmessagebox"><img src="images/urgent.jpg"><p>Sunday's Church Service Cancelled <span class="urgentpostdate">Posted 01-23-2016 4:20 p.m.</span><br></p>
	<p>Due to weather conditions, Sunday's church service is cancelled.<br>You can submit offerings online <a href="onlinegiving.php?p=tithing">here</a>.</p><div class="clear"></div>
</div>
<?}?>

<div id="container" class="homepagecontainer">
	<ul id="slider1">
		<li><img src="images/homebannerservicetimes.png" alt="Service Times 9 AM Every Sunday"></li>

		<?
		// Recurring events (Mostly holidays)
		if (date('m-d') > "06-22" && date('m-d') < "07-06")
		{?>
		<li><img src="images/homebannerIndependence.png" alt="Independence Day Banner"></li>
		<?}
			if (date('m-d') > "11-01" && date('m-d') < "11-30")
		{?>
				<li><img src="images/homebannerthanksgiving.png" alt="Thanksgiving Banner"></li>
		<?}
		if (date('Y-m-d') <= "2015-12-20") //Need to take the date off to make it perpetual
		{?>
				<li><img src="images/homebannerchristmas.png" alt="Christmas Banner"></li>
		<?}
		if (date('m-d') > "01-25" && date('m-d') < "03-01")
		{?>
				<li><img src="images/homebannerBlackHistory.png" alt="Black History Month Banner"></li>
		<?}?>

		<li><img src="images/homebannerbiblestudy.png" alt="Bible Study Tuesday Noon and 7:30 PM. Saturday at Noon"></li>
		<li><img src="images/homebanneramazinggrace.jpg" alt="712-432-1620 Prayer Line Pass code is 987357# Call begins 6 am"></li>
		<!--<li><img src="images/homebannerDfree.png" alt="DFree Banner"></li>-->
		<!--<li><a href="aboutpage.php?p=ged"><img src="images/homebannerGED.png" alt="GED Banner and Link"></a></li>-->
		<!--<li><a href="/blog/"><img src="images/homebannerblog.png" alt="Blog Banner and Link"></a></li>-->
	</ul>

	<div id="homebiglinks" class="arial">
		<ul>
			<li><a href="aboutpage.php?p=membership"><h2>Membership</h2>Join this body of Christ</a></li>
			<li><a href="mailto:prayerrequest@thecitytemple.org?subject=Prayer%20Request"><h2>Prayer Requests</h2>Let us pray with you and for you</a></li>
			<li><a href="submenu.php?p=giving"><h2>Ways to Give</h2>Always safe and secure</a></li>
			<li><a href="submenu.php?p=outreach"><h2>Outreach</h2>Offering Comfort and Help</a></li>
		</ul>
	</div>
	<div class="clear"></div>
	<div id="bottomthree">
		<div class="calendarbox">
			<h2>Calendar</h2>
			<ul>
				<?
				$eventcount=0;

				function addevent($datedesc, $eventdesc, $dispdate)
				{
					global $eventcount;
					if ((strtotime($dispdate) >= date('U')) && ($eventcount <7))
					{
						echo '<li><h4>' . $datedesc . '</h4>' . $eventdesc . '</li>
						';
						$eventcount++;
					}
				}
				addevent("September 26 8:30 a.m. - 3:00 p.m.",
					"<a href='2015ChurchwideInstituteFlyer.pdf' target='CWI'>2015 Church-Wide Institute</a>",
					"2015-9-27"
				);
				addevent("March 30 11:00 a.m.","<a href='funeralpage.php?p=ddavenport'>Delores Davenport Funeral Service</a>","2016-03-31");
				addevent("July 16 1:00 p.m.",
					"<a href='#' onclick=\"openOnClick(event,'images/temp/OrganscapeFlyer2016.jpg','name', .75)\">Artscape to Organscape 2016</a>",
					"2016-07-17");
				addevent(
					"October 30 6:00 p.m.",
					"<a href='images/temp/AnniversaryConcert2016.jpg' onclick=\"openOnClick(event, 'anniversary', .8)\">
						City Temple Anniversary Concert
					</a>",
					"2016-10-31"
				);
				addevent("October 17", "Next Ged Class", "2016-10-18");
				addevent("November 6 During Morning Worship", "Memorial Celebration", "2016-11-07");
				addevent("November 19 11 a.m - 2 p.m.", "Open Closet - Outreach Program", "2016-11-20");
				addevent("October 11 6 p.m. -  7:30 p.m.", "God's Gift Liturgical Dance Ministry", "2016-10-12");
				addevent("October 18 6 p.m. -  7:30 p.m.", "God's Gift Liturgical Dance Ministry", "2016-10-19");
				addevent("October 25 6 p.m. -  7:30 p.m.", "God's Gift Liturgical Dance Ministry", "2016-10-26");
				addevent("February 3","<a href='funeralpage.php?p=cgaskins'>Minister Charles Gaskins Memorial Service</a><br />Wake - 10:00 a.m.<br />Memorial Service 11:00 a.m.","2018-02-05");
				?>
			</ul>
		</div>
		<div id="linkboxhome">
			<h2>Popular Links</h2>
			<ul>
				<li><h4><a href="/christianedu.html">Christian Education</a></h4></li>
				<li><h4><a href="/pgallery/">Photo Gallery</a></h4></li>
				<li><h4><a href="/blog/">Pastor's Blog</a></h4></li>
				<li><h4><a href="spiritualpage.php?p=weekly">Weekly Meditation</a></h4></li>
				<li><h4><a href="marketday.php">Market Day</a></h4></li>
				<!--<li><h4><a href="submenu.php?p=outreach">Bible Study</a></h4></li>-->
				<li><h4><a href="ministries.php">Ministries</a></h4></li>
				<li><h4><a href="aboutpage.php?p=ged">GED Program</a></h4></li>
			</ul>
		</div>
		<div class="devotionalshome">
			<h2>Daily Devotional - <?php echo date("F j")?></h2>
			<a href="spiritualpage.php?p=daily"><img src="images/devotionalpage.jpg" alt="Mountain Sunset"></a>
			<div class="scripture"><?php echo getVerse(date('z'));?><br><?php  echo getScripture(0, date('z'))?></div>
		</div>
		<div class="clear"></div>
	</div>
</div>
<? include "footer.php" ?>
</body>
</html>
