

//при кліку на кнопку зменшує і посуває шарік на 10px;
knopka.onclick = function () {
   ball.style.left = ball.offsetLeft + 10 + 'px';
   ball.style.width = ball.offsetWidth - 10 + 'px';
   ball.style.height = ball.offsetHeight - 10 + 'px';

}
