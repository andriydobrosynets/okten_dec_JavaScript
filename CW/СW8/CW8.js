// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let newClas = document.getElementById('main_header')
newClas.classList.add('dec2021')
console.log(newClas)
// b) робить шириниу елементу ul 400px

let mainHeader = document.getElementsByTagName('ul')
for (const mainHeaderElement of mainHeader) {
    mainHeaderElement.style.width = '400px'
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let widthElement = document.getElementsByClassName('text_segment')
for (const oneElement of widthElement) {
    oneElement.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let text = document.getElementsByClassName('listElement2')
for (const textElement of text) {
    console.log(textElement.innerText)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let elementLi = document.getElementsByTagName('li')
for (const li of elementLi){
    li.style.backgroundColor = 'grey'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aElement = document.getElementsByTagName('a')
for (const element of aElement) {
    element.setAttribute('class','dsd')
    element.classList.add('refesfes')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aElement = document.getElementsByTagName('a')
for (const element of aElement) {
    if (element.innerText === 'link3'){
        element.style.fontSize ='40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aElement = document.getElementsByTagName('a')
for (const element of aElement) {
    element.setAttribute('class',`element_${element.innerText}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header')
for (const header of subHeader){
    header.style.backgroundColor = prompt()
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header')
for (const header of subHeader){
    if(header.innerText === 'content 2 segment'){
        header.style.color = prompt()
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content_1 = document.getElementsByClassName('content_1')
for (const content of content_1){
    content.innerText = prompt()
}

// l) отримати елементи p та змінити їм padding на 20px

let elementP = document.getElementsByTagName('p')
for (const p of elementP) {
    p.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text_2 = document.getElementsByClassName('text2')
for (const text of text_2) {
    text.innerText = 'dec-2021'
}