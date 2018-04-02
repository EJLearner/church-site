<?php

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
$page=$_GET["p"];
if (empty($page))
$page="about";
switch ($page)
{
case ("about");
	$title="About Us";
	$submenh1=$title;
	$submentitlepic="aboutus.jpg";
	$submentext="<p>City Temple's goal from inception has been to open its doors to the sorrowful, serve meals to the hungry, provide clothing for the needy, shelter the homeless, and visit the hopeless in jails and hospitals.  We place a strong emphasis on worship, study, soul winning, tithing, and giving service to those in need.</p>";
	$submentitlepicalt="Reverend and Church Members";
break;
case "biblestudy";
	$title="Bible Study Center";
	$submenh1=$title;
	$submentitlepic="biblestudycenter.jpg";
	$submentitlepicalt="Woman Reading Bible";
	break;
case "worship";
	$title="Worship";
	$submenh1=$title;
	$submentitlepic="worship.jpg";
	$submentitlepicalt="Church Member with Hands Raised";
	$submentext=
	"Submenu text is below";
	break;
case "spiritual";
	$title="Spiritual Meditations";
	$submenh1=$title;
	$submentitlepic="spiritualmeditations.jpg";
	$submentitlepicalt="Church member reading bible";
	$submentext=
	"<p>As with any relationship, in order to cultivate and nurture a relationship with God, we must spend time.  We spend time with God when we read His word and meditate on it while listening for the still, quiet voice.  Join us in participating in our daily devotional and weekly meditations as we continue to strengthen our relationship with God through our savior Jesus Christ.</p>";
	break;
case "outreach";
	$title="Outreach Center";
	$submenh1=$title;
	$submentitlepic="needhelp.jpg";
	$submentitlepicalt="Child Being Fed";
	$submentext=
	"<p>City Temple was designed to be a sanctuary; a place to offer comfort and help to any in need.  Through our Outreach Center, we are allowed to serve as Christ served.  We encourage all to take advantage of the programs listed below and to let us know any additional ways we can seek to serve you.</p>";
	break;
case "giving";
	$title="Giving On-Line";
	$submenh1=$title;
	$submentitlepic="givingsub.jpg";
	$submentitlepicalt="Offering Envelope";
	$submentext=
	"God has entrusted us with many valuable things and it is our commission to be a blessing to others.  We pledge to use all gifts responsibly and keep an accurate account of all gifts given to us.";
break;
case "leadersstaff";
	$title="Leaders and Staff";
	$submenh1=$title;
	$submentitlepic="none";
	$submentitlepicalt="Leaders and Staff";
	$submentext = "";
	break;
}

