/*
1. Getting Started

JavaScript is a versatile and widely-used programming language for web development. It's mainly used for adding interactivity and dynamic behavior to websites, such as event handling, animations, and data manipulation. It can also be used for server-side programming and game development.

How to Include JavaScript in Your Code?

A) Internal JavaScript
You can write JavaScript code in an HTML file using a <script> tag.

We can place any number of scripts in an HTML document.
Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

<!DOCTYPE html>
<html>
<head>
  <title>Demo Web Page</title>
</head>
<body>
  </body>
  <script>
  document.write('Hello world');
  </script>
</html>

B) External JavaScript
Scripts can also be placed in external files:
external JavaScript files have the file extension .js
We can place an external script reference in <head> or <body> as we like. The script will behave as if it was located exactly where the <script> tag is located. But it is recommended to add the script after the closing <body> tag.
<script src="app.js"></script>

Placing scripts at the bottom of the body tag without the defer attribute will cause the browser to execute the script as soon as it is downloaded. This can be a good option for scripts that need to be executed immediately, such as scripts that manipulate the DOM or that add event listeners.

Alternatively, we can place the script tag in the head section with defer attribute.
The defer attribute tells the browser to download the script in parallel with the rest of the page, but to wait until the page has finished parsing before executing the script. This can be a good option for scripts that do not need to be executed immediately, such as scripts that track user behavior or that provide analytics.
<script defer src="app.js"></script>


/* To add a single line comment use double forward-slashes // at the start of the sentence. For multi-line comment use forward-slash followed by asterisk symbol at beginning and end of the sentence. */

/*
JavaScript Display Possibilities:
JavaScript can "display" data in different ways:

1. Writing into an HTML element, using innerHTML.
2. Writing into the HTML output using document.write().
3. Writing into an alert box, using window.alert().
4. Writing into the browser console, using console.log().

1. Using innerHTML: Changing the innerHTML property of an HTML element is a common way to display data in HTML.
To access an HTML element, JavaScript can use the document.getElementById(id) method.

The id attribute defines the HTML element. The innerHTML property defines the HTML content:

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>

2. Using document.write()
For testing purposes, it is convenient to use document.write():
Using document.write() after an HTML document is loaded, will delete all existing HTML:

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>

3. Using window.alert()
You can use an alert box to display data:
You can skip the window keyword.
Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

</body>
</html>

4. Using console.log()
For debugging purposes, you can call the console.log() method in the browser to display data.
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
*/

// We use console.log("Hello JavaScript") method to display or log (message) to the browser console. The log method is useful for testing or debugging purposes.

// 2. Variables and Data Types

// JavaScript variables are used to store data. They are declared using the var, let, or const keyword followed by the variable name and an optional initial value. There are several data types in JavaScript, including: numbers, strings, booleans, objects, and arrays.

// Numbers:
let age = 25;
// Strings:
let name = "John";
// Booleans:
let isStudent = true;
// Arrays:
let fruits = ["apple", "banana", "cherry"];
// Objects:
let person = { name: "John", age: 30 };

// 3. Operators

// JavaScript supports various operators for performing operations on variables. Some common operators include:
// assignment operator: =
// Arithmetic Operators: +, -, *, /, %
// Comparison Operators: ==, !=, <, >, <=, >=
// Logical Operators: && (AND), || (OR), ! (NOT)

// 4. Control Flow Statements
// Control flow statements are used to control the flow of execution of your code. They include if, else, switch, while, and for loops.

// A) Conditional Statements (if-else):
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}

// B) Loops
// (for loop):
for (let i = 0; i < 5; i++) {
  // code to repeat
}

// (while loop):
while (condition) {
  // code to repeat while the condition is true
}

// 5. Functions

// Functions are blocks of reusable code that perform a specific task. They are defined using the function keyword followed by the function name, parentheses, and the function body.
function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("John"); // Output: Hello, John

// 6. DOM Manipulation

// One of the most common uses of JavaScript is to manipulate the Document Object Model (DOM) to change the content and behavior of a webpage. You can access and modify HTML elements using JavaScript:
// Get an element by its ID
let element = document.getElementById("myElement");

// Change its content
element.innerHTML = "New content";

// Add an event listener
element.addEventListener("click", function () {
  alert("Element clicked!");
});

// 7. Events

// You can handle various events in JavaScript, such as mouse clicks, keyboard inputs, and form submissions, by attaching event listeners to HTML elements. These event listeners allow you to define custom behavior when an event occurs.
element.addEventListener("submit", function () {
  alert("Submitted Successfully!");
});

//* Everything to the right of the equal sign is resolved before the value is assigned.
// If there are any calculations to the right of the equal '=' operator, those are performed first before the value is assigned to the variable.

let xy = x + y;

const zx = arr["08"];

let ab = lm.pop();

function hello() {
  console.log("hello world");
}

let fun = hello;
