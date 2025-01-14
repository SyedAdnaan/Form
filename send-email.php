<?php
// Get the form data from the JSON payload
$data = json_decode(file_get_contents('php://input'), true);

// Extract the data
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$message = $data['message'];

// Define recipient email address (change to your actual email)
$to = 'syedadnan6786@gmail.com';  // Replace with the email address you want the message sent to

// Define the subject and body of the email
$subject = 'New Contact Form Submission';
$emailContent = "
Name: $name\n
Email: $email\n
Phone: $phone\n
Message: $message
";

// Define the email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send the email
if (mail($to, $subject, $emailContent, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
