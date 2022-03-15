// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favourites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let key = 'key'
let changePage = document.createElement('button')
changePage.innerText = 'Favorites'
let divWrap = document.createElement('div')
divWrap.classList.add('Wrap')
document.body.append(divWrap,changePage)
changePage.onclick =() =>{
    document.location.href = 'favourites.html'
}
for (let item of users ){
    let div = document.createElement('div')
    let button = document.createElement('button')
    button.innerText = 'add to favourite '
    divWrap.append(div)
    div.append(button)
    button.onclick = () =>{
        let favourites = JSON.parse(localStorage.getItem(key)) || []
        favourites.push(item)
        localStorage.setItem(key, (JSON.stringify(favourites)))
    }
}