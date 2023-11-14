//💡 Factory Function
// If we have complex logic, and we have to create multiple objects again and again that have the same logic, we can write the logic once in a function and use that function as a factory to create our objects. It’s exactly the same as a real-world factory producing products.
// Factory Functions differ from regular functions as they always return an object, which will contain any value, method, etc.
// The naming convention for factory functions is camelCase.
function createCircle(radius) {
  return {
    radius: radius, // argument to radius parameter as the value to radius key.
    draw() {
      console.log("draw");
    },
  };
}
//💡 if our key and value are same, we can omit the value. Here we have a radius property that has radius parameter as it's value. So, We can remove this value (radius). This rule only applies to object literals and factory functions.
// here we an object 'anObject'. Now if we want to add this object in our main object that will be created using the below factory function we just need to include this. After adding this, we now have property name 'anObject' whose value is an object 'anObject'.
const anObject = {
  a: 1,
  b: 2,
  c: 3,
};

function createCircle(radius) {
  return {
    radius,
    anObject,
    draw() {
      console.log("draw");
    },
  };
}
// Now we can call this factory function to create an object. OR we call the function that returns the object.
const circle = createCircle(2); // Here we are simply storing the object in a variable.

// console logging the object.
console.log(circle);

// To add a new property or method or change an existing one in the object we can use the regular dot notation. Example:
circle.circumference =
  "Circumference of the circle or perimeter of the circle is the measurement of the boundary of the circle";

circle.diameter = function () {
  return 2 * circle.radius;
};

// To access the properties or call the method inside a factory function, we can use the variable name together with the dot notation and property name or method name.
circle.diameter();
circle.draw();

// The advantage of factory function is that we have defined the logic at one place. So, we can call this function with different arguments to get different objects.
// creating another object with different value.
const circle2 = createCircle(4);
console.log(circle2);

//💡 Constructor Function
// Constructor function is used in JavaScript to create multiple objects with the same properties and methods, or when you want to create an object with a complex structure.
// The naming convention for Constructor Function is Pascal Notation. i.e., first letter of every word is in uppercase: OneTwoThree

function ConstructCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// Now to create an object using constructor function. We will define a variable and store the object in it.
const myCircle = new ConstructCircle(1);
// Break-down of the above code line: ⬆
// when we use the 'new' keyword three things happen:
// 1. It creates an empty object inside the function. like {}
// 2. It binds 'this' keyword to the object inside the function, so that any properties or methods assigned to 'this' are added to the object. this.property and this.method refers to the object that 'new' keyword has created and stores them in it. like {radius: radius, draw() { console.log('draw') }}
// 3. Finally it returns the object.

// console logging the object.
console.log(myCircle);
// To access the method inside a constructor function, we can use the variable with dot notation and method.
myCircle.draw();

//⚡ Factory and constructor function are very much similar. Pick anyone.

//* Every object has a property called 'Constructor' that references/shows the function that was used to construct or create that object. It is a built-in function in JavaScript. When we create an object using object literal syntax, internally the javaScript engine uses this constructor function. Example:
let x = {}; // when we declare the object like this. JavaScript engine will translate this to: 👇
// let x = new object();                                                                      👈

// As we saw earlier we used the factory function that created and returned the 'circle' object, because we used the object literal syntax, internally it was created using the object constructor function.

// JavaScript has built-in constructors for native objects:
new String(); // To create a new String object
new Number(); // To create a new Number object
new Boolean(); // To create a new Boolean object
new Object(); // To create a new Object object
new Array(); // To create a new Array object
new RegExp(); // To create a new RegExp object
new Function(); // To create a new Function object
new Date(); // To create a new Date object

//⛔ But we never use them instead we use literals. Like '' for strings, [] for arrays, true/false for boolean, {} for object, etc...

//* Apart from .hasOwnProperty() method, we can use the 'in' operator to check if an object has a property with a given name. It returns true if the object has the property or false if it does not.
const obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello");
  },
};
console.log("name" in obj); // true
console.log("email" in obj); // false
if ("age" in obj) console.log("yes"); // yes

// We can use the typeof operator to check if an object has a property with a given name and if the property is a function. It returns 'function' if the object has the method and 'undefined' if it does not.
console.log(typeof obj.greet); // function
console.log(typeof obj.email); // undefined
console.log(typeof obj.age); // number

