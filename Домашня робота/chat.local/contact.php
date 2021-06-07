<?php

include 'configs/db.php';

if(isset($_POST['login'])&&isset($_POST['password'])
   &&$_POST['login']!=""&&$_POST['password']!=""
){
   $sql = "SELECT * FROM `polzovateli` WHERE `login` LIKE '" . $_POST['login'] . "' AND `password` LIKE '". $_POST['password'] . "'";
   $result = mysqli_query($connect,$sql);
   $col_polzovateley = mysqli_num_rows($result);
   var_dump($col_polzovateley);
   if($col_polzovateley == 1){
      $polzovatel = mysqli_fetch_assoc($result);
      // створюємо куки для збереження даних користувача
      setcookie('polszovatel_id', $polzovatel['id'], time() + 10);
      header("location: /");
   }
   else{
      echo '<h2>Логін або пароль був вказаний не правильно</h2>';
   }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Контакти</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <?php
         include "chastiSayta/heder.php";
   ?>
   <!-- вікно з реєстрацією -->
   <div class = 'model' id = 'registr-model'>
         <?php
         include 'modules\spisok.php';
         ?>
</div>
</body>
</html>
