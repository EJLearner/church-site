<?php
include "../private/confidential.php";

function get_and_clean_input($key)
{
    $data = isset($_POST[$key]) ? $_POST[$key] : "";
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;
}

$subject= "Someone registered a child for Children's Church!";
$message="Submitted information is below:\r\n\r\n";
$message .= "Email: " . get_and_clean_input("email") . "\r\n";
$message .= "Child Name: " . get_and_clean_input("childName") . "\r\n";
$message .= "Child Dob: " . get_and_clean_input("childDob") . "\r\n";
$message .= "Child Age: " . get_and_clean_input("childAge") . "\r\n";
$message .= "Parent Email: " . get_and_clean_input("parentEmail") . "\r\n";
$message .= "Parent Name: " . get_and_clean_input("parentName") . "\r\n";
$message .= "Parent Phone: " . get_and_clean_input("parentPhone") . "\r\n";
$message .= "Address Line 1: " . get_and_clean_input("address1") . "\r\n";
$message .= "Address Line 2: " . get_and_clean_input("address2") . "\r\n";
$message .= "State: " . get_and_clean_input("state") . "\r\n";
$message .= "Zip: " . get_and_clean_input("zip") . "\r\n";
$message .= "Subscribe: " . get_and_clean_input("subscribe") . "\r\n";
$message .= "Known Allergies: " . get_and_clean_input("knownAllergies") . "\r\n";
$message .= "Submit Date: " . date("F j, Y, g:i a") . "\r\n";

$to=getCcRegistrationToAddress();
$from = getCcRegistrationFromAddress();
$headers = "From: " . $from;
$mailSent = mail($to, $subject, $message, $headers);


$response_array=array();
$response_array['success'] = $mailSent;
$response_array['status'] = 'Success!';

header('Content-type: application/json');
echo json_encode($response_array);
