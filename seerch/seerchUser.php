

<!-- список контактів в лівому блоці-->
<div id ='spisok'>
   <ul>
      <?php
      if(isset($_GET['text-poisk'])){
         $i = 0;
         $flag = false;
         for ($i = 0; $i < count($user); $i++){
            $massUser = $user[$i]['names'];
            $poiskUser  = $_GET['text-poisk'];
            $result = $poiskUser 
               ? strpos(mb_strtolower($massUser), mb_strtolower($poiskUser))
               : false;
            if($result !== false){
               $flag = true;
               echo '<li>';
                  echo "<a href=/index.php?user=" . $user[$i]['id'] . ">";
                        echo '<div class="avatar">';
                        echo '<img src=' . $user[$i]['img'] . 'alt="user">';
                        echo '</div>';
                        echo '<h2>'. $user[$i]['names'] .'</h2>';
                        echo '<p>' . $user[$i]['id'] . '</p>';
                        echo '<div class=\'time\'>9:00</div>';
                        echo '<span>' . $user[$i]['contact']['phone'] . '</span>';
                  echo '</a>';
               echo '</li>';
            }
         }
         if ($flag === false){
            for ($i = 0; $i<count($user); $i++){
               echo '<li>';
                  echo "<a href=/index.php?user=" . $user[$i]['id'] . ">";
                        echo '<div class="avatar">';
                        echo '<img src=' . $user[$i]['img'] . 'alt="user">';
                        echo '</div>';
                        echo '<h2>'. $user[$i]['names'] .'</h2>';
                        echo '<p>' . $user[$i]['id'] . '</p>';
                        echo '<div class=\'time\'>9:00</div>';
                        echo '<span>' . $user[$i]['contact']['phone'] . '</span>';
                  echo '</a>';
               echo '</li>';
            }
       }
      }
      ?>
   </ul>
</div>