/*==========================
Функції
============================*/

//Створюємо генерацію випадкових чисел 
function random(max) {
   let randomNumber = 1 + Math.random() * (max + 1);
   randomNumber = Math.floor(randomNumber);
   return randomNumber;
}
//функція що виводить кількість набраних очок на екран
function HelloYourTimee() {
   yourTime.innerText = yourTime.innerText + valeuScore;
   let currentTime = TimeNumber.innerText + (TimeSecondNumber.innerText / 60);
   if (bestTime < currentTime) {
      stringRes = TheBestTime.innerText = TheBestTime.innerText + TimeNumber.innerText + ':' + TimeSecondNumber.innerText
      bestTime = currentTime;  
   }
   else {
      TheBestTime.innerText = stringRes;
   }
}
let res;
if (res <= currentTime) {
   res = currentTime;
}
//Функція запуску таймеру гри
 function startTimer() {
   let b = setInterval(function(){
      TimeSecondNumber.innerText++
      if (TimeSecondNumber.innerText == '60') {
         TimeNumber.innerText++
         TimeSecondNumber.innerText = 0;
      }
      if (lifenumber <= 0) {
          clearInterval(b);
      }
   },1000 );
}

//Функція польоту корабля
function flay() {
   let soundMove = document.querySelector(".sound-move");
   let soundStop = document.querySelector(".sound-stop");
   let w = 600;
   let h = 400;
   
   //настройки громкости звука
   soundMove.volume = 0.1;
   soundStop.volume = 0.1;
   
   
   //когда кнопка нажата вызывается move
   document.addEventListener("keydown", move);
   //когда отпускаем кнопку вызывается stop
   document.addEventListener("keyup", stop);
   
   
   function stop(e) {
      soundMove.pause();
      soundStop.currentTime = 0;
      soundStop.play();
   }
   
   function move(e) {
      if(gameFlag == 1){ 
      soundStop.pause();
      soundMove.play();
         var key = e.key;
         //создаём переменные для перемещения
         var x = spaceship.offsetLeft;
         var y = spaceship.offsetTop;
     
         if (key == 'ArrowRight') {
            spaceship.className = 'spaceship';
            spaceship.classList.add('right');
            if (x < w - 50) spaceship.style.left = x + 10 + 'px';
         }
         if (key == 'ArrowLeft') {
            spaceship.className = 'spaceship';
            spaceship.classList.add('left');
            if (x > 0) spaceship.style.left = x - 10 + 'px';
         }
         if (key == 'ArrowDown') {
            spaceship.className = 'spaceship';
            spaceship.className = ('down');
            if (y < h - 50) {
            spaceship.style.top = y + 10 + 'px';
            }
         }
         if (key == 'ArrowUp') {
            spaceship.className = 'spaceship';
            spaceship.classList.add('up');
    
            if (y > 0) {
               spaceship.style.top = y - 10 + 'px';
            }
         }
      } 
   }   
}

//Определение точки вылета метеорита
function appearanceMeteorite1() {
   direction1 = random(2);
   if(direction1 == 1){
     meteorite1.style.top =  random(400) +'px';
     meteorite1.style.left =  -100 + 'px';
   }
   else{  
     meteorite1.style.top =  random(400) + 'px'; 
     meteorite1.style.left =  650 + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         flightMeteorite1();
      }, meteoriteDelay); 
   }
}

//Определение направления палёта метеорита
function flightMeteorite1(){
   if(direction1 == 1){
      meteorite1.style.top =  random(400) + 'px'; 
      meteorite1.style.left =  650 + 'px'; 
   }
   else{
      meteorite1.style.top =  random(400) + 'px'; 
      meteorite1.style.left =  -100 + 'px';     
   }

   if(gameFlag == 1){
      setTimeout(function(){
         appearanceMeteorite1();
      }, meteoriteDelay); 
   }
}

//Определение точки вылета второго метеорита
function appearanceMeteorite2() {
   direction2 = random(2);
   if(direction2 == 1){
     meteorite2.style.top =  -100 + 'px';
     meteorite2.style.left =  random(600) +'px';
   }
   else{  
     meteorite2.style.top =  500 + 'px'; 
     meteorite2.style.left =  random(600) + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         flightMeteorite2();
      }, meteoriteDelay);
   }
}

