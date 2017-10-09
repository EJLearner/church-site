<?php
include "../private/confidential.php";

function clean_input($key)
{
    $data = isset($_POST[$key]) ? $_POST[$key] : "";
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;
}

$email = clean_input("email");
$name = clean_input("name");
$dob = clean_input("dob");
$address1 = clean_input("address1");
$address2 = clean_input("address2");
$city = clean_input("city");
$state = clean_input("state");
$zip = clean_input("zip");
$mobile = clean_input("mobile");
$home = clean_input("home");
$teacher = clean_input("teacher");
$admin = clean_input("admin");
$assistantMentor = clean_input("assistantMentor");
$kitchen = clean_input("kitchen");
$sundaySchool = clean_input("sundaySchool");
$bibleSchool = clean_input("bibleSchool");
$youthMinistry = clean_input("youthMinistry");
$pastTeacher = clean_input("pastTeacher");
$pastAdmin = clean_input("pastAdmin");
$transition = clean_input("transition");
$pastKitchen = clean_input("pastKitchen");
$pastChaperone = clean_input("pastChaperone");

$to=getCcRegistrationFormAddress();
$subject= "Someone registered for Children's Church!";
$message="Submitted information is below:\r\n\r\n";
$message .= "Email: " . $email . "\r\n";
$message .= "Name: " . $name . "\r\n";
$message .= "Dob: " . $dob . "\r\n";
$message .= "Address1: " . $address1 . "\r\n";
$message .= "Address2: " . $address2 . "\r\n";
$message .= "City: " . $city . "\r\n";
$message .= "State: " . $state . "\r\n";
$message .= "Zip: " . $zip . "\r\n";
$message .= "Mobile: " . $mobile . "\r\n";
$message .= "Home: " . $home . "\r\n";
$message .= "Teacher: " . $teacher . "\r\n";
$message .= "Admin: " . $admin . "\r\n";
$message .= "AssistantMentor: " . $assistantMentor . "\r\n";
$message .= "Kitchen: " . $kitchen . "\r\n";
$message .= "SundaySchool: " . $sundaySchool . "\r\n";
$message .= "BibleSchool: " . $bibleSchool . "\r\n";
$message .= "YouthMinistry: " . $youthMinistry . "\r\n";
$message .= "PastTeacher: " . $pastTeacher . "\r\n";
$message .= "PastAdmin: " . $pastAdmin . "\r\n";
$message .= "Transition: " . $transition . "\r\n";
$message .= "PastKitchen: " . $pastKitchen . "\r\n";
$message .= "PastChaperone: " . $pastChaperone . "\r\n";
$message .= "Submit Date: " . date("F j, Y, g:i a") . "\r\n";

$from = "webmaster@thecitytemple.org";
$headers = "From:" . $from;
$mailSent = mail($to, $subject, $message, $headers);


$response_array=array();
$response_array['success'] = $mailSent;
$response_array['status'] = 'Success!';

header('Content-type: application/json');
echo json_encode($response_array);
