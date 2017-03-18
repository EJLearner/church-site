<?php
include_once '../private/db_connect.php';
include_once '../private/functions.php';
 
sec_session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="default.css">
		<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" > 
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
		<meta name="generator" content="Notepad++" > 
		<META NAME="robots" CONTENT="noindex">
        <title>Secure Login: Protected Page</title>
    </head>
   <body>
		<?php include "bannerandmenu.php"?>
		<div id="container">
			<div id="contentbox" class="bookman">
		<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; Secured Page</div>
        <?php if (login_check($mysqli) == true) : ?>
            <p>Welcome <?php echo htmlentities($_SESSION['username']); ?>!</p>
            <p>
                This is an example protected page.  To access this page, users
                must be logged in.  At some stage, we'll also check the role of
                the user, so pages will be able to determine the type of user
                authorised to access the page.
            </p>
			
			<p>If you are done, please <a href="includes/logout.php">log out</a>.</p>
			
            <p>Return to <a href="login.php">login page</a></p>
        <?php else : ?>
            <p>
                <span class="error">You are not authorized to access this page.</span> Please <a href="login.php">login</a>.
            </p>
        <?php endif; ?>
		</div>
	
		</div>
		<? include "footer.php" ?>
	</body>
</html>