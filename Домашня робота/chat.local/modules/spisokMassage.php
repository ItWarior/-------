<?php
echo "<div id='spisok-soobchenie'>";
   echo '<ul>';
   if(isset($_COOKIE["polszovatel_id"])){
   if (isset($_GET['user'])){
   setcookie('mesKomu', $_GET['user'], time() + 6000);
   //получаємо повідомлення з id GET запиту
   $sql = "SELECT * FROM message" . //вибираємо всі повідомлення
   " WHERE (komu_polzovatel_id =" . $_GET['user'] . // де id користувачові який отримує = $_GET['user']
   " AND ot_polzovatel_id =" . $_COOKIE["polszovatel_id"] .") " . // id користувача який відправив повідомлення
   " OR (komu_polzovatel_id = " . $_COOKIE["polszovatel_id"] . "  AND ot_polzovatel_id =" . $_GET['user'] . ")"; 
   // або відправлено від користувача id 1 користувачові який вибраний
   //mysqli_query- виконати sql запит, має 2 параметри
   // $connect- підключення до бази данних   
   // $sql- sql скріпт
   $result = mysqli_query($connect, $sql);
   // mysqli_num_rows - отримати кількість результатів
   $col_masage = mysqli_num_rows($result);
   for($i = 0; $i <$col_masage; $i++){
      // mysqli_fetch_assoc- перетворити полученні дані з бази данних в масив 
      $uzers = mysqli_fetch_assoc($result);
      ?>
      <li>
         <div class="avatar">
            <img src='img/user.png'>
         </div>
         <h2><?php echo $uzers['ot_polzovatel_id'];?></h2>
         <p> <?php echo $uzers['text']; ?> </p>
         <div class='time'><?php echo  $uzers['time']; ?></div>
      </li>
      <?php
      }
   }
}
   echo '</ul>';
echo "</div>";

?>