//Определение направления палёта второго метеорита
function flightMeteorite2(){
   if(direction2 == 1){
      meteorite2.style.top =  500 + 'px'; 
      meteorite2.style.left =  random(600) + 'px'; 
   }
   else{
     meteorite2.style.top =  -100 + 'px';
     meteorite2.style.left =  random(600) +'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         appearanceMeteorite2();
      }, meteoriteDelay);
   }
}

//Определение точки вылета третьего метеорита
function appearanceMeteorite3() {
   direction3 = random(2);
   if(direction3 == 1){
     meteorite3.style.top =  random(400) +'px';
     meteorite3.style.left =  -100 + 'px';
   }
   else{  
     meteorite3.style.top =  random(400) + 'px'; 
     meteorite3.style.left =  650 + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         flightMeteorite3();
      }, meteoriteDelay);
   }
}

//Определение направления палёта третьего метеорита
function flightMeteorite3(){
   if(direction3 == 1){
      meteorite3.style.top =  random(400) + 'px'; 
      meteorite3.style.left =  650 + 'px'; 
   }
   else{
      meteorite3.style.top =  random(400) + 'px'; 
      meteorite3.style.left =  -100 + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         appearanceMeteorite3();
      }, meteoriteDelay);
   }
}

//Определение точки вылета второго метеорита
function appearanceMeteorite4() {
   direction4 = random(2);
   if(direction4 == 1){
     meteorite4.style.top =  -100 + 'px';
     meteorite4.style.left =  random(600) +'px';
   }
   else{  
     meteorite4.style.top =  500 + 'px'; 
     meteorite4.style.left =  random(600) + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         flightMeteorite4();
      }, meteoriteDelay);
   }
}

//Определение направления палёта второго метеорита
function flightMeteorite4(){
   if(direction4 == 1){
      meteorite4.style.top =  500 + 'px'; 
      meteorite4.style.left =  random(600) + 'px'; 
   }
   else{
      meteorite4.style.top =  -100 + 'px';
      meteorite4.style.left =  random(600) +'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         appearanceMeteorite4();
      }, meteoriteDelay);
   }
}

//Определение точки вылета нло
function appearanceUfo() {
   directionUfo = random(2);
   if(directionUfo == 1){
      ufo.style.top =  random(400) +'px';
      ufo.style.left =  -100 + 'px';
   }
   else{  
      ufo.style.top =  random(400) + 'px'; 
      ufo.style.left =  650 + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         flightUfo();
      }, ufoDelay);
   }
}

//Определение направления палёта нло
function flightUfo(){
   if(directionUfo == 1){
      ufo.style.top =  random(400) + 'px'; 
      ufo.style.left =  650 + 'px'; 
   }
   else{
      ufo.style.top =  random(400) + 'px'; 
      ufo.style.left =  -100 + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         appearanceUfo();
      }, ufoDelay);
   }
}

//Определение направления палёта 
function appearanceExtraLife() {
   directionExtraLife = random(2);
   if(directionUfo == 1){
      extraLife.style.top =  random(400) +'px';
      extraLife.style.left =  -100 + 'px';
   }
   else{  
      extraLife.style.top =  random(400) + 'px'; 
      extraLife.style.left =  650 + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         flightExtraLife();
      }, 4000);
   }
}

//Определение точки вылета доп жизни
function flightExtraLife(){
   if(directionExtraLife == 1){
      extraLife.style.top =  random(400) + 'px'; 
      extraLife.style.left =  650 + 'px'; 
   }
   else{
      extraLife.style.top =  random(400) + 'px'; 
      extraLife.style.left =  -100 + 'px';
   }

   if(gameFlag == 1){
      setTimeout(function(){
         appearanceExtraLife();
      }, 5000);
   }
}

function deathByUfo() {
   if (lifenumber >= 0 && gameFlag != 0) {
      if (spaceship.offsetTop > ufo.offsetTop - 50 &&
         spaceship.offsetTop < ufo.offsetTop + 80 &&
         spaceship.offsetLeft > ufo.offsetLeft - 50 &&
         spaceship.offsetLeft < ufo.offsetLeft + 80) {
         spaceship.remove();
         ufo.remove();
         setTimeout(function () {

            creationSpaceshipBlock();
            createUfo();
            deathByUfo();
            controlLife()
         
         }, 500);
      }

      else {
         setTimeout(function () {
            deathByUfo();
         }, 100);
      }
   }
}

