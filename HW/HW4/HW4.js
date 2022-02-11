// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function ploscha(a,b) {
   let s=a*b;
    console.log(s)
    return s;
}
ploscha(2,3)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function kolo(r){
   let s=3.14*(r**2);
    console.log(s);
    return s;
}
kolo(2)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(r,h,pi=3.14) {
    Sbich=2*pi*r*h;
    Socn=Math.pow(r,2)*pi;
    S=Sbich+2*Socn;
    console.log(S)
    return S;
}
cylinder(5,2);

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = ['dsfdfs','sdfdfsd',232];
function xxx (){
    console.log(array);
}
xxx();

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function myText(text) {
    document.write(`<p>${text}</p>`)
}
myText('OKTEN');
myText('THE');
myText('BEST');
АБО
function divText (text,text1) {
    arguments[0] = 'OKTENWEB'
    arguments[1] = 'Школа програмування'
    document.write(`
        <div>
            <h1>
                ${arguments[0]}
            </h1>
            <h3>
                ${arguments[1]}
            </h3>
        </div>
    `)
}
divText()


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulLi(text) {
    document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
         </ul>`)

}
ulLi('OKTEN')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulLi(text,a) {
    for (let i = 0; i < a; i++) {
        document.write(`<ul>
            <li>${text}</li>
         </ul>`)
    }
}
ulLi('OKTEN',6)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let myArray = ['dsfdfs','sdfdfsd',232, true];
function xxx (array){
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
function myAnimals() {
    for (let i = 0; i < animals.length; i++) {
        const animal = animals[i];
        document.write(`<ul>
             <li>${animal.name} -${animal.type} -${animal.age}  </li>
             </ul>`)
    }
}
myAnimals()
