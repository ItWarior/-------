

//Створюємо генерацію випадкових чисел
function random(max) {
   let randomNumber = 1 + Math.random() * (max + 1);
   randomNumber = Math.floor(randomNumber);
   return randomNumber;
}


/**+++++++++++++++++++++++++++++++++++
 * Функції для створення елементів
 *  
 ++++++++++++++++++++++++++++++++++++**/
 /* <div id="start-block">
 <button id="knopka-start">
 Start
 </button>
 </div> */
 function sosdanieStartBlock() {
    //створюємо блок <div id="start-block">
    startBlock = document.createElement('div');
    //даємо id start-block
    startBlock.id = 'start-block';
    //створюємо стартову кнопку<button id="knopka-start">Start</button>
    knopkaStart = document.createElement('button');
    knopkaStart.id = 'knopka-start';
    knopkaStart.innerText = "Start";
    //добавляємо стартовий блок в ігрове поле
    back.appendChild(startBlock);
    //добавляємо кнопку в стартовий блок
    startBlock.appendChild(knopkaStart);
   }
   
   /*створюємо таймер гри 
 <h1>Time:<span id="time">15</span></h1>*/ 
function sosdanieTimerBlock() {
   let h1 = document.createElement('h1');
   h1.innerText = ('Time:')
   timerBlock.appendChild(h1);
   time = document.createElement('span');
   h1.appendChild(time);
   time.innerText = 15;
}
   //створює рахунок гри
   function sosdanyeScoreBlock() {
      //створюємо тег div
      score = document.createElement('div');
      //даємо айді    
      score.id = 'score';
      //добавляємо score в back
   back.appendChild(score);
//заносимо 0 в score   
   score.innerText = 0;
//функція що обнуляє рахунок при кліку на неї
   score.onclick = function () {
      i = 0;
      score.innerText = i;
   }  
}
   
//створюємо 3 теги span
function sosdanieLifeBlock() {
//створюємо тег <div id="life"></div> 
   life = document.createElement('div');
//даємо айді life
   life.id = 'life';
//добавляємо life в back
   back.appendChild(life);
//створюємо цикл де кількість span буде дорівнювати lifenumber    
   for (let i = 0; i < lifenumber; i++) {
//створюємо змінну span в яку добавляємо тег span
let span = document.createElement('span');
//даємо span id life-span      
      span.id = 'life-span';
//добавляємо тег span в life 
      life.appendChild(span);
   }
      
}


//створюємо шарик
function sosdanieBallBlock() {
   //створюємо тег div
   let ball = document.createElement('div');
   //присвоюємо id 
   let napravlenie = random(3);
   if (napravlenie == 1) {
      ball.className = 'ball left';
   }
   else if(napravlenie == 2){
      ball.className = 'ball right';
   }
   else {
      sosdanieBoomb()
      sosdanieBallBlock();
   }
   
    //мячик перелітає на рандомну точку поля
   setTimeout(function () {
      ball.style.top = random(350) + 'px';
       ball.style.right = random(550) + 'px';
   }, 200);
   setTimeout(function(){
      ball.style.transition =  'all 0s';
      let ballDown;
      ballDown = setInterval(function () {
         ball.style.top = ball.offsetTop + 1 + 'px';
         if (ball.offsetTop > 500) {
            ball.remove();
            lifenumber = lifenumber - 1;
            if (lifenumber == 0) {
               conezIgra()
            }
            deleteLifesBlock();
            sosdanieLifeBlock();
            sosdanieBallBlock();
            clearInterval(ballDown);
         }
      }, 10);
   }, 1000);

   //добавляємо div в back
   if (status != 'balloff') {
      back.appendChild(ball);
   }
      //клік по мячику 
   // функція що добавляє очки ,зупиняє гру;
   ball.onmousemove = function() {
       score.innerText = ++score.innerText;
      ball.remove();
      let kolichestwoBall = document.querySelector('.ball');
      if (kolichestwoBall == null) {
         setTimeout(function () {
            //створюємо цикл де створюється від 1 до 5 шариків
            for (let z = 0; z < random(5); z++) {
               sosdanieBallBlock();
            }
         }, 200);
      }

      }

}

/* <div id="gameOver">
<h2>GAMEOVER</h2>
<h3>Ваш рахунок: 100</h3>
</div> */
//створюємо блок завершення гри
function sosdanieGameOver() {
   //створюємо тег <div id="gameOver"></div>
   let div = document.createElement('div');
   div.id = 'gameOver';
   //створюємо заголовок <h2>GAMEOVER</h2>
   let h2 = document.createElement('h2');
   h2.innerText = 'GAMEOVER';
   //створюємо заголовок <h3>Ваш рахунок: 100</h3>
   let h3 = document.createElement('h3')
   h3.innerText = 'Ваш рахунок:' + score.innerText;
   //добавляємо тег div в back
   back.appendChild(div);
   //добавляємо заголовок h2 в тег div
   div.appendChild(h2);
   //добавляємо заголовок h3 в тег div
   div.appendChild(h3);
}
//функція створення  бомби
    function  sosdanieBoomb() {
         //створюємо тег div
         let ball = document.createElement('div');
         //присвоюємо id 
         let napravlenie = random(2);
         if (napravlenie == 1) {
            ball.className = 'ball left boom';
         }
         else {
            ball.className = 'ball right boom';
         }
         
          //мячик перелітає на рандомну точку поля
         setTimeout(function () {
            ball.style.top = random(350) + 'px';
             ball.style.right = random(550) + 'px';
         }, 200);
         setTimeout(function(){
            ball.style.transition =  'all 0s';
            let ballDown;
            ballDown = setInterval(function () {
               ball.style.top = ball.offsetTop + 1 + 'px';
               if (ball.offsetTop > 500) {
                  ball.remove();
                  lifenumber = lifenumber + 1;
                  deleteLifesBlock();
                  sosdanieLifeBlock();
                  sosdanieBallBlock();
                  clearInterval(ballDown);
               }
            }, 10);
         }, 1000);
      
         //добавляємо div в back
         if (status != 'balloff') {
            back.appendChild(ball);
         }
            //клік по мячику 
         // функція що добавляє очки ,зупиняє гру;
         ball.onmousemove = function() {
             score.innerText = --score.innerText;
            ball.remove();
            lifenumber = lifenumber - 1;
            deleteLifesBlock();
            sosdanieLifeBlock();
            }
      
      }

/*----------------------------------------------
Видалення елементів
------------------------------------------------- */
//функція дли видалення стартового блоку
function deleteStartBlock() {
   let startBlock = document.querySelector('#start-block');
   startBlock.remove();
}
//функція для видалення блоку з життями
function deleteLifesBlock() {
   life.remove();
}
//функція для видалення блоку з таймером
function deleteTimerBlock() {
   score.remove();
}
//функція для видалення блоку з рахунком
function DeleteScoreBlock() {
   score.remove();
}