// In JavaScript, NaN stands for "Not a Number", and represents a value that is not a valid number.

// NaN is a special value that is used to indicate that a mathematical operation has resulted in an undefined or unrepresentable number. For example, dividing 0 by 0, or taking the square root of a negative number, will result in NaN.
// Note: It is not a data type.

// In JavaScript, NaN is treated as false value.
let x = null;
console.log(Boolean(x)); //🔥 false

// In JavaScript, NaN is treated as number.
const av = NaN;
console.log(typeof av); //🔥 number

// When comparing NaN and null with both lose and strict operator we get a false.
let s = 6 * "hello";
let q = null;
console.log(s == q); //🔥 false
console.log(s === q); //🔥 false

//💡 Single line statements
// In JavaScript, you can omit curly braces {} when you have only one line of code to execute inside the if else, arrow functions or loops.
if (true) console.log("yes");
for (const items of colors) console.log(items);
const fun = () => console.log("some text");

//💡 Multiple assignment and Destructuring
// In JavaScript, multiple assignment is a feature that allows you to assign multiple values to multiple variables at the same time. It is often used in combination with destructuring, which is a way to extract values from arrays or objects into distinct variables.

// Here is an example of multiple assignment using an array:
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
// In this example, the values of the 'arr' array are destructured into the variables a, b, and c using multiple assignment. The values of the 'arr' array are assigned to the variables in the same order that they appear in the array.

// Multiple assignment can also be used with objects. Here is an example of multiple assignment using an object:
const objt = { a: 1, b: 2, c: 3 };
const { d, e, f } = objt;
console.log(d); // 1
console.log(e); // 2
console.log(f); // 3
// Multiple assignment can be a useful tool for simplifying code and making it easier to work with multiple values. It is often used in combination with destructuring to extract values from arrays or objects and assign them to variables.

//💡 JSON
// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON format is text only

// JSON Syntax Rules
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JSON names require double quotes.

// {
// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]
// }

// A common use of JSON is to read data from a web server, and display the data in a web page or to send data to a web server.
// In JSON, values must be one of the following data types: a string, number, an object (JSON object), array, boolean or null

// When receiving data from a web server, the data is always a string.
// We Parse the data with JSON.parse(), and the data becomes a JavaScript object or an array, depending upon the datatype we are applying it.
// Imagine we received this string from a web server:
('{"name":"John", "age":30, "city":"New York"}');

// We use the JavaScript function JSON.parse() to convert the object string into a JavaScript object:
const txt = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(txt);
console.log(obj.name, obj.age);
//🔥 john 30

// When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array.
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
console.log(myArr[0]);
//🔥 Ford

// When sending data to a web server, the data has to be a string.
// We convert a JavaScript object or an array into a string with JSON.stringify().
const myobj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(myobj);
console.log(myJSON);

const users = ["John Doe", "Jane White", "Peter Parker"];
const userString = JSON.stringify(users);
console.log(typeof userString, userString);

//💡 Strict Mode
// It ensures that we write a secure code. It makes easier for developers to avoid accidental errors by prohibiting us to do certain things and creating visible errors in the console. We use this by writing the 'use strict' string at the beginning of the Script, which activates the strict mode for the entire script. We can also activate it only for a certain block of code by writing this above it. Without using this, JavaScript fails silently without letting us know the errors.
// Example
// "use strict"; // First run this code block then uncomment it to make it work.
let hasDriversLicense = false; // No license
const passTest = true; // passed test
if (passTest) hasDriverLicense = true; // if test is passed, update hasDriversLicense to true. But we did a mistake here by omitting the 's' in the variable name. This now refers to a new variable not the above one.
if (hasDriversLicense) console.log("I can drive"); // Now we want to console log 'I can drive' if hasDriversLicense is true. When we log this to the console, we see nothing. This is because of the error we made just above by omitting the 's'. hasDriversLicense is still false.
// If we use the 'use strict' string we should see an error in the console.
// So, without using this we wouldn't have come to know where exactly we did the mistake.
//⚡ VS-Code also provides some hints. Currently we can see three dots below the 'hasDriverLicense'. If we hover over it, this will also let us know "Couldn't find name 'hasDriverLicense'. Did you mean 'hasDriversLicense", then clicking on Quick fix will replace this with correct name.

//💡 Separation of Concerns:
// Separation of concerns is a design principle in software engineering that suggests breaking a program down into smaller, more manageable parts that are responsible for separate concerns or tasks. The idea is to separate the different concerns of a program, such as user interface, data storage, and business logic, into distinct modules or components.

// By separating concerns, we can create code that is easier to understand, test, and maintain. Each module can focus on a specific task, and the interfaces between the modules are well-defined and limited, reducing complexity and making it easier to modify or replace individual parts of the program without affecting the rest.

// For example, in a web application, we might have separate modules for handling user input, processing data, and rendering output. By separating these concerns, we can ensure that each module is focused on its specific task, and we can modify or replace individual modules without affecting the others.

// Example: Functions help to separate concerns by focusing on a specific task. By breaking a program down into smaller functions, we can ensure that each function is responsible for one thing and one thing only, making the code easier to read and maintain.

// Overall, the goal of separation of concerns is to create code that is modular, flexible, and easy to maintain.

//💡 why is everything an object or function in JavaScript?

// The statement "everything in JavaScript is an object and a function" is a simplification that highlights the key role objects and functions play in JavaScript. While not everything in JavaScript is technically an object or a function, these two concepts are fundamental and pervasive in the language.

// 1. Objects:
//    Objects are a core concept in JavaScript. They are used to represent and manipulate data in the form of key-value pairs. In JavaScript, objects can be created using object literals, constructors, or classes. Objects can have properties and methods, making them versatile for modeling and organizing complex data and behaviors.

//    While primitive values (such as numbers, booleans, and strings) are not objects themselves, JavaScript provides object wrappers (`Number`, `Boolean`, `String`, etc.) that enable accessing methods and properties associated with their respective primitive values.

// 2. Functions:
//    Functions are first-class citizens in JavaScript, meaning they are treated as values and can be assigned to variables, passed as arguments, and returned from other functions. Functions in JavaScript can be used to perform actions, encapsulate reusable code, and create abstractions.

//    Functions also have a special relationship with objects in JavaScript. In fact, functions are objects themselves. They can have properties and methods, be assigned to object properties, and be invoked as methods.

//    Additionally, functions can be used to create and define objects through constructor functions or by using the `class` syntax.

// So, while not literally everything in JavaScript is an object or a function, the statement emphasizes that objects and functions are central and pervasive concepts in JavaScript programming. They provide the means to represent data, organize code, and enable powerful programming paradigms such as object-oriented and functional programming.

//💡 Bug
// Defect or problem in a computer program. Basically, any unexpected or unintended behaviour of a computer program is a software bug.

//💡 Debugging
// TLDR: Process of finding, fixing and preventing bugs.
// Debugging is the act of looking over code understanding what is it doing and figuring out why it's not acting as expected or maybe it's not even running or maybe we are getting errors or it's triggering wired behaviour thats what debugging is. Figuring out why the program isn't acting the way it is. We can use a lot of strategies to debug the code some of them include console logging after each step to understand what's going on or use the 'debugger' keyword.

//💡 Syntactic Sugar
// In computer science, 'syntactic sugar' is a term used to describe syntax within a programming language that is designed to make things easier to read or to express. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.
// Examples of syntactic features in JavaScript:
// Arrow functions, Destructuring, Class Syntax, Promises, Async/Await, and Rest Parameters, etc.
