//* Arrays are a special type of objects. Arrays in JavaScript have built-in methods and properties that are accessible directly on the array objects themselves. These methods and properties are part of the Array prototype, and any array created in JavaScript automatically inherits them. However, unlike primitive values, arrays do not need to be wrapped in object wrappers to use methods and properties on them.

// Properties are values that are associated with an object. They can be accessed using the dot notation or the square bracket notation.

// Methods are functions that are associated with an object. They can be called on the object and can be used to perform actions or calculations.
//                                                  OR
// Method: A Method is something that does some action on strings or arrays. It is just a function that is associated with string and array objects. We invoke/call a method with a . dot notation followed by () on a variable.
// syntax: variablename.methodname(parameter1, parameter2);

//⚡ You can identify whether something is a method or a property just by looking at the parentheses after the method name. If there is parentheses, it's a method else it's a property. However, there are some exceptions to this rule, such as functions that are used as properties.

//💡  Array Property:
// .length: a property that returns the length of array elements.
const NAME = ["hello", "world"];
let nameLength = NAME.length;
console.log(nameLength); //🔥 2
// console.log(["hello", "world"].length); we can directly use the length and other array methods in the console function.

// with bracket notation we can get the element at a specific index in an array.
let ElementAt = NAME[1];
console.log(ElementAt); //🔥 world

// Accessing the character in an element.
console.log(NAME[1][0]); //🔥 w

// Assigning element at certain index to another variable.
// Let's try to set thirdLetterOfLastName variable equal to the third letter of the lastName variable using the bracket notation.
const fourElements = [1, "one", 2, "two"];
const thirdElementOf = fourElements[2];
console.log(thirdElementOf); //🔥 2  // Note: thirdElementOf is not an array. It's number type.

//* We can Use Bracket Notation to Find the Last Element in a Array by using the n-1 formula, where n is the length of the array.
const last_Element = [1, "wow", 2.2, "sss", "49"]; // total length 5
const lastElementOf = last_Element[last_Element.length - 1]; // 5 - 1 = 4
console.log(lastElementOf); //🔥 '49' // because it is at the index 4. Note: lastElementOf is not an array. Inside the bracket [] we used the expression that returned some value.

//💡 Here are some methods that are specific to arrays:

// push(element): a method that adds a new element to the end of the array.
// pop(): a method that removes the last element from the array and returns it.
// shift(): a method that removes the first element from the array and returns it.
// unshift(element): a method that adds a new element to the beginning of the array.

//* Some of the Array methods in JavaScript modify the original array and some do not.

//💡 Here are some examples of Array methods that modify the original array:
const ARRAY = [1, 2, 3];

ARRAY.push(4);
console.log(ARRAY); //🔥 [1, 2, 3, 4]

ARRAY.pop();
console.log(ARRAY); //🔥 [1, 2, 3]

ARRAY.unshift(0);
console.log(ARRAY); //🔥 [0, 1, 2, 3]

ARRAY.shift();
console.log(ARRAY); //🔥 [1, 2, 3]

ARRAY.reverse();
console.log(ARRAY); //🔥 [3, 2, 1]

ARRAY.sort();
console.log(ARRAY); //🔥 [1, 2, 3]

//💡 Array methods that do not modify the original array

// at(): returns an indexed element from an array. The default is index 0. For the last element in array, use -1.
// concat(): concatenates (joins) two or more arrays and returns a new array.
// join(): joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator. array.join("*") will add * between array elements. If we don't provide any separator, it will take the default i.e., comma ',' with no spacing between elements and the comma.
// slice(): extracts a part of an array and returns a new array.
// splice(): removes elements from an array and/or adds new elements and returns an array of the removed elements.
// filter(): creates a new array with elements that pass a condition and returns the new filtered array.
const ages = [16, 33, 12, 18, 32];
const newArray = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(newArray); //🔥 [33, 18, 32]

// find(): takes a callback function as an argument and iterates over each element in the array and returns the value of the first element in an array that satisfies a condition, or undefined if no element satisfies the condition.
const age = [13, 18, 10, 20, 21];
let second = age.find(checkAge);

