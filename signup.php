<?php
include('connection.php');


$full_name = $_POST['full_name'];
$password = $_POST['password'];
$email = $_POST['email'];
$cell_phone = $_POST['cell_phone'];

$check_email = $mysqli->prepare('select email from users where email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();

if ($email_exists == 0) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(full_name,password,email,cell_phone) values(?,?,?,?)');
    $query->bind_param('ssss', $full_name, $hashed_password, $email, $cell_phone);
    $query->execute();

    $response['status'] = "success";
    $response['message'] = "User logged in succesfully";
} else {
    $response['status'] = "failed";
    $response['message'] = "There is already a user with this email!";
}
header('Content-Type: application/json'); 
echo json_encode($response);
