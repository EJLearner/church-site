<?php
include "../private/confidential.php";

function clean_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
$valid = 1;

$errors=array();
$data=array();

$ideatype=$ideadesc=$name=$email=$phone="";

$ideatype=clean_input($_POST["ideatype"]);
$ideadesc=clean_input($_POST["ideadesc"]);
$name=clean_input($_POST["name"]);
$email=clean_input($_POST["email"]);
$phone=clean_input($_POST["phone"]);

if ($valid) {
        $to=getIdeaFormAddress();
        $subject= "Someone told us what they think";
        $message="Submitted information is below:\r\n\r\n";
        $message .="Idea type is " . $ideatype . "\r\n";
        $message .="Description:" . $ideadesc . "\r\n";
        $message .="Phone:" . $phone . "\r\n";
        $message .="Email:" . $email . "\r\n";
        $message .="Name:" . $name . "\r\n";
        $message .="Submit Date: " . date("F j, Y, g:i a") . "\r\n";

        $from = "webmaster@thecitytemple.org";
        $headers = "From:" . $from;
        mail($to, $subject, $message, $headers);

        $data['success'] = true;
        $data['message'] = 'Success!';
}

header('Location: christianedu.php?p=opinionsent');
