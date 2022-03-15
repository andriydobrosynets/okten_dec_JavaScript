// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form_one = document.forms.form_one;
form_one.onsubmit = function (e) {
    e.preventDefault();
    let nameInput = e.target.user_name.value;
    let ageInput = e.target.age.value;
    //console.log(ageInput,nameInput);
    //let user = {nameInput:nameInput,ageInput:ageInput}; назви ключів і значень олинакові тому можна їх не дублювати
    let user = {nameInput,ageInput};
    localStorage.setItem(nameInput,JSON.stringify(user));
};

    // оптимізований запис
    // let form_one = document.forms.form_one;
    // form_one.onsubmit = function (e) {
    //     e.preventDefault();
    //     localStorage.setItem('nameInput', JSON.stringify({
    //         nameInput: e.target.age.value,
    //         ageInput: e.target.username.value
    //     }));
    // }




// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let input_one = document.getElementById('model')
let input_two = document.getElementById('type')
let input_three = document.getElementById('volume')
let button = document.getElementById('button')
let construct = function (model, type , volume){
    let obj = {model : model , type: type, volume: volume}
    let cars = JSON.parse(localStorage.getItem('cars')) || []
    cars.push(obj)
    localStorage.setItem('cars',(JSON.stringify(cars)))
}
button.onclick = (e) =>{
    e.preventDefault()
    construct(input_one .value, input_two.value, input_three.value)
}

// зразок
// let carsArray = JSON.parse(localStorage.getItem('cars')) || [];
//
// document.forms.carForm.onsubmit = function (e) {
//     e.preventDefault();
//     let model = e.target.model.value;
//     let type = e.target.type.value;
//     let volume = e.target.volume.value;
//     let car = {model, type, volume}
//     carsArray.push(car);
//     localStorage.setItem('cars', JSON.stringify(carsArray));
//
// };