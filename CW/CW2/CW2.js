// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let  numberA = +prompt('Введіть число A');
let  numberB = +prompt('Введіть число B');
if(numberA>numberB){
    alert(numberA)
}else if (numberA<numberB){
    alert(numberB)
}else {
    alert('numberA=numberB ЧИСЛА РІВНІ')
}


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let numberRoom = +prompt("Введіть номер квартири");
if(numberRoom>=1&&numberRoom<=20){
    console.log('Квартира знаходиться в першому підїзді')
}else if(numberRoom>=21&&numberRoom<=48){
    console.log('Квартира знаходиться в другому підїзді')
}else if(numberRoom>=49&&numberRoom<=90){
    console.log('Квартира знаходиться в третьому підїзді')
}else {
    console.log('Квартири з таким номером немає в даному будинку')
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number=+prompt('Введіть число');
if(number===10){
    console.log('Вірно')
}else {
    console.log("Невірно")
}

let number=+prompt('Введіть число');(number===10)?console.log('Вірно'):console.log("Невірно")

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = [];
if (typeof x =='string') {
    console.log('1 string')
}else if (typeof x =='number'){
    console.log('2 number')
}else if (typeof x =='boolean'){
    console.log('3 boolean')
}else if (typeof x =='object'){
    console.log('4 object')
}else {
    console.log('Введено інший тип даних')
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let goOkten = +prompt("Яка сьогодні температура за вікном");
// switch (goOkten){
//     case (goOkten>=10):  //Питання Чи можливо при switch case задавати умову ?
//         console.log('йдем вчитися офлайн');
//         break;
//     default:
//         console.log('будем вчитися онлайн');
// }

let goOkten = +prompt("Яка сьогодні температура за вікном");
if (goOkten>=10&&goOkten<=20){
    console.log('Збирай речі і йди в офіс')
}else {
    console.log('хух, сьогодны вчимося онлайн')
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let  youNumber = +prompt('Введи число від 1 до 5');
switch (youNumber){
    case 1:
        document.write(`<h1>Ваш приз АВТОМОБІЛЬ</h1>`);
        break;
    case 2:
        document.write(`<h1>Ваш приз ТЕЛЕФОН</h1>`);
        break;
    case 3:
        document.write(`<h1>Ваш приз НОУТБУК</h1>`);
        break;
    case 4:
        document.write(`<h1>Ваш приз ГЕЛІКОПТЕР</h1>`);
        break;
    case 5:
        document.write(`<h1>Ваш приз КВАРТИРА</h1>`);
        break;
    default:
        document.write(`<h1>Спробуй іншого разу</h1>`)
}
