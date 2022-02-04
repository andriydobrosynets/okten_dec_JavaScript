// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = +prompt('Введіть число');
if(time<15){
    alert('Перша чверть')
}else if (time>=15 && time<30){
    alert('Друга чверть')
}else if (time>=30 && time<45){
    alert('Третя чверть')
}else if (time>=45 && time<60){
    alert('Четверта чверть')
}else {
    alert('Введіть число впроміжку від 1 до 59')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day =+prompt("Введіть число");
if(day<10){
    alert('Перша декада')
}else if (day>=10 && day<20){
    alert('Друга декада')
}else if (day>=20 && day<=31){
    alert('Третя декада')
}else {
    alert('Введіть число впроміжку від 1 до 31')
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = true;
if (test === true) {
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

let test1 = false;
if (test1 === true) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}

let test = true;
(test===true)?console.log('Вірно'):console.log('Неправильно');
let test1 = false;
(test1===true)?console.log('Вірно'):console.log('Неправильно');


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a =+prompt('Введіть 1,0,-3');
if(a!==0){
    console.log('Вірно')
}else{
    console.log('Не вірно')
}

let a =+prompt('Введіть 1,0,-3');
if(a!==0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}

let a =+prompt('Введіть 1,0,-3');
(a!==0)?console.log('Вірно'):console.log('Невірно')

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let day = +prompt('Введіть день тижня від 1 до 7')
switch (day) {
    case 1:
        alert('ПОНЕДІЛОК: вивчити HTML');
        break;
    case 2:
        alert('ВІВТОРОК: вивчити CSS');
        break;
    case 3:
        alert('СЕРЕДА: вивчити JS');
        break;
    case 4:
        alert('ЧЕТВЕР: вивчити REACT');
        break;
    case 5:
        alert('ПЯТНИЦЯ: вивчити Angular');
        break;
    case 6:
        alert('СУБОТА: вивчити NODE JS');
        break;
    case 7:
        alert('НЕДІЛЯ: Відпочинь');
        break;
    default:
        alert("Невірний день тижня");
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +prompt("Введіть рік")
if (year %4 === 0){
    alert('Рік високосний')
}else {
    alert('Рік не високосний')
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let name = prompt('Яка «офіційна» назва JavaScript?')
if (name === 'ECMAScript'){
    alert("Правильно!")
}else{
    alert('Не знаєте? ECMAScript!')
}

let name = prompt('Яка «офіційна» назва JavaScript?');
(name === 'ECMAScript')?alert("Правильно!"):alert('Не знаєте? ECMAScript!')
