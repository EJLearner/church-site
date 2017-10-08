<?php
include "../private/confidential.php";

function clean_input($key)
{
    $data = isset($_POST[$key]) ? $_POST[$key] : "";
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
}

$email=clean_input("email");
$name=clean_input("name");
$dob=clean_input("dob");
$address1=clean_input("address1");
$address2=clean_input("address2");
$city=clean_input("city");
$state=clean_input("state");
$zip=clean_input("zip");
$mobile=clean_input("mobile");
$home=clean_input("home");
$interested=clean_input("interested");
$prevVolunteer=clean_input("prevVolunteer");
$role=clean_input("role");

$to=getIdeaFormAddress();
$subject= "Someone registered for Children's Church!";
$message="Submitted information is below:\r\n\r\n";
$message .= "Email: " . $email;
$message .= "Name: " . $name;
$message .= "Dob: " . $dob;
$message .= "Address1: " . $address1;
$message .= "Address2: " . $address2;
$message .= "City: " . $city;
$message .= "State: " . $state;
$message .= "Zip: " . $zip;
$message .= "Mobile: " . $mobile;
$message .= "Home: " . $home;
$message .= "Interested: " . $interested;
$message .= "PrevVolunteer: " . $prevVolunteer;
$message .= "Role: " . $role;
$message .= "Submit Date: " . date("F j, Y, g:i a") . "\r\n";

$from = "webmaster@thecitytemple.org";
$headers = "From:" . $from;
mail($to, $subject, $message, $headers);

$response_array=array();
$response_array['success'] = true;
$response_array['status'] = 'Success!';

header('Content-type: application/json');
echo json_encode($response_array);
