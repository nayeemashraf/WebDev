//💡 In JavaScript, objects are more complex data types and are composed of "key:value pairs". Keys are just labels and their value can be of any datatype like string, number, array, etc. These keys can be variables or functions and are called properties in case of variables and methods in case of functions in the context of an object. Methods are actions that can be performed on objects. It is common practice to declare objects with the const keyword.
// Syntax:
const person = {
  lastName: "Doe", // Here 'lastName: "Doe"' as a whole is one of the property or we can say 'lastName', as solely is the key or property name and its value is 'Doe'.
  firstName: "John", // The properties are written as key : value (in pairs) (name and value separated by a colon).
  age: 50, // Properties are separated by comma.
  eyeColor: "blue",
  Human: true,
  1: "first", // Property names can be a simple textual strings as well as number.
  methodKey: function () {
    // we can also add functions as a member in the object, they are referred as Methods not functions or properties.
    console.log(age + 1);
  },
}; // semi-colon is used to end the code block.

// To access the object properties we use the object name followed by . (dot) and property name without inserting any space.
// objectName.propertyName

// We can also use the bracket notation to access the object properties enclosed in single or double quotes.
// objectName["propertyName"]

console.log(person.firstName + " is " + person.age + " years old.");

// The object 'person' in the above example has 6 properties: firstName, lastName, age, eyeColor, Human, 1 and a method 'methodKey'. Whereas 'Doe', 'John', '50', 'blue', 'true' and 'first' are the values of these properties and function() being the value of 'methodKey' method.

// In the above example we used the object literal syntax.

// objects
const object = {
  name: "mario",
  age: 24,
  "favourite colours": "beige, oyster,",
  hobby: ["soccer", "gardening", "cycling"],
  1: "Number One",
  occupation: "plumber",
  alias: "super mario",
};
console.log(object.name); // 🔥 mario

// we can access the object properties with bracket notation as well.

//* It is required to use bracket notation with quotes (single or double) if the property name has any whitespace.
let newProperty = object["favourite colours"];
console.log(typeof newProperty, newProperty);

// we can store the object property in a variable with this method. (explained in detail below)
let Number = 1; // Here we assigned the key '1' to a variable called 'Number'.

// Now to get the property value dynamically we use this syntax: object[variable], where 'variable' stores the property name.
let result = object[Number]; // same as this: let result = object[1];
console.log(result); //🔥 Number One

// when property name is a string we use quotes(single/double) around it to store it as a value of variable.
let aka = object["alias"]; // Here we used the shorter syntax without first storing the key in a separate variable.
console.log(aka); //🔥 super mario

// updating object property also changes the original object property because object types are mutable.
object.name = "doraemon";
console.log(object.name);

// adding new property to the object can be done with either ways.
object.Enemies = "Bowser, Wario";
// bracket notation
object["friends"] = "Nobita";
console.log(object);
// we cannot add an undefined property. We must assign a value to it, otherwise it will not be added.
object.height; // This won't work.

//* We delete property from an object with 'delete' keyword.
delete object.alias;

//💡 Accessing Object Methods

// we have the 'car' object with these properties.
// we have the 'engine' object that's embedded inside of it, this is another property but it's an object embedded inside of this.
// These are all properties by the way. If it's not a function as the value then it's classed as a property. And we call them methods in objects. These are called methods because methods have a key name that we can define in a standard object and that will perform a particular action.
let car = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    colors: [{ model1: "Phantom White" }, { model2: "Green Graphite" }],
  },
  drive: function () {
    return "drive";
  },
};
// We can access/invoke an object method with the following syntax using dot notation:
// objectName.methodName()
car.drive();
// 'drive'      // when we access the object method with this method, we are invoking/calling a function for its execution like we do with a normal function call.

// If we access a method without the () parentheses, it will return the function definition. Same would be true in case of bracket notation.
car.drive;
// ƒ () {   return "drive";   }

// Similarly, we can invoke an object method with the bracket notation.
car["drive"]();

// Accessing array elements with dot . notation. Here We want to access "Phantom White".
// We know 'colors' is an array with 2 object elements. Also, 'model1' property is at index 0 and 'model2' at index 1 in the 'colors' array
car.engine.colors[0].model1;
// "Phantom White";

// Accessing the embedded object with the bracket [] notation
car["engine"]["colors"][0];
// { model1: "Phantom White" }

