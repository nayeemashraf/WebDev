//💡 JavaScript Arithmetic Operators:
// + Addition, - Subtraction, * Multiplication, ** Exponentiation, / Division, % [Modulus (Remainder)]

// Arithmetic operators perform arithmetic on numbers (literals or variables).
let m = 100 + 50;
let number1 = 10;
let number2 = 2;
let o = number1 / number2;

// Operators and Operands
// The numbers (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an operator.

// Operand	Operator	Operand
// 100	    +	        50

// The Assignment Operator (=) assigns a value to a variable.
// equal = is the assignment operator which is used to assign the value (number, string and boolean etc.) to a variable.
let rank = 1;
let language = "Java";

// The + can also be used to add (concatenate) strings.
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

// ** is the Exponentiation (x²) operator in JavaScript.
let a = 2 ** 2; // square of x.
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

// += Addition Assignment Operator is the shorthand for updating the value of a variable.
let num = 2;
num = num + 2; // Here we are saying to 'num' assign new value to yourself i.e., add 2 to your original value.
//🔥 4         // Now, num's value is 4.

// We can achieve the same result with the below shorthand.
num += 2; // Here += specifies add a value (2) to the current value of num i.e., 4 + 2.
console.log(num); //🔥 6

// We can use this with all other operators using: -=  *=  /=  **=  %=
num *= 2; //🔥 12

//💡 The assignment operator += can also be used to concatenate strings.
let text = "This is how the ";
text += "concatenation works.";
//🔥 How is how the concatenation works.

//💡 ++ Increment
// Increments the variable by 1.
let number = 1;
number++; // works the same way as number = number + 1;
console.log(number);
//🔥 2

//💡 -- Decrement
// Decrements the variable by 1.
let anotherNum = 4;
--anotherNum;
console.log(anotherNum);
//🔥 3

// ++ and -- Operators could be placed before or after the variable to increment or decrement it by 1.
// ++num  When it comes before the variable, we call it "the prefix form".
// num++  When it goes after the variable, it is called "the postfix form".

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

//⚠️ Increment/decrement can only be applied on number type variables. An error will be prompted if there is an attempt on strings or directly on number. Example: let a = 5++ or let b = 'abc' b++;

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

//💡 comparison operators: These operators are used in logical statements to determine equality or difference between the values or variables. They always return a Boolean value, either True or False, based on the evaluation of the specified condition.

// The variables or literal values (either number or string) in an expression are called operands.

// 1. comparison Equality ==

// a) == used to check whether the value on left side is equal to the value on right side. Also known as lose operator.
console.log(2 == 2); //🔥 true

// b) === Same as above but in addition to the value it checks the data type as well. Also known as strict operator.
console.log(2 === "2"); //🔥 false

// 2. comparison Inequality !=

// a) != used to check whether the values on the left and right sides are not equal. Also, called as negation operator. If the compared values are equal it returns false else it will return true.
console.log(2 != "2"); //🔥 false

// b) !== Same as above but in addition to the value it checks the data type as well.
console.log(2 !== "2"); //🔥 true

// 3. less than < - greater than >

// a) < less than is used to check whether the value on left side is less than the value on right side of '<'
console.log(2 < 1); //🔥 false

//  b) > greater than is used to check whether the value on left side is greater than the value on right side of '>'
console.log(2 > 1); //🔥 true

// 4. <=	less than or equal to - >= greater than or equal to

// a) <=	less than or equal to is used to check whether the value on left side is less or equal to the value on right side of '<='
console.log(2 <= 2); //🔥 true

// b) >= greater than or equal to is used to check whether the value on left side is greater or equal to the value on right side of '>='
console.log(2 >= 1); //🔥 true

//💡 Loose comparison Equality (==) operator perform type coercion (conversion), which means it converts both values (that are being compared) to the same type before comparing them. The Strict equality (===) operator does not perform a type coercion.
console.log(4 == "4"); //🔥 true
console.log(4 === "4"); //🔥 false

//💡 Loose comparison Inequality (!=) operator perform type coercion (conversion), which means it converts both values (that are being compared) to the same type before comparing them. The strict inequality operator (!==) does not perform type coercion.
console.log(4 != "4"); //🔥 false
console.log(4 !== "4"); //🔥 true
// Strict Inequality:
console.log(false !== 0); //🔥 true

