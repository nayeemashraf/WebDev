// Arrays are data Structures like we have objects.
// we can store any kind of data inside arrays like strings, numbers, objects, functions, booleans, arrays, or any kind of expression that produces the relevant value.
const vary = "world";
const anotherArray = ["An", "Array"];
const exampleArray = ["hello", vary, 3, 2037 - 1991, anotherArray];
console.log(exampleArray);

//💡 Nested arrays
let topLanguages = [
  "Javascript",
  "Python",
  ["Go", "Kotlin", "R"],
  ["Java", "C#", ["Swift", "PHP"]],
  ["C", ["C++", ["Ruby"], ["Rust"]], "Dart"],
];

// We have 5 elements in the topLanguages array. 3rd element is itself an array and has 3 elements. 4th element is also an array with 3 elements, with 3rd element being itself an array with 2 elements. 5th element is also an array with 3 elements and 2nd element being itself an array with 3 elements.
// Say we want to access the item "Swift", we can navigate like this:

// "Javascript"            // is at 0 index
// "Python"                // is at index 1
// ["Go", "Kotlin", "R"]   // is at 2 index.
// At index 2, we have another array with 3 elements: "Go" is at index 0, "Kotlin" at index 1, and "R" at index 2 within the index 2.

// ["Java", "C#", ["Swift", "PHP"]]       // is at index 3 with 3 elements, 3rd element being itself an array.
// first 2 being the elements of index 3: "Java" is at index 0, "C#" at index 1 within index 3.
// At index 2 is the 3rd element that is itself an array with 2 elements: "Swift" at index 0 and "PHP" at index 1 within the index 3.

// We can use the above method to navigate to "Swift". We know "Swift" is in index 3 and within this it is in the 2nd element at the index 0.
console.log(topLanguages[3][2][0]);
// similarly to access "C++". At index 4 it is in index 1 and within that it is at index 0.
console.log(topLanguages[4][1][0]);

// In JavaScript, arrays are a type of object that can contain various elements, including other arrays and objects. Functions can also be placed inside an array.
// Now, what's important here is we don't have a function name. In an array We don't have that. We know array elements are indexed with number so it's given a number that we can call to access it.

let array = [
  "string",
  100,
  ["embed", 200],
  {
    car: "ford",
  },
  function () {
    return "drive";
  },
];
// Accessing function inside of an array.
// We can access/invoke a function with the following syntax:
// arrayName[indexNumber]()
array[4]();
// 'drive'      // when we access the function with this method, we are invoking/calling a function for its execution like we do with normal function call.

// If we access this without the () parentheses, it will only return the function definition.
array[4];
// ƒ () {
//     return "drive";
//   }

// We can use mathematical expressions in an array [] bracket. So, whatever is inside of these brackets will be executed/evaluated and will return the array element at the index corresponding to the returned number.
array[1 + 1 - 2]; // It's like writing array[0]
// ("string");      // element at index 0 is returned

array[1 + 1 - 0]; // equals to 2
// [("embed", 200)];

// We can access array elements dynamically with the use of mathematical expressions and variables.
let a = 2;
array[a + 3 - 2]; // equals to 3, i.e, array[3]
// {
//   car: "ford";
// }                // result

//💡 Accessing Objects and their property values inside of an Array.
// We can embed objects inside of objects, arrays can contain objects and objects can contain arrays.

const myAlbum = [
  {
    artist: "Sami Yusuf",
    title: "Al Mu'allim",
    genre: "Islamic",
    release_year: 2003,
    formats: ["Album", "CD"],
    label: "Awakening Records",
  },
  // second Element starts on below line
  {
    artist: "Ahmed Bukhatir",
    title: "Fartaqi",
    genre: "Nasheed",
    release_year: 2002,
    formats: ["Studio Album"],
  },
];

// accessing the first object. At index 0, there is the first object, and at index 1, there is the second object.
console.log(myAlbum[0]);
//🔥 {artist: 'Sami Yusuf', title: "Al Mu'allim", genre: 'Islamic', release_year: 2003, formats: Array(2), …}

// accessing property value of the second object
console.log(myAlbum[1].genre); //🔥 Nasheed

//💡 Accessing Nested Arrays.
// We can access any element by combining the dot and bracket notation in an array of objects.

// We have an array of two objects named myPlants. The first element of this array is also the first object and the second element is the second object. And then inside these objects, we have key-value pairs. The second key in both objects is 'list' and its value is an array. In this example, we want to access 'pine'. If we look closely, we are accessing an array element nested in an object in the myPlants array. As we can see, the second object, which is also the second element of the myPlants array (at index 1), contains "pine" at the second position in the "list" array property, more specifically at index [1]. We know second object is at index 1 and "pine" is at index 1 in the "list" property. So, in order to access it, we will use myPlants with bracket notation and enter 1 as the index value followed by dot notation(because we are accessing an object property) and key name 'list' with bracket notation and an index value of 1.
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  }, // first object
  {
    type: "tress",
    list: ["fir", "pine", "birch"],
  }, // second object
];
let secondTree = myPlants[1].list[1];
console.log(secondTree);

//💡 General Exercises
// adding '!' at the end of each item in the items array and finally returning a new array.
const users = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const newArr = users.map((el) => {
  for (let i = 0; i < el.items.length; i++) {
    el.items[i] += "!";
  }
  return el;
});
console.log(newArr);

// Check if this array includes any name that has "John" inside of it. If it does, return that name or names in an array.
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

const filteredDragons = dragons.filter((name) => name.includes("John"));
console.log(filteredDragons); //🔥 ['Johnathan']

// Returning new array with elements matching any name that has "n" character inside of it.
dragons.filter((name) => {
  return name.includes("n");
});
//🔥 [("Johnathan", "Sandy")]
