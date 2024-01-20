//  Задание_01: Преобразуйте строку js в верхний регистр JS.
console.log('Задание_01.');
let str01 = String(prompt('Задание_01: Введите строку'));
console.log(str01.toUpperCase());
console.log('');



//  Задание_02: Создайте функцию, которая в качестве параметров принимает массив строк и строку.Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.
// Пример вызова:
// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []
console.log('Задание 02')
function searchArrs(arr02, str02) {
    return arr02.filter(el => el.toLowerCase().startsWith(str02))
}
console.log(searchArrs(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log('');



//  Задание_03: Округлите число 32.58884: До меньшего целого, До большего целого и До ближайшего целого.
console.log('Задание 03. Округление');
let num03 = Number(prompt('Задание_03: Введите число')); // число 32.58884
console.log('В меньшую сторону =', Math.floor(num03));
console.log('В большую сторону =', Math.ceil(num03));
console.log('До целого числа =', Math.round(num03));
console.log('');



//  Задание_04: Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.
console.log('Задание 04.');
const num4 = [52, 53, 49, 77, 21, 32];
const selectionOfnumbers = (arrNum4) => {
    console.log('Наибольшее число:', Math.max.apply(null, arrNum4)) //77
    console.log('Наименьшее число:', Math.min.apply(null, arrNum4)) //21
}
selectionOfnumbers(num4);
console.log('');



//  Задание_05: Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
console.log('Задание 05.');
let num41 = Number(prompt('Задание_05: Введите диапозон рандомного числа с:')); // В задании число 1
let num42 = Number(prompt('Задание_05: Введите диапозон рандомного числа до:')); // В задании число 10
function randNum4(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
console.log('Рандомное число =', randNum4(num41,num42));
console.log('');



//  Задание_06: Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.
// Пример вызова:
// getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего числа, получаем 3
// getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами от 0 до 12, длина массива 12 / 2 = 6
console.log('Задание 06.');
let n6 = Number(prompt('Задание_06: Введите диапозон массива от 0 до __'));
function randNum7(n6) {
    const arr6=[];
    let i6 = n6 / 2;
    i6 = Math.floor(i6);
    for (i=0; i<i6; i++){
        arr6.push(Math.round(Math.random() * n6));
    };
    return arr6;
}
console.log(randNum7(n6));
console.log('');



//  Задание_07: Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.
console.log('Задание 07.');
let num71 = Number(prompt('Задание_07: Введите диапозон рандомного числа с:'));
let num72 = Number(prompt('Задание_07: Введите диапозон рандомного числа до:'));
function randNum7(min, max) {
    return Math.round(Math.random() * (max - min+1)) + min;
  }
console.log('Рандомное число =', randNum7(num71,num72));
console.log('');



//  Задание_08: Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.
console.log('Задание 08.');
const nowDate08 = new Date();
console.log('Текщая дата: ',nowDate08);
console.log('');



//  Задание_09: Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.
// Подсказка:
// Решить эту задачу вам помогут 2 метода даты: getDate() и setDate(), один из методов должен быть передан в качестве параметра второму
console.log('Задание 09.');
const n9 = Number(prompt('Задание_09: ВВедите кол-во дней'));
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + n9);
console.log('Дата:',currentDate, 'через:', n9, 'дней');
console.log('');



//  Задание_10: Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.
console.log('Задание 10.');
let welcome;
const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
const months = ['Января','Февраля','Марта','Апреля','Майя','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

const nowDate = new Date(prompt('Задание 10.Введите год'), prompt('Задание 10.Введите номер месяца'), prompt('Задание 10.Введите день месяца'), prompt('Задание 10.Введите час'), prompt('Задание 10.Введите минуты'), prompt('Задание 10.Введите секунды'));

let date = nowDate.getDate();
if (date <10) {
    date='0'+date;
};
let month = months[nowDate.getMonth()-1];
let day = days[nowDate.getDate()];
let hours = nowDate.getHours();
if (hours<10) {
    hours='0'+hours;
};
let minutes = nowDate.getMinutes();
if (minutes<10) {
    minutes ='0'+ minutes;
};
let seconds = nowDate.getSeconds();
if (seconds<10) {
    seconds='0'+ seconds;
}

console.log(`Дата: ${date} ${month} ${nowDate.getFullYear()} - это ${day}.`);
console.log(`Время: ${hours}:${minutes}:${seconds}`);
console.log('');
