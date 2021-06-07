function nachaloigra() {
   //створюємо стартовий блок
   sosdanieStartBlock();
   //запускаємо процес гри
   knopkaStart.onclick = begingame;
   //створення таймера гри
   sosdanieTimerBlock()
}
nachaloigra();

function begingame() {
   //запускаємо таймер гри
   strtChasy() 
   //видаляємо стартовий блок
   deleteStartBlock() 
   //Створюємо мячик   
   sosdanieBallBlock();
   //Створюємо рахунок гри  
   sosdanyeScoreBlock();
   //створюємо блок з життями   
   sosdanieLifeBlock();
   status = 'ballon';
}
function conezIgra() {
   sosdanieGameOver();
   deleteLifesBlock();
   deleteTimerBlock();
   DeleteScoreBlock();
   status = 'balloff';
}


   //запускаємо таймер гри 
function strtChasy() {
      let chasy = setInterval(function () {
         time.innerText = time.innerText - 1;
         //коли таймер доходить до 0 зупиняється
         if (time.innerText == 0) {
            clearInterval(chasy);
            conezIgra()
         }
      }, 1000);
   }
