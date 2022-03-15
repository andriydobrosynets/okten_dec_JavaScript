let key = 'key'
let container = document.getElementById('container');
let users = JSON.parse(localStorage.getItem(key))
for (let item of users){
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    let content = document.createElement('div');
    content.innerText = `Name: ${item.name} Age: ${item.age} Status: ${item.status}`;
    userDiv.appendChild(content);
    container.appendChild(userDiv);
}