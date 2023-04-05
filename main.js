
/* ---- Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears',];

fruits[3] = 'grapes';

fruits.push('mangos', 'pineapple');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'))

console.log(fruits); */

/*  --- object literals

const person = {
    firstName: 'john',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        City: 'Boston',
        state: 'MA'
    }
}

person.email = 'john@gmail.com';
console.log(person); */


/* --- Arrays of object
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting the boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]; */

/* loops --for
for(let i = 0; i <= 10; i++) {
    console.log(`for loop Number: ${i}`);
}

// loops --while
let i = 0;
while(i < 10) {
    console.log(`while loop Number: $(i)`);
    i++;
}
for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);*/

/* ---- conditional 
const x = 6;
const y = 11;

if(x > 5  && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}*/


/*const x = 9;

const color = 'green';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}*/

/*const addNums = num1 => num1 + 5;


console.log(addNums(5));*/

// Construction function
/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;

    }
}


// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

//console.log(person2.dob);
//console.log(person1.getBirthYear());
//console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1); */

// DOM

//console.log(window);

 //alert(1);


// Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));


// Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item')); 
//console.log(document.getElementsByTagName('li')); 
/*const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));*/

/*const ul = document.querySelector('.items');

//ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';*/

/*const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    //console.log(e.target.id);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    //console.log(nameInput.value);
    if(nameInput.value == '' || emailInput.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}