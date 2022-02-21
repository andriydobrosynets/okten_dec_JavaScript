// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let text = document.getElementById('content').innerText
console.log(text)

// -- отримує текст з блоку з id "rules"

let textRules = document.getElementById('rules').innerText
console.log(textRules)

// -- замініть текст параграфа з id 'content' на будь-який інший

let textNew = document.getElementById('content')
textNew.innerHTML = 'Византи́я, Византи́йская импе́рия, Восто́чно-Ри́мская импе́рия, Восто́чная Ри́мская импе́рия, Греческая империя, самоназвание Держава Ромеев, Ромейская империя (395[~ 2]—1453) — государство, сформировавшееся в 395 году вследствие раздела Римской империи на западную и восточную части после смерти императора Феодосия I.'


// -- замініть текст параграфа з id 'rules' на будь-який інший

let textRulesNew = document.getElementById('rules')
textRulesNew.innerHTML='Объект встроенного языка — это сложная конструкция. Поэтому у неё есть характерные особенности, связанные именно с тем, что объект содержит в себе множество примитивных значений. С этими особенностями вы будете знакомиться постепенно, не сразу'


// -- змініть кожному елементу колір фону на червоний

let color = document.body.children
for (const colorElement of color) {
    colorElement.style.backgroundColor='red'
}

// -- змініть кожному елементу колір тексту на синій

let colorText = document.body.children
for (const colorElement of colorText) {
    colorElement.style.color='blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let nameRules1 = document.querySelectorAll('#rules')
console.log(nameRules1)

let nameRules = document.getElementById('rules')
console.log(nameRules.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let colorRules = document.getElementsByClassName('fc_rules')
for (const colorElement of colorRules) {
    colorElement.style.color='grey'
}