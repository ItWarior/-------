<?php 
// масив контактів
$user = [
   [
    'id'=> 1,
    'names'=>'Тарас',
    'img'=>'"img/user.png"',
    'massege'=>'Привіт',
    'contact'=>[
       'phone'=> '25436',
       'email'=> 'taras@gmail.com'  
    ]
   ],
   [
      'id'=> 2,
      'names'=>'Віра',
      'img'=>'"img/user-women.png"',
      'massege'=>'Як справи',
      'contact'=>[
         'phone'=> '103',
         'email'=> 'taras@gmail.com'  
      ]
     ],
     [
      'id'=> 3,
      'names'=>'Назар',
      'img'=>'"img/user2.png"',
      'massege'=>'Шо за єресь',
      'contact'=>[
         'phone'=> '456999',
         'email'=> 'taras@gmail.com'  
      ]
     ],
     [
      'id'=> 4,
      'names'=>'Дмитро',
      'img'=>'"img/user.png"',
      'massege'=>'Задовбала робота',
      'contact'=>[
         'phone'=> '52485',
         'email'=> 'taras@gmail.com'  
      ]
     ],
     [
      'id'=> 5,
      'names'=>'Михайло',
      'img'=>'"img/user2.png"',
      'massege'=>'Позичте грошей',
      'contact'=>[
         'phone'=> '4585',
         'email'=> 'taras@gmail.com'  
      ]
     ],
     [
      'id'=> 6,
      'names'=>'Богдан',
      'img'=>'"img/user.png"',
      'massege'=>'Срав пес',
      'contact'=>[
         'phone'=> '363665',
         'email'=> 'taras@gmail.com'  
      ]
     ],
   ];
   function poluchitPolsovatela($id, $user){
      for($i = 0; $i < count($user); $i++){
         if($user[$i]['id'] == $id){
            return $user[$i];
         }
      }
   }
?>