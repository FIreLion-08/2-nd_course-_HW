//HW-05.js_Задание_08 - Оставил для себя не проверять
function numMonth() {
    let userNum = Number(prompt('Задание_08: Введит число, а я скажу к какому времени года он относится'));
    (userNum === 3) || (userNum === 4) || (userNum === 5) ? alert('Задание_08: Весна') :
    (userNum === 6) || (userNum === 7) || (userNum === 8) ? alert('Задание_08: Лето') :
    (userNum === 9) || (userNum === 10) || (userNum === 11) ? alert('Задание_08: Осень') :
    (userNum === 12) || (userNum === 1) || (userNum === 2) ? alert('Задание_08: Зима') :
    alert('Задание_08: Некорректное число')
}




//  Задание_01
const numbs01 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs01.length; i++) {
	if (numbs01[i] == 10) break;
	console.log('Задание_01:', numbs01[i]);
}
console.log('');


//  Задание_02
let numbs02 = [1, 5, 4, 10, 0, 3]
for (let i=0; numbs02.length; i++) {
    if (numbs02[i] == 4) {
        console.log('Задание 02', i)
    }
}
console.log('');


//  Задание_03
const numbs03 = [1, 5, 4, 10, 0, 3];
const numbs031 = numbs03.join(' ');
console.log('Задание 03: ', numbs031);
console.log('');


//  Задание_04



//  Задание_05



//  Задание_06



//  Задание_07



//  Задание_08
