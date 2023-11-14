// Operators: Apart from the basic mathematical operations, = and + are used to assign and concatenate values, respectively.
// equal = is the assignment operator which is used to assign the value (number, string and boolean etc.) to a variable.
let rank = 1;
let language = "Java";

// + is used to concatenate the variables or values. When used on strings, the + operator is called the 'concatenation' operator.
// we can concatenate the number with the string or vice-versa.
// If you add a number and a string, the result will be a string!
// Using the above example,
let concatenated = language + rank;
console.log(concatenated); //🔥 'Java1'

// When we concatenate two string variables by default there is no space between the concatenated strings. To add the space in-between we have to manually include the space before the string like this:
language = " Java";
concatenated = language + rank;
console.log(concatenated);

// - / * these three do the basic arithmetical operation.

// ** is the Exponentiation (x²) operator in javaScript.
// square of x.
let a = 2 ** 2;
console.log(a); //🔥 4
// cube of x.
a = 2 ** 3;
console.log(a); //🔥 8

//💡 If you put a number in quotes, the rest of the numbers will be treated as string and get concatenated.
let w = 2 + 3 + "5";
alert(w);
//🔥 55
// As soon as the numeric string appears, the numbers afterwards get concatenated.
let p = "2" + 2 + 8;
alert(p);
//🔥 228

//💡 We cannot multiply a number by a string or subtract/divide the number with a string.
//💡 we can only add a number to a string and that concatenates (joins) the two or we can add strings to strings to concatenate them.

// += is the Operator shorthand for updating the value of variable.
let num = 2;
num = num + 2; // Here we are saying to 'num' assign new value to yourself i.e., add 2 to your original value.
//🔥 4         // Now, num's value is 4.

// We can achieve the same with the below shorthand.
num += 2; // Here += specifies add a value (2) to the current value of num i.e., 4 + 2 which equals to 6.
console.log(num); //🔥 6

// We can do this with all other operators using: -=  *=  /=  **=  %=
num *= 2; //🔥 12

//💡 The assignment operator += can also be used to concatenate strings.
let text = "This is how the ";
text += "concatenation works.";
//🔥 How is how the concatenation works.

//💡 Increment ++i and decrement --i variable by 1.
let number = 1;
number++; // works the same way as number = number + 1;
console.log(number);
//🔥 2

let anotherNum = 4;
--anotherNum;
console.log(anotherNum);
//🔥 3
// ++ and -- Operators could be placed before and after the variable to increment or decrement it by 1.
// ++num  When it comes before the variable, we call it “the prefix form”.
// num++  When it goes after the variable, it is called “the postfix form”.
//💡 The prefix form returns a new value, while the postfix form returns an old value before performing an increment or decrement.

//💡 The postfix increment operator increments the value and returns the value "before" the increment.
let i = 3;
const j = i++; // return old value of 'i' to 'j' then increment 'i'.
console.log(i, j);
//🔥 4  3     // i = 4 and j = 3

//💡 The prefix increment operator increments the value and returns the value "after" the increment.
let ii = 3;
const jj = ++ii;
console.log(ii, jj);
//🔥 4  4   // ii = 4 and jj = 4

//⚠️ Increment/decrement could only be applied on number type variables. An error will be prompted if there is an attempt on strings or directly on number. Example: let a = 5++ or let b = 'abc' b++;

//💡 % modulus operator
// % is not percentage operator in JavaScript. It is used to find the remainder of the division between two numbers. It can be helpful in various scenarios, such as checking for even or odd numbers, cycling through a range of values, or determining if a number is divisible by another number. For example, a % b returns the remainder when a is divided by b.
// In this example, 10 % 3 calculates the remainder when 10 is divided by 3. The result will be 1 since 10 divided by 3 equals 3 with a remainder of 1.
const dividend = 10;
const divisor = 3;
const remainder = dividend % divisor;
console.log(remainder); //🔥 1