// There are several ways to enumerate the properties of an object in JavaScript.
// When you enumerate the properties of an object, you are looping over the object's properties and performing some operation on each property. This is often used to access or manipulate the values of the object's properties.
// Here are a few options:
//💡 For...in loop:
// You can use a for...in loop to iterate over the properties of an object. The loop will iterate over all enumerable properties of the object, including inherited properties.

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//🔥 a: 1
//🔥 b: 2
//🔥 c: 3

//💡 Object methods.
// These methods allow us to use array methods on objects. like map, includes, filter, reduce, forEach, etc

//💡 Object.keys() method:
// We can use the Object.keys() method to get an array of the object's own enumerable property names. You can then use a for...loop or for...of loop to iterate over the properties.

// Since for...of loop can only be used with iterables such as arrays, strings, and maps. So, we cannot use for..of loop directly with objects. However, we do use it with Object.keys method that returns all the keys from the object in an array and since arrays are iterable we can use the for...of loop to iterate them.

const objectMethod1 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(objectMethod1); // storing the property names as an array in the keys variable.
console.log(keys); //🔥 ['a', 'b', 'c']
for (const key of keys) {
  console.log(`${key}: ${objectMethod1[key]}`);
}
// This will output the same as the for...in loop example above.

//💡 Object.values() method:
// Similarly, Object.values() method is used to get an array of the property values.
const values = Object.values(objectMethod1);
console.log(values); //🔥 [1, 2, 3]

//💡 Object.entries() method:
// TLDR: This is the combination of both Object.keys and Object.values.
// We can use the Object.entries() method to get an array of the object's own enumerable properties, in the form of [key, value] pairs. You can then use a for...loop or for...of loop to iterate over the pairs.

const objectMethod2 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(objectMethod2); // storing the key-values as individual arrays in an array.
console.log(entries); //🔥 [['a', 1], ['b', 2], ['c', 3]]
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
// We destructured the entries array to assign the keys to 'key' variable and their corresponding values to 'value' variable. Since on each iteration entries holds the current element, i.e., on first iteration entries will be ['a', 1] and we are immediately destructuring it by assigning the values to the 'key' and 'value' variables. So, key will get 'a' and value will get 1. The process continues until all the elements from the entries array are finished.

// This will also output the same as the for...in loop example above.

// Note that these methods will only enumerate the object's own properties, and not inherited properties. If you want to include inherited properties, you will need to use a for...in loop.

//⚡ Recommendation: use for...in loop for enumerating the object properties.

//💡 Object Cloning methods:
// These cloning methods allow us to clone an object. They create a new object. The source and copy object don't point to same object. Thus, if we modify the cloned or the source object, it will only affect the object on which the changes are made. However, same is not true for any nested objects or arrays. Since these methods only create a shallow copy of the object, meaning that if the original object contains any nested objects or arrays, the copy will contain references to the same objects as the original. So, any changes made from either nested source object or nested clone object will be reflected in both nested objects.

//💡 1. Object.assign({}, sourceObject)
// This method creates a new object and copies the properties and methods of the original object into it. It can also be used to merge multiple objects into one.

// Example: 👇 This creates a new object with the properties of obj1 and obj2. If the same property name exists in all objects with different values, the cloned object will get the value from the last object passed for that property and if they share the same value, it will be merged into one.
const obj1 = { a: 1, e: 4, b: 2, l: 9 }; // l: 9 is present in obj1 and l: 0 in obj2, the value of 'l' will be overwritten by obj2's l. i.e., 'l' will get 0 as its value in the cloned object.
const obj2 = { c: 3, l: 0, d: 4, e: 4 }; // e: 4 is present in both obj1 and obj2, it will be merged into one property.

// when we want to create a new object we use empty{} object as first argument then source object/s.
const another = Object.assign({}, obj1, obj2);
console.log(another); // { a: 1, e: 4, b: 2, l: 0, c: 3, d: 4 }

// We can also add new properties or methods that aren't present in original object/s to the new object by writing them within the braces.
const sourceObj = { hello: "world", arr: [1, 2, 3] };
const copied = Object.assign(
  {
    additional: "new",
    how() {
      return "This way";
    },
  },
  sourceObj
);

// The change is reflected in both arrays because nested objects and arrays are not copied but only the reference is shared.
sourceObj.arr.push(4);
console.log(copied.arr); //🔥 [1, 2, 3, 4]
console.log(sourceObj.arr); //🔥 [1, 2, 3, 4]
copied.arr === sourceObj.arr; //🔥 true

