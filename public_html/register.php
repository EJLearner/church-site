<?php
include_once '../private/register.inc.php';
include_once '../private/functions.php';
?>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="default.css">
		<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" > 
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
		<meta name="generator" content="Notepad++" > 
		<META NAME="robots" CONTENT="noindex">
		<title>City Temple of Baltimore - Event Request User Registration Page</title> 
		<script type="text/JavaScript" src="js/sha512.js"></script> 
        <script type="text/JavaScript" src="js/forms.js"></script> 
    </head>
    <body>
		<?php include "bannerandmenu.php"?>
		<div id="container">
			<div id="contentbox" class="bookman">
		<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; User Registration Page</div>
         <?php
        if (!empty($error_msg)) {
            echo $error_msg;
        }
        ?>
        <ul>
            <li>Usernames may contain only digits, upper and lower case letters and underscores</li>
            <li>Passwords must be at least 6 characters long</li>
            <li>Passwords must contain
                <ul>
                    <li>At least one upper case letter (A..Z)</li>
                    <li>At least one lower case letter (a..z)</li>
                    <li>At least one number (0..9)</li>
                </ul>
            </li>
        </ul>
        <form action="<?php echo esc_url($_SERVER['PHP_SELF']); ?>" 
                method="post" 
                name="registration_form">
            Username: <input type='text' 
                name='username' 
                id='username' /><br>
            Email: <input type="text" name="email" id="email" /><br>
            Password: <input type="password"
                             name="password" 
                             id="password"/><br>
            Confirm password: <input type="password" 
                                     name="confirmpwd" 
                                     id="confirmpwd" /><br>
            <input type="button" 
                   value="Register" 
                   onclick="return regformhash(this.form,
                                   this.form.username,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd);" /> 
        </form>
        <p>Return to the <a href="login.php">login page</a>.</p>
  </div>
	
</div>
<? include "footer.php" ?>
		</body>
</html>