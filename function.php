<?php
// A "named function," a "regular function," and a "function declaration" essentially refer to the same thing: a function defined using the function keyword with a specific name.
function addNumbers($a, $b)
{
    return $a + $b;
}

// An anonymous function is a function that is defined without a name. It's often assigned to a variable or passed as an argument to other functions.
// It's usually defined as an expression using either function expression syntax or arrow function syntax.
// It can be assigned to variables, passed as arguments, and returned from other functions, offering great flexibility in code organization and execution.

// 1. Function Expression Syntax:
$myFunction = function ($parameters) {
    // function body
};

// 2. Arrow Function Syntax (Concise Form):
$myFunction2 = fn ($parameters) => $a + $b;

// We don't use $ symbol (either at defining or calling) with a named/regular function.
function named()
{
    echo 'without $ symbol ';
}
named();

// However we must use it (either at defining or calling) with the function expression.
$funExpression = function () {
    echo 'prefixed with $ symbol';
};
$funExpression();

//⚡ Use Function Types by following this:
//💡 Function Declaration for Global Code [In Global Scope]
//💡 Function Expression for Local Code [specific module or file]

//💡 Higher Order Functions
// A higher order function is a function that takes a function as an argument, or returns a function. They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.

// add: Takes two parameters x and y and returns their sum (x + y).
function add($x, $y)
{
    return $x + $y;
};

// subtract: Takes two parameters x and y and returns their difference (x - y).
function subtract($x, $y)
{
    return $x - $y;
}

// 1. A function that takes a function as an argument
// math: Takes three parameters x, y, and operator. It invokes the operator function with x and y as arguments and returns the result.
function math($x, $y, $operator)
{
    return $operator($x, $y);
}

// Then, we use the math function to perform an addition operation.
// To pass a named function as an argument, we need to reference its name as a string. We can mention it without enclosing it within the quotes but it shows "Undefined constant 'add'" error due to misconfiguration in the intelephense or vscode or the php.ini file.
math(5, 2, 'add'); //🔥 7

// In the above code, you have three functions:

// Here's a step-by-step explanation:

// math(5, 2, add): You are calling the math function with three arguments (5, 2, and add). In this context, add is a function, and you are passing it as an argument to math.

// Inside the math function, operator(x, y) is called. Since operator is add, it's equivalent to add(5, 2).

// add(5, 2): Calls the add function with the arguments 5 and 2. The add function returns the sum of its arguments (5 + 2), which is 7.

// Therefore, the final result of math(5, 2, add) is 7.

// 2. A Function that returns a new function
function higherOrderFunction()
{
    // Do something
    return function () {
        // Inner function
    };
}

// Or we can store the function in a variable and then return that:
function makeFunc()
{
    $name = "Mozilla";
    $displayName = function () use ($name) {
        echo $name;
    };
    return $displayName;
}

//💡 'use' keyword
// In PHP, the 'use' keyword is used in the context of anonymous functions (closures) to import variables from the outer scope into the closure's scope. This allows you to access variables that are defined outside of the closure within the closure itself.
// The use ($name) part is specifying that the variable $name from the outer scope (the makeFunc function) should be available inside the closure ($displayName). This is necessary because, by default, a closure does not inherit variables from the outer scope. The 'use' keyword is a way to explicitly bring those variables into the closure's scope.

//💡 passing by value and passing by reference in functions
// Arguments are usually passed by value, which means that a copy of the value is used in the function and the variable that was passed into the function cannot be changed.
$name = 'mario';
function sayHello($name)
{
    // $name = 'ninja'; // first run this function as it is then uncomment this line to see the changes.
    // If we update the local variable (parameter) $name, it will not reference to the global variable $name because arguments are passed by value, which means a copy of the value from the global variable is passed to the local variable.
    echo "<p>Hello $name!<p>";
}
sayHello($name);
echo $name;


// However, In php, we can pass a variable by reference by inserting the & operator before the varaible. When a function argument is passed by reference, changes to the argument also change the variable that was passed in:
function sayBye(&$name)
{
    $name = 'super mario';
    echo "<p>Bye $name!<p>";
}
sayBye($name);
echo $name; // global variable $name is also updated because we passed it as a reference.

