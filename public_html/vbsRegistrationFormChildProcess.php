<?php
include "../private/confidential.php";

function addDataToMessage($message, $label, $key, $isBool = false)
{
    $data = isset($_POST[$key]) ? $_POST[$key] : "";

    if ($isBool) {
        return $data === "true" ? $message . $label . "\r\n" : $message;
    }

    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    if ($data) {
        return $message . $label . ": " . $data . "\r\n";
    } else {
        return $message;
    }
}

$subject= "Someone registered a child for Children's Church!";
$message="Submitted information is below:\r\n\r\n";
$message = addDataToMessage($message, "Email", "email");
$message = addDataToMessage($message, "Child Name", "childName");
$message = addDataToMessage($message, "Child Dob", "childDob");
$message = addDataToMessage($message, "Child Age", "childAge");
$message = addDataToMessage($message, "Parent Email", "parentEmail");
$message = addDataToMessage($message, "Parent Name", "parentName");
$message = addDataToMessage($message, "Parent Phone", "parentPhone");
$message = addDataToMessage($message, "Address Line 1", "address1");
$message = addDataToMessage($message, "Address Line 2", "address2");
$message = addDataToMessage($message, "State", "state");
$message = addDataToMessage($message, "Zip", "zip");
$message = addDataToMessage($message, "Subscribe", "subscribe", true);
$message = addDataToMessage($message, "Known Allergies", "knownAllergies");
$message .= "Submit Date: " . date("F j, Y, g:i a") . "\r\n";

$to=getVbsRegistrationToAddresses();
$from = getFromAddress();
$headers = "From: " . $from;
$mailSent = mail(implode(', ', $to), $subject, $message, $headers);


$response_array=array();
$response_array['success'] = $mailSent;
$response_array['status'] = 'Success!';

header('Content-type: application/json');
echo json_encode($response_array);
