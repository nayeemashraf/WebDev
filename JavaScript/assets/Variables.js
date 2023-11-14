let variable; // declares a variable, which gets assigned a value of undefined by default during initialization.

let example = "hi"; // declares a variable, which also gets assigned a value of undefined initially, but when that line of code is actually reached during execution, it gets reassigned to the string "hi".

// Declaring and assigning value to a variable in the same line is called initialization. Example let a = 123;

//💡 Variables
// Variables in JavaScript are containers that hold reusable data. It is the basic unit of storage in a program.
// The value stored in a variable can be changed during program execution. JavaScript is a dynamically typed (also called loosely typed) scripting language. That is, in JavaScript variables can receive different data types over time.
// A variable is only a name given to a memory location, all the operations done on the variable effects that memory location.
// In JavaScript, all the variables must be declared before they can be used.

// JavaScript is also known as untyped language. This means, that once a variable is created in JavaScript using the keyword var or let, we can store any type of value in this variable supported by JavaScript.

//💡 var variable
// created a variable for storing a number
var num = 5;

// storing a string in the variable 'num'
num = "This is a string";

// storing a boolean value
var qualified = true;

// Variables in JavaScript can also evaluate simple mathematical expressions and return their value.
// storing a mathematical expression
var Exp = 5 + 10 + 1;
console.log(Exp); //🔥 16

//* We can redeclare and reassign variables declared with "var" keyword anywhere in the code.
var x = 2;
var x = 3; // Here we redeclared the variable x. Simply, we are asking declare the variable x again.
x = 4; // Here we updated/reassigned x with a new value.

// Variables declared with var outside of a code { } block can be accessed from anywhere in program.
var x = 'hello';
{
  console.log(x);
}

// Variables declared with var inside of a code { } block can be accessed from outside the block.
{
  var x = 2;
}
console.log(x);  // x CAN be used here


// Redeclaring a variable with "var" keyword inside a block will also redeclare the variable outside the block:

var txt = 'outside the block';
{
    var txt = 'inside the block';     // Here we redeclared the variable 'txt'.
    console.log(txt);    //🔥 inside the block
}
console.log(txt);   //🔥 inside the block 

// Variables defined with var are hoisted to the top and can be initialized at any time. Meaning: variables declared with var can be used before they are declared.
person = "John"; // Here we assigned a value to an undeclared variable.
console.log(person); // we executed/used the variable even when it hasn't been yet declared.
var person; // Now, we declared the variable "person".
//🔥 John


// After ES6 (2015), we now have two new variable containers: let and const. Let’s make use of the let variable.

//💡 let variable
let JavaScript;        // undefined datatype example.
let dataType = 'String';     // string datatype.

// We can also declare multiple variables in a single line separated by comma.
let one = 1, two = 2, three = 3;

//* Variables defined with 'let' cannot be redeclared in the same scope but can only be updated/reassigned.
let x = 2;
x = 6;        // Allowed, We assigned new value to variable 'x' without redeclaring it.
let x = 4;    // Not allowed, because variable 'x' has already been declared.
{
  let y = "Hi";
  let y = 25;     // Not allowed.
  y = 55;         // Allowed, We assigned new value to variable 'y' without redeclaring it.
}

// Redeclaring a variable with let, in another block, is allowed:
let allowed = 2;   // Allowed

{
let allowed = 3;   // Allowed
}

{
let allowed = 4;    // Allowed
}

// Variables defined with let are also hoisted to the top of the block, but not initialized. Meaning: Variables defined with let must be Declared before use.
lol = 'hello World';
console.log(lol);    // Cannot use before declaration.
let lol;      //🔥 ReferenceError: Cannot access 'lol' before initialization   

//💡 Variables defined with let have Block Scope.

// Redeclaring a let variable inside a block will not redeclare the variable outside the block.
let different = "I cannot be altered";

{
    let different = "I am Independent";
    console.log(different);
}
//🔥 I am Independent           // Output of 'different' inside the block { }.

