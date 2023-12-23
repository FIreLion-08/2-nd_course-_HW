//  Задание_01
let password = 'пароль';
let int = String(prompt('Задание_01: Введите пароль'));
if (password === int) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


// Задание_02
let a2 = prompt ('Задание_02: Введите любое число');
if (a2 > 0 && a2 < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//  Задание_03
let d = prompt ('Задание_03: Введите любое число для переменной D');
let e = prompt ('Задание_03: Введите любое число для переменной E');
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//  Задание_04
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
a = Number(a);
b = Number(b);
alert(`Задание_04: a + b = ${a + b}`);


//  Задание_05
let monthNumber = Number(prompt('Задание_05: Введите номер месяца'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Такого месяца нет');
        break;
}


// Задание_08
let clientOS = 0||1;
clientOS = Number(prompt('Какая у вас операционная система? Если iOS, то введите цифру 0, есди Android, то цифру 1.'));
if (clientOS == 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}


// Задание_09
let clientDeviceYear = 2015;
clientDeviceYear = prompt ('В каком году произведён Ваш телефон');
if (clientOS == 0 && clientDeviceYear >= 2015 ) {
    alert ('Установите версию приложения для iOS по ссылке')
} else if (clientOS == 0 && clientDeviceYear < 2015) {
    alert ('Установите облегченную версию приложения для iOS по ссылке')

}
if (clientOS == 1 && clientDeviceYear >= 2015) {
    alert ('Установите версию приложения для Android по ссылке')
} else if (clientOS == 1 && clientDeviceYear < 2015) {
    alert ('Установите облегченную версию приложения для Android по ссылке')
}
