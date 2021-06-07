<div id='spisok-soobchenie'>
  <ul>
    <?php
    //  Пошук повідомлення===========
    if (isset($_GET['text-poisk'])) {
      $i = 0;
      $truFals = 0;
      for ($i = 0; $i < count($message); $i++) {
        $massMessage = $message[$i]['message'];
        $niedMessage = $_GET['text-poisk'];
        $result = $niedMessage
          ? strpos(mb_strtolower($massMessage), mb_strtolower($niedMessage))
          : false;
        if ($result !== false) {
    ?>
          <li>
            <div class="avatar">
              <img src=img/user.png> </div> <?php
                $polsovatel = (poluchitPolsovatela($message[$i]['id_user'], $user));
                ?> 
                <h2> <?php echo  $polsovatel['names'];  ?></h2>
              <p> <?php echo  $message[$i]['message'];  ?></p>
              <div class='time'><?php echo  $message[$i]['time'];  ?></div>
          </li>
        <?php
        } else if ($result === false) {
          $truFals = $truFals + 1;
        }
      }
      if ($truFals == $i) {
        echo '<h2>Результат не був знайдений</h2>';
      }
    }
    // Закінчення функції  пошуку повідомлення===========
    // Виводимо всі повідомлення вибраного користувача
    else if (isset($_GET['user'])) {
      $flag = false;
      for ($i = 0; $i < count($message); $i++) {
        if ($message[$i]['id_user'] == $_GET['user']) {
          $flag = true;
        ?>
          <li>
            <div class="avatar">
              <img src=img/user.png> </div> <?php
                                            $polsovatel = (poluchitPolsovatela($message[$i]['id_user'], $user));
                                            ?> <h2> <?php echo  $polsovatel['names'];  ?></h2>
              <p> <?php echo  $message[$i]['message'];  ?></p>
              <div class='time'><?php echo  $message[$i]['time'];  ?></div>
          </li>
        <?php
        }
        // Кінець виводу всіх повідомлень вибраного користувача
        // Виводимо всі повідомлення вибраного користувача і повідомлення які адресовані йому
        if ($message[$i]['id_user2'] == $_GET['user']) {
        ?>
          <li>
            <div class="avatar">
              <img src=img/user.png> </div> <?php
                                            $polsovatel = (poluchitPolsovatela($message[$i]['id_user'], $user));
                                            ?> <h2> <?php echo  $polsovatel['names'];  ?></h2>
              <p> <?php echo  $message[$i]['message'];  ?></p>
              <div class='time'><?php echo  $message[$i]['time'];  ?></div>
          </li>
        <?php
        }
      }

      if ($flag === false) {
        ?>
        <h2>Повідомлення не знайдено</h2>
    <?php
      }
    }
    ?>
  </ul>
</div>