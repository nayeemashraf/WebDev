//💡 Scope determines the accessibility (visibility) of variables.
// It is the space or environment in which a certain variable is declared.

// Scope of a variable: Region of our code where a certain variable can be accessed.

// Before ES6(2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important JavaScript keywords: let and const.

// Variables declared with 'let' and 'const' have block scope in addition to global scope. That is, when they are declared inside a block, they can only be accessed within that block. When declared outside of a block, they can be accessed anywhere in the code.

// In JavaScript, by default we are in the global scope. In web browsers, it's the window scope (global object). Variables declared in the global scope become properties of the global object.

//💡 Variables declared in global scope (outside of a code block {}) are known as global variables, Variables declared inside the code block are known as local variables.

//💡 Block Scope
// variable 'message' is only accessible within the code block.
{
  let message = "This is Block-Scoped";
  console.log(message); //🔥 This is Block-Scoped
}
console.log(message); //🔥 ReferenceError: message is not defined

//* The code block can be a function, an if-else, or a loop.

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
  let person = "john smith";
  {
    let farewell = "goodbye";
    console.log(farewell, person); //🔥 'good bye john smith'
    // This inner block is able to access the 'person' variable because it is nested inside another block (in this case in 'if' block) where the variable ('person') is defined.
  }
  console.log(person); //🔥 'john smith'
  console.log(farewell); //🔥 ReferenceError: farewell is not defined
}

//💡 It is valid to have variables with identical names in separate blocks. Since the scope of these variables is limited to the block in which they are defined hence they are distinct variables.
// We declared variables with the exact same name. Here 'same' is defined both in global scope and local scope. When we call it inside the code block, it refers to the local variable. When we call it outside the code block in global scope, it refers to the global variable. Block-scoped variables are local in their respective code blocks with local scope.

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
function Greeting() {
  let person = "john smith!"; // Function-scoped variable
  if (true) {
    let greet = "Hello"; // Block-scoped variable
    console.log(greet, person, emoji);
    // Function-scoped variables are visible within any nested blocks, regardless of whether the code block is another function, an if-else, for-loop or any other block.
  }
}
Greeting();

// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
function myTest(p) {
  const localVar = "foo";
  if (true) {
    const param = p;
    console.log(param);
  }
  console.log(localVar);
}

myTest("Can you access me?");
console.log(localVar, param); // Not accessible

//💡 Shadowing
// When a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the inner variable takes precedence within its scope, and any reference to that variable within that scope refers to the inner variable rather than the outer one.
// OR
// The variable whose scope is most immediate takes precedence.
// OR
// The variable in the inner scope (block scope) "shadows" the variable in the outer scope, meaning it takes precedence within its own scope.

// Case 1.
// In each case, 'y' that is just above the execution call takes precedence over any other 'y' variable before it.
let y = 25;
if (true) {
  console.log("first code block", y);
  if (true) {
    let y = 40;
    console.log("2nd code block", y);
    if (true) {
      y++;
      console.log("innermost code block", y);
    }
    console.log(y);
  }
  console.log("first code block", y);
}

// Case 2.
// Although we have already declared round1 and round2 in the global scope with values of 20 and 3, respectively, but when we call the add() function, it uses the variables declared within its parent function.
const round1 = 20;
const round2 = 3;
const Player = "Kevin";
function getScore() {
  const round1 = 2;
  const round2 = 3;
  function add() {
    return `${Player} scored ${round1 + round2}`;
  }
  return add();
}

getScore(); //🔥 "Kevin scored 5"

// Case 3.
// first console log statement is not able to access the 'x' variable defined in the global scope because the local variable 'x' shadows the global variable.
const x = "Out";
if (true) {
  console.log(x); //🔥 Cannot access 'x' before initialization
  const x = "Shadow";
  console.log(x);
}

//💡 Global variables in JavaScript have a longer lifespan, persisting throughout the entire program execution.
// Global variables in a web page context live until the page is discarded, like when you navigate to another page or close the window, or refresh the page.

//💡 Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
// Once the function completes its execution, local variables go out of scope and are "deleted" or more precisely, they become inaccessible. The memory occupied by these local variables is typically freed up, and the variables cease to exist.

//💡 All undeclared variables are global variables.
// If we declare a variable without the 'let' or 'const' keyword, the variable is declared as a global variable. This means that the variable is accessible from anywhere in the code, including from other functions.
//⛔ Declaring variables without keywords is a bad practice. So, ignore this weird behaviour.
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
// withoutKeyword would not be accessible directly, it only becomes global after the function call.
function myFunction() {
  withoutKeyword = "Global Variable";
}

myFunction();
console.log(withoutKeyword); // 'Global Variable'

withoutKeyword = "Modified Value";
console.log(withoutKeyword); // 'Modified Value'

// 'noLabel' becomes function-scoped. This means that the variable is accessible within the function and any nested functions, regardless of whether the parent function has been called or not.

function parentFunction() {
  noLabel = "Function-scoped variable";

  function childFunction() {
    console.log(noLabel); // Accessible within the nested function
  }

  childFunction();
}

parentFunction();
