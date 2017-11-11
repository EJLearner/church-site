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

$subject= "Someone registered to volunteer for Vacation Bible School!";
$message="Submitted information is below:\r\n\r\n";
$message = addDataToMessage($message, "Email", "email");
$message = addDataToMessage($message, "Name", "name");
$message = addDataToMessage($message, "Dob", "dob");
$message = addDataToMessage($message, "Address Line 1", "address1");
$message = addDataToMessage($message, "Address Line 2", "address2");
$message = addDataToMessage($message, "City", "city");
$message = addDataToMessage($message, "State", "state");
$message = addDataToMessage($message, "Zip", "zip");
$message = addDataToMessage($message, "Mobile", "mobile");
$message = addDataToMessage($message, "Home", "home");
$message = addDataToMessage($message, "Interested in - Teacher", "teacher", true);
$message = addDataToMessage($message, "Interested in - Admin", "admin", true);
$message = addDataToMessage($message, "Interested in - Assistant Mentor", "assistantMentor", true);
$message = addDataToMessage($message, "Interested in - Kitchen", "kitchen", true);
$message = addDataToMessage($message, "Volunteered in Past for - SundaySchool", "sundaySchool", true);
$message = addDataToMessage($message, "Volunteered in Past for - BibleSchool", "bibleSchool", true);
$message = addDataToMessage($message, "Volunteered in Past for - YouthMinistry", "youthMinistry", true);
$message = addDataToMessage($message, "Had Past Role of Teacher", "pastTeacher", true);
$message = addDataToMessage($message, "Had Past Role of Admin Staff", "pastAdmin", true);
$message = addDataToMessage($message, "Had Past Role of Transition Team", "transition", true);
$message = addDataToMessage($message, "Had Past Role of Kitchen Staff", "pastKitchen", true);
$message = addDataToMessage($message, "Had Past Role of Chaperone", "pastChaperone", true);
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