// Accessing the property of embedded object with bracket notation.
// we go to 'car' then we go to 'engine' then to 'colors' then we access the second object in the 'colors' array with the index of 1. Then finally we go inside of the object and we grab out the 'model2' property.
car["engine"]["colors"][1]["model2"];
// "Green Graphite";

//💡 Dot. vs bracket[] notation
//* Dot notation is used when you know the name of the property you're trying to access ahead of time.

//* bracket notation [] is useful when we want to access properties dynamically or when we have property names that aren't valid identifiers (like special character or space in-between. Example, 'prop-name', 'prop name') or if an object property name is stored as the value of a variable, then we can't use dot notation to access the value, but we can access the value using bracket notation. It executes whatever is inside of the brackets.

// We could grab the 'engine' with bracket notation.
// We declared a variable 'keyName' and assigned 'engine' property as its value. Then we target 'car' object and grab the variable 'keyName' and grab its value i.e., a string 'engine'. So, this will return a string 'engine' and that will return the 'engine' object.
// Alternative explanation
// With bracket notation, all we're doing is storing the object property ('engine') in a variable (keyName), then getting back that property with the variable which holds it using the square brackets. It is the same as writing car['engine']. So, that's one of the advantages of using square brackets.
let keyName = "engine"; // same as writing this: car['engine']
car[keyName];
// whatever is passed into the brackets is evaluated and executed. Here keyName is passed, which holds 'engine' property of car object. so, it returns 'engine' property when used with car[] object.🔃 let variableName = 'propertyName' ➡ objectName[variableName]

console.log(car[keyName]);
// Note: we do not use quotes around the variable name in brackets when using it to access the property because we are using the value of the variable, not the name.

// Now if we change/update this keyName to some other value. It will be referencing to that property not the old one.
keyName = "make";
car[keyName];

// if we use the dot notation like this: car.keyName, we cannot get the 'engine' key because that would look for a 'keyName' property or a property name in the 'car' object.
console.log(car.keyName); // This wouldn't work. It simply means to find 'keyName' property in the 'car' object, which doesn't exist.

// We can add a new or change an existing object method with this syntax:
// objectName.methodName = function() {changes};   // All this can be done with bracket notation as well.
// updating an existing method
car.drive = function () {
  return "Start";
};
// changing method into property
car.drive = "sheer drive";

// add new method
// objectName.newMethodName = function() {};
car.stop = function () {
  return "stopped";
};

// similarly, methods can be added inside the nested object. Here we used bracket notation because it has a space in property name "Drive Type" otherwise we can use the dot notation as well.
car["engine"]["Drive Type"] = function () {
  return "Front-Wheel Drive";
};
// we can delete methods with the "delete" keyword.
delete car.stop;
delete car["engine"]["Drive Type"];

// When the object's members are functions there's a simpler syntax. Instead of drive: function () we can write drive()
// Now our object method should look like this:
let car = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    colors: [{ model1: "Phantom White" }, { model2: "Green Graphite" }],
  },
  drive() {
    return "drive";
  },
};

//💡 In JavaScript, object property names must be strings, However, if our object has any non-string properties, JavaScript will automatically typecast (change) them as strings. If the property name has a spaces in its name, then they must be in quotes (single or double). It is generally considered best practice to avoid using spaces in property names, as it can make the code more difficult to read and maintain. Instead, you can use camelCase or snake_case to separate words of a property name.

//💡 We can assign a variable, function return, etc to a property as a value in an object.

let anyVariable = "any value";

function callMe(para) {
  if (para >= 0 && para <= 10) {
    anyVariable = "within 0-10";
  } else if (para > 10 && para <= 20) {
    anyVariable = "within 11-20";
  } else {
    anyVariable = "not in the range";
  }
  return para + " is " + anyVariable;
}

const myIstObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  NoSpace: "USS Enterprise",
  propName: anyVariable,
  tryIt(arg) {
    return callMe(arg); // we are referring to the above callMe() function and calling that with value of arg argument.
  },
};
// tryIt method's parameter is passed as an argument to the callMe function so, whatever argument passed to the tryIt parameter is copied to the above callMe function.
// let's access the property and method
let varInObj = "propName";
const nowIn = myIstObj[varInObj];
console.log(nowIn);

