//⚡ Write "DRY" code. 'Don't repeat yourself', means don't repeat the code instead use functions.
// A function is a block of code designed to perform a specific task. Functions are used when we want to use the same code multiple times without having to rewrite it. We can define a function and call it whenever needed. The function is executed only when it is called. Functions can also be assigned to variables.

// Syntax: Use function keyword followed by function name, followed by parentheses(). The code to be executed by the function is placed inside the curly braces{}.
// Example of a function.
function example() {
  const _String =
    "This is a function, named as 'example'. A function is a block of code that can be called whenever needed. To declare a function, we use the 'function' keyword, followed by the function name and a set of parentheses. Inside the parentheses, we can define parameters that the function can accept. The function code block is enclosed in curly braces and contains JavaScript statements that are executed when the function is called. Multiple conditions, such as if-else statements, loops, switch statements, and so on, can be grouped together in the function code block. Whatever is written inside the curly braces of a function is known as a code block. This code block is also referred to as a function body.";
  console.log(_String);
}

// In order to make the function work, we have to call/invoke the function by writing the function name with parentheses.
example();

// we use the 'return' keyword for returning the evaluated value. If we don't use this, we will get undefined because we aren't returning anything ( more about this below 👇).
let sum;
function addUndefined() {
  sum = 9 + 3;
  return sum;
}
console.log(addUndefined());

//👉 A function can include the return statement, but it doesn't have to. In the case where it doesn't have a return statement, when you call it, the function processes the inner code, but the returned value is undefined.
let newSum = 0;

function addSum(num) {
  newSum = newSum + num;
}
addSum(3);
// addSum is a function without a return statement. The function will change the global newSum variable but the returned value of the function is undefined. It is only stored within the function.

// In JavaScript functions are of three types:
// 1. function declaration or regular function
// 2. function expression
// 3. Arrow functions

//💡 function declaration or regular function:
// Only function declaration is hoisted at the top. It simply means we can access (call) the function before declaring it.
greet();
function greet() {
  console.log("hello JavaScript");
}

//💡 function expression:
// function expression is stored in a variable, the variable name is the reference to this function name. It is not hoisted at the top like the function declaration. we end the function expression codeblock with a semi-colon. It is recommended to use this form of function.
const speak = function () {
  console.log("function expression");
};
speak();

//* function parameters: Are variables that act as placeholders for the values that are to be input to a function when it is called inside the function parentheses. They behave as the local variables with local scope (can only be accessed within the code block of that function). We can have zero to multiple parameters in a function.

const hello = function (name) {
  console.log(`good day ${name}`);
};

//* function arguments: The actual value that is input to a parameter. These are passed into a function when it is called and are called arguments. They are outside of the function. This assigns value to the variables that we passed as parameters. In this example it will assign 'mario' as a string to the 'name' parameter. Remember, we can't access the parameter variable outside the function block.
hello("mario");

//💡 multiple function parameters.
// Arguments are assigned in a sequence to parameters.

const say = function (name, time) {
  console.log(`good ${time} ${name}`);
};
say("mario", "morning");

//💡 Default Arguments
// We can provide default arguments to the parameters within the parentheses. This is useful incase the function is called without providing a value for that parameter, Handling missing or undefined values, Providing fallback values, Enhance Readability, Backward Compatibility.
const defaultArg = function (name = "luigi", time = "night") {
  console.log(`good ${time} ${name}`);
};
defaultArg();

// However, if we pass the arguments after providing the default values, the default values will be overwritten by the arguments that we have passed. Here we have only provided the first argument, only this will be overwritten and the remaining will get the default value.
defaultArg("kelly");

// Skipping the parameter value to its default.
// If we wanna leave the 'emoji' parameter to the default, we can simply set this to undefined. This works because setting the parameter to undefined is same as not even setting it. Remember, when we don't pass an argument to the parameter then it will take the value of undefined. So specifying undefined here is exactly the same. So, this is how we skip the default parameter that we want to leave at its default.

const skipArg = function (name, emoji = "🥱😴", time) {
  console.log(`good ${time} ${name} ${emoji}`);
};
skipArg("luigi", undefined, "night");

