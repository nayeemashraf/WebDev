//💡 Value (Primitive) and Reference (object) types.

//💡 Value Types include: string, number, Boolean, null, undefined, and symbol.

let z = "apple";
// When we declare a variable like 'z' and set it to a string "apple" a part of computer's memory is allocated for 'z' variable. Let's imagine the actual address of this location in memory is 111. So, 'z' will be a label or identifier for this memory location, and at this location we have the string value "apple".
// Or we can say the identifier actually points to the memory address and not to the value itself. So, 'z' is equal to the memory address 111, which holds the string value 'apple'.

//💡 1. Value types are immutable (read-only). which means you cannot mutate them, means you cannot change them. Once you initialize them they're always the same.
let a = "apple";
a.toUpperCase(); //🔥 APPLE
console.log(a); //🔥 apple
// let's declare 'a' and set this to "apple". Now if we call one of the string methods like toUpperCase(), this method will return a new string which is completely different from our original string. So, here's our uppercase "APPLE" but if we console log 'a' we still have the original lowercase "apple". So, the original value is not modified that's why we call value types 'immutable'.

//💡 2. Value types are compared by their value.
let b = "apple";
let c = "apple";

b === c; //🔥 true;
// let's imagine 'b' is "apple" and we also have 'c' which is "apple". Now if we compare 'b' and 'c', the result is true, even though 'b' and 'c' are in two different parts of the memory. Because they are value types, they're compared by the value they're holding in this case they have the same value i.e., "apple"

//💡 3. Value types are copied by the value when we assign a variable to another variable as its value.
let d = "apple";
let e = d;

// let's imagine 'd' is "apple" now if we declare 'e' and set it to 'd', because 'd' is a value type a copy of d's value is taken and stored in 'e'. So, now 'd' and 'e' are completely two independent variables in the memory.

// Now if we compare 'd' and 'e', the result is true even though 'd' and 'e' are two independent variables because they are value types, they're compared by the value they're holding.
d === e; //🔥 true // both hold the same value i.e., 'apple'

// Another example
// we declared 'number' variable and set this to 10, then we passed this 'number' as an argument to increasePrimitive function. So, the parameter of the function gets the value 10 from the global 'number' variable. The Function increments the parameter 'number' by 1 and returns it, but it does not affect the value of the variable 'number' outside of the function. If we console log the global variable 'number', it is still 10. When we passed the number variable as an argument to the function, a copy of its value is copied to the 'number' parameter, that is local in this function. So, this 'number' parameter is separate from the global 'number' variable. The increment operation is only applied to this local variable, not the global variable.

// There is also some scoping thing involved in this scenario. The local variable and the global variable are two separate entities that have the same name (number) and value (initially), but different scopes. Any changes to the local variable inside the function will not affect the global variable outside the function.

let number = 10;
function increasePrimitive(number) {
  number++;
  return number;
}
increasePrimitive(number); //🔥 11
console.log(number); //🔥  10

//💡 Reference Types include: Object literal, Function, Array and Dates.
const x = {
  fruit: "apple",
};
// When we declare a variable like x and set it to an object, a part of computer's memory is allocated for the x variable and let's imagine the address of this memory location is 111 but our object is not stored in this memory location. It's stored somewhere else and let's imagine the address of that target memory location is 222. So, our x variable which is a label for memory location 111 will hold the address of the target memory location (222). So, x is pointing or referencing a different memory location and that's why we call them reference types.

//💡 1. Reference types are mutable. which means you can mutate them, means you can change them once they are initialized.
const f = [1, 2, 3, 4];
f[0] = 4;
console.log(f); //🔥 [4, 2, 3, 4]
// let's declare 'f' and set it to an array "[1, 2, 3, 4]". Now, let's change the element at 0 index to 4. If we console log 'f', you can see the original array is modified. So, we no longer have the same array, in other words we can mutate or change reference types.
//* Note: The reference to a value remains constant. What we actually store at that memory address can change.

//💡 2. Reference types are compared by their references.
let g = {
  title: "CEO",
};
let h = {
  title: "CEO",
};
// This statement would return a false because both the objects refer to two separate addresses in memory. When we compare two objects, we compare their addresses, not their values.
g === h; //🔥 false
// If 'g' is an object with 'title' property and 'h' is also another object with the exact same property. Now if we compare them we get false because 'g' and 'h' are reference types and when we compare them, their references are compared in other words 'g' is referencing this object at some location (say 222) whereas 'h' is referencing this object at another location (say 333). So, when we compare 'g' and 'h' it's like comparing 222 with 333 and of course they're different.

// Another Example:
// When you declare a variable inside a function, it creates a new memory location for that variable. This means that the 'colors' variable inside the function is different from the 'colors' variable outside the function.
// Even though both arrays contain the same values and have same name, they are still different objects because they reside in different memory locations.
// Therefore, the comparison 'colors === ar' returns false because the two variables are referring to different objects in memory.

const colors = ["red", "blue", "purple"];

function myTest(ar) {
  const colors = ["red", "blue", "purple"];
  console.log(colors === ar);
}

myTest(colors); //🔥 false;

//💡 3. Reference types are copied by their references when we assign a variable to another variable as its value.
let i = {
  title: "apple",
};

let j = i;
i === j; //🔥 true

i.title = "orange";
console.log(j); //🔥 title: orange