function deathByMeteorite1() {
   if (lifenumber >= 0 && gameFlag != 0) {
      if (spaceship.offsetTop > meteorite1.offsetTop - 50 &&
         spaceship.offsetTop < meteorite1.offsetTop + 80 &&
         spaceship.offsetLeft > meteorite1.offsetLeft - 50 &&
         spaceship.offsetLeft < meteorite1.offsetLeft + 80) {
         spaceship.remove();
         meteorite1.remove();
         setTimeout(function () {

               creationSpaceshipBlock();
               createMeteorite1();
               deathByMeteorite1();
               controlLife()
            
         }, 500);
      }
   

      else {
         setTimeout(function () {
            deathByMeteorite1();
         }, 100);
      }
   }
}
function deathByMeteorite2() {
   if (lifenumber >= 0 && gameFlag != 0) {
      if (spaceship.offsetTop > meteorite2.offsetTop - 50 &&
         spaceship.offsetTop < meteorite2.offsetTop + 80 &&
         spaceship.offsetLeft > meteorite2.offsetLeft - 50 &&
         spaceship.offsetLeft < meteorite2.offsetLeft + 80) {
         spaceship.remove();
         meteorite2.remove();
         setTimeout(function () {

               creationSpaceshipBlock();
               createMeteorite2();
               deathByMeteorite2();
               controlLife()
            
         }, 500);
      }
   
      else {
         setTimeout(function () {
            deathByMeteorite2();
         }, 100);
      }
   }
}
function deathByMeteorite3() {
   if (lifenumber >= 0 && gameFlag != 0) {
      if (spaceship.offsetTop > meteorite3.offsetTop - 50 &&
         spaceship.offsetTop < meteorite3.offsetTop + 80 &&
         spaceship.offsetLeft > meteorite3.offsetLeft - 50 &&
         spaceship.offsetLeft < meteorite3.offsetLeft + 80) {
         spaceship.remove();
         meteorite3.remove();
         setTimeout(function () {

               creationSpaceshipBlock();
               createMeteorite3();
               deathByMeteorite3();
               controlLife()
            
         }, 500);
      }
   
      else {
         setTimeout(function () {
            deathByMeteorite3();
         }, 100);
      }
   }
}
function deathByMeteorite4() {
   if (lifenumber >= 0 && gameFlag != 0) {
      if (spaceship.offsetTop > meteorite4.offsetTop - 50 &&
         spaceship.offsetTop < meteorite4.offsetTop + 80 &&
         spaceship.offsetLeft > meteorite4.offsetLeft - 50 &&
         spaceship.offsetLeft < meteorite4.offsetLeft + 80) {
         spaceship.remove();
         meteorite4.remove();
         setTimeout(function () {

               creationSpaceshipBlock();
               createMeteorite4();
               deathByMeteorite4();
               controlLife()
            
         }, 500);
      }
   
      else {
      
         setTimeout(function () {
            deathByMeteorite4();
         }, 100);
      }
   }
}

function addingExtraLife() {
   if (lifenumber >= 0 && gameFlag != 0) {
      if (spaceship.offsetTop > extraLife.offsetTop - 50 &&
         spaceship.offsetTop < extraLife.offsetTop + 80 &&
         spaceship.offsetLeft > extraLife.offsetLeft - 50 &&
         spaceship.offsetLeft < extraLife.offsetLeft + 80) {
         spaceship.remove();
         extraLife.remove();
         setTimeout(function () {

               creationSpaceshipBlock();
               createExtraLife();
               addingExtraLife();
               newLife()
               
            
         }, 500);
      }
   
      else {
      
         setTimeout(function () {
            addingExtraLife();
         }, 100);
      }
   }
}


// функція для видалення життів
function controlLife() {
   deleteLifeBlock() 
   lifenumber--;
   creationLifeBlock()
      if (lifenumber <= 0 && gameFlag != 0) {
         gameFlag = 0;
         spaceship.style.top = '1000px'; 
         gameOver();
       } 
}

// функция для создания доп жизней
function newLife() {
   deleteLifeBlock() 
   lifenumber += 1;
   creationLifeBlock()
}