// default values can contain any expression. We can also use values of the other parameters that were set before it.
const createBooking = function (
  flightNum,
  numPassengers = 600,
  baseFare = 500,
  passenger,
  seatClassPrice = { economy: 500, business: 4200, firstClass: 7500 },
  seatClass = seatClassPrice[passenger],
  ticketPrice = baseFare + seatClass
) {
  console.log(
    `Our flight number is ${flightNum}, and it has ${numPassengers} passengers onboard at a price of ${ticketPrice}$ in ${passenger} class`
  );
};

createBooking("JL006", undefined, undefined, "business");

//💡 return keyword
// We use return keyword to end the function and return a value. In the below example we stored an expression as: 3.14 multiplied by radius (parameter) times 2 in a local variable named 'area'. In the next line we are returning the calculated value of variable 'area' when the function will be called. You would notice we also added 1 to the area but it isn't added to the calculation, this is because a return statement immediately exits the function as soon as it encounters the return keyword even if it is inside an if else statement, any entries after it are ignored.
const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
  area += 1;
};

// After that we stored the calArea function in a variable 'getArea', passing 5 as an argument. Then logging getArea to the console.
const getArea = calcArea(5);
console.log(getArea);
// can't access the local variables outside of their codeblock. uncomment the below two lines to see the result.
// console.log(area);
// console.log(radius);

// We can also return the value without first storing it in a variable in one line.
function circArea(r) {
  return 3.14 * r ** 2;
}
circArea(5);

//💡 Arrow function =>
// arrow function is similar with function expression with some differences. Here we don't use the function keyword instead we use an arrow. Also, parameters are placed before an arrow. We end an arrow function codeblock with a semi-colon. Arrow functions are not hoisted. They must be defined before they are used.
const cal = (radius) => {
  return 3.14 * radius ** 2;
};
const area = cal(5);
console.log("area is:", area);

// When we only have one parameter we can remove the parentheses(). In case we have no parameter or more than one, we must use the parentheses.
const calc = (radius) => {
  return 3.14 * radius ** 2;
};
const area_one = calc(3);
console.log("area 1 is: ", area_one);

// When we have a single one line expression, we can omit the curly braces {} and the return 'keyword'. This is known as Concise Body Syntax.
// We must not use 'return' keyword if we omit the curly braces in case of a single expression, otherwise it will throw syntax error.
const single = (radius) => 3.14 * radius ** 2;
$_area_ = single(2);
console.log("area 2 is: ", $_area_);

// practice arrow functions
const Greet_ = () => "hello, world";
let resultArrow = Greet_();
console.log(resultArrow);

// more practice
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] * tax;
  }
  return total;
};
console.log(bill([1, 2, 3], 5));

// more practice
function sub(a, b) {
  console.log(a - b);
}
sub(5, 2);
const reuse = (a, b) => console.log(a - b);
reuse(10, 5);
let ssm;
function addfive() {
  ssm = 9;
  return ssm;
}
console.log(addfive());

//💡 function parameter
//* function parameter is like installing a bin, and the argument is like the item you're throwing into the bin. The argument can be anything, and it can change at any time. No matter what argument you throw into the bin, the function would behave according to that argument.

// How to differentiate between the Parameter and an Argument?
//⚡ A Function Parameter will always be to the right-hand side of the assignment operator in case of function expressions and arrow functions. In case of regular/declaration function or the callback function, the parameter will always be the after the 'function' keyword'.
//⚡ Whenever you see the same function mentioned second time say anyfunction('anyValue'), 'anyValue' will always be the argument.

// whatever is in the parentheses of a function call is computed and returned.
function vola(x, y) {
  return x + y;
}
let a = 2;
let b = 4;
console.log(vola(a, b)); // value of a and b is copied and passed in place of x and y.

// In this example below, the value(argument) of the arg parameter is copied to the callMe function as the value of the para parameter.

// Alternative explanation
// In the following code, the callMe function has a single parameter called 'para', and the tryIt method has a single parameter called 'arg'. Inside the tryIt method, we are calling the callMe function twice, first with 'guest' argument and second with 'Welcome' argument.

function callMe(para) {
  return para + " to hello world!";
}
console.log(callMe("Hi")); // Here we are calling function with 'Hi' string
//🔥 Hi to hello world!

const myObj = {
  tryIt(arg) {
    return arg + " " + callMe("guest") + "\n" + callMe(arg); // first 'guest' string is passed then argument of arg is passed.
  },
};

console.log(myObj.tryIt("Welcome"));
//🔥 Welcome guest to hello world!
//🔥 Welcome to hello world!

