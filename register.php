<?php

// Database connection details
$servername = "localhost";
$username = "pathxyaw_jobapply";
$password = "OCvQ0CnG7C(M";
$dbname = "pathxyaw_job";

// Create a new database connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $job = $_POST["job"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $gender = $_POST["gender"];
    $age = $_POST["age"];
    $qualification = $_POST["qualification"];
    $profession = $_POST["profession"];
    $district = $_POST["district"];
    $upazila = $_POST["upazila"];
    $experience = $_POST["experience"];
    $referral = $_POST["referral"];
    // Check if phone number already exists
    $checkPhoneSql = "SELECT phone FROM jobdata WHERE phone = ?";
    $checkPhoneStmt = $conn->prepare($checkPhoneSql);
    $checkPhoneStmt->bind_param("s", $phone);
    $checkPhoneStmt->execute();
    $checkPhoneResult = $checkPhoneStmt->get_result();
    if ($checkPhoneResult->num_rows > 0) {
        echo "Phone number already exists";
        header("Location: exit.html");
    } else {
        // Insert job data
        $insertJobDataSql = "INSERT INTO jobdata (job, name, email, phone, gender, age, qualification, profession, district, upazila, experience, referral) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $insertJobDataStmt = $conn->prepare($insertJobDataSql);
        $insertJobDataStmt->bind_param("ssssssssssss", $job, $name, $email, $phone, $gender, $age, $qualification, $profession, $district, $upazila, $experience, $referral);
        if ($insertJobDataStmt->execute()) {
            echo "New record created successfully";
            // Send email
            require 'smtp/PHPMailerAutoload.php';
            $mail = new PHPMailer();
            $mail->IsSMTP();
            $mail->SMTPDebug = 1;
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = 'tls';
            $mail->Host = "smtp.gmail.com";
            $mail->Port = 587;
            $mail->IsHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Username = "pathchola.info@gmail.com";
            $mail->Password = "qszh dklb vobm name";
            $mail->SetFrom("pathchola.info@gmail.com");
            $mail->Subject = "Job Application Confirmation";
            $mail->Body = "Dear $name,<br><br>

            Thank you for applying for the $job at Pathchola Limited.<br>
            We have received your application and would like to confirm its successful submission.<br><br>
            
            Our hiring team will review all applications, and if your qualifications match our requirements,<br>
            we will contact you for the next steps in the selection process.<br><br>
            
            Please feel free to contact us if you have any questions or need more information.<br>
            Phone Number : 01948224488 <br>
            Email Address : pathcholaoffice@gmail.com <br><br>
            
            Best Regards,<br>
            Pathchola Limited ";
           
            $mail->AddAddress($email);
            if ($mail->Send()) {
                echo "Email sent successfully";
            } else {
                echo "Error sending email: " . $mail->ErrorInfo;
            }
            // Redirect to another page
            header("Location: display.html");
            exit();
        } else {
            echo "Error: " . $insertJobDataStmt->error;
        }

        $insertJobDataStmt->close();
    }
}

$conn->close();
?>
