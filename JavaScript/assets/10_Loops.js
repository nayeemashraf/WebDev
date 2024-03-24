// loops allow us to repeat an action multiple times.
// JavaScript has different kinds of loops:
// 1. while
// 2. for loop
// 3. do..while
// 4. for..of
// 5. for..in
// 6. forEach

//💡 while...loop
// while loop runs the code until the condition is true and stops the execution once it no longer is true.

// In our example we are going to push the numbers from 0 to 4 onto the myArray array. We will declare a variable 'i' that will increment the numbers and set it to 0. The condition in this case is i < 5. It will start at 0 and increment by 1 (with i++ operator) each time through the loop, pushing that value into an array. Once 'i' reaches a value of 5, the loop stops running and prints out 'myArray' to the console.
let myArray = [];
let i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// reverse while loop
let counter = 5;
while (counter > 0) {
  console.log(counter);
  counter--;
}

// while loop doesn't have to depend on any counter variable. So, whenever you need a loop without the counter you should use the while loop. Basically when you don't know ahead of time how many iterations the loop will have, in that situation the while loop will do the job. Example:
let dice = Math.floor(Math.random() * 6) + 1;
while (dice != 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//💡 for...loop
// The for statement creates a loop with 3 optional expressions:

// for (expression 1; expression 2; expression 3) {
//   code block to be executed
// }
// Expression 1 is executed (one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed (every time) after the code block has been executed.

let theArray = ["a", "b", "c"];
for (let i = 0; i < theArray.length; i++) {
  console.log(i, theArray[i]); // 'i' is the index no. and theArray[i] is the element at the given index.
}

// Remember we initialize 'i' to 0 because most of the time we iterate through an array and we know javaScript use zero-based indexing so, the first element will be at index 0. i++ is the increment operator, this will add 1 to itself after the execution of loop body and before the next iteration.

// Replicating the same thing we achieved with the above 'while loop' using a 'for loop'.
// We are looping through till 'i' is less than 5

let ourArray = [];
// START AT 0, END AT 4, add 1
for (i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);

// break-down of the iterations:
// 1. First 'i' is initialized with 0. Now, It checks whether 'i' is less than 5 or not, which is true. Then it will save it to 'ourArray'. Then it will add 1 to that 0 which equals to 1.
// 2. Is 1 less than 5? YES, Save 1 to ourArray. Add 1 to 1 = 2.
// 3. Is 2 < 5? YES, Save it to ourArray. Add 1 + 2 = 3.
// 4. Is 3 < 5? YES, Save it to ourArray. Add 1 + 3 = 4.
// 5. Is 4 < 5? YEs, Save it to ourArray. Add 1 + 4 = 5.
// 6. Is 5 < 5? NO, STOP THE LOOP.

// for loop of even numbers until 20.
let evenNumbers = [];
for (i = 0; i < 20; i += 2) {
  evenNumbers.push(i);
}
console.log(evenNumbers);

// for loop of odd numbers until 20.
let oddNumbers = [];
for (i = 1; i < 20; i += 2) {
  oddNumbers.push(i);
}
console.log(oddNumbers);

//* reverse for loop
for (i = oddNumbers.length - 1; i >= 0; i--) {
  console.log(oddNumbers[i]);
}

// reverse for loop. Decrementing 2 from 'i' on each iteration.
let reverseArray = [];
for (i = 10; i > 0; i -= 2) {
  reverseArray.push(i);
}
console.log(reverseArray);

//💡 do...while loop
// do while loop executes the code block before it checks the condition at least once and then repeatedly runs the block, or not, depending on whether the condition is true or false. This happens because we are executing/call the code before the condition is checked.

//⛔ do..while loop is not used that much.

// In the example, It will run the code once i.e., to store j's value in myDoWhile array and increment j by 1 each time. Then 'j' is incremented by 1, after that it checks the condition which is 11 < 5 i.e., false and it will break out of the loop.
let myDoWhile = [];
let j = 10;
do {
  myDoWhile.push(j); // code executed before condition
  j++; // increment/decrement after first iteration
} while (j < 5); // condition check after first iteration

console.log(j, myDoWhile);

// reverse do while loop
let p = 10;
do {
  console.log(p);
  p--;
} while (p > 0);

// Profile Lookup example with for...loop.
// We have an array of objects with a contact list, where each object is one of the contact. We want to get the value of any property with the given property name. This will be accomplished using the lookUpProfile function.
// The function takes in two parameters, name and prop. It uses a for loop to iterate through the contacts array to find the firstName property of each object. It checks whether argument passed to the name parameter matches the firstName property. If it does, it returns the value of prop, (the property passed as an argument) if it exists or "No such property" if it doesn't. If no match is found, (it means neither the name is equal to firstName nor the prop (property) is present), it returns "No such contact".

const contacts = [
  {
    firstName: "Alyse",
    lastName: "Laine",
    number: "01234653",
    likes: ["Pizza", "Coding", "Gardening"],
  },
  {
    firstName: "Luis",
    lastName: "Eions",
    number: "62634274",
    likes: ["Hogwarts", "Reading", "Football"],
  },
  {
    firstName: "Andrew",
    lastName: "Holmes",
    number: "35242234",
    likes: ["Barbeque", "Calligraphy", "CSS"],
  },
  {
    firstName: "Kristain",
    lastName: "Yvolmer",
    number: "262454432",
    likes: ["JavaScript", "Gaming", "Blogging"],
  },
];

function lookUpProfile(name, prop) {
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

let isAvailable = lookUpProfile("Alyse", "likes");
console.log(isAvailable);

console.log(lookUpProfile("Luis", "age")); // Finding a non-existing property in the contact(object).
console.log(lookUpProfile("Mario", "likes")); // Finding a non-existing contact(object).

//💡 we have two more loops in javascript i.e, for...in and for...of. We use them to iterate over the properties of an object or elements in an array.

//💡 for...in loop
// A for...in loop loops over enumerable properties of an object.
// Suppose we have an object and we want to display all the properties of this person object that's when we use a for...in loop.
const person = {
  name: "Jhon",
  age: 30,
};
// The JavaScript for...in statement loops through the properties of an Object:
// syntax
for (variable in object) {
  statement;
}
// unlike the other loops we don't have the initializer, condition and increment/decrement part in the parentheses.
// It is often used to enumerate the properties of an object, meaning to access the properties of an object one by one.

// In this example, we will do a simple console log, that will display all the property names.
for (const key in person) {
  console.log(key);
}

// const 'key' is the loop variable of the for...in loop. It is used to store the current property name as the loop iterates over the properties of the object. The 'const' keyword is used to declare the loop variable as a constant, which means that the value of the loop variable cannot be changed during the execution of the loop. This is useful because the loop variable is only used to access the properties of the object, and there is no need to reassign it.
// In every iteration this 'key' variable in the parentheses is set to the name of each property in this 'person' object.
// we can declare the loop variable either with let or const in the parentheses.

// The 'key' variable is used to access the name of the current property, and the object[property] syntax is used to access the value of the current property.
// we want to access the value of each property next to its name. We can do so with the help of bracket notation to access them dynamically.

for (const key in person) {
  console.log(key, person[key]);
}
// In this example, the loop iterates over the properties of the object. On the first iteration of the loop, the loop variable (key) is set to the name of the first property, which is "name". The loop body is executed, the "name" property and its value are logged to the console. On the second iteration of the loop, the loop variable is set to the name of the second property, which is "age". The loop body is executed again, the key and value of the "age" property are logged to the console. This process continues until all the properties of the object have been processed.

//* It's important to note that the for...in loop will iterate over the enumerable properties of the object, including own properties (properties that are directly defined on the object) and inherited properties (properties that are inherited from the object's prototype chain).

//⛔ The for...in statement can also be used to loop over the elements of an Array. But it's not recommended.
//⚠️ Do not use for...in loop over an Array if the index order is important.

//💡 for...of loop
// The for...of loop is a loop type in JavaScript that is used to iterate over the values of iterable objects, such as arrays, strings, maps, and sets.
const colors = ["red", "green", "blue", "indigo", "beige", "white", "purple"];
for (const items of colors) {
  console.log(items);
  // The 'items' variable is always the current element in each iteration.
}

// If we want to get the index no.s of elements in a for...of loop, we can do so using the entries() method.
// The entries() method returns an iterator that produces pairs of index and value for each element in the array.
for (const item of colors.entries()) {
  console.log(item);
}
// The for...of loop iterates over the iterator produced by the entries() method. In each iteration, the 'item' variable holds a pair of [index, value] for the current element in the 'colors' array.
//🔥 [0, 'red']
//🔥 [1, 'green']
//🔥 [2, 'blue']
//🔥 [3, 'indigo']
//🔥 [4, 'beige']
//🔥 [5, 'white']
//🔥 [6, 'purple']

//💡 break;
// In JavaScript, the break and continue keywords are used to alter the flow of a loop.
// The break keyword is used to exit a loop early, before the loop's condition is evaluated again. When a break statement is encountered inside a loop, the loop is immediately terminated and control is transferred to the statement following the loop.
for (i = 0; i < 10; i++) {
  if (i == 5) {
    // loop will stop when i equals to 5.
    break;
  }
  console.log(i); // 0, 1, 2, 3, 4
}

//💡 continue;
// The continue keyword is used to skip the rest of the current iteration of a loop and proceed to the next iteration. When a continue statement is encountered inside a loop, the loop's condition is evaluated again and the loop continues with the next iteration, if the condition is still true.
// 'continue' says just skip out the code for this iteration of i. skip out the rest of the statements/code below it and move to the loop condition and run for next values of i.
for (i = 0; i < 20; i++) {
  if (i == 0 || i == 5) {
    // loop will not execute when i is 0 or 5.
    continue;
  }
  if (i > 10) {
    break;
  }
  console.log(i); // 1, 2, 3, 4, 6, 7, 8, 9, 10
}
// continue keyword isn't used that often.

//💡 nested loops
//💡 In a nested loop, on the each iteration of the outer loop, the inner loop will complete all of its iterations. This behavior holds true for all loop types and most common programming languages in a normal scenario.

// Outer loop runs 3 times. For each iteration of outer loop, inner loop runs 3 times
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting Exercise ${exercise}`);
  for (let i = 1; i < 4; i++) {
    console.log(`Exercise ${exercise}: Lifting Weight ${i} 🏋🏻‍♀️`);
  }
}

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// i runs 3 times. On every iteration of i, j runs 2 times making it a total of 6 iterations
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//* exercise logging star pattern to the console with the help of nested loop.
function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
showStars(5);
/* Breakdown of loops:
The showStars function is called with an argument of 5.
The outer loop is initialized with 'row' variable equal to 1.
The inner loop is initialized with 'i' variable equal to 0.
The inner loop begins executing '0 < 1' (i = 0, row = 1). On the first iteration, "*" is added to the 'pattern' string.
The 'i' is incremented by 1. Since 'i' is now 1 (i = 1, row = 1) 1 < 1, the inner loop exits.
At this point, the 'pattern' string is logged to the console ("*") and the loop continues to the next iteration of outer loop.
The 'row' variable is incremented by 1. 2 < 5 (row = 2, rows = 5)
The inner loop declares the variable 'i = 0' again. 0 < 2 (i = 0, row = 2)
'pattern' is updated with "*".
The 'i' variable is incremented by 1. 1 < 2 (i = 1, row = 2)
'pattern' is concatenated with another "*" now pattern is "**"
The 'i' variable is incremented by 1. 2 < 2 (i = 2, row = 2) which is false, the loop continues to the next iteration of outer loop.
At this point, the 'pattern' string is logged to the console and the outer loop starts next iteration.

This process continues until the outer loop has completed rows iterations (in this case, rows is equal to 5). At this point, both loops finish executing and the function terminates.
*/

//* exercise
// In this example, the sortFruit() function returns an array containing the appleShelf and orangeShelf variables. The returned array is then destructured using multiple assignment, and the values are stored in the apples and oranges.

const fruits = ["🍎", "🍊", "🍎", "🍊", "🍎", "🍊"];
let appleShelf = "apples: ";
let orangeShelf = "oranges: ";

function sortFruit() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍎") {
      appleShelf += "🍎";
    } else if (fruits[i] === "🍊") {
      orangeShelf += "🍊";
    }
  }
  // To return multiple values from a function, we can return it as an array or an object.
  return [appleShelf, orangeShelf];
}
// destructuring the returned array from sortFruit() function into two variables.
const [apples, oranges] = sortFruit();
console.log(apples); //🔥 apples: 🍎🍎🍎
console.log(oranges); //🔥 oranges: 🍊🍊🍊

const fruitShelf = sortFruit();
console.log(fruitShelf);
console.log(appleShelf);
console.log(orangeShelf);

//💡 ForEach() loop
// The forEach method passes a callback function for each element in an array. This type of loop is used to iterate through an array, maps and sets. The callback function is called once for each element in the array, and it is passed with three arguments: the current element, the index of the current element, and the entire array itself on each iteration. The first argument is required in forEach () loop.
let array = ["One", 2, "Three", 4];

array.forEach(function (element, index, array) {
  console.log(element, index, array);
});

//💡 We don't provide the argument explicitly to the callback function rather it happens implicitly. That is on each iteration the current element from array is provided as an argument to the function.

// We can define an anonymous function and pass that as a callback into the forEach loop.
const loopEach = function (el, i) {
  console.log(el, i);
};
// passing the loopEach function in the forEach loop.
array.forEach(loopEach);

//⛔ We cannot use 'break' or 'continue' statement in a forEach...loop.

//⛔ We cannot use 'return' statement directly inside the loops. In JavaScript, the return statement can only be used within the body of a function, not within a loop or any other control flow structure. This implies we can use it inside the forEach loop, which passes the callback function for each element.
for (i = 0; i < 10; i++) {
  if (i == 5) {
    return i;
  }
  i++;
}
//🔥 Illegal return statement

// If you want to exit the loop and return a value, you can use a different approach, such as assigning the value to a variable and breaking out of the loop using the break statement.
const ages = [20, 35, 80, 23, 18, 65, 53, 41];

let result;
for (i = 0; i < ages.length; i++) {
  if (ages[i] === 18) {
    result = ages[i];
    break; // Exit the loop
  }
}
console.log(result); //🔥 18

// OR
// you can achieve this by encapsulating the loop inside a function and using a return statement to return the desired value.
function findValue() {
  for (i = 0; i < ages.length; i++) {
    if (ages[i] === 80) {
      return ages[i];
    }
  }
}

let any = findValue();
console.log(any); //🔥 80

//💡 Most commonly used loop types:
// for...loop
// for...of
// forEach
// for...in

//💡 Use for...of loop when:
// You only need to iterate over the values of an array or iterable object.
// Accessing the index is not required.
// You want the ability to terminate the loop early using the break statement.
// You need to return a value from the loop.

//💡 Use forEach loop when:
// You need to iterate over the elements of an array and perform side effects, such as updating UI elements, logging, etc.
// Accessing both the value and index of each element is required.
// You want to ensure that all elements of the array are processed.

//⚡ Arrays and Strings are iterable. We iterate over a collection of items in an array or string. We can use for...in loop with arrays because arrays are object type. However, we shouldn't use it unless required.

//⚡ Objects are enumerable. We enumerate over Key-value pairs in Objects. The object properties are enumerable. We can't use for...of loop directly on objects because for...of loop only works with iterables.
