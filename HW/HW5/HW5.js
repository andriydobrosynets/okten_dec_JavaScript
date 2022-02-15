// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let ploscha=(a,b)=> {
    let s=a*b;
    console.log(s)
    return s;
}
ploscha(3,3)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let kolo = (r)=>{
    let s=3.14*(r**2);
    console.log(s);
    return s;
}
kolo(2)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (r,h,pi=3.14)=> {
    s_bich=2*pi*r*h;
    s_ocn=Math.pow(r,2)*pi;
    s=s_bich+2*s_ocn;
    console.log(s)
    return s;
}
cylinder(5,2);



// - створити функцію яка приймає масив та виводить кожен його елемент

let array = ['dsfdfs','sdfdfsd',232];
let xxx = () =>{
    console.log(array);
}
xxx();

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let myText =(text)=> {
    document.write(`<p>${text}</p>`)
}
myText('OKTEN');
myText('THE');
myText('BEST');

let divText = (text,text1) => {
    document.write(`
        <div>
            <h1>
                ${text}
            </h1>
            <h3>
                ${text1}
            </h3>
        </div>
    `)
}
divText('OKTENWEB','Школа програмування')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulLi = (text) => {
    document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
         </ul>`)

}
ulLi('OKTEN')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulLi = (text,a) => {
    document.write(`<ol>`)
    for (let i = 0; i < a; i++) {
        document.write    (`<li>${text}</li>`)
    }
    document.write(`</ol>`)
}
ulLi('OKTEN',6)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let myArray = ['dsfdfs','sdfdfsd',232, true];
let xxx =  (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<ul>
            <li>${array[i]}</li>
         </ul>`)
    }
}
xxx(myArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//масив взятий з інтернету , тому поля відрізняються від зазаначениих в завданні

let animals = [
    { name: 'Vasya', type: 'Cat', age: 4},
    { name: 'Murka', type: 'Cat', age: 1.5 },
    { name: 'Varna', type: 'Turtle', age: 21 },
    { name: 'Kesha', type: 'Parrot', age: 3 },
    { name: 'Nayda', type: 'Dog', age: 2.5 },
    { name: 'Pufic', type: 'Humster', age: 2.5 },
    { name: 'Randy', type: 'dog', age: 12 },
];
let myAnimals = (pets) => {
    document.write(`<ol>`)
    for (let i = 0; i < pets.length; i++) {
        const animal = pets[i];
        document.write (`<li>${animal.name} -${animal.type} -${animal.age}  </li>`)
    }
    document.write(`<\ol>`)
}
myAnimals(animals)