"use strict";
//💡 'this' keyword/variable
// Special variable that is created for every execution context (every function). Takes the value of (points to) the 'owner' of the function in which the 'this' keyword is used.
// 'this' is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.
// 'this' does NOT point to the function itself in which we are using it, and also NOT its variable environment.

// We call functions in four ways and the value of 'this' will be accordingly:

// 1. simple function call: 'this' = 'undefined' in strict mode, otherwise global object i.e., 'window' (in case of browser).
"use strict";
console.log(this); // window in case of browser or global in case of node.
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
  // In strict mode, 'this' will be undefined inside the regular function else it will point to the global object window in case of browser.
};
calcAge(1990);

// 2. Arrow functions: 'this' = 'this' of surrounding (parent) function (lexical this) because Arrow functions do not get their own 'this' keyword.
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // here 'this' doesn't belong to the function but to the parent (global) scope i.e., window in this case.
};
calcAgeArrow(2000);
// We see the value of 'this' inside the arrow function is the global object window because, as we know, arrow functions don't get their own 'this' keyword, so instead the arrow function simply uses the lexical 'this' keyword, which means it uses the 'this' keyword of its parent function or its parent scope. In this case, the lexical 'this' keyword is the global object window.

// 3. Method: 'this' = 'Object' that is calling the method.
const jonas = {
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge(); //🔥 47

// when we have a method call, the 'this' keyword inside the method will be the object that is calling the method. In this case, it's the jonas object. So, jonas here is basically the owner of the method.

//💡 'this' keyword will point to the object that is calling the method and that means the 'this' keyword will not simply point at the object in which we write the method. Here, we wrote the calcAge() method inside of jonas object, we might think that is the reason why 'this' keyword points to the jonas, but that is not true. The reason that the 'this' keyword will point to jonas in this case is because jonas was the object calling that method. This is a very important difference to keep in mind.

// Let's see this subtle difference in reality.
const william = {
  year: 2017,
};

// copying the calcAge() method from jonas to william. This is called method borrowing.
william.calcAge = jonas.calcAge;

// Now if we call the calcAge() method on william object we can clearly see that 'this' keyword is actually pointing to the object (william) that called the calcAge() method.
william.calcAge(); //🔥 20

// 4. Event Listener: 'this' = DOM element that the handler function is attached to.

//💡 Regular functions vs. Arrow functions in the context of the 'this' keyword
const user = {
  firstName: "james",
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2030 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

user.greet();
//🔥 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//🔥 Hey undefined

//💡 Important: Object literals are not code blocks {}, and they do not create their own scope. We use curly braces {} only to define the structure of the object, not to create a new code block or scope.

// Now if we call the greet() method on the user object, we get "Hey undefined". The reason for this is that an arrow function doesn't get its own 'this' keyword. It will use the 'this' keyword from its surroundings, i.e., its parent's 'this' keyword. Here, the parent scope of this greet() method is the global scope (window). Therefore, the arrow function will use the 'this' keyword from the global scope.

// So it is like doing this:
console.log(this.firstName); //🔥 undefined
// As we know, if we try to access a non-existing property on an object, we get undefined. It's true for all kinds of objects, including global object window (in case of browser) or global (in case of node.js) or objects created using constructor functions or classes.

// Since there is no such property called "firstName" on the global object (window), we get 'undefined'.
// It is like doing this: window.firstName

//⛔ Never use an arrow function as a method in objects; instead, use a function expression. Even if you don't intend to use the 'this' keyword in the method.

//💡 regular function inside a method.
// We have defined a regular function isMillennial () in the calcAge method and then we are calling it. We know in strict mode the 'this' keyword in the regular function is 'undefined' that is why we get undefined. It is the same as writing the isMillennial() function outside of the object and then calling it, and obviously we will get 'undefined' there as well.

const person = {
  firstName: "john",
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2030 - this.year);
    const isMillennial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
};
person.calcAge(); // we know 'this' in the calcAge method is the person object

//💡 arrow function inside a method.
// As we know, the arrow function doesn't get its own 'this' keyword. It inherits the 'this' keyword from its parent scope and in this case that will be the calcGen() method, and in there the 'this' keyword is the client object that calls the method.
const client = {
  firstName: "smith",
  year: 1996,
  calcGen: function () {
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
};
client.calcGen();

//⚡ Use an arrow function inside a method if you intend to use the 'this' keyword.