function addmenuitem($linkadd,$imgname,$alternate,$title,$desc)
{
	?>
	<div class="menuitem">
			<?php if ($linkadd=="")
			{ ?>
			<img src="images/<?php echo $imgname?>" alt="<?php echo $alternate?>">
			<h3><?php echo $title?></h3>
			<? }
			else
			{ ?>
			<a href="<?php echo $linkadd ?>"><img src="images/<?php echo $imgname?>" alt="<?php echo $alternate?>"></a>
			<h3><a href="<?php echo $linkadd ?>"><?php echo $title?></a></h3>
			<? } ?>
			<div class="menuitemtext"><?php echo $desc ?></div>
	</div>
<?
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<link rel="stylesheet" type="text/css" href="default.css">
<meta name="verify-v1" content="3wCodnfg43veeFCH3Vs1Fr8lMJCUKtJ5myjNZ35+qeo=">
<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, grady, yeargin" >
<meta name="description" content="City Temple Baptist Church Webpage" >
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1" >
<meta name="generator" content="Notepad++" >
<title>City Temple - <?php echo $title ?></title>
</head>
<?php include "bannerandmenu.php" ?>

<div id="container">
	<div class="submenucontent">
	<div class="navchain"><A class="titlelink" href="index.php">Home</A> &gt;&gt;  <?php
	if ($page=="leadersstaff")
	{
		echo "<a href=\"submenu.php?p=about\">About Us</a> &gt;&gt; ";
	}
	echo $title; ?>	</div>
<?php if ($page!="worship")
{
	if ($submentitlepic !="none")
	{?>
	<img class="submenupicloc" src="images/<? echo $submentitlepic ?>" alt="<? echo $submentitlepicalt ?>">
	<? } ?>
	<h1><?php echo $submenh1 ?></h1>
	<hr>
	<?php echo $submentext ?>
	<div style="clear:both"></div>
	<?php
}
	switch ($page)
	{
	case "about":
		addmenuitem("aboutpage.php?p=directions","location.jpg","Map Picture","Location","Address, map, office hours, and contact information");
		addmenuitem("submenu.php?p=leadersstaff","leaders.jpg","Church Leaders","Leaders &amp Staff","Bios and contact information on the city Temple Leaders and staff members");
		addmenuitem("ministries.php","ministries.jpg","Dancers Performing","Ministries","A list of our various ministries and how to connect with a ministry");
		addmenuitem("aboutpage.php?p=beliefs","ourbeliefs.jpg","Scripture Page","Our Beliefs","What we believe and how we practice our faith");
		addmenuitem("aboutpage.php?p=membership","membershipthumb.jpg","Standing Church Members","Membership","Learn about how to join this body of Christ");
		addmenuitem("aboutpage.php?p=history","history.jpg","Rev. Payne Picture","History","A brief overview of how we started");
		addmenuitem("aboutpage.php?p=organ","organthumb.gif","Organ Picture","Organ History","Learn about the \"miracle organ\"");

	break;
	case "biblestudy":
		addmenuitem("index.php","dailydev.jpg","Lake at Sunset","Daily Devotions","Scripture passages to meditate on for each day of the week");
		addmenuitem("index.php","weeklymed.jpg","Thinking Man","Weekly Meditations","Scriptually-based  ponderings for each week");
		addmenuitem("index.php","lessons.jpg","Notebook and Pen","Lessons","Follow the bible study lessons");
	break;
	case "worship":
?>
	<h1>Worship</h1>
	<hr>
<img style="float:right; padding:1em; border:none;" src="images/worship.jpg" alt="Church Member with Hands Raised">
	<p>Here at The City Temple of Baltimore (Baptist), we follow an Order of Worship.  While our intent is to remain consistent with this Order of Worship, the experience can change in the blink of an eye based on a testimony, a musical selection, a prayer or whatever moves the &ldquo;spirit&rdquo; within us.  We are definitely a church family and this is revealed during our worship service by our care and concern for one another.</p>
<p>Our Worship Service officially begins at 9:00 am on Sunday morning and is a combination of pastoral ministry, musical ministry including dance and congregational ministry.  The sermon is usually the focal point, surrounded by music, a minimum of five prayers and a moment of complete fellowship.</p>
<p>Our Hospitality Ministry is the official welcoming and greeting committee of the church.  As you enter the front doors of the building, members from this ministry are present to greet members and visitors.  Visitors are invited to sign the Visitors&rsquo; Book, located just outside the sanctuary.</p>
<p>After entering the sanctuary, our Ushers Ministry is immediately available.  Our ushers are the doorkeepers of the sanctuary and are responsible for continuing receiving members, assisting individuals to their seats, and assisting with the offering.  Our ushers distribute the Sunday Bulletin (as they are available) which consists of the Order of Service as well as church announcements and other items important to the congregation.</p>
<p>Our Nurses Ministry provides emergency health assistance during the worship service, should the need arise.</p>
<p style="padding-bottom:2em;">In general, we anticipate prelude, prayer, offering, sermon, invitation to Christian Discipleship and postlude at each worship service.  All are welcome.</p>	<div style="clear:both"></div>
<?
	break;
	case "outreach":
		addmenuitem("outreachpage.php?p=financialassist","finasst.jpg","Change Purse","Financial Assistance","Receive short-term help for food, bills, and other financial emergencies");
		addmenuitem("outreachpage.php?p=soupkitchen","soupkitchen.jpg","Soup Kitchen Line","Soup Kitchen","Nourish your body and soul with delicious food and loving fellowship");
		addmenuitem("outreachpage.php?p=weddings","weddings.jpg","Wedding Day Couple","Weddings","Coordinate your wedding at City Temple");
		addmenuitem("outreachpage.php?p=funerals","funerals.jpg","Cross in Graveyard","Funerals","Coordinate a funeral at City Temple");
		addmenuitem("outreachpage.php?p=homevisits","homevisits.jpg","Home Communion","Hospital &amp; Home Visits","Request a visit from our pastor and diaconate members");
		addmenuitem("outreachpage.php?p=counseling","counseling.jpg","Reverend Speaking to Member","Counseling","Receive one-on-one counseling from the pastor and ministers");
		addmenuitem("outreachpage.php?p=aidscounseling","hivcounsel.jpg","Reverend Going over HIV Pamphlet","HIV/AIDS Counseling","Receive one-on-one counseling from a certified HIV/AIDS counselor and advocate");
		addmenuitem("mailto:prayerrequest@thecitytemple.org?subject=Prayer Request","prayerrequests.jpg","Woman Praying","Prayer Requests","Share your requests with us so we can pray with you and for you");
		addmenuitem("outreachpage.php?p=security","security.jpg","Security Ministry Group Shot","Security Ministry","The outpost of the love of Christ");
	break;
	case "giving":
		addmenuitem("tithing.php","tithing.jpg","Offering Plate","On-line Tithing","Give Tithes On-line");
		addmenuitem("donate.php","makedonation.jpg","Donation Envelope","Make A Donation","Make a donation to City Temple of Baltimore (Baptist) Church");
	break;
	case "spiritual":
		addmenuitem("spiritualpage.php?p=daily","devotionalthumb.jpg","Meditating Man","Daily Devotional","");
		addmenuitem("spiritualpage.php?p=weekly","meditationsthumb.jpg","Lake Sunset","Weekly Meditation","");
	break;
	case "leadersstaff":
		addmenuitem("bio.php?p=yeargin","yearginthumb.jpg","Reverend Yeargin Picture","Rev. Dr. Grady A. Yeargin, Jr.","Pastor");
		addmenuitem("bio.php?p=pyeargin","pyearginthumb.jpg","Pat Yeargin Picture","Min. Patricia Yeargin","First Lady");
		addmenuitem("bio.php?p=hickman","hickmanthumb.jpg","Hickman Picture","Rev. Debra Hickman","Assistant to the Pastor");
		addmenuitem("bio.php?p=hamiel","hamielthumb.jpg","Min. Michelle Hamiel Picture","Min. Michelle Hamiel","Pulpit Associate and Youth Co-Director");
		addmenuitem("bio.php?p=curley","curleythumb.jpg","Min. Tyra Curley Picture","Min. Tyra Curley","Pulpit Associate");
		addmenuitem("bio.php?p=dean","deanthumb.jpg","Dr. Kenneth Dean, Jr. Picture","Dr. Kenneth Dean, Jr.","Minister of Music");
		addmenuitem("bio.php?p=arnette","arnettethumb.jpg","Charles Arnette Picture","Charles Arnette","Assistant Director of Music");
		addmenuitem("bio.php?p=jenkins","jenkinsthumb.jpg","Min. Marshell Jenkins Picture","Min. Marshell Jenkins","Minister of Movement");
		addmenuitem("bio.php?p=ford","lori-thumb.png","Min. Lori Ford Picture","Min. Lori Ford","Pulpit Associate and Minister of Movement");

		addmenuitem("bio.php?p=friend","friendthumb.jpg","Marcia Friend Picture","Marcia Friend","Church Secretary");
		addmenuitem("","davisthumb.jpg","Lanette Davis Picture","Lanette Davis","Treasurer");
		addmenuitem("","nophotothumb.jpg","Charles Payne Picture","Charles Payne","Assistant Treasurer");
		addmenuitem("","thompsonthumb.jpg","Joyce Baylor-Thompson Picture","Joyce Baylor-Thompson","Trustee Board Chairperson");
		addmenuitem("bio.php?p=allen","allenthumb.jpg","Delores Allen Picture","Delores Allen","Financial Secretary");
		addmenuitem("bio.php?p=smith","smiththumb.jpg","Racquel Smith Picture","Racquel Smith","Diaconate Chairperson");
		addmenuitem("","trayhamthumb.jpg","Lily Trayham Picture","Lily Trayham","Diaconate Chairperson");
		addmenuitem("","ghamielthumb.jpg","Gary Hamiel Picture","Gary Hamiel","Outreach Director");
		addmenuitem("bio.php?p=alexander","lindathumb.jpg","Linda Alexander Picture","Linda Alexander", "Sunday School Superintendent");
		addmenuitem("","hamiltonthumb.jpg","Jacqueline Hamilton Picture","Jacqueline Hamilton","B.U.I.L.D. Representative");
		addmenuitem("bio.php?p=ward","wardthumb.jpg","Patricia Ward Picture","Patricia Ward","AIDS Ministry Co-chair");
	break;
	/*addmenuitem("index.php","welcomenew2.jpg","Alternate","Lessons","ddddddd");
		*/
	}
	?>
	<div style="clear:both"></div>
	</div><!--endsubmenucontent-->


</div>
<?php include "footer.php"; ?>
</body>
</html>