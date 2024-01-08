//💡 Returning multiple values from a function.
// Here are some common ways to return more than one value from a function in JavaScript:
// 1. Returning an Object:
// You can use an object to encapsulate multiple values and return that object from the function.
function returnMultipleValues() {
  const value1 = "Hello";
  const value2 = "World";

  return {
    prop1: value1,
    prop2: value2,
  };
}

const resultObj = returnMultipleValues();
console.log(resultObj); //🔥 {prop1: 'Hello', prop2: 'World'}

// 2. Returning an Array:
// You can return an array containing multiple values from the function.
function returnMultipleValues() {
  const value1 = "Hello";
  const value2 = "World";

  return [value1, value2];
}

const resultArr = returnMultipleValues();
console.log(resultArr); //🔥 ['Hello', 'World']

// 3. Using Destructuring:
// If you return an array or an object from the function, you can use destructuring to capture the individual values into separate variables.
// Using array destructuring
function returnMultipleValues() {
  const value1 = "Hello";
  const value2 = "World";

  return [value1, value2];
}

const [result1, result2] = returnMultipleValues();
console.log(result1); //🔥 Hello
console.log(result2); //🔥 World

// Using object destructuring
function returnMultipleValues() {
  const value1 = "Hello";
  const value2 = "World";

  return {
    prop1: value1,
    prop2: value2,
  };
}

const { prop1, prop2 } = returnMultipleValues();
console.log(prop1); //🔥 Hello
console.log(prop2); //🔥 World

//💡 Rest Parameter
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. It allows us to handle various inputs as parameters more easily. We can use the rest parameter syntax by adding … (three dots) before the last parameter in the function definition.
// A function can only have one rest parameter, and the rest parameter must be the last parameter.
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3)); //🔥 6

console.log(sum(1, 2, 3, 4)); //🔥 10

// Another example
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");
//🔥 a, one
//🔥 b, two
//🔥 manyMoreArgs, ["three", "four", "five", "six"]

// Invalid rest parameters examples:
// const notValid = (a, ...no, b) => console.log(a, no, b);
// const non_Valid = (x, ...y, ...z) => console.log(x, y, z);

//💡 First Class Citizens OR First-class Function
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
// OR
// If any programming language has the ability to treat functions as values, to pass them as arguments and to return a function from another function then it is said that programming language has First Class Functions and the functions are called as First Class Citizens in that programming language.

// JavaScript treats function as a first-class citizen. This means that functions are simply values and are just another type of object. Since objects are values, functions are values too.

// 1. Assigning a function to a variable: You can assign a function to a variable, just like you would with any other value.
const foo = () => {
  console.log("foobar");
};
// We assigned the Function in a Variable, then we used that variable to invoke the function
foo(); // Invoke it using the variable

// assigning the function reference to a variable
const sayHello = foo;
sayHello();

// 2. Passing a function as an argument: You can pass a function as an argument to another function.
//💡 A function that returns a function or takes other functions as arguments is called a higher-order function.

// higher order function example:
function greet(name, greetingFunction) {
  greetingFunction(name);
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Pass `sayHello` as an argument to `greet` function
greet("JavaScript", sayHello); //🔥 Hello, JavaScript!
// We are passing sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.

//* The function that is passed in as an argument is called the callback function. They are called so because the callback function will be called or invoked later by the higher-order function.

// another example of passing a function as an argument:
const message = () => console.log("Hey Jonas");
btnClose.addEventListener("click", message); // addEventListener is a higher order function

// 3. Returning a function: A function can return another function.
// In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.
// higher order function example:
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}

// Or we can store the function in a variable and then return it:
function sayHello() {
  const greet = "Hello!";
  const say = () => {
    console.log(greet);
  };
  return say;
}

// 4. Stored in data structures: You can store functions in arrays, objects, or other data structures.
const functionArray = [
  function (name) {
    console.log(`Greetings, ${name}!`);
  },
  function (name) {
    console.log(`Salutations, ${name}!`);
  },
];

