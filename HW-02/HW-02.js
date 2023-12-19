// Задание_01
let a = 10;
alert(`Задание_01: ${a}`);

let a1 = 20;
alert(`Задание_01: ${a1}`);


// Задание_02
let age = 'Задание_02: Первый iPhone был представлен Стивом Джобсом 9 января 2007 года.';
alert(age);


// Задание_03
let userName = 'Задание_03: Создателем языка JavaScript является - Брендан Эйх.';
alert(userName);

// Задание_04
let a4 = 10;
let b4 = 2;
alert(`Задание_04: a4 + b4 = ${a4+b4}`);
alert(`Задание_04: a4 - b4 = ${a4-b4}`);
alert(`Задание_04: a4 * b4 = ${a4*b4}`);
alert(`Задание_04: а4 / b4 = ${a4/b4}`);


// Задание_05
let a5 = 2;
let result = a5 ** 5;
alert(`Задание_05: 2 в степени 5 рано = ${result}`);


// Задание_06
a6 = 9;
b6 = 2;
alert(`Задание_06: Остаток от деления равно ${a6%b6}`);


// Задание_07
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(`Задание_07: NUM = ${num}`);


// Задание_08
let age8 = prompt('Сколько вам лет?')
alert(`Задание_08: Вам ${age8}`)


// Задание_09
const user = {
    name: 'Основы JavaScript',
    age: '8',
    isAdmin: 'false'
}


// Задание_09.01
console.log(user);
user['city of residence'] = "Ангарск";


// Задание_09.02
user.age = '19';


//Задание_09.03
delete user['city of resident'];


//Задание_09.04
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(`Задание 09.04: ${user[info]}`)


// Задание_10
let info10 = prompt('Как твоё имя ?');
alert(`Зaдание 10: Привет, ${info10}!`);
