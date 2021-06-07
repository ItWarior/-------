<?php

include 'configs/db.php';

if(isset($_POST['login'])&&isset($_POST['password'])
   &&$_POST['login']!=""&&$_POST['password']!=""
){
   //записуємо в таблицю нового користувача 
  $sql = "INSERT INTO polzovateli (login, password) VALUES ('" . $_POST['login'] . "', '" . $_POST['password'] . "')";
   
  if(mysqli_query($connect,$sql)){
     echo '<h2>користувач добавлений</h2>';
  }
  else{
     echo '<h2>виникла помилка</h2>' . mysqli_error($connect);
  }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>registr</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <?php
         include "chastiSayta/heder.php";
   ?>
   <!-- вікно з реєстрацією -->
<div class = 'model' id = 'registr-model'>
      <div id = 'window-registr'>
         <!-- <form action="index.php" method="get"> -->
         <form action="registr.php" method="post">
         <p>
            Введіть свій Логін
            <input name="login" type="text" placeholder="Логін">
         
         </p>
         <p>
            Введіть свій Пароль
            <input name="password" type="password" placeholder="Пароль">
         </p>
      </div>
      <button type = "submit">
      </form>
         Реєстр
      </button>
      <div class = 'clos-registr'>
         <a href="login.php">Увійти</a>
      </div>
</div>
</body>
</html>