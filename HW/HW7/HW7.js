// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1, 'fedfef', 'erfer', 'refe@.com', "0974675782")
let user2 = new User(2, 'erfer', 'erfe', 'fersdfs@.com', "097467982")
let user3 = new User(3, 'refe', 'ref', 'erg@.com', '097456482')
let user4 = new User(4, 'ref', 'erfef', 're@.com', '097456482')
let user5 = new User(5, 'erf', 'Rok', 'reg@.com', '097463282')
let user6 = new User(15, 'ref', 'Pero', 'rge@.com', '097463456')
let user7 = new User(7, 'erf', 'Dar', 'rege@.com', '097464562')
let user8 = new User(8, 'cedc', 'Rak', 'rege@.com', '097463282')
let user9 = new User(9, 'esfsdf', 'dfs', 'rege@.com', '097475862')
let user10 = new User(10, 'fdgd', 'hryjh', 'gs@.com', '097465672')
let users = [];
users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersFilter = users.filter(function (id) {
    return id.id % 2 === 0;
})
console.log(usersFilter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersSort = users.sort(function (a,b) {
    return a.id - b.id;
})
console.log(usersSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
        constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let emptyArray=[]
let client1 =new Client(1,'Oksana','Super','oksana_super@gmail.com','0930230232',['bread','meet','apple','orange','juce'])
const client2 =new Client(2,'Ivan','Super','ivan_super@gmail.com','079868832',['bread','meet','apple','orange', 'milk'])
const client3 =new Client(3,'Oksana','Port','xbbcvb@gmail.com','0930230232',['bread','meet','apple','orange'])
const client4 =new Client(4,'dgfg','Ersfkrr','werw@gmail.com','0930230232',['bread','meet','apple','orange'])
const client5 =new Client(5,'Ffrkf','Adfsf','fserefes@gmail.com','0930230232',['bread','meet','orange'])
const client6 =new Client(6,'Gtywfgujdfhjd','Nmsd','iojhg@gmail.com','0930230232',['bread','meet','apple','orange'])
const client7 =new Client(7,'Bnvcn','Pefex','nvxf@gmail.com','0930230232',['bread','meet','apple','orange'])
const client8 =new Client(8,'Zsfe','Vcddf','verq@gmail.com','0930440232',['bread','meet','apple','orange'])
const client9 =new Client(9,'Pdvds','Aqerewr','brfde@gmail.com','0930230345',['bread','meet','apple','orange'])
const client10 =new Client(10,'Eetrt','Shjdg','qafsa @gmail.com','093975232',['bread','meet','apple','bananas','dsafasdf','daffda','orange'])
emptyArray.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
console.log(emptyArray)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let newOrder = emptyArray.sort(function (a,b){
    return a.order.length-b.order.length

})
console.log(newOrder)