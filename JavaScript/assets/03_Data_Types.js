//💡 Datatypes
// Datatypes are basically typed data that can be used and manipulated in a program. Anything that is meaningful to the computer is a data type. We have 8 data types in javascript as of now, out of which first 7 are primitive (predefined or built-in), also known as value types. Everything else is an Object, also known as Reference types.

//💡 In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

//* 1. Undefined: Undefined data type is something that hasn't been defined yet. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. Here JavaScript signalizes emptiness.
let w; // if we console.log(w) we will get undefined.

// It is also possible to explicitly assign undefined to a variable. Any variable can be emptied, by setting the value to undefined. Example:
let val = undefined;

// In JavaScript, undefined is treated as false value.
let s;
console.log(Boolean(s)); //🔥 false

// In JavaScript, the typeof of an undefined value is also undefined.
let a;
console.log(typeof a); //🔥 undefined

//* 2. null: This type of data holds nothing. We set something deliberately to null to specify an empty variable, object, function etc.
let x = null;
// The code above suggests that the 'x' variable is empty at the moment and may have a value later.

// In JavaScript, null is treated as false value.
let isFalse = null;
console.log(Boolean(isFalse)); //🔥 false

// In JavaScript, null is treated as an object.
const is = null;
console.log(typeof is); //🔥 object

//* 3. Boolean: Represents a logical entity and can have two values: true or false. You can use the Boolean() function to find out if an expression (or a variable) is true or false:
// example: Boolean(10 > 9) or (10 > 9) or 10 > 9

//💡 JavaScript considers Boolean value true as 1 and false as 0.

//💡 Truthy Values - Truthy values are those that convert to true in boolean contexts (like conditional statements or logical operators), but they still retain their distinct types.
// Everything with a value is boolean true or truthy.
let wholeNum = 100;
Boolean(wholeNum); //🔥 true

// Boolean value of an empty array is true.
console.log(Boolean([])); //🔥 true
Boolean([""]); //🔥 true

// 0 in an array is true
let zeroArray = [0];
Boolean(zeroArray); //🔥 true
Boolean([-0]); //🔥 true

// Boolean value of an Empty object is true.
const object = {};
console.log(Boolean(object)); //🔥 true

// The Boolean value of non-empty string is true. It is not considered an empty string because it contains at least one character, even though it is only a space character.
Boolean(" "); //🔥 true

// The Boolean value of true is a true
let tr = true; // an explicit true is a true.

// Boolean value of any number except 0 is true.
// float point number
2.23;
// negative number
-15;
// an expression
7 + 3 - 2 / 2.53;

// A string value is true.
let st = "hello"; //🔥 true
let sf = "false"; //🔥 true

//💡 Falsy Values - Falsy values are those that convert to false in boolean contexts (like conditional statements or logical operators), but they still retain their distinct types.
//  Everything without a value is boolean false or falsy.
// The Boolean value of 0 (with either signs) is false
let zr = 0;
zr = -0;
let b = ""; // an empty string is false
let un; // an undefined (either explicit or implicit) is false.
let und = undefined;
let nl = null; // the Boolean value of null is false
let fl = false; // The Boolean value of false is false
let na = 10 / "Hello"; // The Boolean value of NaN is false

//* 4. string: A string is any sort of textual data. A string is a sequence of characters. In JavaScript, strings can be enclosed within single or double quotes. Example: "Hello JavaScript" etc. double quotes is recommended.

let stringText = "This is a string";
let anotherString =
  'This is the 2nd string which includes the numbers as well as any "special character" (@*#)';

//* 5. number: A number is just a numeric data. Represents both integer and floating-point(decimal) numbers.
// All of these are the examples of number data type.
let j = 3;
let m = 3.56 + (354 / 2) * 5;
let z = x + y;

//* 6. symbol: A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.

//* 7. BigInt: The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude.

//💡 Objects are Non-Primitive Data types. Also, termed as Reference Types.

// Common object types include:
// Object literal
// Function // Functions aren't special data structures in JavaScript — they are just a special type of object that can be called.
// Array
// Date
// RegExp // (Regular expression)
// Error

//* 8. object literal: In JavaScript, objects are more complex data types and are composed of "key:value pairs". Keys are just labels and their value can be of any datatype like string, number, array, etc. These keys can be variables or functions and are called properties in case of variables and methods in case of functions in the context of an object. Methods are actions that can be performed on objects. It is common practice to declare objects with the const keyword.
// JavaScript object is written within curly braces {}.
// Example:
const person = {
  lastName: "Doe", // The Properties are written in pairs like name : value.  Property name and value is separated by a colon.
  firstName: "John", // Here 'firstName: "Doe"' as a whole is one of the property or we can say 'firstName', as solely is the key or property name and its value is John.
  age: 50, // Properties and methods are separated by comma.
  eyeColor: "blue",
  Human: true,
}; // semi-colon is used to end the code block.

// The object 'person' in the example above has 5 properties: firstName, lastName, age, eyeColor and Human. Whereas Doe, John, 50, blue and true are the values of these keys.

//* Note: To access the object properties we use the object name followed by dot . and property name without inserting any space. objectName.propertyName
// OR  with bracket notation: objectName["propertyName"]
// document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old.";

//* 9. JavaScript Arrays: JavaScript arrays are written with square brackets. Array items are separated by commas.

// The following code creates an array called cars, containing three items (car names):
Example;
const cars = ["Saab", "Volvo", "BMW"];
// Array indexes are zero-based, which means the first item is at [0], second is at [1], and so on.

let myArray = [
  ["apple", 4],
  ["banana", 6],
  ["papaya", 23],
];
// we can nest array within a array. Here 'apple' and '4' is at 0 index. 'apple' is the first item of first element in the array. Similarly, 'papaya' and '23' are the first and second item of the third element respectively.

myArray[0][1] = 12; // with this method we can manipulate the original array.

let arrayItem = myArray[0][1]; // to access the second item of first element we have to use two indexes (brackets). Here we assigned the second value of the first element to arrayItem variable.
console.log(arrayItem);

// We can also create an array, and then provide the elements:
const fruits = [];
fruits[0] = "Apple";
fruits[1] = "Grapes";
fruits[2] = "Oranges";
console.log(fruits); //🔥 ['Apple', 'Grapes', 'Oranges'
