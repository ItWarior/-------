   <?php
      //прописав змінну в якій записаний  список всіх користувачів
      $sql = 'SELECT * FROM polzovateli';
      //mysqli_query- виконати sql запит, має 2 параметри
      // $connect- підключення до бази данних   
      // $sql- sql скріпт
      $result = mysqli_query($connect, $sql);
      // mysqli_num_rows - отримати кількість результатів
      $col_polzoveteley = mysqli_num_rows($result);
      echo '<div id = \'spisok\'>';
      echo '<ul>';
      for($i = 0; $i <$col_polzoveteley; $i++){
         // mysqli_fetch_assoc- перетворити полученні дані з бази данних в масив 
         $uzers = mysqli_fetch_assoc($result);
         if(isset($chel)){
         if($chel !== $uzers['id']){
            ?>            
            <li>
               <a href="/index.php?user= <?php echo $uzers['id']; ?> ">
                  <div class="avatar">
                  <img src=' <?php echo $uzers['photo']; ?>'>
                  </div>
                  <h2><?php echo $uzers['name']; ?></h2>
                  <p> <?php echo $uzers['phone']; ?> </p>
                  <div class = 'time' >9:00</div>
               </a>
            </li>
         <?php 
         } 
         }
         else{
            ?>
               <li>
                  <a href="/index.php?user= <?php echo $uzers['id']; ?> ">
                     <div class="avatar">
                        <img src=' <?php echo $uzers['photo']; ?>'>
                     </div>
                     <h2><?php echo $uzers['name']; ?></h2>
                     <p> <?php echo $uzers['phone']; ?> </p>
                     <div class = 'time' >9:00</div>
                  </a>
            </li>
            <?php
         }  
         ?>
      <?php
      }
      echo '</ul>';
      echo '</div>';
   ?>