<?php
include "../private/confidential.php";

function addDataToMessage($message, $label, $key, $isBool = false)
{
    $data = isset($_POST[$key]) ? $_POST[$key] : "";

    if ($isBool) {
        return $data === "true" ? $message . $label . "\r\n" : $message;
    }

    // cleaning input
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    if ($data) {
        return $message . $label . ": " . $data . "\r\n";
    } else {
        return $message;
    }
}

$subject= "Someone contacted us!";
$message="Submitted message is below:\r\n\r\n";
$message = addDataToMessage($message, "Name",'name');
$message = addDataToMessage($message, "Email",'emailAddress');
$message = addDataToMessage($message, "Message",'message');
$message .="Submit Date: " . date("F j, Y, g:i a") . "\r\n";

$to=getGedFormAddresses();
$from = getFromAddress();
$headers = "From:" . $from;
$mailSent = mail(implode(', ', $to), $subject, $message, $headers);

$response_array=array();
$response_array['success'] = $mailSent;
$response_array['status'] = 'Success!';

header('Content-type: application/json');
echo json_encode($response_array);
