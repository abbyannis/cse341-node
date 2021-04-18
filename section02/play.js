/*
// Understanding Arrow Functions
const names = 'Abby';
let age = 44;
const hasHobbies = true;

age = 45;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );
}

//const add = (a, b) => a + b;
//const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

//console.log(add(1, 2));
//console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(names, age, hasHobbies));*/

/*
// Working with Objects, Properties & Methods
const person = {
    name: 'Abby',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

//person.greet();

const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies) {
//    console.log(hobby);
//}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies); */

/*
// Arrays, Objects, & Reference Types
const hobbies = ['Sports', 'Cooking'];

hobbies.push('Programming');
console.log(hobbies);*/

/*
// Understanding Spread & Rest Operators
const person = { // objects use {}
    name: 'Abby',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking']; // arrays use []
//const copiedArray = hobbies.slice();
//const copiedArray = [hobbies]; // create array within array
const copiedArray = [...hobbies]; // spread - copies individual items
console.log(copiedArray);

const toArray = (...args) => { // ... used here as a rest operator - allows for 
    return args;               // unspecified number of arguments
}

console.log(toArray(1, 2, 3, 4));*/

/*
// Destructuring
const person = { // objects use {}
    name: 'Abby',
    age: 44,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

//const printName = (person) => {
 //   console.log(person.name);
//}

const printName = ({name}) => {
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);*/

// Async Code & Promises - Asynchronous code does not finish immediately
const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    //fetchData(text => {
    //    console.log(text);
    //});
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello!');
console.log('Hi!');

// Template literals
const name = 'Abby';
const age = 44;
console.log(`My name is ${name} and I am ${age} years old;`);