//Вибираємо нашу шапку гри
let heder = document.querySelector('#heder');

//Оголошуємо таймер гри
let timerGame;
//Значення хвилин таймера
let TimeNumber;
//Значення сикунд таймера
let TimeSecondNumber;
//двокрапка між хвилинами і секундами
let gap
//Оголошуємо блок життів
let lifeBlock;
//Кількість наших життів
let lifenumber = 3; 

//Вибираємо нашу гру
let game = document.querySelector("#game");
//Оголошуємо чорну діру
let blackholeImg

//Оголошуємо наш корабель
let spaceship;
//Оголошуємо стартове поле
let startField;
//Оголошуємо поле для гри
let playingField;
//Оголошуємо поле кінця гри
let gameOverField;

//значення очок в кінці гри яке виводиться на екран
//valeuScore - хвилини : секунди твого поточного рахунку 
let valeuScore;
//yourTime - твої хвилини
let yourTime;
//yourTimeSecond - твій час в секундах
let yourTimeSecond;
//змінна яка має в собі значення твого часу (для порівнянняа<b)
let currentTime;
//змінна яка має в собі значення найкращого часу (для порівнянняa<b)
let bestTime = 0;
//значення найкращого часу що був в грі запис стрічкою
let stringRes;
//найкращий результат
let TheBestTime;

//кнопка рестарту
let buttonRerstart;

// метеориты
let meteorite1;
let meteorite2;
let meteorite3;
let meteorite4;

//нло
let ufo;
// флаг, определяюший запущена ли игра
// где 0 - игра НЕ запущена, а 1 - игра запущена
let gameFlag = 1;
//переменные для определения позиции метеорита
var direction1;
var direction2;
var direction3;
var direction4;
var directionUfo;
var directionExtraLife;
//затримка
const meteoriteDelay = 4000;
const ufoDelay = 2000;

var flayFlag = 0;

let extraLife;