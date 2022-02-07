// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numberArray = [4,5,65,34,346,545];
console.log(numberArray);
let stringArray = ['html','css','js','react','node.js'];
console.log(stringArray);
let stringNumberBooleanArray = [4,'react',-434343,true,'false'];
console.log(stringNumberBooleanArray);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array = [];
array[0]=1;
array[2]='owu';
array[3]='2121';
array[4]=true;
console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let text = ['Довільний текст','2','html','css','js','react','node.js',"efe",'dsf','efd'];
for (let i = 0; i < 10; i++) {
    const textArray = text[i];
    document.write(`<div>${textArray}</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let text = ['Довільний текст','2','html','css','js','react','node.js',"efe",'dsf','efd'];
for (let i = 0; i < text.length; i++) {
    const textArray = text[i];
    document.write(`<div>${textArray}-[${i}]</div>`)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let text = [1,2,3,'Довільний текст',true,'2','html','css','js','react',43443,'node.js',"efe",23,'dsf','efd'];
i=0;
while (i < text.length) {
    const textArray = text[i]
    document.write(`<h1>${textArray}</h1>`)
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let text = [1,2,3,'Довільний текст',true,'2','html',444,888,'css','js','react',43443,'node.js','Andriy','OKTEN',"efe",23,'dsf','efd'];
i=0;
while (i < text.length) {
    const textArray = text[i]
    document.write(`<h1>${textArray}-[${i}]</h1>`)
    i++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let array =[4,5,7,8,0,4,1,23,44,67];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let stringArray =['okten','js','react','html','css','node','java','c++','web','stars'];
for (let i = 0; i < 10; i++) {
    console.log(stringArray[i])
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let stringNumberBooleanArray =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars'];
for (let i = 0; i < 10; i++) {
    console.log(stringNumberBooleanArray[i])
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let stringNumberBooleanArray =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',];
for (const Element of stringNumberBooleanArray) {
    if(typeof Element == "boolean"){
        console.log(Element)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let stringNumberBooleanArray =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',];
for (const Element of stringNumberBooleanArray) {
    if(typeof Element == "number"){
        console.log(Element)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let stringNumberBooleanArray =['okten',4,'react',true,'css',false,'java',-454.65,'web','stars',];
for (const Element of stringNumberBooleanArray) {
    if(typeof Element == "string"){
        console.log(Element)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let array = [];
array[0]=1;
array[1]=2;
array[2]='owu';
array[3]='2121';
array[4]=true;
array[5]=1;
array[6]='OKTEN';
array[7]=34343;
array[8]=true;
array[9]=false;
for (let arrayElement of array) {
    console.log(arrayElement)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    const arrayElement =i;
    console.log(arrayElement);
    document.write(`${arrayElement}</br>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    const arrayElement =i;
    console.log(arrayElement);
    document.write(`${arrayElement}</br>`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i+=2) {
    const arrayElement =i;
        console.log(arrayElement);
        document.write(`${arrayElement}</br>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    const arrayElement =i;// данну змінну можна не вводити, а використовувати змінну 'i'
    if(arrayElement%2===0){
        console.log(arrayElement);
        document.write(`${arrayElement}</br>`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    const arrayElement =i;
    if(arrayElement%3===0){
        console.log(arrayElement);
        document.write(`${arrayElement}</br>`)
    }
}