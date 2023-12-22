//💡 Destructuring
// This is useful when we deal with the result (data in the form of objects) of an API call.
// Destructuring is the process of unpacking the values from an array or object into separate variables. When you destructure an iterable, like an array or an object, you're extracting its elements or properties into separate variables.

// Example with arrays:
const numbers = [1, 2, 3, ["one", "two", "three"]];
const [an, bn, cn, ...wholeArray] = numbers; // Destructuring array elements into individual variables

// Example with objects:
const person = { firstName: "John", lastName: "Doe", age: 30 };
const { firstName, lastName } = person; // Destructuring object properties into variables

//💡 Spreading
// Spreading is the process of copying the values from an array or object into another array or object. For example, the following code spreads the users array into the newUsers array:
const users = [
  { name: "John Doe", age: 30, email: "johndoe@example.com" },
  { name: "Jane Doe", age: 25, email: "janedoe@example.com" },
];
const newUsers = [...users];

// Example with objects:
const persons = { firstName: "John", lastName: "Doe", age: 30 };
const personUpdated = { ...persons, age: 50 };

//⚡ We can provide the default values when destructuring arrays and objects.

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // without default values.
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // with default values.
  orderDeliveryWithDefaults({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // Method that accepts multiple arguments and then use the spread operator to actually pass those arguments.
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// destructuring arrays
let [main, secondary] = restaurant.categories;
console.log(main, secondary); //🔥 Italian Pizzeria

// updating variables or switching their values.
[main, secondary] = [secondary, main];
console.log(main, secondary); //🔥 Pizzeria Italian

// destructuring whilst calling the function.
// Receive 2 return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //🔥 Garlic Bread Pizza

//💡 destructuring nested arrays
const nested = [2, 4, [5, 6]];
const [i, , j] = nested; // skipping element '4'.
console.log(i, j); //🔥 2 (2) [5, 6]

// To get the individual elements instead of the nested array we have to do another layer of destructuring.
const [k, , [l, m]] = nested;
console.log(k, l, m); //🔥 2 5 6

//💡 Default values
// Setting default values for the variables when are extracting them. It's useful when we don't know the length of the array ahead of the time.
const [p, q, r] = [8, 9];
console.log(p, q, r); //🔥 8 9 undefined // we get undefined for 'r' because no element exists at index 2.

// Now setting the default values.
const [a = 1, b = 2, c = 3] = [8, 9];
console.log(a, b, c); //🔥 8 9 3  // since no element exists at index 2 so it fallbacks to the default value 3.

// providing default values whilst destructuring objects.
// Since 'menu' doesn't exist in the 'restaurant' object so it will get 'empty' array as its default value.
const { menu = ["empty"], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //🔥 ['empty'] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// This is useful when we don't have hardcoded data like we have it here (restaurant object). In a real-world, we usually get the data from somewhere else and we might not know what the data includes and then it's useful to set defaults like this.

// Destructuring and updating the variables.
let a0 = 44;
let b0 = 69;
const obj0 = { a0: 26, b0: 89 };
// when we try to destructure and update variables in an object, we need to enclose the entire destructuring statement in parentheses. By adding parentheses around the destructuring assignment, you're indicating to the JavaScript interpreter that the curly braces should be treated as a block statement, allowing you to destructure and update the a0 and b0 variables from the obj0 object.
({ a0, b0 } = obj0);
console.log(a0, b0); //🔥 26 89

//💡 destructuring nested objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close); //🔥 11 23

//💡 destructuring the object passed as an argument to the function.
//💡 Practical application of destructuring
// Many times in JavaScript, we have functions with a lot of parameters, and then it can be hard to know the order of the parameters for someone who is using the function. So, instead of defining the parameters manually, we can just pass an object into the function as an argument, and the function will then immediately destructure that object.
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
// We only passed in one argument i.e., one object into this function (orderDelivery). We didn't pass 4 arguments. Then in the function as it received that object we do destructuring immediately that's why the parameters match with the object keys. The great thing about this is the keys and the index don't have to match the order in which we do destructuring.

// with default values
restaurant.orderDeliveryWithDefaults({
  address: "Via del Sole, 21",
  starterIndex: 0,
});
// address and starterIndex will get the value from this object and other parameters will get the default values.

//💡 Destructuring within loop
const newarr = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const [i, el] of newarr.entries()) {
  console.log(`${i + 1}: ${el}`); // Ignore addition of '1' to the index for starting index numbering at 1.
}
// The entries() method is called on the 'newarr' array. This method returns an iterator that produces pairs of index and value for each element in the array.
// The for...of loop iterates over the iterator produced by the entries() method. In each iteration, it holds a pair of [index, value] for the current element in the 'newarr' array.
// With destructuring, the [index, value] pair is directly assigned to the variables i and el, respectively. This means that in each iteration of the loop, 'i' holds the index and 'el' holds the value ('newarr' item) from the current element in the 'newarr' array.
/*
🔥 1 'Focaccia'
🔥 2 'Bruschetta'
🔥 3 'Garlic Bread'
🔥 4 'Caprese Salad'
🔥 5 'Pizza'
🔥 6 'Pasta'
🔥 7 'Risotto'
*/

//💡 Spread operator in combination with method.
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3"),
];

// destructuring the array with spread operator and passing the individual elements into the method.
restaurant.orderPasta(...ingredients);

//💡 Short Circuiting (&& and ||)
// Short-circuiting refers to the behavior of logical operators (such as || and &&) where the evaluation of an expression stops as soon as the final result is determined, without needing to evaluate all parts of the expression. This optimization can improve performance and simplify complex logic.

// These operators can be used with ANY data type, return ANY data type, and they do short-circuiting

// || OR operator
// TLDR; Returns first truthy value (operand) or last falsy value (operand).
// It returns the first truthy value it encounters. If it doesn't find any truthy value, it returns the last value on the right side.
// As we know OR operator evaluates to true if any of the operand/condition is true. If it encounters the first truthy value, it immediately returns that and doesn't evaluate the second operand/condition. If the first operand/condition is a falsy value, the evaluation continues and if the second operand/condition is a truthy value, it returns that. However, if none of the operand/condition is a truthy value, it will return the last falsy value on the right side.
console.log(3 || "Jonas"); //🔥 3
console.log("" || "Jonas"); //🔥 Jonas
console.log(true || 0); //🔥 true
console.log(undefined || null); //🔥 null
console.log(undefined || 0 || "" || "Hello" || 23 || null); //🔥 Hello

// Practical example
// Instead of writing this logic:
const guests0 = restaurant.numGuests ? restaurant.numGuests : 10;
// if restaurant.numGuests exists i.e., if it is a truthy value then assign its value to guests1 else assign the default value 10.
console.log(guests0); //🔥 10     // because restaurant.numGuests doesn't exist

// We can simply write this logic for achieving the same result.
const guests1 = restaurant.numGuests || 10;
console.log(guests1); //🔥 10

// but if restaurant.numGuests exists then it is a truthy value.
restaurant.numGuests = 20;
// guests2 will get the first truthy value i.e., restaurant.numGuests.
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //🔥 20

// As we know boolean value of 0 is false so this will be a falsy value.
restaurant.numGuests = 0;
// both guests2 and guests3 will get the default value 10 because the first value i.e., restaurant.numGuests is now a falsy value.
const guests3 = restaurant.numGuests || 10;
console.log(guests3); //🔥 10
console.log(guests1); //🔥 10

// && AND operator
// TLDR; Returns first falsy value (operand) or last truthy value (operand).
// It immediately returns the first falsy value without evaluating the second condition/operand. If it doesn't find any falsy value, it returns the last value on the right side.
// As we know AND operator evaluates to true if both the operands/conditions are true. If the first operand/condition is false, it doesn't need to evaluate the second operand/condition and immediately returns that falsy value. But if the first operand/condition is a truthy value, the evaluation continues to check the second operand/condition and if that is a falsy value, it returns that falsy value. However, if none of the operand/condition is a falsy value, it returns the last truthy value.

console.log(0 && "Jonas"); //🔥 0
console.log(-2 && undefined); //🔥 undefined
console.log(7 && "Jonas"); //🔥 Jonas
console.log("Hello" && 23 && null && "jonas"); //🔥 null

// Practical example
// Instead of writing this logic:
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
// We can simply write this logic for achieving the same result.
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// If restaurant.orderPizza is a falsy value it will short circuit and call that and won't evaluate restaurant.orderPizza() function. But if it exists then its a truthy value so, it will evaluate the function and call it. Because as know if the && operator doesn't find any truthy value it returns the last value. Here the last value is restaurant.orderPizza function.

//💡 Nullish Coalescing Operator ??
// Nullish values only include: null and undefined
// It checks if a value is a null or undefined.
const pikachu = {
  species: "Mouse Pokemon",
  height: 5,
  weight: 30,
};
// If the value on the left side of the Nullish Coalescing Operator (??) is a nullish value (either null or undefined), it will execute and return the value on the right side as the result.
// since pikachu.level doesn't exist therefore it's a nullish value "undefined" and score gets the 'not available' as its value.
let score = pikachu.level ?? "not available";
console.log(score); //🔥 not available

// If the value on the left side of the Nullish Coalescing Operator (??) is not a nullish value (neither null nor undefined), the operator will execute and return that value as the result.

// Now if pikachu.level exists and is not a nullish value then score will get this value.
pikachu.level = 0;
score = pikachu.level ?? "not available";
console.log(score); //🔥 0

// However, if we use OR (||) operator instead of '??', it will get the first truthy value i.e., 'not available'
score = pikachu.level || "not available";
console.log(score); //🔥 not available

//💡 Optional Chaining operator ?
// If we want to access the value of the object property ahead of the time when we aren't sure whether the property exists or not, we can use this operator. Instead of an error, it will throw 'undefined' if the key doesn't exist.
const pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 5,
    weight: 30,
    power: "",
  },
};

