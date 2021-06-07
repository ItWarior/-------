// /*+++++++++++++++++++++++++
// Функції створення елементів
// +++++++++++++++++++++++++++*/
// //функція створення голови гри
// creationHederBlock();
// //функція створення стартового блоку гри
// creationStartFieldBlock();
// //функція створення ігрового поля
// creationPlayingFieldBlock();
// //функція створення блоку життів
// creationLifeBlock();
// //функція створення корабля
// creationSpaceshipBlock();
// //функція створення метеориту
// creationMeteoriteBlock();
// //функція завершення гри
// creationGameOverFieldBlock();
// //функція створення рахунку гри та кращого результату
// createScoreBlock();

// /*--------------------------
// Функції для видалення елементів
// ----------------------------*/
// //Видаляємо нашу шапку гри
// deleteHederBlock();
// //Видаляємо наше стартове поле
// deleteStartFieldBlock();
// //Видаляємо ігрове поле
// deletePlayingFieldBlock();
// //Видаляємо блок з життями
// deleteLifeBlock();
// //функція видалення нашого корабля
// deleteSpaceshipBlock();
// //Функція видалення метеорита
// deleteMeteoriteBlock();
// //Функція видалення блоку завершення гри
// deleteGameOverFieldBlock();
// //обьявление 

/*=========*********----------
         ВИКОНАННЯ КОДУ
  =========*********----------
*/
//запускаємо стартове поле
function startGame() {
  //створюємо шапку гри
  creationHederBlock();
  //створюємо стартове поле
  creationStartFieldBlock();
  //запускаємо процес гри
  button.onclick = beginGame;
}
startGame();
//запускаємо поле для гри після кліку на кнопку buttonStart
function beginGame() {

  //видаляємо стартовий блок
  deleteStartFieldBlock();
  //запускаємо таймер гри
  startTimer();
  // startTimer();
  //створюємо поле гри
  creationPlayingFieldBlock();
  //створюємо блок з життями   
  creationLifeBlock();
  //створення чорної діри
  createBlaskHole();
  //видалення чорної діри за 1.5 секунди;
  deleteBlaskHole();
  //Створюємо корабель
  creationSpaceshipBlock();
  //політ літака
  if (flayFlag == 0){
    flay();
    flayFlag = 1;
  }

  //створюємо метеорити
  setTimeout(function(){
    createMeteorite1();
    deathByMeteorite1();
  }, 2000);

  setTimeout(function(){
    createMeteorite2();
    deathByMeteorite2();
  }, 3000);

  setTimeout(function(){
    createMeteorite3();
    deathByMeteorite3();
  }, 4000);

  setTimeout(function(){
    createMeteorite4();
    deathByMeteorite4();
  }, 5000);

  setTimeout(function(){
    createExtraLife();
    addingExtraLife();
  }, 7000);

  setTimeout(function(){
    createUfo();
    deathByUfo();
  }, 15000);
}

//функція кінця гри
function gameOver() {

  //видаляємо поле для
  deletePlayingFieldBlock();
  //видаляємо блок з життями
  deleteLifeBlock();
  //функція видалення нашого корабля
  deleteSpaceshipBlock();
  //видаляємо метеорити
  deleteMeteoriteBlock();
  
  //створюємо блок закінчення гри
  creationGameOverFieldBlock();
  //створюємо блок рахунку гри
  createScoreBlock();
  //виводимо кількість набраних очок на екран
  HelloYourTimee()
  buttonRerstart.onclick = beginGameRestart;
}

function beginGameRestart() {

  //обнуляємо таймер
  removeTimerNumber()
  //Функція видалення блоку завершення гри
  deleteGameOverFieldBlock();
  startGame();
  lifenumber = 3;
  gameFlag = 1;
}