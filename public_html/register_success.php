<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"https://www.w3.org/TR/html4/strict.dtd">
<?php
include_once '../private/db_connect.php';
include_once '../private/functions.php';

sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';
}
?>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="default.css">
        <meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" >
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" >
        <meta name="generator" content="Notepad++" >
        <META NAME="robots" CONTENT="noindex">
        <title>Secure Login: Registration Success</title>
    </head>
    <body>
        <?php include "bannerandmenu.php"?>
        <div id="container">
            <div id="contentbox" class="bookman">
        <div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; Login Page</div>    <h1>Registration successful!</h1>
        <p>You can now go back to the <a href="login.php">login page</a> and log in.</p>
            </div>

        </div>
        <? include "footer.php" ?>
    </body>
</html>
