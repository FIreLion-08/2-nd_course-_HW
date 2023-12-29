//  Задание_01
function min(a1, b1) {
    a1 <= b1 ? console.log(a1) : console.log(b1);
}
min(8, 4);
min(6, 6);


//  Задание_02
function classification(a2) {
    a2 % 2 === 0 ? console.log('Число четное') : console.log('Число нечетное');
}
classification(2);


//  Задание_03
let squared1 = (a3) => a**2
squared1(5);

let squared2 = (a3) => {
    let result = a3**2;
    return result;
}
squared2(5);


//  Задание_04
let userAnswer = prompt('Сколько тебе лет?');
let greeting = (userAnswer < 0) ? 'Вы ввели неправильное значение' :
(userAnswer <= 12) ? 'Привет, друг!' :
'Добро пожаловать!';
alert(greeting);


//  Задание_05
function num(a5, b5) {
    isNaN(a5) || isNaN(b5) ?  console.log('Одно или оба значения не являются числом') : console.log(a * b);
}
num(5, 4);


//  Задание_06
function num() {
    let NumUser = prompt('Введите число');
    let squared6 = NumUser ** 2;
    isNaN(NumUser) ? console.log('Переданный параметр не является числом') : console.log(`${NumUser} в кубе равняется ${NumUser}`);
}
num();

//  Задание_07

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
};

const circle2 = {
    radius: 4,
    getArea: getArea,
    getPerimeter: getPerimeter,
};

function getArea() {
    return 3.14 * (this.radius ** 2);
}
function getPerimeter() {
    return 2 * 3.14 * this.radius;
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


//Задание 8
function numMonth() {
    let userNum = Number(prompt('Введит число, а я скажу к какому времени года он относится'));
    (userNum === 3) || (userNum === 4) || (userNum === 5) ? alert('Весна') :
    (userNum === 6) || (userNum === 7) || (userNum === 8) ? alert('Лето') :
    (userNum === 9) || (userNum === 10) || (userNum === 11) ? alert('Осень') :
    (userNum === 12) || (userNum === 1) || (userNum === 2) ? alert('Зима') :
    alert('Некорректное число')
}