functionArray[0]("Bob"); //🔥 Greetings, Bob!

//💡 Immediately Invoked Function Expressions (IIFE)
// Sometimes we need a function that is only executed once and then never again. Basically a function that disappears right after it's called once.
// Well we could simply create a function and then only execute it once. However, we can actually run this function again at some other point in the code if we wanted to. There's nothing stopping us from calling it again later, but this is not what we want to do. We want to actually execute a function immediately and not even having to save it somewhere.

// We simply write the function expression itself, without assigning it to any variable. Wrapping all of this in the parentheses to make it an expression. Now, we can then immediately call it by adding the opening and closing parenthesis at the end as we would do in a normal function call.

(function () {
  console.log("This will never run again");
})();

// It will log the string to the console.
//🔥 This will never run again

// Same would of course also work for an arrow function.
(() => {
  console.log("This will never run again");
})();

// So we have two ways of writing an immediately invoked function expression.

// This pattern (IIFE) is not really a feature of the JavaScript language, It's more of a pattern that some developers came up with and then started to being used by many other developers.

// why was this pattern actually invented?
// Well, we already know that functions create scopes. For example, the global scope does not have access to any variables that are defined in the scope of any of these functions.
// Therefore, we say that all data defined within a scope is private. We also say that this data (inside a function) is encapsulated. Data encapsulation and data privacy are extremely important concepts in programming. Often, we need to protect our variables from being accidentally overwritten by other parts of the program or even by external scripts or libraries.

// As we know variables declared with let or const create their own scope inside a block.
// So, when we create a block and declare a variable say isPrivate in there, then we cannot access it from outside.
{
  const isPrivate = 20;
}

// This is the reason why immediately invoked function expressions are not used anymore in modern JavaScript. Because if all we want is to create a new scope for data privacy, all we need to do is to just create a block like above. There's no need to create a function for creating a new scope. On the other hand, if what you really need is to execute a function just once, then the IIFE - (Immediately Invoked function Expression) pattern is still the way to go even now with modern JavaScript.

//💡 Closure
// A closure is a function having access to the parent scope, even after the parent function has closed.
// OR
// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.
// OR
// Function bundled with its outer scope (lexical environment) is known as a closure.
// OR
// A function (parent) ran. The function executed, It's never going to execute again but it's going to remember that there are references to those variables. So, the child scope always has access to the parent scope.

//⚠️ We don't explicitly write "Closures" or "Currying" we just need to understand how things work to be able to read the code when it happens implicitly.
//  In JavaScript, all functions are naturally Closures.
// A closure is created when we define a function not when a function is executed.

// Defines the first() function and inside the first() function we declare a constant 'greet' and return the second() function which alerts that 'greet'.
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

// At this line we are assigning the return of the first() function to newFun variable.
const newFun = first();

// As we can see, the first() returns the second() function. So, newFun gets the second() function as its value which means newFun holds a reference to the second() function. The second() function is not executed at this time.
// const newFun = () => {
//  alert(greet);
// };

// When 'newFun' is invoked, it executes the 'second' function, the second() function tries to access the 'greet' variable, which is outside its scope and also the first() function has already completed its execution and won't run again i.e., second() function shouldn't remember the 'greet' but as we know child scope (function) always has access to the parent scope (function) which implies any variables declared inside the parent scope (function) are accessible in the child scope (function). So, it will have a reference to this 'greet' variable.

newFun(); // it's equivalent to calling the second() function.

// Another example
// Even if we update the 'name' variable after defining the displayName() function, it still retains that updated value because when a closure forms, it returns the function along with the reference to those variables.
function makeFunc() {
  let name = "Mozilla";
  const displayName = () => console.log(name);
  name = "Firefox";
  return displayName;
}

const myFunc = makeFunc();
myFunc(); //🔥 Firefox