// Uses of % operator:
// Even and Odd Numbers
// The modulus operator can be used to check whether a number is even or odd. An even number divided by 2 will have a remainder of 0, while an odd number will have a remainder of 1.
const evenOdd = 7;
if (evenOdd % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Cycling through a Range of Values
// You can use the modulus operator to cycle through a range of values by restricting the result within a desired range. Here's an example that cycles through the numbers 1 to 5 repeatedly:
for (let i = 1; i <= 10; i++) {
  const cycle = i % 5;
  console.log(cycle);
}

// Divisibility Check
// The modulus operator can determine if a number is divisible by another number. If the result is 0, it means the number is divisible.
const checkDivisible = 12;
if (checkDivisible % 4 === 0) {
  console.log("Divisible by 4");
} else {
  console.log("Not divisible by 4");
}

//💡 comparison operators: These operators are used in logical statements to determine equality or difference between the values or variables.
/*
1. a) < used to check whether the value on left side is less than the value on right side of '<'
   b) > used to check whether the value on left side is greater than the value on right side of '>'
2. a) <= used to check whether the value on left side is less or equal to the value on right side of '<='
   b) >= used to check whether the value on left side is greater or equal to the value on right side of '>='
3. == used to check whether the value on left side is equal to the value on right side. Also known as lose operator.
3 a). === Same as above but in addition to the value it checks the data type as well. Also known as strict operator.
4. != used to check whether the values on the left and right sides are not equal. Also, called as negation operator. If the compared values are equal it returns false else it will return true.
4 a) !== Same as above but in addition to the value it checks the data type as well.
*/
//💡 Equality operator (==) attempts to convert both values (that are being compared) to a common type. The Strict equality (===) operator does not perform a type conversion.

//💡 The inequality operator (!=) will convert data types of values while comparing. The strict inequality operator (!==) will not convert data types.

//💡 Both '>' and '<' operators will convert data types of values while comparing.
7 > "3"; // true
"1" > 9; // false
"3" < 7; // true
"8" < 4; // false

//💡 similarly, both '>=' and '<=' operators will convert data types while comparing.
7 >= "3"; // true
"7" >= 9; // false
"7" <= 7; // true
"8" <= 4; // false

//💡 logical operators:
let x = 6;
let y = 3;
// These operators evaluates the condition from left to right.
// Operator:	  Description:	    Example:
// &&           AND            (x < 10 && y > 1)
// if both the conditions/operands are true it returns true otherwise it returns false.

// ||           OR             (x == 5 || y == 5)
// if one of the condition is true it will return true.

// !            NOT            !(x == y)
// It flips the boolean value. If something is true it will make that false and vice-versa.

// !            NOT            !(9 === '9')
// we can use the strict operator with an expression as well.

//💡 Conditional (Ternary) Operator.
// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition. If the first condition evaluates to true it returns first value else it returns the second value.
// Syntax
variablename = condition ? execute_me_if_true : execute_me_if_first_is_false;
let voteable = age < 18 ? "Too young" : "Old enough";
// If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".

// Example 1.
function checkEqual(a, b) {
  return a === b ? true : false;
  //🤪 if we have a condition like this we wouldn't use the above statement rather we will simply write:
  // return a === b; Which is more efficient and does the same job. However, the purpose here is to demonstrate the ternary operator.
}
console.log(checkEqual(1, true));

//* Use of Multiple conditional operators.
// Below function checks whether the number is negative or positive or zero. Here we have two ternary operators. If first condition will be true, it will return "positive" else it will check the second condition i.e., 'num < 0', similarly whichever value returns true in the second condition will be returned.
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-10));

// Example 2.
function isUserValid(bool) {
  return bool;
}
let answer = isUserValid(true) ? "You may enter" : "Access Denied";
console.log(answer); //🔥 You may enter

let automatedAnswer =
  "Your account # is " + (isUserValid(false) ? "123" : "not available"); // we used () because it's an expression.
console.log(automatedAnswer); //🔥 Your account # is not available

//💡 template literals
// Example of a template literal string. With literals we can write a string in multiple lines.
const recipient = "James";
const sender = "John";
const template = `
        Hey ${recipient}! 
        How is it going? 
        Hey! ${sender} I'm doing pretty well 
        How about you? 
        What's been happening on your end?`;

console.log(template);
//* with template literals we don't need to use '+' operator for concatenation instead we use ${placeholder} syntax. This is called string interpolation. whatever is in the curly braces is taken as an expression and is computed before returning the final value. We can place any expression inside the ${} in a template literal string.
// An expression is any valid unit of code that resolves to a value. This can be a variable, a constant, a function call, an arithmetic operation, a logical operation, etc. For example:
// example 1.
let num1 = 2;
let num2 = 4;
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(result); //🔥 The sum of 2 and 4 is 6

// example 2.
let username = "Bob";
let greeting = `Hello, ${username.toUpperCase()}!`; //🔥 Hello, BOB!

// The value of the expression inside the ${} is converted to a string and inserted into the template literal
// example 3.
let today = new Date();
let date = `Today is ${today.toLocaleDateString()}`; // Today is 12/29/2021

//* Expressions are evaluated similar to B I D M A S principle.
// The order of operations is:
// Bracket()
// indices(Exponentiation) x²
// multiplication *
// addition +
// subtraction -

// If an expression contains multiple operations of the same precedence, they are evaluated from left to right.

// Some operators have a higher precedence than others. For example, the * operator has a higher precedence than the + operator. This means that the expression 2 * 3 + 4 would be evaluated as (2 * 3) + 4, not 2 * (3 + 4).

// The order of operations can be overridden using parentheses. For example, the expression (5 + 3) * 2 would be evaluated as 16, because the addition operation is performed first within the parentheses.

// Unary operators, such as - and +, are evaluated before the other operators. For example, the expression -5 + 3 would be evaluated as -2.
