<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"https://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<link rel="stylesheet" type="text/css" href="default.css">

<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, marketday, frozen, food, fundraiser, desert, dinner, breakfast">
<meta name="description" content="City Temple Baptist Church - MarketDay">
<meta name="generator" content="notepad++" >
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>City Temple Baptist Church - MarketDay Fundraiser</title>
</head>
<?
$orderdate="2011-09-12";
$pickup="2011-09-17";
?>
<body>
<?php include "bannerandmenu.php"?>
	<div id="container">
	<div class="bothsides">
	<div class="rightside">
		<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; MarketDay</div>

		<h1 style="text-align:center;">MarketDay Fundraiser</h1>
		<p>Discover a great new way to feed your family while helping us raise funds!</p>
		<p>Market Day, the nation's original Food Fundraising Cooperative, offers over 150 high quality foods at competitive prices every month. With delicoiusly prepared and packaged foods such as Appetizers, Poultry, Pork, Beef, Seafood, Breakfast, Side Dishes, Desserts, Snacks, Family Meals, Beverages and Market Day Gourmet, you can't go wrong!</p>
		<p>Our long term goals are to raise monies needed to help our Youth Ministry and church as a whole.</p>

With such conveniently packaged items, it's deliciously easy to help:
<ol>
<li><a href="https://www.marketday.com/">SHOP</a> the monthly order guide.</li>
<li><a href="https://www.marketday.com/">ORDER at MarketDay.com</a> OR return the EZ order form to our Market Day Chairpersons at City Temple <?if (strtotime($orderdate) >= date(U)){?>by <span class="md-emphasize"><? echo date('l, F jS',strtotime($orderdate));?></span><?}?>.<br>
Use account number 28124 for online City Temple Baptist Church orders.<br>
Market Day Chairpersons are Ericka Richardson and Crystal Williams.</li>
<li><a href="aboutpage.php?p=directions">PICK UP</a> your order <?if (strtotime($pickup) >= date(U)){?>on <span class="md-emphasize"><?echo date('l, F jS',strtotime($pickup));?></span><?}?> at City Temple Baptist Church.</li>
</ol>
Thank you for your support!
	</div>
	</div>

</div>
<?php include "footer.php"?>
</body>
</html>
