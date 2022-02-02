// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let stringOne='hello'
console.log(stringOne)
document.write(`${stringOne}<br/>`)
alert(stringOne)//аналогічно для інших змінних

let stringTwo='owu'
console.log(stringTwo)
document.write(`${stringTwo}<br/>`)

let stringThree='com'
console.log(stringThree)
document.write(`${stringThree} <br/>`)

let numberOne= 1
console.log(numberOne)
document.write(`${numberOne} <br/>`)

let numberTwo=-999
console.log(numberTwo)
document.write(`${numberTwo} <br/>`)

let numberTree=3.14
console.log(numberTree)
document.write(`${numberTree} <br/>`)

let numberFour=2.7
console.log(numberFour)
document.write(`${numberFour}<br/>`)

let numberFive=16
console.log(numberFive)
document.write(`${numberFive}<br/>`)

let booleanOne=true
console.log(booleanOne)
document.write(`${booleanOne}<br/>`)

let booleanTwo=false
console.log(booleanTwo)
document.write(`${booleanTwo}<br/>`)

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let stringOne='hello'
stringOne='Hello'
console.log(stringOne)
document.write(`${stringOne}<br/>`)
alert(stringOne)//аналогічно для інших змінних

let stringTwo='owu'
stringTwo='OKTENNNNNNNN'
console.log(stringTwo)
document.write(`${stringTwo}<br/>`)

let stringThree='com'
stringThree='UA'
console.log(stringThree)
document.write(`${stringThree} <br/>`)

let numberOne= 1
numberOne=1234567890
console.log(numberOne)
document.write(`${numberOne} <br/>`)

let numberTwo=-999
numberTwo='Мінус двятсот девяносто девять'
console.log(numberTwo)
document.write(`${numberTwo} <br/>`)

let numberTree=3.14
numberTree='Число ПІ=3.14'
console.log(numberTree)
document.write(`${numberTree} <br/>`)

let numberFour=2.7
numberFour=798473824672856
console.log(numberFour)
document.write(`${numberFour}<br/>`)

let numberFive=16
numberFive=true
console.log(numberFive)
document.write(`${numberFive}<br/>`)

let booleanOne=true
booleanOne='PRAVDA'
console.log(booleanOne)
document.write(`${booleanOne}<br/>`)

let booleanTwo=false
booleanTwo=true
console.log(booleanTwo)
document.write(`${booleanTwo}<br/>`)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

let firstName='Andriy'
let middleName='Yaroslavovich'
let lastName='Dobrosynets'
//let person = firstName+" "+middleName+" "+lastName
let person = `${firstName} ${middleName} ${lastName}`
document.write(`<h1/>${person}`)
console.log(`${person}`)

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstName = prompt('Name')
let secondName = prompt ('Family')
let age = +prompt('Age')
document.write(`<h1/>Вітаю ${firstName} ${secondName}. Тобі ${age} років.`)
console.log(`Вітаю ${firstName} ${secondName}. Тобі ${age} років.`)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

let a = 5;
let b = 6;
console.log(a<b);
console.log(a>b);
console.log(a==b);
console.log(a>=b);
console.log(10==10);
console.log(10>=10);
console.log(10>10);
console.log(10<10);
console.log(10!=10);
console.log(123 === '123');
console.log(123 == '123');


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let a = 5;
document.write(str + a + "<br/>");//205 оскільки відбувається складання як строки + число
document.write(str - a + "<br/>");//15 JS під капотом розуміє що str це число і виконує функцію відніання
document.write(str * "2" + "<br/>");//40 аналогічно відбувається множення JS розуміє що це числа
document.write(str / 2 + "<br/>");//10