<?php
include('connection.php');

$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli->prepare('select users_id,full_name,email,password from users where email=?');
$query->bind_param('s', $email);
$query->execute();

$query->store_result();
$query->bind_result($users_id, $full_Name, $email,$hashed_password);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "Email not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['full_name'] = $full_Name;
    } else {
        $response['status'] = "Email and/or password is incorrect";
    }
}