//💡 Currying
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It allows you to create specialized versions of the original function by fixing certain arguments and returning new functions.

// To create a curried function, you can use arrow functions and closures in JavaScript. Here's a basic example:
// In this example, multiply() is a curried function that takes the first argument 'a' and returns another function that takes the second argument 'b'. When the inner function is invoked with 'b', it multiplies 'a' and 'b'.
const multiply = (a) => (b) => a * b;

// Here multiply() is directly invoked with both arguments 3 and 4. It returns the result of multiplying 3 and 4, which is 12.
console.log(multiply(3)(4)); //🔥 12

// Assigning the result of calling multiple() with 2 as argument to multiplyBy2 variable.
const multiplyBy2 = multiply(2);

// Now, multiplyBy2 is a new function created by invoking multiply with the argument 2 because assigning multiply(2) to multiplyBy2 returned this function: (b) => a * b;

// When multiplyBy2() is called with 5, it multiplies 2 and 5, resulting in 10.
console.log(multiplyBy2(5)); //🔥 10

// Assigning the main function to another variable with a specific value is a common pattern used in currying. It allows you to create specialized versions of the original function by fixing certain arguments, resulting in a new function with the remaining arguments.
// Examples:
// 1. Addition function:
const addMain = (a) => (b) => a + b;

const add5 = addMain(5);

console.log(add5(3)); //🔥 8

// 2. Currency converter:
// Formula:  Converted Amount = Original Amount (currency to be converted) * Exchange Rate (value of other currency in comparison to converted currency)
// In this example we will find 100 usd in euros.
const convertCurrency = (exchangeRate) => (amount) => amount * exchangeRate;

const usdToEur = convertCurrency(0.93); // here we invoked the function with 0.93 as the exchange rate and assigned the result to usdToEur which also implies exchangeRate has received its argument.

console.log(usdToEur(100)); //🔥 93

//💡 function composition
// Function composition is a technique in functional programming where you combine multiple functions into a single function. This can be done by passing the output (result) of one function as the input (argument) to another function.

// Here we have two functions 'square' and 'double' with their own task.
function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

// Now we can combine these (square and double) functions to compose a new function.

// Here 'f1' and 'f2' parameters will receive the first (square) and second (double) function as arguments.
function compose(f1, f2) {
  // Now it returns another function with 'a' parameter which will be used to receive the argument for the 'square' and 'double' function.
  return function (a) {
    return f1(f2(a));
    // It's like writing square(double(arg)); where 'double' will be called with an argument and whatever the result will be the argument to 'square' function.
  };
}

// we can call this directly.
compose(square, double)(2); //🔥 16

// Or we can assign this to a variable and then call it from that reference.
const squareAndDouble = compose(square, double);
squareAndDouble(2); //🔥 16

// We can also use the arrow function syntax to create the 'compose' function.
const arrowCompose = (f1, f2) => (a) => f1(f2(a));

//⚡ Avoiding Side Effects and Functional Purity.

//💡 Side Effects.
// Side effects are actions that happen inside of a function that we aren't aware of, like interacting with an external variable, such as changing the global variable, reassigning variables, or running a loop that isn't meant to be inside of the function.

//💡 Functional Purity.

// A function shouldn't affect the outside world.
// A function should do things in its own universe.
// We should always declare variables inside a function if needed.
// A function should always return something.
// A function should always do the same thing it is intended to do, irrespective of the arguments it receives or the absence of parameters.

//💡 Function Exercises
// 1. Creating a Roll Dice with the help of Math object.
function rollDice() {
  let Dice = Math.floor(Math.random() * 6 + 1);
  return Dice;
}
const DiceResult = rollDice();
console.log(DiceResult);

// 2. Function to store a parameter in an array and return it. The arguments passed to function will be pushed to array.
function storeInArray(parameter) {
  let argArray = [];
  argArray.push(parameter);
  return argArray;
}

let result = storeInArray("hello");
console.log(result); //🔥 ['hello']

