// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function calc(a,b) {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    }
    if (arguments.length === 2) {
        let concatenation= arguments[0] + arguments[1];
        console.log(concatenation);
        return concatenation;
    }
}
calc(14,222);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arrOne = [1,2,3,4]
let arrTwo = [2,3,4,5]
function sum (a,b){
    let newArr = []
    for (let i = 0; i < a.length; i++) {
        newArr.push(a[i] + b[i]);
    }
    console.log(newArr)
    return newArr;
}
sum(arrOne,arrTwo)



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let myArr =[{name: 'Dima', age: 13}, {model: 'Camry'}];
function namaAgeModel(arr) {
    let key =[];
    for (const keyElement of arr) {
        for (const keyElementElement in keyElement) {
            key.push(keyElementElement)
        }
    }
    console.log(key)
}
namaAgeModel(myArr)


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


let myArr =[{name: 'Dima', age: 13}, {model: 'Camry'}];
function fild(arr) {
    let key =[];
    for (const keyElement of arr) {
        for (const keyElementElement in keyElement) {
            key.push(keyElement[keyElementElement])
        }
    }
    console.log(key)
}
fild(myArr)