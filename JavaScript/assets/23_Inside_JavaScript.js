// 💡 Definition
//⚡ JavaScript Is A High-Level, Prototype-Based Object-Oriented, Multi-Paradigm, Interpreted OR Just-In-Time Compiled, Dynamic, Single-Threaded, Garbage-Collected Programming Language With First-Class Functions And A Non-Blocking Event Loop Concurrency Model.

//💡 Breakdown of Definition:

//💡 High-Level
// Every program that runs in a computer needs some hardware resources such as memory and the CPU to do its work. Now, there are Low-level languages such as 'C' where we have to manually manage these resources. Example, asking the computer for memory to create a new variable. On the other side we have high-level languages such as 'javaScript' and 'python' where we don't have to manage resources at all because these languages have so called abstractions that take all of that work away from us.

//💡 Garbage-Collection:
// An algorithm inside the JavaScript engine which automatically removes all unused objects from the computer memory.

//💡 Interpreted or Just-in-time compiled:
// The computer's processor only understand 0s and 1s. Ultimately every single program needs to be written in 0s and 1s, which is also called 'machine code'. We simply write human-readable JavaScript code, which is an abstraction over machine code but this code eventually needs to be translated to machine code and that step can be either compiling or interpreting. This step is necessary in every single programming language because no one writes machine code manually. In the case of JavaScript this happens inside the JavaScript engine.

//💡 Multi-Paradigm:
// One of the things that makes JavaScript so popular is the fact that it's a multi-paradigm language. In programming, a paradigm is an approach and an overall mindset of structuring code, which will direct your coding style and technique. Three popular paradigms are Procedural Programming, Object-oriented Programming (OOP) and Functional programming (FP). Many languages are either Procedural or OOP or functional but JavaScript does all of it. So, it's very flexible and versatile.

//💡 Prototype-based object-oriented:
// Almost every thing in JavaScript is an object except for primitive values such as numbers, strings, etc. But Arrays are just objects. We create arrays from an array blue print, which is like a template and this is called the 'prototype'. This prototype contains all the array methods and the arrays we create in the code then inherit the methods from the blue print so that we can use them on the arrays. This is just an huge oversimplification of the whole process.

//💡 First-class functions:
// JavaScript is an language with first class functions which simply means that functions are treated just as regular variables. So we can pass functions into other functions and we can even return functions from functions. This is extremely powerful because it allows us to use a lot of powerful techniques and also allows for functional programming. Example, passing a function as an argument to addEventListener function.

//💡 Dynamic:
// JavaScript is a dynamic language and dynamic actually means dynamically-typed. In JavaScript we don't assign datatypes to variables instead they only become known when the javaScript engine executes our code. Also, the type of variables can easily be changed as we reassign variables. However, the same isn't true for most other programming languages, where we have to manually assign types to variables.

//💡 Non-Blocking Event Loop Concurrency Model.

// Concurrency model: How the JavaScript engine handles multiple tasks happening at the same time.

// JavaScript runs in one single thread, which means it can only do one thing at a time. Therefore we need a way of handling multiple things happening at the same time. In computing a thread is like a set of instructions that is executed in the computers' CPU or a single sequential flow of control in a program. So, basically the thread is where our code is actually executed in the machines' processor.

// Non-blocking event loop: What if we have a long-running task like fetching data from a remote server well that would eventually block the single thread where the code is running. But of course we don't want that what we want is so called 'non-blocking' behavior. We achieve that by using an 'event loop'. The event loop takes long running tasks, executes them in the background and then puts them back in the main thread once they are finished.

//💡 JavaScript engine
// A JavaScript engine is a computer program that executes JavaScript code. Every browser has its own engine. The most popular is Google's V8. The v8 engine powers Google chrome and Node.js, which is a JavaScript runtime built on top of the V8 engine.
// Any JavaScript engine contains 'Call Stack' and 'Heap'. The Call Stack is where our code is executed using execution context. The Heap is an unstructured memory pool which stores all the objects that our application needs.

//💡 Compilation
// The Entire source code is converted into machine code at once and this code is then written into a portable (binary) file that can be executed by any computer. The execution can happen way after the compilation of the code. Example, any application that you are using on your computer right now has been compiled before and you are now executing it way after its compilation.

