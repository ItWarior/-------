<?php
//данні для підключення бази данних
$server = 'localhost';
$username = 'root';
$passvord ='';
$dbname='chat';
//mysqli_connect-підключення до бази данних
$connect = mysqli_connect($server, $username, $passvord, $dbname);
mysqli_set_charset($connect, 'utf-8');//підключаємо кодіровку utf - 8


// $sql = 'SELECT * FROM polzovateli';//прописав змінну в якій записаний  список всіх користувачів
// //mysqli_query- виконати sql запит, має 2 параметри
// // $connect- підключення до бази данних   
// // $sql- sql скріпт
// $result = mysqli_query($connect,$sql);
// // mysqli_num_rows - отримати кількість результатів
// $col_polzovateli = mysqli_num_rows($result);

// for($i = 0 ; $i < $col_polzovateli; $i++){
//    // mysqli_fetch_assoc-
//    $polzovatel = mysqli_fetch_assoc($result);
//    var_dump($polzovatel);  
// }
?>