// If we assign value to the parameter inside a function, it will overwrite the value passed as an argument.
// The value passed as an argument to the callMe function is ignored, and the value of the "para" parameter inside the function will overtake.
function callMe(para) {
  para = "Welcome";
  return para + " to the hello world";
}
console.log(callMe("Hi")); // Here we are calling the CallMe function with 'Hi' string. It will be ignored.
//🔥  Welcome to the hello world

//💡 Anonymous function
// An anonymous function is a function that is defined without a name. It's often assigned to a variable or passed as an argument to other functions.
// It's usually defined as an expression using either function expression syntax or arrow function syntax.
// It can be assigned to variables, passed as arguments, and returned from other functions, offering great flexibility in code organization and execution.
// Anonymous functions can also be used as callback functions for example, when using forEach, or an EventListener etc.

// 1. Function Expression Syntax:
const anonymousFunction = function () {
  return "I am an anonymous function";
};
anonymousFunction();
// Note: 'anonymousFunction' is not the name of this function it is just a reference to this function.

// 2. Arrow Function Syntax (Concise Form):
const myFunction = () => {
  // function body
};

//💡 Named Function
// A "named function," a "regular function," and a "function declaration" essentially refer to the same thing: a function defined using the function keyword with a specific name.

// Function declaration is an example of a named function. 'Example' is the name of this function.
function example() {
  return "This is a regular or function declaration. I'm an example of Named function. My name is example";
}

// This is also an example of a named function. Here the named function is assigned to a variable. 'label' is the name of this function.
const namedFunction = function label(myName) {
  return `My name is ${myName}`;
};

//⛔ Functions stored in variables do not need names. They are always invoked (called) using the variable name. So, you wouldn't see this form of function as often.
namedFunction("furry"); //🔥 My name is furry

// The difference between the above two functions is that the first function is declared with function keyword while the second function is declared using a function expression.

//💡 We can assign a function to a variable because function is just a value assigned to a variable.
const foo = (param) => param;

// copying the reference of the function foo() into 'copy'
const copy = foo;
// The variable 'copy' now references the same function as 'foo'. We can call the function using either foo() or copy(). Both 'foo' and 'copy' refer to the same function, so invoking either of them will execute the function and return the same value.
copy("wow 😲"); //🔥 wow 😲

// This statement immediately calls the foo function and assigns its return value to the 'see' variable. In case the function does not have an explicit return statement, it will implicitly return undefined.
const see = foo("🤸🏻‍♂️🤸🏻‍♂️");
console.log(see); //🔥 🤸🏻‍♂️🤸🏻‍♂️

//⚡ In most real-world scenarios, you'll find that the first assignment, const copy = foo; is more commonly used.

//* Function Examples with if else statements:
// function Example 1...
function trueOrFalse(firstOne) {
  if (firstOne) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
console.log(trueOrFalse(false));

// function Example 2...
function compareType(val) {
  if (val == 5) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareType("5"));

// function Example 3...
function strictCompare(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(strictCompare(10, "10"));

// function Example 4...
function notEqual(val) {
  if (val != 5) {
    return "True";
  }
  return "False";
}
console.log(notEqual(5));

// function Example 5...
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(6));

// function Example 6...
function getHand() {
  const hands = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}
console.log(getHand());

//* Here are some examples of the tasks that a function can perform:

// 1. Modifying variables:
let x = 0;

function modifyX(value) {
  x = value;
}

modifyX(5);
console.log(x); //🔥 5

// Performing calculations:
function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); //🔥 7

// 2. Printing output:
function printMessage(message) {
  console.log(message);
}

printMessage("Hello, world!"); //🔥 "Hello, world!"

// 3. Calling other functions:
function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHi(name) {
  greet(name);
}

sayHi("Alice"); //🔥 "Hello, Alice!"

// 4. Throwing errors:
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(4, 0));
} catch (error) {
  console.error(error.message); //🔥 "Cannot divide by zero"
}

// 5. Looping:
function repeat(message, n) {
  for (let i = 0; i < n; i++) {
    console.log(message);
  }
}

repeat("Hello", 3); //🔥 "Hello" (3 times)
// if you call repeat("Hello", 3), the function will print "Hello" to the console three times. If you call repeat("Hello", 5), the function will console log "Hello" five times.