// find method automatically passes the current element as an argument to the checkAge function. So, for each element, the 'currentAge' parameter will receive the corresponding value from the 'age' array.
function checkAge(currentAge) {
  return currentAge > 10; // Only the first element will be returned.
}
console.log(second); //🔥 [13]

// includes(): returns a boolean true/false indicating whether an array includes a certain value.
let whether = age.includes(40);
console.log(whether); //🔥 false

// flat(): flattens the nested array
let topLanguages = [
  "Javascript",
  "Python",
  ["Go", "Kotlin", "R"],
  ["Java", "C#", ["Swift", "PHP"]],
  ["C", ["C++", ["Ruby"], ["Rust"]], "Dart"],
];
let flatted = topLanguages.flat();
console.log(flatted); //🔥 ['Javascript', 'Python', 'Go', 'Kotlin', 'R', 'Java', 'C#', Array(2), 'C', Array(3), 'Dart']

// By default it flattens arrays by 1 layer (array within main array). To flatten deeper arrays, provide higher value as an argument. In our example
flatted = topLanguages.flat(3);
console.log(flatted); //🔥 ['Javascript', 'Python', 'Go', 'Kotlin', 'R', 'Java', 'C#', 'Swift', 'PHP', 'C', 'C++', 'Ruby', 'Rust', 'Dart']

// If there are any unwanted empty items in the array, it can clean up those.
let entries = ["bob", , , , "marry", , , , , "cinthiya"];
console.log(entries.flat()); //🔥 ['bob', 'marry', 'cinthiya']

//* flatMap() is another method that allows us to use both flat() and map() methods simultaneously on an array.

//💡 We can access the array methods or properties using the square bracket notation.
// ⛔ However, this approach is not commonly used and can make your code harder to read and understand. It is better to use the traditional dot notation (.) when calling array methods directly on a variable.

// To access a method or property of an array using the square bracket notation, you can use the name of the method or property as a string inside the square brackets.
// For example, here is how you can access the length property of an array using the square bracket notation:
const num = [1, 2, 3];
console.log(num["length"]); //🔥 3

// For example, here is how you can access the push method of an array using the square bracket notation:
const number = [1, 2, 3];
number["push"](4);
console.log(number); //🔥 [1, 2, 3, 4]

// You can also use variables or expressions inside the square brackets to access methods dynamically. For example:
const numbers = [1, 2, 3];
const method = "push";
numbers[method](4);
console.log(numbers); //🔥 [1, 2, 3, 4]
// Keep in mind that when using the square bracket notation to access a method, you still need to include the parentheses after the method name to call it.

//💡 Advanced Array Methods

// 💡 map
// The map loops through over a collection of elements, applying the operation on each element and then finally storing the result of each invocation of the operation into another collection.
// In other words it creates a new array.
// We always return some value with map.
// map allows us to write pure simple functions.

const array = [1, 2, 4, 6];
const mapArray = array.map((num) => {
  return num * 2;
});

console.log("map", mapArray); // mapArray is now an array.

//💡 forEach vs map
const double = [];
const forEachArray = array.forEach((num) => {
  double.push(num * 2);
});
console.log("forEach", double);

// looking at map and forEach, they seem to both be doing the same thing. But there is a critical difference between them i.e., whenever you want to do a simple loop and take some action on something like an array, you want to use map over forEach. With forEach the operation may do nothing, you can just leave this completely blank or do a simple console log because all forEach cares about is to iterate over a collection of elements and apply whatever operation we tell it to on each element.

// map on the other hand has a restriction on the operation. It expects the operation to return an element. So, with forEach you can have multiple lines of code doing all these crazy things versus map you always have a return element.

// with forEach, if we want to return a new array we have to first create our own array and then push the invocation onto it.

// with forEach we can do a whole bunch of side effects within the function.
// with a map, all these side effects are theoretically gone. And because with a map we have to return, If we don't return we get undefined. Which shows we're doing something wrong that we need to return.

//💡 filter
// for definition see line no. 74.
const filterArray = array.filter((num) => {
  return num > 3;
});
console.log(filterArray); //🔥 [4, 6]

//💡 reduce
const array1 = [1, 2, 10, 16];
//  It returns a single value. It takes two parameters. The first one is the callback function with two parameters (accumulator and current element) and the second one is the value of the accumulator. On each iteration the value of accumulator gets updated by the operation on it.