//💡 Loose Operator downsides
let s;
let n = null;
// When comparing null and undefined with loose equality operator ==, they are considered equal. For example,
console.log(s == n); //🔥 true

// As we know, == compares values by performing type conversion. Since both null and undefined return falsy value, Hence null and undefined are considered equal.

// Note: undefined and null are coerced to falsy values as they convert to false in boolean contexts, they are not strictly equal to false itself.
// Null and Undefined: Both null and undefined represent a lack of value.
// When comparing null and undefined using ==, JavaScript first coerces them to the same type.
// Both are considered "falsy" values, meaning they convert to a type that's equivalent to false in loose comparisons.
// Therefore, null == undefined becomes false == false, which evaluates to true.

// falseness and == false differ in the following cases:
// NaN, undefined, and null are falsy but not strictly equal to false.

null == false; //🔥 false
undefined == false; //🔥 false
0 == null; //🔥 false
undefined == 0; //🔥 false
NaN == NaN; //🔥 false
NaN == null; //🔥 false
NaN == undefined; //🔥 false

//⚡ Generally, it's recommended to use strict operator for most comparisons to avoid unexpected results from type coercion.

// If you want to differentiate between null and undefined based on their exact types, use the strict equality operator (===). This operator doesn't perform type coercion, so null === undefined would evaluate to false.

// null === undefined returns false because of their different types.
console.log(s === n); //🔥 false

//💡 Both '>' and '<' operators will convert data types of values before comparing them.
7 > "3"; //🔥 true
"1" > 9; //🔥 false
"3" < 7; //🔥 true
"8" < 4; //🔥 false

//💡 similarly, both '>=' and '<=' operators will convert data types while comparing.
7 >= "3"; //🔥 true
"9" >= 9; //🔥 true
"7" <= 7; //🔥 true
"8" <= 4; //🔥 false

//💡 logical operators: Logical operators are used to determine the logic between variables or values.

// The variables or literal values (either number or string) in an expression are called operands.
// These operators evaluate the condition from left to right.

let x = 6;
let y = 3;

// The logical AND (&&) operator returns the value of the last operand (variable) if both operands are Boolean true or truthy otherwise, it returns the value of the first operand. It checks the truthiness or falseness of the operands during the evaluation.
console.log(x && y); //🔥 3
console.log(5 && "string"); //🔥 string
console.log(true && true); //🔥 true
if (x < 10 && y > 1) {
  console.log(
    "Here 'x' and 'y' are first compared with 10 and 1, respectively, and both return Boolean 'true', the expression remains as: (true && true). Finally, AND (&&) operator returns the last Boolean 'true' and the if block evaluates to true and this console log statement is executed."
  );
} else {
  console.log("&& operator returned false.");
}

// The logical OR (||) operator returns the value of the first operand (variable) if it is Boolean true or truthy else it returns the value of the last operand. It checks the truthiness or falseness of the operands during the evaluation.
console.log(x || y); //🔥 6
console.log(5 || "string"); //🔥 5
console.log(false || true); //🔥 true
if (x == 5 || y == 3) {
  console.log(
    "First, 'x' and 'y' are compared with the respective values, the expression remains as: (false || true). The OR (||) operator returns the last Boolean 'true', making the if block true."
  );
} else {
  console.log("|| operator returned false.");
}

// The logical NOT operator (!) operator flips the Boolean value. If something is true it will make that false and vice-versa. It checks the truthiness or falseness of the operands during the evaluation.
// For example, !0 returns true, !1 returns false, and !'string' returns false.
if (!x) {
  console.log("! operator returned true.");
} else {
  console.log("! operator returned false.");
}

// logical operators can be combined together to build complex conditional statements.
// Example 1.
if (loggedIn && !isBanned) {
  console.log("User is logged in and not banned");
} else {
  console.log("User is either not logged in or banned");
}

// Example 2.
if (!userAge || isAdult(userAge)) {
  // This block will execute if either userAge has a falsy value or the isAdult() returns true.
  // Only checks isAdult() if userAge is not falsy.
}

// Example 3.
if (age >= 18 && (isCitizen || hasVisa)) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Example 4.
if (
  (temperature > 30 && humidity > 90) ||
  (windSpeed > 50 && visibility < 100)
) {
  console.log("Severe weather alert!");
} else {
  console.log("No severe weather");
}

