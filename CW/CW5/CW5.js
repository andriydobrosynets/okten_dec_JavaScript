// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (a,b,c) => {
    if (a<b && a<c )
        console.log(a)
    else if(c<b && c<a )
        console.log(c)
    else if (b<a && b<c)
        console.log(b)
}
minNumber(4,4,1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a,b,c) => {
    if (a>b && a>c )
        console.log(a)
    else if(c>b && c>a )
        console.log(c)
    else if (b>a && b>c)
        console.log(b)
}
maxNumber(454,56,3)

// - створити функцію яка повертає найбільше число з масиву ??????????????????????

let arr = [32,4,45,654,6575,23,42,21,43]
let maxNumber = (arr) => {
    let max = arr [0]
    for (const maxElement of arr) {
        if(maxElement>max)
            max=maxElement
    }
    return max
}
console.log(maxNumber(arr))

// - створити функцію яка повертає найменьше число з масиву

let array = [32,4,45,654,-6575,23,1,42,21,43]
let minNumber = (arr) => {
    let min = arr [0]
    for (const minElement of arr) {
        if(minElement<min)
            min=minElement
    }
    return min
}
console.log(minNumber(array))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let array = [32,4,45,54,75,23,1,42,21,43]
let sumMas = (arr) => {
    let sum = 0
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumMas(array))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let summArray = [1,2,3,4,5,34];
let sumElement = (array) =>{
    let sum = 0;
    for (const arrayElement of array) {
        sum = arrayElement + sum;
    }
    sArefm = sum/summArray.length;
    document.write(sArefm);
    return sArefm;
}
sumElement(summArray)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let  number = (a) =>{
    let min = arguments[0]
    let max = arguments[0]
    for (const numberElement of arguments) {
        if (numberElement > max) max = numberElement
        if (numberElement < min) max = numberElement
    }
    console.log("max ",max)
    return min
}
const min = number(2,3,4,5,6,7,8)
console.log("min ",min)


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arrElement = (x) => {
    let emptyArr=[]
    for (let i = 0; i < x; i++) {
        emptyArr[i]=Math.round(Math.random()*100)
    }
    function fan(x) {
        console.log(x);
    };
    fan(emptyArr)
}
arrElement(10)


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrElement = (x,b) => {
    let emptyArr=[]
    for ( let i = 0; i < x; i++) {
        emptyArr[i]=Math.round(Math.random()*b)
    }
    function fan(x) {
        console.log(x);
    }
    fan(emptyArr)
}
arrElement(10,100)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array =  [1,2,3]
let newArray =[]
let revers =() => {
    for ( let i=array.length-1;i>=0;i--){
        newArray.push(array[i])
    }
    console.log(newArray)
}
revers()