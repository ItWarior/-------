<?php
include "configs/db.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Chat</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <?php
   //Підключаємо наш масив користувачів
      include 'modules/user.php';  
   ?>
   <div id ='heder'>
   <div id ='logo'>
      <img src="img/logo.png" alt="logo">
      <span><b>web</b><em>chat</em></span>
   </div>
   <div id ='menu'>
      <a href="#" id = 'open-contact'>Контакти</a>
      <a href="#" id = 'open-registr'>Реєстрація</a>
      <a href="#">Настройки</a>
   </div>
</div>
<div id = 'content'>
   <div id = 'users'>
      <form id ='poisk' action = 'index.php' method="GET">
         <input type="text" name="text-poisk">
         <button>
            <img src="/img/magnifying glass.png" alt="img">
         </button>
      </form>
      <!-- список контактів в лівому блоці-->
      <!-- count виводить кількість елементів масиву -->
      <!-- include - підключити файл PHp -->
      <?php 
      //Підключаємо список контактів лівого блоку
      // include 'modules\spisok.php';
      
      include 'seerch\seerchUser.php';  
   ?>
   </div>

   <!-- Повідомлення -->
   <div id='soobchenie'>
   <?php
   //Підключаємо масив наших повідомлень
      include 'modules/massage.php';
   // Підключаємо пошук повідомлень
      include 'seerch/searchMassege.php';
      // Підключаємо повідомлень
      // include 'modules\spisikMassage.php';
   ?>
      <div id='form'>
         <textarea></textarea>
         <button>
            <img src="img/send.webp" alt="photo">
         </button>
      </div>
   </div>
</div>
<!-- Вікно з контактами -->
<div class = 'model' id = 'contacts-modal'>
<div class = 'clos'>X</div>
<div class = 'content'>  
<ul>
      <?php
         for ($i = 0;$i<count($user);$i++){
            echo '<li>';
               echo '<div class="avatar">';
                  echo '<img src=' . $user[$i]['img'] . 'alt="user">';
               echo '</div>';
               echo '<h2>' . $user[$i]['names'] . '</h2>';
            echo '</li>';
         }
      ?>
   </ul>
   </div>
</div>
<!-- вікно з реєстрацією -->
<div class = 'model' id = 'registr-model'>
      <div id = 'window-registr'>
         <p><input name="login" placeholder="Логин"></p>
         <p><input name="pass" type="password" placeholder="Пароль"></p>
      </div>
      <div class = 'clos-registr'>X</div>
      <button>
         <h2>Увійти</h2>
      </button>
</div>
<script src="script.js"></script>
</body>
</html>