// If we don't pass an empty object {} as the first argument to Object.assign(), the first argument itself will be treated as the target object, and the subsequent objects passed will be treated as source objects.
// Syntax Object.assign(target, ...sources);
// Merging Objects.
const target = { y: 4, wayu: "hayo" };
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
const merged = Object.assign(target, o1, o2, o3); // target object itself is changed.
console.log(target); //🔥 {y: 4, wayu: 'hayo', a: 1, b: 2, c: 3}
console.log(merged); //🔥 {y: 4, wayu: 'hayo', a: 1, b: 2, c: 3}

//💡 2. Spread Operator {...}
// The spread operator method is used to create a new object by copying the properties and methods of the original object into the new object. It also creates a shallow copy.
const original = {
  a: 1,
  b: "changed",
  foo() {
    console.log("Hello");
  },
  c: {
    d: 3,
    e: "Can you alter me?",
  },
};
const copy = { ...original }; // source object is passed in the braces after three dots.
console.log(copy); //🔥 {a: 1, b: 'changed', c: {…}, foo: ƒ}

console.log(original === copy); //🔥 false   // because they are separate independent objects.

console.log(copy.c === original.c); //🔥 true
// nested objects are not copied but their reference is copied into clone object. So, they are pointing to the same object.

// Any changes made to the nested object through the copy object will be reflected in the original object, because both objects are referring to the same object.

// We can also combine multiple objects into a new object and define any new property or object on the go.
const shallowCopy = {
  ...obj1,
  ...original,
  prop: "value",
  newObj: { prop: "value" },
};

//💡 Spread Operator in combination with destructuring.
// In this example, the object properties 'name' and 'age' are being destructured into separate variables, and the remaining properties are being assigned to the 'rest' object.
const destructureObject = {
  username: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
    postCode: "15058",
  },
  email: "user@mail.com",
  phoneNumber: "07428233312",
  favoriteFruit: "Watermelon",
};

// When we destructure the objects, we have to use the same keys from the object to transform them into variables. If we use a different variable name other than key, we will get undefined value for that.
const {
  username,
  age,
  address: { city },
  ...rest
} = destructureObject;

console.log(username); //🔥 'John'
console.log(age); //🔥 30
console.log(city); //🔥 New York
console.log(rest); //🔥 { city: 'New York', country: 'USA' }

// If you want to use a different variable name, we can use the key followed by the name.
const {
  username: title,
  age: userAge,
  address: { country: region },
} = destructureObject;
console.log(title, userAge, region); //🔥 John 30 USA

//⛔ We can also clone objects with for..in loop but that is outdated method. We should use Object.assign or spread operator method for cloning.
const newObject = {};
for (const key in original) {
  newObject[key] = original[key];
}

//💡 JSON.parse(JSON.stringify(sourceObject));
// This method truly clones an object. This does not create a shallow copy. It allows us to deeply clone a nested object.
const superClone = JSON.parse(JSON.stringify(original));
superClone.c.e =
  "Ahh! you seem to be super solid. However, I will try my best..";
console.log(original.c.e); //🔥 can you alter me?
// If we are doing deep clone we should be careful because JSON.parse can have some performance issues. If the original object will be extremely deep it's gonna take a long time to clone it. So you won't see it much used. If you're cloning deeply nested objects like this, there is most likely some other ways of doing this.

//💡 The Math object is a built-in object in JavaScript that has properties and methods for performing mathematical operations. Some of the most commonly used Math object properties and methods are:
// Math.PI: a property that represents the value of pi (approximately 3.14).
console.log(Math.PI); // Outputs: 3.141592653589793

// Math.random(): a method that returns a pseudo-random number between 0 (inclusive), and 1 (exclusive).
console.log(Math.random()); // Outputs: 0.47981281398913334

// Math.round(x): a method that returns the value of a number rounded to the nearest integer.
console.log(Math.round(4.6)); // Outputs: 4  // 4.5 will return 4

// Math.floor(x): a method that returns the number rounded down to its nearest integer.
console.log(Math.floor(7.7)); // Outputs: 7 // floors down the number to its integer part. Basically it ignores the decimal part.
console.log(Math.floor(-5.7)); // Outputs: -6 // because -6 is less than -5.

// Math.ceil(x): a method that returns the smallest integer greater than or equal to a number.
console.log(Math.ceil(6.1)); // Outputs: 7  // rounds up the number to its nearest integer. It's Opposite of floor method.

