<?php
    $visitor_email = $_POST['email1'];
    $message = $_POST['message1'];


    $email_from = 'eddy.kram@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Email: $visitor_email.\n".
                        "User Message: $message.\n";


    $to = "eddy.kram@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>