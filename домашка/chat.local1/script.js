//відкривємо вікно з контактами
let btnOpenContact = document.querySelector('#open-contact')
btnOpenContact.onclick = function () {
   let model = document.querySelector('#contacts-modal');
   model.style.display = 'block';
}
//закриваємо вікно з контактами
let btnClosContact = document.querySelector('#contacts-modal .clos');
btnClosContact.onclick = function () {
   let model = document.querySelector('#contacts-modal');
   model.style.display = 'none';
}
//відкриваємо вікно з реєстрацією
let btnOpenRegistr = document.querySelector('#open-registr');
btnOpenRegistr.onclick = function () {
   let registrModel = document.querySelector('#registr-model');
   registrModel.style.display = "block";
}
//Закриваємо вікно з реєстрацією
let btnClosRegistr = document.querySelector('#registr-model .clos-registr');
btnClosRegistr.onclick = function () {
   let registrModel = document.querySelector('#registr-model');
   registrModel.style.display = "none";
}