//💡 Conditional (Ternary) Operator.
// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition. If the first condition evaluates to true it returns first value else it returns the second value.
// Syntax
// variableName = condition ? execute_me_if_true : execute_me_if_first_is_false;

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

//💡 JavaScript Type Operators
// Operator	    Description
// typeof	      Returns the type of a variable
// instanceof	  Returns true if an object is an instance of an object type

//💡 Expression
// An expression is any valid unit of code that resolves to a value. This can be a variable, a constant, a function call, an arithmetic operation, a logical operation, etc.
// OR
// In programming, an expression is a combination of values, variables, operators, and function calls that evaluates to a single value or result.

// Types of Expressions:
// Arithmetic Expressions: Perform mathematical calculations (e.g., 2 + 3 * 4, productPrice * quantity)
// String Expressions: Manipulate text data (e.g., firstName + " " + lastName, "The answer is: " + result)
// Boolean Expressions: Evaluate conditions and produce true or false outcomes (e.g., age >= 18, x != y)
// Logical Expressions: Combine multiple boolean expressions using logical operators (e.g., (isMember && hasDiscount) || isSpecialEvent)
// Assignment Expressions: Assign values to variables (e.g., total = subtotal + tax, name = "Alice")

//💡 Evaluation
// Evaluation is the process of computing or determining the value of an expression.
// During evaluation, the programming language interprets the expression, executes any operations specified by the operators, substitutes variable values, and ultimately produces a result.

// Evaluating an Expression:
// When you evaluate an expression, you follow the rules and logic defined by the programming language to compute the final value.
// This process may involve performing arithmetic operations, checking conditions in logical expressions, or executing functions to obtain the result.

//💡 Precedence of Operators
// The order of operations in an Arithmetic expression is (from highest to lowest):
// Bracket()
// indices(Exponentiation) x²
// multiplication *
// division /
// addition +
// subtraction -

// If an expression contains multiple operations of the same precedence, they are evaluated from left to right.

// Some operators have a higher precedence than others. For example, the * operator has a higher precedence than the + operator. This means that the expression 2 * 3 + 4 would be evaluated as (2 * 3) + 4, not 2 * (3 + 4).

// The order of operations can be overridden using parentheses. For example, the expression (5 + 3) * 2 would be evaluated as 16, because the addition operation is performed first within the parentheses.

// Unary operators, such as ++ Increment, -- Decrement, plus (+) and Minus (-), are evaluated before the other operators. For example, the expression -5 + 3 would be evaluated as -2.

//⚡ Use parentheses to explicitly control the order of evaluation and avoid potential ambiguity, even if operator precedence would technically lead to the same result. Parentheses take precedence over all other operators. Use them to control the order of evaluation explicitly.

//💡 Here's the order of precedence of comparison and logical operators from highest to lowest:
// Logical NOT (!)
// comparison operators (==, ===, !==)
// Logical AND (&&)
// Logical OR (||)
// Assignment operators (=)

let k = 10;
let l = 5;
let r = 0;

// Expression:
let e = !k || l && r === k != r; //🔥 false

// Here's the breakdown of the order of execution for each expression, taking into account operator precedence:

// !x: Logical NOT is applied first, negating k (10) to false:
false || l && r === k != r;

// Equality and Inequality Comparisons are of the same precedence therefore will be evaluated from left to right:
// r === k is evaluated first, comparing r (0) with k (10). This results in false.
false || l && r === k != r;
false || l && false != r;

// false != r is evaluated next, comparing Boolean false with r (0). This results in false.
false || l && false != r;
false || l && false;

// Logical AND (&&):
// l && false is evaluated first. This returns the last Boolean value ie., false.
false || l && false;
false || false;

// Logical OR (||):
// false || false is evaluated next. This returns the last Boolean value i.e, false.
false;

// Assignment:
// The final result, false, is assigned to the variable e.


// Unary Operators
// Unary operators are operators that operate on a single operand. They perform various operations, including negation, incrementing, decrementing, converting values, and checking types.

// Binary Operators
// Binary operators are operators that work with two operands (values or variables) to produce a single result. They perform various operations, such as calculations, comparisons, logical operations, bitwise manipulations, and assignments. Example, Arithmetic operators (+, -, *, /, %), Comparison operators (==, !=, <, >, <=, >=), Logical operators (&&, ||, !), and Assignment operators (=, +=, -=, *=, /=), etc.
