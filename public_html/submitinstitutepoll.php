<?php
setcookie("InstituteSurveyTaken", "SurveyTaken",time()+(86400*90),"/");
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past


$fh1=fopen("../survdata/enjoyed.txt",'a') or die("Can't open file");
fwrite($fh1,$_REQUEST['enjoyment'] . "\n");
fclose($fh1);

$fh2=fopen("../survdata/expectations.txt",'a') or die("Can't open file");
fwrite($fh2,$_REQUEST['expectations'] . "\n");
fclose($fh2);

$fh3=fopen("../survdata/attend.txt",'a') or die("Can't open file");
fwrite($fh3,$_REQUEST['attend'] . "\n");
fclose($fh3);

$fh4=fopen("../survdata/invite.txt",'a') or die("Can't open file");
fwrite($fh4,$_REQUEST['invite'] . "\n");
fclose($fh4);

header ("location:/christianedu.php?");

