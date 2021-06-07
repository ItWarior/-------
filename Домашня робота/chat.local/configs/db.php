<?php
//данні для підключення бази данних
$server = 'localhost';
$username = 'root';
$passvord ='';
$dbname='chat';
//mysqli_connect-підключення до бази данних
$connect = mysqli_connect($server, $username, $passvord, $dbname);
//підключаємо кодування utf - 8
mysqli_set_charset($connect, 'utf-8');
?>