
<div id ='menu'>
   <a href="/">Головна</a>
   <a href="contact.php">Контакти</a>
   <a href="#">Настройки</a>
   <?php
   $komu;
   if(isset($_COOKIE["mesKomu"])){
         $komu = $_COOKIE["mesKomu"];
      }
      $chel;
      if(isset($_COOKIE["polszovatel_id"])){
         $chel = $_COOKIE["polszovatel_id"];
   ?>
      <a href='exit.php' id = 'open-registr'>Вийти</a>
      <?php   
   }
   else{
   ?>      
      <a href='login.php' id = 'open-registr'>Увійти</a>
      <?php  
   }
   ?>   
</div>