// Like here we are returning the sum of accumulator and num. The default value of accumulator is the current element if we don't provide any value. Here, the accumulator is initialized with a value of 1.
const reduceArray = array1.reduce((accumulator, num) => {
  return accumulator + num;
}, 1);
console.log(reduceArray); //🔥 30

// On the first iteration accumulator is 1 and num is 1 ==> 1 + 1 = 2. Now, accumulator is 2.
// 2nd iteration: accumulator is 2 + num is 2 <==> 2+2 = 4
// 3rd iteration: accumulator is 4 + num is 10 <==> 4+10 = 14
// 4th iteration: accumulator is 14 + num is 16 <==> 14+16 = 30
//* 🤔 It doesn't have to be "accumulator", It can be named anything.

//💡 fromEntries(soureArray)
// It transforms a list of key-value pairs into an object.
// The array must be in the format of key-value pairs in order to call this method on it.
const userProfiles = [
  ["Harry", 22],
  ["Jimmy", 25],
  ["Steve", 30],
];
const toObject = Object.fromEntries(userProfiles);
console.log(toObject); //🔥 {Harry: 22, Jimmy: 25, Steve: 30}
// Now, 'toObject' is an object literal.

//💡 Array Cloning methods:
// These cloning methods allow us to fully clone an array. They create a new array. The source and copy array don't point to same array. Thus if we modify the cloned or the source array, it will only affect the array on which we make changes. However same is not true for nested arrays or nested objects. Since these methods only create a shallow copy of the array, meaning that if the original array contains any nested arrays or objects, the copy will contain references to the same arrays or objects as the original. So, any changes made from either nested source array or nested clone array will be reflected in both nested arrays.

//💡 1. Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array into another array. The Spread Operator can be used with both iterables and objects.
const source = ["s", "o", "u", "r", "c", "e"];
const copy = [...source];
console.log(copy); //🔥 ['s', 'o', 'u', 'r', 'c', 'e']

// It allows us to concatenate two or more arrays.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); //🔥 [1, 2, 3, 4, 5, 6]

// The spread operator allows us to insert another array into the initialized array when you construct an array using the literal form.
const initialArray = ["A", "B"];
const bakedArray = [...initialArray, "C", "D"];
console.log(bakedArray); //🔥 ['A', 'B', 'C', 'D']

// The spread operator is often used in combination with destructuring.
// Assign the first and second elements from nums array to variables (one and two) and put the rest in an array (rest):
const nums = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = nums;
console.log(one); //🔥 1
console.log(two); //🔥 2
console.log(rest); //🔥 [3, 4, 5, 6]

// To skip any element from the source array use a comma ','
const [f1, , f2] = nums;
console.log(f1); //🔥 1
console.log(f2); //🔥 3  // f2 was assigned the element '3' not the '2'.

// Whenever we need the elements of an array individually then we can use the spread operator and that is useful when we need to pass multiple elements into a function.
function sum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}
// If we pass an array into the function with the spread operator, it will spread the array elements and assign them to the parameters sequentially.
sum(...nums); // calling the function with an array whilst spreading the array in one line.

// creating a new array by expanding the str string. when you use the spread syntax (...) with a string, it treats the string as an iterable, and it spreads each character of the string as separate elements.
const str = "Hello";
// The 'str' string is spread into individual characters, and '🌍' is added as an element to create a new array.
const letters = [...str, "🌍"];
console.log(letters); //🔥 ['H', 'e', 'l', 'l', 'o', '🌍']  // Each letter of the original string is now an individual element.

// If we use the spread operator on a string, it will spread the characters individually.
console.log(...str); //🔥 H e l l o

//💡 We can only use the spread operator when building an array or an object or when we pass values into a function
// We cannot use the spread operator to build a string using the template literal because this is not a place that expects multiple values separated by a comma.
// console.log(`${...nums} not going to work`)

//💡 2. [].concat(sourceArray)
// We can also clone the arrays with this method.
const original = [1, 2, 3];
const copied = [].concat(original);
console.log(copied); //🔥 [1, 2, 3]

//⚡ Use Spread Operator for cloning. It's simple and concise.