let mass = pokemon?.raichu?.weight; // does pokemon object exist? does raichu exist? does weight exist?
console.log(mass); //🔥 undefined
// However, if donn't use the optional chaining like this: mass = pokemon.raichu.weight, we would get an error because as we know if we try to access a non-existing property, we get get undefined and if we then try to access something on undefined we will get an error. This is same as doing: undefined.weight as pokemon.raichu is already undefined.
// If the prop or object before this operator doesn't exist it immediately throws undefined without trying to read anything after it. Example, AnyObj.nestObj?.someProp?.thisProp. if the AnyObj.nestedObj didn't exist it would immediately throw undefined without evaluating anything afterwards.

// Use cases
// without optional chaining we have to do something like this.
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Here we are looping through an array of days and we are checking if the certain property exists or not and then return the value to the 'open' variable and finally log a custom string. We achieved this by using the 'day' variable as the property name. In each iteration this 'day' variable will be the current element from the 'days' array. If the property exists, it will be assigned to the 'open' variable else it will get the default value 'closed'.
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// With Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// With Arrays
// we can use it with arrays as well.
const users1 = [
  { name: "Jonas", email: "hello@jonas.io", id: [0, 1, [2, 5, [6, 8]], 3, 4] },
];
console.log(users1[0]?.name ?? "User array empty");
// However, if it was an empty array we will get the default value i.e, 'User array empty'
// const users1 = [];     // uncomment this line and comment the above user1 line to see the different result.

// Without Optional Chaining we would do something like this:
if (users1.length > 0) console.log(users1[0].name);
else console.log("user array empty");

// Another example with arrays.
// does the users1[0] exist? does element at index 2 exist in id array? does inner element at index [2] exist? does the inner element at index [0] exist.
console.log(users1[0]?.id[2]?.[2]?.[0] ?? "does not exist");