result = storeInArray(42);
console.log(result); //🔥 [42]

// 3. Assigning function return to a variable.
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); //🔥 2

/* 4. Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
*/
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// 5. largest of two numbers.
const minMax = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
const CHECK = minMax(4, 6);
console.log(CHECK);

// 6. simple implementation of returning true or false.
// suppose we want to check whether the image has a landscape or portrait orientation, we can determine this by comparing the width and height of the image. So, if the width is greater than the height, it is landscape and it returns true else false. We don't we have to explicitly write it like this: return (width > height) ? true : false;
const isLandScape = function (width, height) {
  return width > height;
};
const checkLandscape = isLandScape(10, 8);
console.log(checkLandscape);

// 7. fizzBuzz function
// 1. check whether the input is divisible by 3, return 'Fizz'
// 2. check whether the input is divisible by 5, return 'Buzz'
// 3. check whether the input is divisible by both 3 and 5, return 'FizzBuzz'
// 4. check whether the input is not divisible by 3 or 5, return the input as it is
// 5. check whether the input is not number type, return "Not a number"
function fizzBuzz(num) {
  return typeof num !== "number"
    ? NaN
    : num % 3 === 0 && num % 5 === 0
    ? "FizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : num;
}

// There are three important things to consider: the order of the conditions, the handling of non-numeric inputs, and the redundancy of the fourth condition.
// First, if the input passed isn't the number, i.e., a string, or a boolean value we don't want to check the other conditions, instead of putting this condition at the last we must place it at the beginning to avoid unnecessary checks and return the result faster. Additionally, instead of returning the string "Not a number" we should return NaN, which is what it is for.

// Second, if we implement the conditions in the given order and we pass 15 as input, we want the condition 3 i.e.,'FizzBuzz' string to be executed because 15 is divisible by both 3 and 5. However, this condition will not be reached at all because the condition 1 will check it first and execute itself instead, because 15 is also divisible by 3. To resolve this problem we need to place this condition before condition 1 and 2.

// Third, as per the condition 4, if the input is not divisible by 3 or 5 we should return back the input. We do not need a separate condition for this, as it is already covered by the other conditions. All we need to do is add a return statement.
console.log(fizzBuzz(3)); //🔥 "Fizz"
console.log(fizzBuzz(5)); //🔥 "Buzz"
console.log(fizzBuzz(15)); //🔥 "FizzBuzz"
console.log(fizzBuzz("hello")); //🔥 NaN
console.log(fizzBuzz(7)); //🔥 7

// Alternative
function fizzBuzz(num) {
  // check if num is not a number
  if (typeof num !== "number") {
    return NaN;
  }

  // check if num is divisible by both 3 and 5
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }

  // check if num is divisible by 3
  if (num % 3 === 0) {
    return "Fizz";
  }

  // check if num is divisible by 5
  if (num % 5 === 0) {
    return "Buzz";
  }

  // if none of the above conditions are met, return num as it is
  return num;
}

// 8. return the appropriate grade corresponding to the average marks. Make it dynamic so that it works for any student with the given marks.

const phillip = [50, 80, 80];
function calculateGrade(student) {
  let sum = 0;
  for (const marks of student) sum += marks;
  let average = sum / student.length;
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}
console.log(calculateGrade(phillip));

// We have two parts in the above function, i.e., calculating average of numbers in an array and mapping that average to a grade. We can break them into two separate functions.

// We should break the functions with respect to their work. We should have functions that are small and are focused on one thing.
const andrew = [100, 100, 100];
function calculateGrade(grade) {
  const average = calculateAverage(grade); // return average from calculateAverage(student) function
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(student) {
  let sum = 0;
  for (const marks of student) sum += marks;
  return sum / student.length;
}
console.log(calculateAverage(phillip));
console.log(calculateGrade(phillip));
console.log(calculateAverage(andrew));
console.log(calculateGrade(andrew));
