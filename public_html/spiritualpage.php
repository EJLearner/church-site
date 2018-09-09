<?php

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$page=$_GET["p"];

$weekbegfull = strtotime("tomorrow", strtotime("last saturday"));
$weekbeg = date('z', $weekbegfull);
if ($_SERVER['HTTP_HOST']=="ctemple.com") {
    $weekbeg=205;
    $weekbegfull=strtotime("+0 days", $weekbegfull);
}


include "dayscriptset.php";
include "weekPassageSet.php";

switch ($page) {
    case ("daily"):
        $title="Daily Devotional";
        $h1=$title;
        $righttext="
        <img style=\"float:left\" src=\"images/devotionalpage.jpg\" alt=\"Sunset over Mountains\">
        <h2 class=\"date\">". date("F j") . "<br>" . "<span class=\"verse-ddev\">" . getverse(date('z')) . "</span></h2>
        <div class=\"scripture\">" . getScripture(0, date('z')) . "</div>
        <hr class=\"beforetips\">
        <img src=\"images/lightbulb.jpg\" alt=\"Lightbulb\"><span class=\"greentitle\">Tips on spending devotional time with God</span>
        <p>There are many methods to quieting ourselves to spend devotional time with God.  Below are several suggestions to approaching spending time with God.</p>
        <ol class=\"tipslist\">
        <li>Set a time.  We&rsquo;ve all heard it said that it takes between 21 days to three weeks for something to become a habit.  Set aside a time for devotions that will allow you to be consistent most days during your week.  In the bible, most Christians spent morning hours with God&mdash;meeting God before meeting men.  However, if the morning isn&rsquo;t a convenient time, choose a time of day that will allow you to be consistent.</li>
        <li>Locate an area free of distraction.  When Jesus spent time with God, He usually went off by Himself to spend quiet, alone time with God.  We should follow His example.  When we sit down to meditate on the word of God, we should do this without interruptions from the television and phone.</li>
        <li>Read God&rsquo;s word.  Reading God&rsquo;s word during devotional time is beneficial for several reasons.  Firstly, it allows us a subject upon which we can meditate; secondly, we are commanded in the bible to &ldquo;put on the full armor of God.&rdquo;  That armor is the word of God.  Thirdly, the reply we are waiting on from God can come in the form of scripture.</li>
        </ol>";
        break;
    case ("weekly"):
        $title="Weekly Meditation";
        $h1=$title;

        $righttext="<h2 class=\"date\">" . date('F j', $weekbegfull) . " &ndash; " . date('F j', strtotime("+6 days", $weekbegfull)) . "</h2>";
        $righttext.=getPassage($weekbeg);
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<link rel="stylesheet" type="text/css" href="default.css">
<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, grady, yeargin" >
<meta name="description" content="City Temple Baptist Church Webpage" >
<meta name="revised" content="Earl Jones, <?php echo date("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="generator" content="Notepad++" >
<title>City Temple of Baltimore - <? echo $title ?></title>
</head>

<body>
    <? include "bannerandmenu.php" ?>
<div id="container">
<div class="bothsides">
    <div class="leftside">
    <p><span class="scripturereading">Scripture Reading</span><br><span class="fortheweek">for the week</span></p>
    <hr>
    <div class="linklist">
        <p>Sunday<br><?php echo getverse($weekbeg+0)?></p>
        <p>Monday<br><?php echo getverse(date('z', strtotime("+1 day", $weekbegfull)))?></p>
        <p>Tuesday<br><?php echo getverse(date('z', strtotime("+2 day", $weekbegfull)))?></p>
        <p>Wednesday<br><?php echo getverse(date('z', strtotime("+3 day", $weekbegfull)))?></p>
        <p>Thursday<br><?php echo getverse(date('z', strtotime("+4 day", $weekbegfull)))?></p>
        <p>Friday<br><?php echo getverse(date('z', strtotime("+5 day", $weekbegfull)))?></p>
        <p>Saturday<br><?php echo getverse(date('z', strtotime("+6 day", $weekbegfull)))?></p>

    </div>
    </div>
    <div class="rightside">
        <div class="navchain"><a href="index.php">Home</a> &gt;&gt; <a href="submenu.php?p=spiritual">Spiritual Meditations</a> &gt;&gt;  <?php echo $h1 ?></div>
        <h1><?php echo $h1 ?></h1>
        <hr>
        <?php echo $righttext; ?>
    </div>
</div>
</div>
<?include "footer.php"?>
</body>
</html>
