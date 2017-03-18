<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
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
		<title>City Temple of Baltimore - Login</title> 
		<script type="text/JavaScript" src="js/sha512.js"></script> 
        <script type="text/JavaScript" src="js/forms.js"></script> 
    </head>
    <body>
		<?php include "bannerandmenu.php"?>
		<div id="container">
			<div id="contentbox" class="bookman">
		<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; Login Page</div>
		<?php
        if (isset($_GET['error'])) {
            echo '<p class="error">Error Logging In!</p>';
        }
        ?> 
        <form action="../private/process_login.php" method="post" name="login_form">                      
            Email: <input type="text" name="email" />
            Password: <input type="password" 
                             name="password" 
                             id="password"/>
            <input type="button" 
                   value="Login" 
                   onclick="formhash(this.form, this.form.password);" /> 
        </form>
        <p>This area is for ministry leaders only. If you need a login, please contact the City Temple Webmaster</a></p>
		
	</div>
	
</div>
<? include "footer.php" ?>
		</body>
</html>