//💡 If we are returning an array, we can directly access its elements by adding the index of the element at the end of the function call.
function example()
{
    return ['one', 'two'];
}
$ArrayElement = example()[0];
echo $ArrayElement; //🔥 'one'


// Returning associative array from a function and then using the keys to access their corresponding values
function getUserInfo()
{
    // we can also directly return the array without storing in a variable while accessing of values remains the same (see below👇🏻)
    $data = [
        "name" => "Alice",
        "email" => "alice@example.com"
    ];
    return $data; // Return an associative array
}

$userInfo = getUserInfo();  // (here ☝🏻 👈🏻)
echo "Name: " . $userInfo["name"] . ", Email: " . $userInfo["email"];

//💡 Things that PHP shares with JavaScript:

// 1. Immediately Invoked Function Expressions (IIFE)
// In PHP, IIFE can be created using either the function() syntax or the arrow function syntax
(function () {
    echo "This will be automatically called and will never run again";
})();

// Using arrow syntax
echo (fn () => 'arrow syntax IIFE')();

// storing the result in a variable
$result = (function () {
    $name = "John";
    return "Hello, $name!";
})();

echo $result; // Output: Hello, John!

// with argument
$star = 'sun';
(function ($star) {
    echo $star;
})($star);

// 2. Returning multiple values from a function.
// a) Can Return an Array
// b) Can Return an Associative Array

function returnMultipleValues()
{
    $name = "Alice";
    $email = "alice@example.com";
    $age = "25";

    return [
        'name' => $name,
        'email' => $email,
        'age' => $age,
    ];
}

$result = returnMultipleValues();
print_r($result); //🔥 Array ( [name] => Alice [email] => alice@example.com [age] => 25 )

// Using Destructuring - If you return an array or an associative array from the function, you can use destructuring to capture the individual values into separate variables.
// However, we can only destructure associative arrays by specifying the keys explicitly.
// This syntax specifies the keys of the associative array that we want to extract and assigns them to corresponding variables.
["name" => $name, "email" => $email, "age" => $age] = returnMultipleValues();
echo "<br>";
echo "Name: $name, Email: $email, Age: $age";

// 3. Rest Parameter

//💡 Built-in Math and DateTime methods
// abs - This function is used to get the absolute value of a number.
$absoluteValue = abs(-5.5); //🔥 $absoluteValue will be 5.5

// round - This function is used to round a number to the nearest whole number.
$roundedNumber = round(-5.5); //🔥 $roundedNumber will be -6

// pow - This function is used to calculate the power of a number. The first parameter is the base number, and the second parameter is the exponent.
$power = pow(2, 3); //🔥 $power will be 8

// sqrt - This function is used to calculate the square root of a number.
$squareRoot = sqrt(4); //🔥 $squareRoot will be 2

// rand - This function generates a random number between a specified range.
$randomNumber = rand(1, 100); //🔥 Generates a random number between 1 and 100 (inclusive)

// date - This function is used to format a date and time according to a specified format string.
$formattedDate = date('Y-m-d H:i:s'); //🔥 Formats the current date and time as YYYY-MM-DD HH:II:SS and stores it in $formattedDate

// time - This function is used to get the current Unix timestamp. The Unix timestamp is the number of seconds elapsed since the Unix epoch, which is Thursday January 1st, 1970 at 00:00:00 UTC.
$currentTime = time();
echo "Current Unix Timestamp: $currentTime"; //🔥 would return the current Unix timestamp.

// strtotime - This function is used to convert a string representing a date and time to a Unix timestamp. It understands various date and time formats commonly used in English.
$Time = strtotime("2023-04-11"); //🔥 would return the Unix timestamp for April 11, 2023.

$futureDate = strtotime("tomorrow");
echo "Unix Timestamp for Tomorrow: $futureDate";

$pastDate = strtotime("last Wednesday");
echo "Unix Timestamp for Last Wednesday: $pastDate";
