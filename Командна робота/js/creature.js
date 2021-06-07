/*+++++++++++++++++++++++++
Функції створення елементів
+++++++++++++++++++++++++++*/

/*Створюємо нашу шапку гри
<div id = 'heder'>
<div id = 'timer-game'>
   <h2>Time:<span class = "time-number">0</span></h2>
</div>
</div>  */
function creationHederBlock() {
   timerGame = document.createElement('div');
   timerGame.id = 'timer-game';
   heder.appendChild(timerGame);
   
   let h2 = document.createElement('h2');
   h2.innerText = 'Time:';
   timerGame.appendChild(h2);

   TimeNumber = document.createElement('span');
   TimeNumber.className = 'time-number';
   TimeNumber.innerText = 0;
   h2.appendChild(TimeNumber);
   gap = document.createElement('span');
   gap.id = 'gap';
   gap.innerText = ':';
   h2.appendChild(gap);
   TimeSecondNumber = document.createElement('span');
   TimeSecondNumber.className = 'time-number';
   TimeSecondNumber.innerText = 0;
   h2.appendChild(TimeSecondNumber);
}

/*Створюємо наше стартове поле
<div id = 'start-field'>
   <button>
      Start
   </button>
</div>*/
function creationStartFieldBlock(){
   startField = document.createElement('div');
   startField.id = 'start-field';
   game.appendChild(startField);

   let buttonStart = document.createElement('button');
   buttonStart.id = 'button';
   startField.appendChild(buttonStart);
}
/*<div id = 'playing-field'>
      <div id = 'life-block'>
         <span class = 'lifes'></span>
         <span class = 'lifes'></span>
         <span class = 'lifes'></span>
      </div>
      <div id ='spaceship'></div>
      <div id ='meteorite'></div>
</div>*/
// Cтворюємо ігрове поле після натискання на кнопку Старт
function creationPlayingFieldBlock() {
   playingField = document.createElement('div');
   playingField.id = 'playing-field';
   game.appendChild(playingField);
}
//Створюємо блок з життями
/* <div id = 'life-block'>

   <span class = 'lifes'></span>
   <span class = 'lifes'></span>
   <span class = 'lifes'></span>
</div> */
function creationLifeBlock() {
   lifeBlock = document.createElement('div');
   lifeBlock.id = 'life-block';
   heder.appendChild(lifeBlock);
//яке значення має lifenumber стільки буде життів
   for (let i = 0; i < lifenumber; i++){
      let span = document.createElement('span');
      span.className = 'lifes';
      lifeBlock.appendChild(span);
   }
}
//функція створення чорної діри
function createBlaskHole() {
   blackholeImg = document.createElement('span');
   blackholeImg.id = 'blackholeImg';
   playingField.appendChild(blackholeImg);
}
//функція створення нашого корабля
/* <div id = 'playing-field'>
<div id ='spaceship'></div>
</div>*/
function creationSpaceshipBlock() {
setTimeout(() => {
   spaceship = document.createElement('div');
   spaceship.id = 'spaceship';
   playingField.appendChild(spaceship);
}, 1500);
}

//Функція створення блоку завершення гри
function creationGameOverFieldBlock() {
   gameOverField = document.createElement('div');
   gameOverField.id = 'game-over-field';
   game.appendChild(gameOverField);

   buttonRerstart = document.createElement('button');
   buttonRerstart.id = 'button-restart';
   gameOverField.appendChild(buttonRerstart);

}
//функція створення рахунку гри і кращого результату
function createScoreBlock() {
   yourTime = document.createElement('h3');
   yourTime.id = 'your-time';
   yourTime.innerText = 'Your Time:';
   gameOverField.appendChild(yourTime);
   valeuScore = TimeNumber.innerText + gap.innerText + TimeSecondNumber.innerText;
   TheBestTime = document.createElement('h3');
   TheBestTime.innerText = 'The Best Time:';
   TheBestTime.id = 'your-best-time';
   gameOverField.appendChild(TheBestTime);
}
//функція створення чорної діри
function deleteBlaskHole() {
  setTimeout(() => {
     blackholeImg.remove();
  }, 1500); blackholeImg;
}


/*--------------------------
Функції для видалення елементів
----------------------------*/
//Видаляємо нашу шапку гри
function deleteHederBlock() {
   timerGame.remove();
}
//Видаляємо наше стартове поле
function deleteStartFieldBlock() {
   startField.remove();
 }
// Видаляємо ігрове поле
function deletePlayingFieldBlock() {
   playingField.remove();
}
//Видаляємо блок з життями
function deleteLifeBlock() {
   lifeBlock.remove();
}
//функція видалення нашого корабля
function deleteSpaceshipBlock() {
   spaceship.remove();
}
//Функція видалення метеорита
function deleteMeteoriteBlock() {
   if(ufo){ufo.remove();}
   if(meteorite1){meteorite1.remove();}
   if(meteorite2){meteorite2.remove();}
   if(meteorite3){meteorite3.remove();}
   if(meteorite4){meteorite4.remove();}
}
//Функція видалення блоку завершення гри
function deleteGameOverFieldBlock() {
   gameOverField.remove();
}
//функція обнулення таймера
function removeTimerNumber() {
   TimeNumber.remove();
   TimeSecondNumber.remove();
   gap.remove();
   // clearInterval(startTimer);
}

//Функція створення метеорита
function createMeteorite1() {
   meteorite1 = document.createElement('div');
   meteorite1.id = 'meteorite1';
   playingField.appendChild(meteorite1);
   
   appearanceMeteorite1();
}

function createMeteorite2() {
   meteorite2 = document.createElement('div');
   meteorite2.id = 'meteorite2';
   playingField.appendChild(meteorite2);
   
   appearanceMeteorite2();
}

function createMeteorite3() {
   meteorite3 = document.createElement('div');
   meteorite3.id = 'meteorite3';
   playingField.appendChild(meteorite3);
   
   appearanceMeteorite3();
}

function createMeteorite4() {
   meteorite4 = document.createElement('div');
   meteorite4.id = 'meteorite4';
   playingField.appendChild(meteorite4);
   
   appearanceMeteorite4();
}

function createUfo() {
   ufo = document.createElement('div');
   ufo.id = 'ufo';
   playingField.appendChild(ufo);
   
   appearanceUfo();
}

function createExtraLife() {
   extraLife = document.createElement('div');
   extraLife.id = 'extraLife';
   playingField.appendChild(extraLife);
   
   appearanceExtraLife();
}


