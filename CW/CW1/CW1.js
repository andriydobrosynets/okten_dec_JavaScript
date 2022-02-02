// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

var arr = [];
let result = 0;
for (var i=0, t=10; i<t; i++) {
    arr.push(Math.floor(Math.random() * 100));
    result += arr[i]
}
console.log(arr);
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book ={
    name:'JavaScript for kids',
    pages:870,
    genre:'horor'
}
console.log(book)

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book ={
    name:'JavaScript for kids',
    pages:870,
    genre:'horor',
    author:'ktoto tam'
}
console.log(book)

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book = [
    {
        name:'JavaScript for kids',
        pages:870,
        genre:'horor',
        author:'ktoto tam'},
    {
        name:'shoto tam',
        pages:854,
        genre:'comedy',
        author:'ktoto tam'
    },
    {
        name:'Python',
        pages:3430,
        genre:'horor',
        author:'snake'
    }
]
console.log(book[0],book[1],book[2])

let book = [
    {
        name:'JavaScript for kids',
        pages:870,
        genre:'horor',
        author:'ktoto tam'},
    {
        name:'shoto tam',
        pages:854,
        genre:'comedy',
        author:'ktoto tam'
    },
    {
        name:'Python',
        pages:3430,
        genre:'horor',
        author:'snake'
    }
]
for (const bookElement of book) {
    console.log(bookElement)
}

let book = [
    {
        name:'JavaScript for kids',
        pages:870,
        genre:'horor',
        author:'ktoto tam'},
    {
        name:'shoto tam',
        pages:854,
        genre:'comedy',
        author:'ktoto tam'
    },
    {
        name:'Python',
        pages:3430,
        genre:'horor',
        author:'snake'
    }
]
for (let i = 0; i < book.length; i++) {
    const bookElement = book[i];
    console.log(bookElement)
}


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height =23;
let width = 10;
let s = height*width;
console.log(s)



// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC=10
let dC=4
let radius = dC/2
let pow = Math.pow (radius, 2)
let pi = 3.14157
let v=pi*pow*heightC
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3
let m = 4
let k=Math.sqrt(Math.pow(n,2)+Math.pow(m,2))
console.log(k)