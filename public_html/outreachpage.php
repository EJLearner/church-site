<?php

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$page=$_GET["p"];
$lefttext=
"<h3>May we help?</h3>
<hr>
<p>Our goal at City Temple is to be a haven of comfort and hope to our community. Please <a href=\"contactus.php\">contact us</a> for financial assistance, clothing, or food.  We also have a variety of <a href=\"submenu.php?p=outreach\">other ways we can help</a>.  Allow us to serve you.</p>";
switch ($page)
{
case ("financialassist");
	$title="Financial Assistance";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\finasst.jpg\"><p>Outreach is a ministry in which the church works beyond its boundaries but within God&rsquo;s boundaries in unexpected ways to provide for those in the community in need.  The City Temple of Baltimore (Baptist), through its Outreach Ministry, supports a variety of programs whose main focus is to provide food clothing and financial assistance to those in need.</p>
<h3 class=\"subsubmenutitle\">How to Request Financial Assistance</h3>
<p>The first step toward receiving financial assistance from The City Temple of Baltimore (Baptist) is to visit or call the church. The director and administrator of the Outreach Program, Gary Hamiel, will discuss your needs with you, either in person or by phone.</p>
<p>We also ask that you bring copies of specific bills, turn off notices, eviction notices, etc. with you when you come to your appointment. (We will return these documents to you.)</p>
<p>If we can offer you financial assistance, you will receive your check that day. Checks are made payable only to the companies you owe (e.g., landlord, utility company, etc.). You are responsible for mailing or delivering the checks to those companies.</p>

<h3 class=\"subsubmenutitle\">Have Questions?</h3>
<p>If you have more questions about financial assistance, please contact the director Gary Hamiel at (410)&nbsp;383-8040 or call the church office at (410)&nbsp;462-4800. Gary is available at the church office Monday-Thursday, between the hours of 10:00 a.m.-2:00 p.m.</p>
	
	";
break;
case ("soupkitchen");
	$title="Soup Kitchen and The Rack (Clothing Pantry)";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\soupkitsubsub.jpg\"><p>The City Temple Soup Kitchen and clothing pantry, The Rack, operates Monday, Wednesday and Thursday from 11:30 a.m.12:30 p.m. Our goal is to offer any person who comes in hungry a warm meal in a warm and comfortable environment.</p>
<p>All those who come to eat are invited to participate in fellowship with our church members through bible study, song, or conversation. The pastor or diaconate members may also be available for counseling and for information about church membership and services.</p>
<h3 class=\"subsubmenutitle\">Have Questions?</h3>
<p>If you have more questions about the operation of the soup kitchen or The Rack, please contact the director Gary Hamiel at (410) 383-8040 or call the church office at (410) 462-4800. Gary is available at the church office Monday &mdash; &amp; Thursday, between the hours of 10:00 a.m.&ndash;2:00 p.m.</p>
";
break;
case ("weddings");
	$title="Weddings";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\weddingsubsub.jpg\"><p>A wedding ceremony is one of the most sacred and cherished services in the Christian tradition.  Your wedding service should reflect this and your unique personalities.  We invite you to host this treasured event in our sanctuary.  Imagine walking down our 50-foot long aisle with your train flowing slowly behind.</p>

<p>You will also have a wedding coordinator who will guide you through each step of the process and ensure your special day unfolds effortlessly.  You have the option of having our pastor preside over your wedding or you may use your own clergy.  You are also invited to use our own world-class staff musicians and our in-home event planner and decorator.</p>

<h3 class=\"subsubmenutitle\">Scheduling a Wedding</h3>

<p>1. Decide if City Temple of Baltimore (Baptist) meets your needs and your budget.  You can review our <a href=\"weddingguidelines.pdf\">Wedding Guidelines</a> book to determine if City Temple is a good venue for you.</p>
<p>2. Schedule an appointment with the City Temple wedding coordinator.  Once you decide you would like to have your wedding at City Temple, you may contact the wedding coordinator, Nadena Holden, at (410) 542-2303 or call the church office, (410) 462-4800 to schedule a time to meet and begin planning your wedding ceremony.</p>

<h3 class=\"subsubmenutitle\">Questions about weddings?</h3>
<p>If you have any questions or need additional information, please contact Nadena Holden at (410) 542-2303 or <a href=\"mailto:church@thecitytemple.org\">contact us on-line</a>.</p>
";
break;
case ("funerals");
	$title="Funerals";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\funeralsubsub.jpg\"><p>We believe that through our Lord and Savior Jesus Christ, we have the victory even over death.  Our goal is to celebrate the lives of our loved ones and their attainment of that great reward.  However, we also understand that planning a funeral service can be a heart-wrenching and painful time.  The pastor, ministers, staff and congregation will rally to you and your family to offer you hope, support and encouragement.  Our funeral coordinators will guide you through this process and remove as much of the burden of planning as possible.</p>

<h3 class=\"subsubmenutitle\">Scheduling a Funeral</h3>

<p>1.  Decide if City Temple of Baltimore (Baptist) meets your needs and your budget.  You can review our <a href=\"funeralhandbook.pdf\">Funeral Handbook</a> to determine if City Temple meets your needs.</p>
<p>2. Schedule and confirm the date of the funeral with the City Temple funeral coordinator.</p>
<p>Once you decide to have funeral services at City Temple, you may contact the funeral coordinators Nadena Holden and Marlene Jones at (410) 542-2303 or call the church office, (410) 462-4800 to schedule the date and plan the service.</p>

<h3 class=\"subsubmenutitle\">Questions about funeral services?</h3>

<p>If you have any questions or need additional information, please contact the Nadena Holden or Marlene Jones at (410) 542-2303 or <a href=\"mailto:church@thecitytemple.org\">contact us on-line</a>.  Grief counseling is also available to anyone who may be in need.  Please <a href=\"mailto:pastor@thecitytemple.org\">send us an e-mail</a> or call the church office at (410) 462-4800 to arrange a time to meet for counseling.</p>
	";
break;
case ("homevisits");
	$title="Hospital &amp; Home Visits";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\homevisitsubsub.jpg\"><p>Prolonged absence from church service due to illness or hospitalization can cause a feeling of disconnect from the fellowship of our church family.  You do not have to endure this seclusion.  Members of the church will gladly brighten your day with a cheerful visit to share communion with you, to pray with you, and deliver news from the church.  Our pastor, ministers, and diaconate regularly visit those who are unable to attend services due to sickness or infirmity.</p>

<h3 class=\"subsubmenutitle\">Scheduling a Home or Hospital Visits</h3>

<p>If you would like to receive communion, please call the church office at (410) 462-4800 or <a href=\"mailto:church@thecitytemple.org\">contact us on-line</a> and have your name placed on our Sick and Shut-In list.  You will be placed in the communion rotation.  For visits, bible study, or simply enjoy the company of members of your congregation, please call the church office or <a href=\"mailto:church@thecitytemple.org\">contact us on-line</a>. Either the pastor or a member of the diaconate ministry will visit with you.</p>
";
break;
case ("counseling");
	$title="Counseling";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\counselingsubsub.jpg\"><p>God can lead you through difficult and confusing times.  Although the world associates stigma with requesting counseling, the Word tells us &ldquo;he who listens to counsel is wise&rdquo; (Proverbs 12:15).  Sage advice or a listening ear may be all we need to conquer life&rsquo;s difficulties.</p>

<p>Our pastor and ministers offer one-on-one confidential counseling for marriage, grief, depression, general angst, etc.  This service is free and available to all members of our church and community.</p>

<h3 class=\"subsubmenutitle\">Scheduling a Counseling Session</h3>

<p>If you would like to receive counseling from the pastor or a minister of our church, please <a href=\"mailto:church@thecitytemple.org\">contact us on-line</a> or call the church office at (410) 462-4800.  Every effort will be made to meet with you at a convenient and immediate time.</p>
";
break;
case ("aidscounseling");
	$title="HIV/AIDS Counseling";
	$h1=$title;
	$lefttext=
"<h3>Get the facts about HIV</h3>
<hr>
<li>Every 9.5 minutes (on average), someone in the United States is infected with HIV</li>
<li>More than 1 milliion people in the United STates are living with HIV</li>
<li>Of those 1 million, 1 out of 5 do not know they are infected</li>
<li>Despite new therapies, people with HIV still develop aids</li>
<li>Over 1 million people in the United STates have been diagnosed with AIDS</li>
<li>More than 14,000 people with AIDS still die each year in the United States</li> 
";
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\hivcounseling.jpg\"><p>As a part of our commitment to the community, City Temple&rsquo;s AIDS Ministry now offers counseling and testing to the public.  Testing and education are vital to the survival of our communities, and knowing your status helps you to protect yourself and others.  In addition, counseling can offer peace and teach acceptance and self-esteem.</p>

<h3 class=\"subsubmenutitle\">Scheduling a Counseling Session</h3>

If you would like to receive HIV counseling, please contact ministry group leaders Hugh Jackson, Patricia Ward, or Isabella Dowery at (410) 383-8040 or you can call the church office at (410) 462-4800.  If you leave a message, your phone call will be returned promptly and a time for your counseling session and/or testing will be made.";
break;
case ("security");
	$title="Security Ministry";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\\securitysubsub.jpg\"><p>The City Temple Security Ministry has been serving since September 2008.  The goal of the security ministry is to give our members and visitors a sense of comfort as they enter and exit our church home.  The services provided by the Security Ministry include: watching and reporting any suspicious activities around the church grounds, assisting the trustees during the offering, and maintaining a safe environment around the church for its members and visitors.</p>

<h3 class=\"subsubmenutitle\">Have Questions?</h3>
<p>If you have any questions regarding the operation of the Security Ministry or if you would like to report suspicious activity, please contact the church office at (410) 462-4800.</p>
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
		<?php echo $lefttext ?>
	</div>
	<div class="rightside">
		<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; <a class="titlelink" href="submenu.php?p=outreach">Outreach Center</a> &gt;&gt;  <?php echo $h1 ?></div>
		<h1><?php echo $h1 ?></h1>
		<hr>
		<?php echo $righttext ?>
	</div>
</div>
</div>
<?include "footer.php"?>
</body>
</html>