// we can even store this myIstObj[varInObj] in another variable. The computed value(i.e., property value) is copied to sharedValue variable.
let sharedValue = nowIn;
console.log(sharedValue);

// console logging object method
let ob = myIstObj.tryIt(2);
console.log(ob);

// we can assign a property value to a variable. Now this variable(storedProp) holds the property value.
let storedProp = myIstObj["NoSpace"];
console.log(storedProp); // Output 'USS Enterprise'

//💡 Object.freeze() method prevent changes to an object by freezing it.
// This is a function that freezes an object. It prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. It takes one parameter, i.e., the object which is to be freezed. It returns the passed object and does not create a frozen copy.
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33; // Throws an error in strict mode
obj.newProp = "cannot be added";

console.log(obj.prop);
// The value of obj.prop is 42 because the object was frozen before it's property "prop" was changed to 33.
console.log(obj);

//💡 Dynamic assignment
// It allows us to use expressions, variables, or computed values as keys or values when defining object properties.
const profile = "John Livingstone";
const fName = "John";
const lName = "Livingstone";
const regionCode = 1205060;
const birthYear = 1990;
const uniqueNum = (regionCode * birthYear) / 2;
const Posts = [
  {
    lastTweet: ["Having a great time at the museum!"],
    reaction: {
      likes: "2k",
      retweets: "5k",
      quotes: "100",
    },
  },
];

const dynamicObjAssignment = {
  [profile]: "public", // Using dynamic assignment for property name based on the value of the `profile` variable
  userID: [uniqueNum + 100], // dynamically assigning the value based on the computed value.
  displayName: [fName + " " + lName], // dynamic value assignment based on the values of 'fName' and 'lName' variables.
  [`${10 + 2}k`]: "followers", // Using dynamic assignment for property name based on the result of the expression `10 + 2`
  Tweets: [Posts[0].lastTweet],
  [Posts[0].reaction.likes]: "likes",
};

console.log(dynamicObjAssignment);
//🔥 { John Livingstone: 'public', userID: [2398069500], displayName: ['John Livingstone'], 12k: 'followers', Tweets: ["Having a great time at the museum!"]}

// we can use objects for look-ups, like we store things in a directory and whenever we call anything with appropriate input, it returns the desired value. We can use objects instead of switch statements like we used in this example. Suppose if we pass dublin it will return 'Ireland' and so on.
const lookUp = {
  dublin: "Ireland",
  amsterdam: "Netherlands",
  munich: "Germany",
  edinburgh: "Scotland",
  helsinki: "Finland",
  stockholm: "Sweden",
  bern: "Switzerland",
  prague: "Czech Republic",
  sheffield: "United kingdom",
};

function myCountry(input) {
  const city = lookUp[input];
  return city;
}
console.log(myCountry("sheffield"));

//💡 Checking the existence of properties and methods.
// Sometimes it is useful to check if the property of a given object exists or not. We can check this with 'hasOwnProperty' method. Here we did this with the help of a function. The argument passed to the function is passed to the if else condition. If the condition evaluates as true, return its value, else return 'Not Found'. Suppose we passed color as an argument, first this will be passed to the function parameter, then inside it will be evaluated in the if else condition. With the help of hasOwnProperty method, if else will check the argument we passed in the function whether it is present in myObj object or not. If it exists, it will return its value, i.e., 'Sweet Grape'. If not, it will return 'Not Found'.
const myObj = {
  name: "Forrest",
  color: "Sweet Grape",
  pet: "Kitten",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("color")); //🔥 Sweet Grape

// checking Non-existing property
console.log(checkObj("weight")); //🔥 Not Found

// We can also use the 'in' operator to check if an object has a property with a given name. It returns true if the property exists in the object or false if it does not.
const OBJ = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello");
  },
};
console.log("name" in OBJ);   //🔥 true
console.log("email" in OBJ);  //🔥 false
if ("age" in OBJ) console.log("yes");   //🔥 yes

// We can also take advantage of 'typeof' operator to check if a property or method exist in an object.
console.log(typeof OBJ.greet);  //🔥 function
console.log(typeof OBJ.email);  //🔥 undefined
console.log(typeof OBJ.age);    //🔥 number

