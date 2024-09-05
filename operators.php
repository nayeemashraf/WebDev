<?php
//💡 Negation or NOT operator !
// Basic Usage:
// In this example, isTrue is initially true, and isFalse is assigned the negation of isTrue, so it becomes false.
$isTrue = true;
$isFalse = !$isTrue;
var_dump($isFalse);  //🔥 Output: false

// 1. Negating true:
// The ! operator flips true to false.
$result = !true;
var_dump($result);  //🔥 Output: false

// 2. Negating false:
// The ! operator flips false to true.
$result = !false;
var_dump($result);  //🔥 Output: true

//💡 Double Negation (!!):
// Using !! is a common pattern to convert a value to its boolean equivalent. The first ! negates the truthiness, and the second ! negates it again, effectively converting the value to a boolean.
$originalValue = true;
$doubleNegation = !!$originalValue;
var_dump($doubleNegation);  //🔥 Output: true

// Negating a Non-Boolean Value:
// The ! operator implicitly converts non-boolean values to boolean before negating. In this case, any non-empty string is truthy, so the result is false.
$nonBooleanValue = "Hello";
$negatedValue = !$nonBooleanValue;
var_dump($negatedValue);  //🔥 Output: false

// Logical Evaluation:
// The ! operator is often used in logical evaluations. For example:
$age = 20;
$isAdult = $age >= 18;
$isNotAdult = !$isAdult;
var_dump($isNotAdult);  //🔥 Output: false
// Here, isNotAdult is true if the person is not an adult (age less than 18).

//💡 The boolval() function returns the boolean value of a variable.
// Similar to Boolean(undefined) in javascript. 
$x = 'true';
echo boolval($x); // 1 is true and 0 is false

//💡 .=	Concatenation assignment
$txt1 = 'hello';
$txt2 = ' world!';
echo $txt1 .= $txt2;    //🔥 hello world!

//💡 Union of x and y: In PHP, the + operator is used for array union.
$x = ['a', 'b', 'c'];
$y = ['d', 'e', 'f'];

// The plus (+) operator will just compute union of the two arrays and the union just means that take all the elements from the variable 'y' and append it to the variable 'x' if they don't exist at the same index or the same key. So, in this case all these three elements of array 'y' are at the same indexes that are of the 'x' array's elements so when we do the union, the 'x' will actually not change, it will just use the elements from the variable 'x'.
$z = $x + $y;

print_r($z);    //🔥 ['a', 'b', 'c']

// However, if we added a couple more elements in array 'y' like 'g' and 'h', now we're going to see those elements appended to the original array.

$y = ['d', 'e', 'f', 'g', 'h'];
$z = $x + $y;
print_r($z);    //🔥 ['a', 'b', 'c', 'g', 'h']


// Union of Associative arrays.
$x = ["a" => "red", "b" => "green"];
$y = ["c" => "blue", "d" => "yellow"];

$z = $x + $y;   // union of $x and $y
print_r($z);    //🔥 Array ( [a] => red [b] => green [c] => blue [d] => yellow )

// If there are duplicate keys, the value from the left array (first array) is used, and the value from the right array (second array) is ignored.
$x = ["a" => "red", "b" => null];
$y = ["a" => "blue", "b" => "yellow"];

var_dump($x + $y); // print_r() will not show explicit 'Null' value so, using var_dump().
//🔥 Array( [a] => red  [b] => null )

//💡 Use of comparison operators in arrays:
// == Equality operator Returns true if $x and $y have the same key-value pairs.
// Loose comparison Equality (==) operator perform type coercion (conversion), which means it converts both key and value to the same type before comparing them.
$x = array("a" => "red", "b" => "green");
$y = array("c" => "red", "b" => "yellow");

var_dump($x == $y);     //🔥 false

// === strict Equality Returns true if $x and $y have the same key-value pairs in the same order and of the same types
$x = array("a" => "red", "b" => "blue", 6 => "six", "c" => "blue");
$y = array("a" => "red", "b" => "green", "c" => "blue", "6" => "six");

var_dump($x === $y);    //🔥 false

// != Inequality operator Returns true if $x is not equal to $y
// Loose comparison Inequality (!=) operator perform type coercion (conversion), which means it converts both key-values to the same type before comparing them.
$x = array("a" => "red", "b" => "green");
$y = array("c" => "blue", "d" => "yellow");

var_dump($x != $y);    //🔥 true

// !== strict Inequality operator Returns true if $x is not identical to $y
$x = array("a" => "red", "b" => "green");
$y = array("c" => "blue", "d" => "yellow");

var_dump($x !== $y);    //🔥 true


//💡 Stacking/nesting of ternary operators
// You can chain multiple ternary operators together to create nested conditions.

// Always use parentheses to make the code much easier to read and understand, especially when you have multiple nested ternary operators. Not using parentheses around stacked ternary operators was deprecated in PHP 7.4 and will result in errors in PHP 8.

$x = 4;
// This code is quite difficult to read without parentheses. Uncomment the below line, it will show this error: "Nested ternary expressions (without parentheses) deprecated in PHP 7.4"
// ⛔ $y = $x > 5 ? $x > 10 ? "Greater than 10" : "Between 5 and 10" : "Less than 5";

