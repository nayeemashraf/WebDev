<?php
// To create a constant, use the define() function.
// convention is to use all uppercase letters for a constant.
define("GREETING", "Welcome to W3Schools.com!");
// We don't use the prefix dollar $ symbol to access a constant. 
echo GREETING;


// Constants are Global - Constants are automatically global and can be used across the entire script without having to use the global keyword to access them inside a function.

define("STATUS_PAID", "Paid");

function myTest()
{
    echo STATUS_PAID;

    // We cannot have a constant with same name inside another block because constants by default are global and if we do so, we are actually redeclaring the original constant which isn't allowed.

    // define("GREETING", "Welcome to php.net!"); // Error
    // We cannot redeclare the constant 'GREETING' again. It will throw an error because it has already been declared.
}

myTest();

// We can also check if a constant variable has been defined using the defined function.
echo defined('STATUS_PAID'); //🔥 1 which is boolean true.

//💡 const
// You can also create a constant by using the const keyword.
const CAR = "Volvo";
echo CAR;

//💡 const vs. define()
// const cannot be created inside another block scope, like inside a function or an if statement.
// if(true) {
//     const INVALID = 'any value'; // cannot do this.
// }

// define can be created inside another block scope.

// constants created with const keyword are defined at a compile time while with define function they are defined at the run time.

// When to use which ?
// const Keyword:
// Preferred for defining class constants, as it's part of the class definition and provides better encapsulation.
// Suitable for defining global constants that have static values known at compile time.
class Constants
{
    const TAX_RATE = 0.07; // Example constant
    const MAX_FILE_SIZE = 1048576; // Another example (1MB)
}

// define() Function:
// Useful when you need to define constants dynamically or when their values are determined at runtime.
// Appropriate for defining global constants with dynamic values or for use cases where constants need to be defined conditionally.

//⚡ use var_dump() or print_r() methods in case of objects for debugging purposes.
// NOTE: print_r() does not explicitly show the null value.

//💡 In php, we cannot have two functions, classes or constants with the same in the same scope.