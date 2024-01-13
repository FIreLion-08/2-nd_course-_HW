//HW-05.js_Задание_08 - Оставил для себя не проверять
function numMonth() {
    let userNum = Number(prompt('Задание_08: Введит число, а я скажу к какому времени года он относится'));
    (userNum === 3) || (userNum === 4) || (userNum === 5) ? alert('Задание_08: Весна') :
    (userNum === 6) || (userNum === 7) || (userNum === 8) ? alert('Задание_08: Лето') :
    (userNum === 9) || (userNum === 10) || (userNum === 11) ? alert('Задание_08: Осень') :
    (userNum === 12) || (userNum === 1) || (userNum === 2) ? alert('Задание_08: Зима') :
    alert('Задание_08: Некорректное число')
}



//  Задание_01: Дан массив: [1, 5, 4, 10, 0, 3]. Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.
const numbs01 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs01.length; i++) {
	if (numbs01[i] == 10) break;
	console.log('Задание_01:', numbs01[i]);
}
console.log('');



//  Задание_02: Дан массив: [1, 5, 4, 10, 0, 3]. Найдите позицию (индекс) числа 4 в этом массиве. Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.
let numbs02 = [1, 5, 4, 10, 0, 3]
for (let i=0; i<numbs02.length; i++) {
    if (numbs02[i] == 4) {
        console.log('Задание 02', i);
        // break;
    }
};
console.log('');



//  Задание_03: Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').
let numbs03 = [1, 5, 4, 10, 0, 3];
numbs03 = numbs03.join(' ');
console.log('Задание 03:', numbs03);
console.log('');



//  Задание_04: С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].
let array04 = [];
for (let i = 0, n=1; i < 3; i++) {
	array04[i] = []; // создаем подмассив
	for (let j = 0; j < 3; j++) {
		array04[i].push(1); // заполняем подмассив числами
	}
}
console.log('Задание 04:', array04);
console.log('');


//  Задание_05: Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.
let array05 = [1, 1, 1];
array05.push(2, 2, 2);
console.log('Задание 05:', array05);
console.log('');



//  Задание_06: Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.
let array06=[9, 8, 7, 6, 'a', 5];
array06=array06.sort(); // Отсортировываем букву и переносим в конец
console.log('Задание 06:', array06);
array06.pop(); // Удаляем последнее значение
console.log('Задание 06:', array06);
console.log('');



//  Задание_07: Дан массив: [9, 8, 7, 6, 5].Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».
let array07 = [9, 8, 7, 6, 5];
let GuessNumb08 = array07.includes(Number(prompt('Задание 07: Угадайте загаданное число')));
if (GuessNumb08 == 1) {
    alert('Задание 07: «Угадал»');
} else {
    alert('Задание 07: «Не угадал»');
}



//  Задание_08: Дана строка: 'abcdef'. Необходимо, чтобы программа вывела в консоль 'fedcba'.
let str08 = 'abcdef';
console.log('Задание 08:', [...str08].reverse().join(''))
console.log('');



//  Задание_09: Дан массив: [[1, 2, 3,],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].
const array09 = [[1, 2, 3,],[4, 5, 6]];
console.log('Задание 09: Было', array09);
let result09 = [].concat(...array09);
console.log('Задание 09: Стало', result09);
console.log('');



//  Задание_10: Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива. Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего.
const randomArray10 = [4, 2, 7, 4, 8, 9, 1]
let sum = 0
for (let index = 0; index < randomArray10.length - 1; index++) {
    console.log('Задание 10:', randomArray10[index] + randomArray10[index + 1]);
}
console.log('');



//  Задание_11: Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел. Подсказка: для решения задачи используйте map()
const array11 = [32, 86, 13, 4, 0, -6];
const square11 = array11.map(el=>el*el);
console.log('Задание 11:', square11);
console.log('');



//  Задание_12: Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
//  Пример вызова: getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]
const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
console.log('Задание 12:', getLengthWords);
const newArray12 = [];
for (let i = 0; i < getLengthWords.length; i++) {
    newArray12.push(getLengthWords[i].length);
}
console.log('Задание 12: Кол-во символов в слове', newArray12);
console.log('');



//  Задание_13: Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.
const negative = [];
function filterPositive(array) {
    for (let i = 0; i < array.length; i++) {
        if (filterPositive(array[i]) < 0) {
            negative.push()
        }
    }
}
filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]
console.log('');



//  Задание_14: Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10. В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будет два массива: исходный массив и массив с четными значениями.
// console.log('задание №14');
// let massiv14 = [];
// for (let i = 0; i<10; i++) {
//     massiv15.push(Math.round(Math.random()*10));
// };
// console.log('задание №14', massiv14);
// console.log('');



//  Задание_15: Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10. Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль. Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве.
console.log('Задание №15');
let massiv15 = [];
for (let i = 0; i<6; i++) {
    massiv15.push(Math.round(Math.random()*10));
};
console.log(massiv15);

const arithmeticMean = (massiv15.reduce((a,b)=>(a+b)))/(massiv15.length);
console.log('Средне арифметическое значение =', arithmeticMean.toFixed(2));