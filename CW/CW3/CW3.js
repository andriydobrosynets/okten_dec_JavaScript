// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let array=[2,17,13,6,22,31,45,66,100,-18];
i=0
while (i<array.length){
    console.log(array[i]);
    i++
}

//     2. перебрати його циклом for

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    console.log(arrayElement)
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let array=[2,17,13,6,22,31,45,66,100,-18];
i=0
while (i<array.length){
    i++
    if(i%2===1){
        console.log(array[i]);
    }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array.length; i++) {
    if (i%2===1){
        console.log(array[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let array=[2,17,13,6,22,31,45,66,100,-18];
i=0
while (i<array.length){
    i++
    if(array[i]%2===0){
        console.log(array[i]);
    }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let j = 0; j < array.length; j++) {
    if(array[j]%2===0){
        console.log(array[j]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let j = 0; j < array.length; j++) {
    if(array[j]%3===0){
        array[j]='okten'
    }
}
console.log(array)

// 8. вивести масив в зворотньому порядку.

let array=[2,17,13,6,22,31,45,66,100,-18];
console.log(array.reverse());

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length-1; i >=0; i--) {
    const arrayElement = array[i];
    console.log(arrayElement)
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let array=[2,17,13,6,22,31,45,66,100,-18];
i=array.length-1;
while (i>=0){
    console.log(array[i]);
    i--
}

//     2. перебрати його циклом for

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let i=array.length-1; i >=0; i--) {
    const arrayElement = array[i];
    console.log(arrayElement)
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let array=[2,17,13,6,22,31,45,66,100,-18];
i=array.length-1
while (i>=0){
    i--
    if(i%2===1){
        console.log(array[i]);
    }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length-1; i>=0; i--) {
    if (i%2===1){
        console.log(array[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let array=[2,17,13,6,22,31,45,66,100,-18];
i=array.length-1;
while (i>=0){
    i--
    if(array[i]%2===0){
        console.log(array[i]);
    }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let j = array.length-1; j >=0; j--) {
    if(array[j]%2===0){
        console.log(array[j]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

let array=[2,17,13,6,22,31,45,66,100,-18];
for (let j = array.length-1; j >=0; j--) {
    if(array[j]%3===0){
        array[j]='okten'
    }
    console.log(array[j])
}