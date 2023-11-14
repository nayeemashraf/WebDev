//💡 Scope determines the accessibility (visibility) of variables.
// Space or environment in which a certain variable is declared.

// Scope of a variable: Region of our code where a certain variable can be accessed.

// Before ES6(2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const.

// variables declared with 'let' and 'const' have block scope in addition to global scope. That is, when they are declared inside a block, they can only be accessed within that block. when declared outside of a block, they can be accessed anywhere in the code.

// In JavaScript, by default we are in the global scope. In web browsers, it's the window scope (global object). Variables declared in the global scope become properties of the global object.

//💡 Variables declared in global scope (outside of a code block {}) are known as global variables, Variables declared inside the code block are known as local variables.


//💡 Block Scope
// variable 'message' is only accessible within the code block.
{
  let message = "This is Block-Scoped";
  console.log(message); //🔥 This is Block-Scoped
}
console.log(message); //🔥 ReferenceError: message is not defined

//* The code block can be a function, an if-else, a loop or an object.

// We cannot access the 'message' variable outside of the 'start' function.
function start() {
  const message = "hello";
  console.log(message);
}
let load = message;
console.log(message);

// Same would be true for an if block.
// We are calling 'another' outside of its own block. Which isn't going to work.
function Go() {
  let message = "Hey";
  if (true) {
    const another = "bye";
  }
  console.log(another);
}
Go();

// In case of a loop.
// We now have a for loop. Here 'i' is a variable that is only accessible within its own block. It is now a local variable of that block.
function Gone() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // 'i' has scope within this curly braces.
  }
  let view = i; // Not accessible here.
  console.log(i); // Not accessible here.
}
Gone();

//💡 Block scoped variables are visible within the same block and any nested blocks.
if (true) {
  let person = "jhon smith";
  {
    let greet = "good bye";
    console.log(greet, person); //🔥 'good bye jhon smith'
    // This inner block is able to access the 'person' variable because it is nested inside another block (in this case in 'if' block) where the variable ('person') is defined.
  }
  console.log(person); //🔥 'jhon smith'
  console.log(greet); //🔥 ReferenceError: greet is not defined
}

//💡 It is valid to have variables with identical names in separate blocks. We are allowed to redeclare a variable outside of a code block. Since the scope of these variables is limited to the block in which they are defined hence they are separate variables independent of each other.
// We declared variables with the same name. Here 'same' is defined both in global scope and local scope. When we call it inside the code block, it refers to the local variable. When we call it outside the code block in global scope, it refers to the global variable. Block-scoped variables are local in their respective code blocks with local scope.

const same = "I'm a global variable with global scope";

function Went() {
  const same = "I'm a local variable,";
  console.log(same, " inside the code block");
}
Went();

if (true) {
  const same = `Don't think I'm in any way related to the first two variables.`;
  console.log(same);
}

console.log(same);

//💡 Global Scope
// Variables declared outside of any function or block have global scope. Variables defined in global scope are accessible from everywhere. Global variables are attached to the global object (in browsers, it's the window object).

// The following variables are defined in the global scope. We can use them anywhere in the code. They are accessible in nested functions, objects, arrays and so on.
const num1 = 20;
const num2 = 3;
const Name = "Henry";
//⛔ Generally we should avoid defining variables in global scope. It is a bad practice.

// When we reassign the global variable inside a code block it updates the original global variable. Because it is referring to the same variable.
let age = 30;
if (true) {
  age = 40;
  console.log("inside the code block", age);
}
console.log("outside the code block", age);

// A function defined in the global scope can access all variables defined in the global scope. This function is defined in the global scope. Here we are using variables that are defined outside of it, having global scope.
function multiply() {
  return num1 * num2;
}
multiply(); //🔥 60

//💡 function scope

//💡 A function defined inside another function (nested) can also access all variables defined in its parent function, and any other variables to which the parent function has access.
const emoji = "👋";
function Gone() {
  let person = "jhon smith!"; // Function-scoped variable
  if (true) {
    let greet = "goodbye"; // Block-scoped variable
    console.log(greet, person, emoji);
    // Function-scoped variables are visible within any nested blocks, regardless of whether the code block is another function, an if-else, for-loop or any other block.
  }
}
Gone();

//* It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
// A nested function example. Although we have already declared num1 and num2 in the global scope with values of 20 and 3, respectively, but when we call the add() function, it uses the variables declared within its parent function.
function getScore() {
  const num1 = 2;
  const num2 = 3;
  function add() {
    return `${Name} scored ${num1 + num2}`;
  }
  return add();
}

getScore(); //🔥 "Henry scored 5"

// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
function myTest(para) {
  const loc = "foo";
  if (true) {
    const funParameter = para;
    console.log(funParameter);
  }
  console.log(loc);
}

myTest("Can you access me?");
console.log(loc, funParameter); // Not accessible

//💡 Precedence
// Case 1.
// The variable whose scope is most immediate takes precedence. In each case, 'myAge' variable that is just above the execution call takes precedence over any other 'myAge' variable before it.
let lastName = "Bryan";
let myAge = 25;
if (true) {
  let myAge = 40;
  let fName = "shaun";
  console.log("inside Ist code block: ", fName, myAge);
  if (true) {
    console.log("inside 2nd code block: ", lastName, myAge);
  }
  console.log(fName, lastName, myAge);
}

// Case 2.
// If there is a local variable with the same name within the block, it will shadow (take precedence over) any variable with the same name in an outer scope.
const glo = 'some';
if(true) {
  console.log(glo); //🔥 Cannot access 'glo' before initialization // local variable takes precedence over global variable.
  const glo = "shadow";
  console.log(glo);
}
// first console log statement is not able to access the 'glo' variable defined in the global scope because the local variable 'glo' shadows the global variable.

//💡 All undeclared variables are global variables.
// If we declare a variable without the 'let' or 'const' keyword, the variable is declared as a global variable. This means that the variable is accessible from anywhere in the code, including from other functions.
//⛔ Declaring variables without keywords is a bad practice.
save = 60;
if (true) {
  save = 40;
  nameLess = "Global Variable";
  console.log("inside the code block", save);
}
console.log("outside code block", save);
console.log(`I'm a ${nameLess}, implicitly created by JavaScript`); // nameLess can be accessed anywhere
nameLess = "It's proven now that I'm actually a global variable"; // declared inside the function, accessed outside of it.
console.log(nameLess);

// Another Example with functions.
// variableWithoutKeyword would not be accessible directly, it only becomes global after the function call.
function myFunction() {
  variableWithoutKeyword = "Global Variable";
}

myFunction();
console.log(variableWithoutKeyword); // 'Global Variable'

variableWithoutKeyword = "Modified Value";
console.log(variableWithoutKeyword); // 'Modified Value'

// 'noLabel' becomes function-scoped. This means that the variable is accessible within the function and any nested functions, regardless of whether the parent function has been called or not.

function parentFunction() {
  noLabel = "Function-scoped variable";

  function nestedFunction() {
    console.log(noLabel); // Accessible within the nested function
  }

  nestedFunction();
}

parentFunction();

// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