//💡 Writing Complex object.
// We know objects can store strings, number, variables, arrays and other objects as well. In this example we have nested our objects within an array. Here we have two objects in myAlbum array. Multiple Objects are separated with a comma.
const myAlbum = [
  {
    artist: "Sami Yusuf",
    title: "Al Mu'allim",
    genre: "Islamic",
    release_year: 2003,
    formats: ["Album", "CD"],
    label: "Awakening Records",
  },
  // second object starts on below line
  {
    artist: "Ahmed Bukhatir",
    title: "Fartaqi",
    genre: "Nasheed",
    release_year: 2002,
    formats: ["Studio Album"],
  },
];

//💡 Accessing Nested Objects.
// An object property can itself be an object. In this example 'manufacturer' is the property of 'motorCompany' and an object itself with 'Hyundai' and 'Ford' its properties. This implies 'founder' is the direct property of 'Hyundai' and sub-property of 'manufacturer'. In order to access the sub-properties of an object we can change together the dot or bracket notation.
const motorCompany = {
  manufacturer: {
    Hyundai: {
      founder: "Chung Ju-yung",
      country: "South Korean",
      "customer service": "1800 11 4645",
    },
    Ford: {
      founder: "Henry Ford",
      country: "American",
      "customer service": "1800 419 2500",
    },
  },
};
console.log(motorCompany.manufacturer.Hyundai); // accessing with dot notation.
console.log(motorCompany.manufacturer.Hyundai.founder);
console.log(motorCompany["manufacturer"]["Hyundai"]["country"]); // accessing with bracket notation.
let myCarSupport = motorCompany.manufacturer.Ford["customer service"]; // It is required to use bracket notation when we have space in property/key names.
console.log(myCarSupport);

//💡 Accessing object properties in an array.
// We can access the elements by combining the dot and bracket notation in an array of objects.
// We have an array of two objects named 'myPlants'. The first element of this array is the first object and the second element is the second object. Inside these objects, we have key-value pairs. The second key in both objects is 'list' and its value is an array.
// In this example, we want to access 'pine'. If we look closely, we are accessing an array element nested in an object in the myPlants array. As we can see, the second object, which is also the second element of the myPlants array (at index 1), contains "pine" at the second position in the "list" array property, more specifically at index [1]. We know second object is at index 1 and "pine" is at index 1 in the "list" property. So, in order to access it, we will use myPlants with bracket notation and enter 1 as the index value followed by dot notation(because we are accessing an object property) and key name 'list' with bracket notation and an index value of 1.
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

// another example
const ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];

ourPets[0].names[1]; //🔥 Fluffy
ourPets[1].names[0]; //🔥 Spot

//* Record Collection.
// we have a complex object which is assumed to be a record collection. Each object has a number key, assumed to be their IDs. The updateRecords function takes three parameters: id (object), prop (property), and value (value). With this function we will change the property and value of any object with the passed ID in the argument and then return the collection object. Now, we are evaluating the function with if else condition.
// Condition 1: if we have an empty string for the value then delete that property of that object with the passed ID.
// Condition 2: if the 'tracks' property doesn't exist in an object we need to create it. In order to create this we will set this equal to itself if it exists (because all the objects has this property except the last one) or if it doesn't we will create it with an empty array. There is also another condition in conjunction with condition 2, i.e., if the prop (property) is 'tracks' we will add/push new value to this array instead of overwriting the whole 'tracks' property. else the value isn't empty and the prop isn't 'tracks', push the value onto the property. Then we set the property to be equal to value.
const collection = {
  1245: {
    album: "Slippery When Dry",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
    title: "The Gold",
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  2548: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "Hamburger",
  },
};

// below we are just keeping the original copy of the collection object in a variable for our reference to cross check this with the updated object.
let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(1245, "title", ""); // Here the title property will be deleted in the object because we are passing an empty value.
updateRecords(2468, "artist", "Charles"); // Here we are changing the value of artist property in the object.
updateRecords(2548, "tracks", "So are you"); // Here we are assigning a value to the empty 'tracks' array in the object.
updateRecords(5439, "artist", "Ben Shaun"); // Here we are adding new property ('artist') to the object.
console.log(updateRecords(5439, "tracks", "Zool")); // Here we are adding new property ('tracks') to the object with a value ('zool'). Also, console logging all the above changes.

//💡 We can use console.table(object) to see the object in a table form in the browser console.