//💡 Interpretation
// There is an Interpreter which runs through the source code and executes it line by line. The code is read and executed all at the same time. Of course the source code still needs to be converted into machine code but it simply happens right before its execution and not ahead of time. JavaScript used to be purely interpreted language but the problem with interpreted languages is that they are much slower than compiled languages. Modern JavaScript engine now use a mix between compilation and interpretation which is called Just-in-time (JIT) compilation.

//💡 Just-in-time (JIT) compilation
// JIT compiles the entire code into machine code at once, and then executes it right away. So, we still have the two steps of regular ahead of time compilation but there is no portable file to execute and the execution happens immediately after compilation. It is lot faster than Interpretation.

//💡 JavaScript Run-time Environment
// A JavaScript runtime environment is a software or hardware environment that executes JavaScript code. It provides the necessary components and resources for running JavaScript applications or scripts. The JavaScript runtime environment typically consists of the following components:
// Host Environment (Browser or Node.js)
// JavaScript Engine
// Web APIs (Browser Environment)
// Callback Queue and Event Loop (Asynchronous Environment)
// Global Object
// Standard Library

//💡 Call Stack
// At the most basic level, a call stack is a data structure that uses the Last-In, First-Out (LIFO) principle to temporarily store and manage function invocation (call).
// LIFO: When we say that the call stack operates by the data structure principle of Last-In, First-Out, it means that the last function that gets pushed into the stack is the first to be popped off, when the function returns.

// 	What is the purpose of the call stack?
// The call stack is used by the JavaScript engine to keep track of the execution context of each function. The execution context is a data structure that contains information about the function, such as its name, its parameters, and its local variables. The call stack allows the JavaScript engine to quickly and easily find the execution context of any function that is currently being executed. The global execution context is the topmost execution context on the call stack. It is created when a JavaScript program is executed. All other execution contexts are created by nested functions.

//💡 How does the call stack work?
// When a JavaScript program is executed, the JavaScript engine creates a global execution context. This is the topmost context on the call stack for the top-level code. The top-level code is the code that is not inside any function. This includes variable declarations, conditional blocks, loops, and any other executable statements. The code in the global execution context is executed sequentially from top to bottom. In the beginning only the code that is outside of a function will be executed. When a function is called, the JavaScript engine creates a new function execution context and pushes it onto the call stack. The new function execution context inherits the variables and parameters from the global execution context. When the function finishes executing or reaches a return statement, its function execution context is popped off the call stack. If the function has nested functions, these nested functions will also be popped off the call stack in the reverse order that they were pushed on. The Global execution context is removed from the call stack only When the programme itself finishes, like closing the browser.

console.log("Start of Script");

const globalVar = "End of Script";

if (true) {
  const block = "Inside the block";
  console.log(block);
}

const one = () => {
  two();
};

const two = () => {
  console.log(1);
};

one();
console.log(globalVar);

// In the above code example, the JavaScript engine will first create the global execution context for the top-level code. The code in the global execution context will be executed sequentially from top to bottom. The console.log('Start of Script') statement is executed first, followed by an if block and after that, we have a function call "one()". When it reaches the "one()" line, the JavaScript engine will create the function execution context, which then gets pushed onto the call stack and begins execution. Inside one(), when it reaches the call to the two() function, the JavaScript engine will create a new function execution context for two(). This function execution context will be pushed onto the call stack, and the two() function will be executed, which logs '1' to the console. After the execution of two(), it is removed from the stack, and the execution goes back to the previous execution context i.e., one(). Since there is nothing left to execute inside one(), it is also removed from the stack. Finally, from the global execution, we log "globalVar" to the console.

// Here is the representation of the above code in the call stack.
// two();
//🔥___ function execution context for two()___
// one();
//🔥___ function execution context for one()___

// one();
// console.log(globalVar);
// const two = f () { console.log(1); }
// const one = ƒ () {    two();   }
// const block = 'Inside the block';
// console.log(block);
// const globalVar = "End of Script";
// console.log("Start of Script");
//🔥___ Global execution context___
//!___📋  CallStack 📋 ___!

//💡 Stack overflow
// A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accommodate before throwing a stack error.
function foo() {
  foo();
}
foo(); // This function keeps looping over and over. It will run until the browser throws a “Maximum call size exceeded”. And that is a stack overflow.

// This is how it may appear on the call Stack.
// foo()
// foo()
// foo()
// .
// .
// .n

//💡 Node
// Node allows us to run JavaScript outside of a browser.
// Node.js allows us to build server side applications with JavaScript outside of any browser.
