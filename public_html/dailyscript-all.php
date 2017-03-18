<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$weekbegfull = strtotime("tomorrow", strtotime("last saturday"));
$weekbeg = date('z', $weekbegfull);

include "dayscriptset.php";
include "weekPassageSet.php";

$title="Daily Devotional";
$h1=$title;
$rightText = "";
$daysCounter = 0;
$currentYear = date("Y");

for ($i = $weekbeg; getVerse(date($i)) or $daysCounter < 35; $i++) {
    $isLeapYear = date('L', mktime(0, 0, 0, 1, 1, $currentYear));  
    $currentDate = DateTime::createFromFormat('z-Y', $i-$isLeapYear . '-' . $currentYear);
    $rightText.= "<h2 class=\"date\">". $i;
    $rightText.= " (" . $currentDate->format('n/j/Y') . ")-";
    $rightText.= "<span class=\"verse-ddev\">" . getverse(date($i)) . "</span></h2>";
    // $rightText.= "<div class=\"scripture\">" . getScripture(0, date($i)) . "</div>";
    
    // if last day of the week
    if (date('w', $currentDate->format('U')) == 6) {
        $rightText.= "<h2 class=\"date\">Weekly Passage</h2>" . getPassage(date($i-6));
        $rightText.= "<hr>";
    }

    // if last day of the year    
    if($i == 364 + $isLeapYear) {
        // restarting counter to beginning of the year, out of days
        $i = -1;
        // advancing years to the next
        $currentYear++;
    }
    $daysCounter++;
}

    $rightText.= "
    <hr class=\"beforetips\">
    <img src=\"images/lightbulb.jpg\" alt=\"Lightbulb\"><span class=\"greentitle\">Tips on spending devotional time with God</span>
    <p>There are many methods to quieting ourselves to spend devotional time with God.  Below are several suggestions to approaching spending time with God.</p>
    <ol class=\"tipslist\">
    <li>Set a time.  We&rsquo;ve all heard it said that it takes between 21 days to three weeks for something to become a habit.  Set aside a time for devotions that will allow you to be consistent most days during your week.  In the bible, most Christians spent morning hours with God&mdash;meeting God before meeting men.  However, if the morning isn&rsquo;t a convenient time, choose a time of day that will allow you to be consistent.</li>
    <li>Locate an area free of distraction.  When Jesus spent time with God, He usually went off by Himself to spend quiet, alone time with God.  We should follow His example.  When we sit down to meditate on the word of God, we should do this without interruptions from the television and phone.</li>
    <li>Read God&rsquo;s word.  Reading God&rsquo;s word during devotional time is beneficial for several reasons.  Firstly, it allows us a subject upon which we can meditate; secondly, we are commanded in the bible to &ldquo;put on the full armor of God.&rdquo;  That armor is the word of God.  Thirdly, the reply we are waiting on from God can come in the form of scripture.</li>
    </ol>";

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<? include "stylelogic.php" ?>
<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, grady, yeargin" >
<meta name="description" content="City Temple Baptist Church Webpage" >
<meta name="revised" content="Earl Jones, <?php echo date("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="generator" content="Notepad++" >
<title>City Temple of Baltimore - <? echo $title ?></title>
</head>

<body>
<div id="container">
    <? include "bannerandmenu.php" ?>
<div class="bothsides">
    <div class="leftside">
    <p><span class="scripturereading">Scripture Reading</span><br><span class="fortheweek">for the week</span></p>
    <hr>
    <div class="linklist">
        <p>Sunday<br><?php echo getverse($weekbeg+0)?></p>
        <p>Monday<br><?php echo getverse($weekbeg+1)?></p>
        <p>Tuesday<br><?php echo getverse($weekbeg+2)?></p>
        <p>Wednesday<br><?php echo getverse($weekbeg+3)?></p>
        <p>Thursday<br><?php echo getverse($weekbeg+4)?></p>
        <p>Friday<br><?php echo getverse($weekbeg+5)?></p>
        <p>Saturday<br><?php echo getverse($weekbeg+6)?></p>
    </div>
    </div>
    <div class="rightside">
        <div class="navchain"><a href="index.php">Home</a> &gt;&gt; <a href="submenu.php?p=spiritual">Spiritual Meditations</a> &gt;&gt;  <?php echo $h1 ?></div>
        <h1><?php echo $h1 ?></h1>
        <hr>
        <?php echo $rightText; ?>
        First day of year is <?php echo((7-date("w", strtotime(date('y') . '-01' . '-01')))%7)?>
    </div>
</div>
<?include "footer.php"?>
</div>
</body>
</html>
