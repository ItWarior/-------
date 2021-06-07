<?php

echo "<div id='spisok-soobchenie'>";
   echo '<ul>';
   //прописав змінну в якій записаний  список всіх користувачів
   $sql = 'SELECT * FROM `message` ORDER BY `message` ASC';
   //mysqli_query- виконати sql запит, має 2 параметри
   // $connect- підключення до бази данних   
   // $sql- sql скріпт
   $result = mysqli_query($connect, $sql);
   // mysqli_num_rows - отримати кількість результатів
   $col_polzoveteley = mysqli_num_rows($result);
   for($i = 0; $i <$col_polzoveteley; $i++){
      // mysqli_fetch_assoc- перетворити полученні дані з бази данних в масив 
      $uzers = mysqli_fetch_assoc($result);
      echo '<li>';
         echo "<a href=/index.php?user=" . $uzers['id'] . ">";
         echo '<div class="avatar">';
         echo '<img src=' . $uzers['photo'] . '>';
         echo '</div>';
         echo '<h2>'. $uzers['name'] .'</h2>';
         echo '<p>' . $uzers['message'] . '</p>';
         echo '<div class=\'time\'>9:00</div>';
         echo '</a>';
      echo '</li>';
      }
      
   echo '</ul>';
echo "</div>";

?>