// If 'i' is an object with "title" property set to "apple" and 'j' is another variable and we set this to 'i'. Now both 'i' and 'j' are referencing or pointing to the same object in memory. Now, if we compare them we get true. Since we assigned 'i' to 'j' as its value, the reference of the memory address where i's value is stored is copied to 'j' and we know reference types are compared by their references, here both 'i' and 'j' share the reference of the memory address where the actual object is stored. It also means if we change this object via 'i' reference this change should be visible through the other reference. So, if we log 'j' to the console we have an object with title set to "orange". Hence a reference type is copied by its reference. However, when we reassign the variable to a new value it becomes a separate independent object.
j = {
  title: "mango",
};
// Now if we change this with 'i' reference, it only affects 'i' because they have been separated when we reassigned the 'j'.
i.title = "grapes";
console.log(j); //🔥 title: mango

// When we reassign the variable it creates another reference
let k = [1, 2, 3];
let l = k;

k === l; //🔥 true

k = ["1", "2", "3"];

k === l; //🔥 false

console.log(l); //🔥 [1, 2, 3]
// 'l' holds the same reference of the array where it was earlier stored.

console.log(k); //🔥 ["1", "2", "3"]
// k holds the reference of a new array where it is actually stored.

// Another example: When we call increaseScope() function and pass 'obj' object, the object is passed by its reference. So, this local parameter 'obj' inside the function will point to the same object that we defined above it. So, we are not dealing with two independent copies, we have two variables that are pointing to the same object. Any changes we make to the object will be reflected on the parameter variable.
let obj = { value: 10 };
function increaseScope(obj) {
  obj.value++;
  return obj;
}
increaseScope(obj); //🔥 { value: 11 }
console.log(obj); //🔥 { value: 11 }

// More on Reference types
// An object holds a reference/address of a single key-value pair or many key-value pairs. Whenever we refer to an object, we refer to an address in memory which contains the key-value pair. If we assign an object ('object1') to another object ('object2'), we are actually assigning the address of 'object1' to 'object2' instead of the key-value pair which the 'object1' contains in memory.

let object1 = { a: 5, a1: 6 };
let object2 = object1;

// The above statement assigns the address of object1 to object2, and not the value {a:5, a1:6}. Thus with this assignment 'object1' and 'object2' refer to the same address in memory.
// When we compare these two objects, we find that both of them refer to the same address in memory.
object1 === object2; // will return true, as both refer to the same address.

// Another example:
const flight = "LH234";
const john = {
  name: "John Doe",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, john);
console.log(flight);
console.log(john);

// After calling the checkIn() function, it alerts 'Checked in', However, console logging the 'flight' variable still shows 'LH234', even though it seems it was redefined inside the function, so it really wasn't. Also, if we check the 'john' object, the 'name' property is changed to 'Mr. John Doe' and that's the change we made inside the function.
// As we see, the 'flight' variable is a primitive type, a string. As we passed that value into the function, then the 'flightNum' (parameter of the function) is basically a copy of that original value. So, 'flightNum' contains a copy and not simply the original value of the 'flight' variable. So, this would be exactly the same as writing: flightNum = flight; and this would then also simply copy the flight variable's value to flightNum. 'flightNum' inside the function is a completely different variable, and therefore, as we changed it inside, it did not get reflected in the outside 'flight' variable. Therefore, it's still 'LH234'.

// We also passed the 'john' object into the function and in that function it is called 'passenger' and then we changed that 'passenger' object there, and if console log the 'john' object, it is also affected by that change. So, when we pass a reference type to a function, what is copied is really just the reference to the object in the memory heap. That would be exactly like doing this: passenger = john; When we try to copy an object like this, we are only copying the reference to that object in the memory heap. But they both point to the same object in memory and so that's exactly what is also happening here with the 'john' object as we pass it into the function where it is called 'passenger'. As we manipulated the 'passenger' object, it was exactly the same as manipulating the 'john' object.

// In summary, passing a primitive type to a function is really just the same as creating a copy like this outside of the function, so the value is simply copied.
// flightNum = flight;

// On the other hand, when we pass an object (reference type) to a function, it is really just like copying an object like this, and so whatever we change in a copy will also happen in the original.
// passenger = john;

//💡 passing by value and passing by reference in functions
// JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference.

// In other languages like C++ where you can pass a reference to any value instead of the value itself. This works even with primitives, so you could pass a reference to the value say '5' and then any modifications to the reference within the function would alter the original value outside of the function and this is called pass by reference.

// But once again, JavaScript does not have pass-by-reference. It seems confusing because, as we just learned, for objects, we do in fact pass in a reference, the memory address of the object. However, that reference itself is still a value. It's simply a value that contains a memory address.

// So, basically, "we pass a reference to the function, but we do not pass by reference." And this is an important distinction.

//💡 Why memory allocation is different in value types and reference types?

// The reason is that we use value types for simple values like numbers, strings, Booleans and so on. We don't need much memory for these kind of values. In contrast, we use objects and arrays for storing complex values and we need more memory, that's why in terms of memory allocation we have two different types of memory.

// 1. Call Stack: Stack as the name implies simply is a stack of data in the memory and this is a type of memory which can be accessed really quick and which is very limited too, it doesn't hold that much information. Primitive values are stored in stack memory which is used for storing simple values or value types.

// 2. Heap memory: This is used for storing larger complex objects. Heap takes a little bit longer to be accessed but therefore it is able to hold much more information it's not as short living as the stack and this type of memory is perfect for bigger amount of data or the data which changes frequently or dynamically. The stack just keeps the reference to the memory position at which the object is stored in the heap.
