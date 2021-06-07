
<?php
         include "configs/db.php";



?>

<!DOCTYPE html>
<html lang="ua">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Chat</title>
      <link rel="stylesheet" href="style.css">
   </head>
   <body>
      <div id ='heder'>
         <div id ='logo'>
            <img src="img/logo.png" alt="logo">
            <span><b>web</b><em>chat</em></span>
         </div>
         <?php
         include "chastiSayta/heder.php";
         ?>
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


include 'modules\spisok.php'; 
?>
      </div>

   
   <!-- Повідомлення -->
   <div id='soobchenie'>
      <?php
   include 'modules\spisokMassage.php';
      ?>
      <form id='form' action = 'index.php' method = 'post'>
         <input type="hidden" name = "komu_polzovatel_id" value = '2'>
         <input type="hidden" name = "ot_polzovatel_id" value = '1'>
         <textarea name ="text" type = 'text'></textarea> 
         <button type = "submit">
            <img src="img/send.webp" alt="photo">
         </button>
      </form>
   </div>
</div>
<?php
if(isset($_POST['text'])
&&$_POST['text']!=""){
   //записуємо в таблицю нового повідомлення 
   $sql = "INSERT INTO message (id, text, komu_polzovatel_id, ot_polzovatel_id, time) VALUES (NULL, '" . $_POST['text'] . "', '$komu', '$chel', current_timestamp())";
   
   if(mysqli_query($connect,$sql)){
   echo '<h2>повідомлення надіслано</h2>';
   }
   else{
   echo '<h2>виникла помилка</h2>' . mysqli_error($connect);
   }
}
?>      
<script src="script.js"></script>
</body>
</html>