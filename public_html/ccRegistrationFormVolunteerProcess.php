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

$subject= "Someone registered to volunteer for Children's Church!";
$message="Submitted information is below:\r\n\r\n";
$message .= "Email: " . get_and_clean_input("email") . "\r\n";
$message .= "Name: " . get_and_clean_input("name") . "\r\n";
$message .= "Dob: " . get_and_clean_input("dob") . "\r\n";
$message .= "Address Line 1: " . get_and_clean_input("address1") . "\r\n";
$message .= "Address Line 2: " . get_and_clean_input("address2") . "\r\n";
$message .= "City: " . get_and_clean_input("city") . "\r\n";
$message .= "State: " . get_and_clean_input("state") . "\r\n";
$message .= "Zip: " . get_and_clean_input("zip") . "\r\n";
$message .= "Mobile: " . get_and_clean_input("mobile") . "\r\n";
$message .= "Home: " . get_and_clean_input("home") . "\r\n";
$message .= "Interested in - Teacher: " . get_and_clean_input("teacher") . "\r\n";
$message .= "Interested in - Admin: " . get_and_clean_input("admin") . "\r\n";
$message .= "Interested in - Assistant Mentor: " . get_and_clean_input("assistantMentor") . "\r\n";
$message .= "Interested in - Kitchen: " . get_and_clean_input("kitchen") . "\r\n";
$message .= "Volunteered in Past for - SundaySchool: " . get_and_clean_input("sundaySchool") . "\r\n";
$message .= "Volunteered in Past for - BibleSchool: " . get_and_clean_input("bibleSchool") . "\r\n";
$message .= "Volunteered in Past for - YouthMinistry: " . get_and_clean_input("youthMinistry") . "\r\n";
$message .= "Had Past Role of Teacher: " . get_and_clean_input("pastTeacher") . "\r\n";
$message .= "Had Past Role of Admin Staff: " . get_and_clean_input("pastAdmin") . "\r\n";
$message .= "Had Past Role of Transition Team: " . get_and_clean_input("transition") . "\r\n";
$message .= "Had Past Role of Kitchen Staff: " . get_and_clean_input("pastKitchen") . "\r\n";
$message .= "Had Past Role of Chaperone: " . get_and_clean_input("pastChaperone") . "\r\n";
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