// Math.trunc(x): a method that returns the integer part of number.
console.log(Math.trunc(6.71)); // Outputs: 6  // drops the decimal part.

// Math.min(x, y, ...): a method that returns the smallest value in a list of arguments.
console.log(Math.min(0, 150, 30, 20, -8, -200)); // Outputs: -200

// Math.max(x, y, ...): a method that returns the largest value in a list of arguments.
console.log(Math.max(0, 150, 30, 20, -8, -200)); // Outputs: 150

// Math.sqrt(x): a method that returns the square root of a number.
console.log(Math.sqrt(64)); // Outputs: 8.

// Math.pow(x, y): a method that returns the result of raising a number to a power.
console.log(Math.pow(4, 2)); // Outputs: 16       //  It's like x raise power x²

// Math.sign(x) a method that returns if x is negative, null or positive.
console.log(Math.sign(-790)); // Outputs: -1  // returns 1 for positive numbers, -1 for negatives and 0 for 0 (exclusive). 0.something returns 1.

// Math.abs(x): a method that returns the absolute value of a number.
console.log(Math.abs(-43)); // Outputs: 43    // The absolute value of a number is its distance from 0.

// Combining both Math.random() and Math.floor together to get a random whole number. First JavaScript will solve the Math.random() * 6 which is inside the bracket because javaScript follows the conventional bodmass. Suppose Math.random returns 0.999, multiplying that with 6 which equals to 5.994 then Math.floor will remove the fractional part after the decimal point and return the number as 5.
// This will generate any number between 0 to 5.
let RandomNumber = Math.floor(Math.random() * 6);
console.log(RandomNumber);

// Generating a random number between 1 to 6.
let testNumber = Math.floor(Math.random() * 6 + 1);
console.log(testNumber);

// Creating a Roll Dice.
function rollDice() {
  let Dice = Math.floor(Math.random() * 6 + 1);
  return Dice;
}
let DiceResult = rollDice();
console.log(DiceResult);

//* Generating a whole number within a certain range using Math.random () and Math.floor () methods with a function.

// In the below example we want to generate a whole number dynamically with a function from 5 to 10. Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). The function then multiplies that value by the difference of ourMax and ourMin + 1, 1 is added so that it includes the number at maximum value (i.e., 10 in this case) and then adds ourMin so that we get a number within the desired range instead of any random number from 0-5. If we don't add ourMin at last, we will only get a random number from 0-5. Finally, Math.floor rounds down to an integer so that we don't end up with decimals or fractions as output for this function's return statement. Suppose we passed 5 and 10 as an argument to ourMin and ourMax parameters respectively.
// let's assume Math.random () gets 0.09. Now evaluate it: Math.floor(0.09 * ((10 - 5 + 1)) + 5
// Math.floor(0.54) + 5 ==>> Math.floor(5.54) = 5.

// It generates random numbers between first and last parameter including them as well.
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
let ourRange = ourRandomRange(5, 10);
console.log(ourRange);

// It generates random numbers within a range starting from 0. It does not allow a custom minimum value, and the maximum value is excluded from the generated range.
function rn(mn, mx) {
  return Math.floor(Math.random() * (mx - mn + 1));
}

//💡 this keyword
// 'this' refers to the object that calls the method. The purpose is to make the code less hardcoded and more dynamic and reusable.
const user = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  job: "Engineer",
  hobbies: ["Biker", "Travel", "Books"],
  calcAge() {
    console.log(this); // here you can see that 'this' keyword indeed refers to the object.
    return 2030 - this.birthYear;
  },
};
console.log(user.calcAge());

// If we need to use the 'age' multiple times, we have to call the calcAge() method multiple times and that would be doing a lot of computation. In order to reduce this computation complexity we will store the computed value in a property called 'age'. So, whenever we access the age property, it doesn't have to call the calcAge() method again and again for getting its value.
const user1 = {
  birthYear: 1990,
  calcAge() {
    this.age = 2030 - this.birthYear;
    return this.age;
  },
};
user1.calcAge(); // first we need to call the calcAge() method before accessing the 'age' property.

// now we can call the age property without requiring us to call the calcAge() method again because it has already computed and returned the age property when we called it first time.
console.log(user1.age);

//⚡ most common ways to create an object:
// Object literals
// Constructor functions
// classes