// With parentheses, it becomes much cleaner and clear:
// In this example, the first ternary operator checks if $x is greater than 5. If it is, the second ternary operator checks if $x is greater than 10. If it is, the value "Greater than 10" is returned. Otherwise, the value "Between 5 and 10" is returned. If $x is less than 5, the value "Less than 5" is returned.
$y = $x > 5 ? ($x > 10 ? "Greater than 10" : "Between 5 and 10") : "Less than 5";
echo $y;


//💡 Null Coalescing Operator ??
// It checks if a value is a null.
$exp1 = 'some';
$exp2 = null;

// The value of $x is exp1 if exp1 exists, and is not NULL.
$x = $exp1 ?? $exp2; //🔥 some
var_dump($x);

// If expr2 does not exist, or is NULL, the value of $x is expr1.
$x = $exp2 ?? $exp1;
var_dump($x);   //🔥 some

// variable $color is "red" if $color does not exist or is null. By default, Undefined variables get the value of null.
echo $color = $color ?? "red";

//💡 Short-circuiting
// short-circuiting refers to the behavior of certain operators where the evaluation of an expression stops as soon as the final result is determined, without needing to evaluate all parts of the expression. This optimization can improve performance and simplify complex logic.

// The result of the logical operators in PHP is a boolean value (true or false), not the literal value or value of the operand.
function someFunction()
{
    echo 'echoed';
}
$x = 'truthy value';
$result = $x || someFunction(); // someFunction() is not called because $x is true
var_dump($result); //🔥 true 

// $result gets the Boolean value true, this is different from JavaScript where the value of $result will be the string 'truthy value'.

// || operator evaluates to true if either of the operand evaluates to true.
// Returns first boolean value true or last boolean value false.
// If the left operand is truthy (e.g., true, a number not 0, a non-empty string), the entire expression is considered truthy and the right operand isn't evaluated.
$x = 3 || "Jonas";
var_dump($x);   //🔥 true

$x = "" || "Jonas";
var_dump($x);    //🔥 true

$x = true || 0;
var_dump($x);    //🔥 true

$x = 0 || null;
var_dump($x);    //🔥 false

$x = 0.0 || 0 || "" || "Hello" || 23 || null;
var_dump($x);   //🔥 true

// && operator evaluates to true only if both operands evaluate to true.
// Returns first boolean value false or last boolean value true.
// If the left operand is a Boolean false or has a falsy value (e.g., 0, '0', null, empty string, empty array), the entire expression is considered falsy and the right operand isn't evaluated.
$y = 0 && "Jonas";
var_dump($y);   //🔥 false

$y = -2 && '0';
var_dump($y);   //🔥 false

$y = 7 && "Jonas";
var_dump($y);   //🔥 true

$y = "Hello" && 23 && null && "jonas";
var_dump($y);   //🔥 false

$x = true;
$y = false;
function hello()
{
    echo 'hello world! ';
    return false;
}

var_dump($x && hello());    //🔥 hello world false

//💡 Increment and Decrement
// increment and decrement operators only affect numbers and strings.
// decrementing a null value has no effect but incrementing null will result in 1.
$x = null;
--$x;
var_dump($x); //🔥 NULL

echo ++$x;  //🔥 1

// decrementing also has no effect on the string values but incrementing has effect on the string values.
$x = 'abc';
echo --$x;  //🔥 abc

// It will increment the characters.
++$x;
echo $x; //🔥 abcd



//💡 Order of precedence of logical and comparison operators: (from highest to lowest)
$x = false;
$y = false;

// 1. grouping () 
// Parentheses take precedence over all other operators. Use them to control the order of evaluation explicitly.
var_dump(($x || !$y) && (!$x || $y)); //🔥 true

// 2. Logical NOT (!)
var_dump($x || !$y); //🔥 true

// The ! (not) operator has higher precedence than the equality (==) operator.
$x = 100;

if (!$x == 90) {
    echo "Hello world!";
}

// This is equivalent to:
if ((!$x) == 90) {
    echo "Hello world!";
}

// Here, the !$x part is evaluated first, and then the result is compared to 90. The ! operator negates the truthiness of the variable $x, so !$x will be false because 100 is considered truthy.

// So, the condition simplifies to:
if (false == 90) {
    echo "Hello world!";
}
// Now, this condition will not be true because false is not equal to 90. Therefore, the "Hello world!" message will not be echoed.

// To execute the if block, you should use parentheses to ensure proper grouping:
if (!($x == 90)) {
    echo "Hello world!";
}

// when using the ! operator in combination with other operators, it's often a good practice to use parentheses to explicitly specify the order of operations and ensure the desired behavior.

// 3. comparison operators (==, ===, !==, < > <= >=)

// 4. Logical AND (&&)
function sameOldHello()
{
    echo 'hello world!';
}

var_dump($x && sameOldHello() || true); //🔥 true

// 5. Logical OR (||)
var_dump($x || !$y && $x); //🔥 false

// 6. Assignment operators (=)

//💡 Order of precedence of arithmetic operators: (from highest to lowest)
// 1. grouping ()

// 2. x² ** Exponentiation (right-associative)

// 3. * / %  same precedence (left-associative)

// Associativity: The order in which operations with the same precedence are executed
$x = 5 + 3 * 5;
echo $x; //🔥 20
// (3 * 5) gets grouped because of the higher precedence than plus operator and are evaluated first. 

// However, if we group it, we can control and force the precedence.
echo (5 + 3) * 5;   //🔥 40

// 	+ - . same precedence (left-associative)