console.log(different);
//🔥 I cannot be altered       // Output of 'different' outside the block { }.


// Variables declared with let inside a { } block cannot be accessed from outside the block.

{
  let x = 2;
}
console.log(x);  // x can NOT be used here


//💡 const variable
// Const is another variable type assigned to data whose value cannot and will not change throughout the script. It defines a constant reference to a value.

const language = 'Java';
language = 'Python';    // will give Assignment to constant variable error. Because we have changed the value.

//* variables declared with 'const' must be assigned a value when they are declared.
const invalid;         // Not allowed.
invalid = "hello"; 

// const variables have block scope. Variables declared with const cannot be redeclared or reassigned/updated in the same scope.
const prohibited = 2;
const prohibited = 2;   // We cannot redeclare the variable 'prohibited' again. It will throw an error because it has already been declared.
prohibited = 4;         // We cannot update/reassign variable 'prohibited' with a new value.

// Redeclaring a variable with 'const' in another scope or in another block is allowed.

const valid = 2;       // Allowed
{
  const valid = 3;   // Allowed
}

{
  const valid = 4;   // Allowed
}

// Variables defined with const are hoisted to the top of the block, but not initialized. Meaning: Variables defined with const must be Declared before use.
alert(name);    // First we should declare the variable before using it. //⚠️ ignore strike through.
const name = "String";


//💡 Constant Arrays
// You can change the elements of a constant array:

// You can create a const array like this:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// But you can NOT reassign the array: the reference to the array is stored in a variable. However, the reference itself is constant and cannot be reassigned.

cars = ["Toyota", "Volvo", "Audi"];    //🔥 Error: Assignment to constant variable.

// Constant Objects
// You can change the properties of a constant object:

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign the object: the reference to the object is stored in a variable. However, the reference itself is constant and cannot be reassigned.

const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    //🔥 Error: Assignment to constant variable.

//⚡ Use const when you declare:
// A new Array
// A new Object
// A new Function
// A new RegExp

//? How a variable works 🤷🏻‍♂️ 
// When we declare a variable, a memory container is allocated for the variable. A variable name is just a label of that container, which holds the value that we assign to a variable. So, if we reassign/update the variable it’s more likely an entirely new container is created for the new value and at some point the previous value box is cleaned up by the garbage collector, since nothing is using it.

//💡 Assignment to another variable
// We can assign the value of one variable to another variable like this:
let source = 'abc';
let recipient = source;
// Here the variable 'recipient' is assigned the value of 'source', not the address of 'source' in memory. Thus, 'recipient' now holds the same value as 'source'. If we compare the two variables 'source' and 'recipient' we get 'true' as the two variables refer to the same value now. 
source === recipient;  //🔥 true


//💡 When to use semi-colon?
// we can omit the semi-colon but it is recommended to use the semi-colon at the end of a statement.
// whenever we declare a variable we end the statement with a semi-colon. The variable can hold a string, number, function, an array or an object.

const arrArr = [1, 2, 3];

const funFun = function() {
  return 'hello world'
};

const objObj = {
  one: 'one',
  two: 2
};

//💡 Naming Convention
// The popular naming conventions are: camelCase, PascalCase, snake_case, and kebab-case. However, only first 3 are used mainly.

// camelCase
let firstName;

// PascalCase
let LastName;

// snake_case
let user_name;

// kebab-case
// It is not a universal convention in programming languages because not all languages support it due to the interpretation of hyphen in the identifier (variable, function, or class) or other syntactical considerations.

// let not-allowed = 'In JavaScript';
// JavaScript interprets the hyphen (-) as a minus symbol. So, using it in variable or function name would lead to syntax errors or unexpected behavior.

// Variables defined with let can be declared with uppercase or lowercase, but a common convention is to use camelCase.
// Use camelCase for functions and Booleans.
function calculateTotalAmount() {
    // code...
}

let isUserLoggedIn = true;

// Constants can be declared with uppercase or lowercase, but a common convention is to use all-uppercase letters.
const NAME = "Sam";