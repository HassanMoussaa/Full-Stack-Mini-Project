<?php

$host = "127.0.0.1";
$db_user = "root";
$db_pass = null;
$db_name = "full stack mini project";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);
if (!$mysqli) {
    die('a connection was unsuccesful');
}
