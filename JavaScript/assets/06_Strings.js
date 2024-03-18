// In JavaScript, we have two kinds of Strings, i.e.,
// 1. String primitive
const message = "hello world";

// 2. String Object
const another = new String("another string");
// With the constructor function we can create a string object. However, we must not do that instead, we use literals like the above (message) to create strings.
console.log(typeof message, typeof another);
// If we check the typeof of both these strings we get "string" for 'message' and "object" for 'another'.

// When we use methods or properties on primitive values (such as on String Primitive), JavaScript engine internally wraps the primitive value with an object wrapper (such as String Object). This process is known as "boxing" or "autoboxing".

// The object wrappers in JavaScript are temporary objects that provide access to methods and properties associated with the corresponding primitive types. These wrappers are automatically created and used when you perform operations on primitive values as if they were objects. They exist only for the duration of the operation and are discarded afterward.

// Properties are values that are associated with an object. They can be accessed using the dot notation or the square bracket notation.

// Methods are functions that are associated with an object. They can be called on the object and can be used to perform actions or calculations.
//                                                  OR
// Method: A Method is something that does some action on strings or arrays. It is just a function that is associated with string and array objects. We invoke/call a method with a . dot notation followed by () on a variable.
// syntax: variablename.methodname(parameter1, parameter2);
//⚡ You can identify whether something is a method or a property just by looking at the parentheses after the method name. If there is parentheses, it's a method else it's a property. However, there are some exceptions to this rule, such as functions that are used as properties.

//💡 All the string methods return a new string. They don't modify the original string because Strings are primitives and primitives are immutable: i.e., Strings cannot be changed, only replaced. Also, most of them are case sensitive.
let user = "william";
let result = user.toUpperCase(); // Here we used the toUpperCase() string Method.
// However, if we console log the 'user' variable (which stores the original value), it hasn't been altered. Only the 'result' variable is storing the changed form.
console.log(user); //🔥 william
console.log(result); //🔥 WILLIAM

//💡 In JavaScript, strings and arrays have different properties and methods that are specific to their data type.

// The only properties are length, constructor, and prototype, which are all present in both string and array. Everything else is a method.

// 💡 String Property:
// .length property finds the length of characters in a string. syntax: variablename.propertyname;
let myStr = "hello world"; // Note that the empty space character between "hello" and "world" is also counted in length property.
let mystrLength = myStr.length;
console.log(mystrLength); //🔥 11
// we can directly use all the string methods/properties without first storing them in a variable.
console.log("hello world".length);

// with bracket notation we can get the Nth Character at a given index in a String.
let charOf = myStr[0];
console.log(charOf); //🔥 h
// We can also use methods directly on them without first storing in a variable.
console.log("hello"[1]); //🔥 e

// Assigning value of a string at certain index to another variable.
// Let's try to set thirdLetterOfLastName variable equal to the third letter of the lastName variable using the bracket notation.
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; //🔥 v

// We can Use Bracket Notation to Find the Last Character in a String by using the n-1 formula, where n is the length of the string.
const last_Name = "Lovelace"; // total length 8
const lastLetterOfLastName = last_Name[last_Name.length - 1]; // 8 - 1 = 7
console.log(lastLetterOfLastName); //🔥 'e' // because it is at the index 7.

// 💡 Most Common String Methods:
// 1. toLowerCase(): a method that converts a string to lowercase letters and returns a new string.
//⚡ It is the most important thing to first convert the user input string in lower-case and then do the any required stuff on it.
const firstName = "John";
console.log(firstName.toLowerCase()); //🔥 john

// 2. toUpperCase(): a method that returns a new string with all the characters in uppercase.
const capitalLetters = firstName.toUpperCase(); //🔥 JOHN

// 3. The indexOf() method returns the position of the first occurrence of a value/character in a string or -1 if the value is not found.
let make = "JavaScript String Methods";
let index = make.indexOf("S");
console.log(index); //🔥 4
console.log("String".indexOf("ring")); //🔥 2

// 4. The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string. It searches the string from the end to the beginning.
console.log(make.lastIndexOf("t")); //🔥 20
console.log(make.lastIndexOf("S")); //🔥 11
// because we used the upper-case 'S' and the string methods are case-sensitive, otherwise the last index of lower-case 's' is 24

// 3. To extract a part of characters in a string we use slice(n, n) method. Where first 'n' i.e., first argument represents the position from where we want to start slicing and the second argument 'n' is where we want to end slice. Remember last index is not included. If we only provide one argument, it will slice from that position to the end of the string.
console.log(make.slice(11, 17)); //🔥 String
console.log(make.slice(18)); //🔥 Methods
// We can also use the negative number. Negative number slices from the end of the string.
console.log(make.slice(-1)); //🔥 s
console.log(make.slice(0, -8)); //🔥 JavaScript String

// Quick note: In all string extraction methods, the length of the extracted string is always the difference between the second and the first argument. In the above example it will be 17-11 = 6.

// Many times we don't even know the string that we receive and may not know the indices or starting or the end position ahead of the time. So, to get the desired part of the string extracted, we can use the below methods without having to hardcode the values.
// Let's try to extract the first word i.e., 'JavaScript' from the string. We will start from position 0 until the first space. For that we will use make.indexOf(' '), that will return the index of the first instance of the empty space.
console.log(make.slice(0, make.indexOf(" "))); //🔥 JavaScript
// Now, let's extract the last word from the string. We added 1 to remove the space from the extracted string.
console.log(make.slice(make.lastIndexOf(" ") + 1)); //🔥 Methods

// 4. The substring() method extracts a part of a string and returns the extracted parts in a new string. substring() is similar to slice() method. The difference is that start and end values less than 0 are treated as 0 in substring(). In the below example, the first argument is the starting position and second one specifies end position, excluding the character at the position indicated by end value. If the second argument is omitted, the characters from start position through the end are returned.
// syntax: variablename.substr(parameter1, parameter2);
let text = "Hello JavaScript! How are you?";
console.log(text.substring(6, 16)); //🔥 JavaScript

//* 5. The includes() method returns true if a string contains a specified string. Otherwise it returns false.
// The includes() method is case sensitive.
const note = "Hello world, welcome to the universe of JavaScript.";
const Find = note.includes("JavaScript"); //🔥 true

// It also takes the second argument, which specifies the position to search from.
console.log(note.includes("Hello", 5)); //🔥 false   // because we told it to check 'Hello' at or after the index 5. There is no 'Hello' in the given string after index 5.
console.log(note.includes("l", 12)); //🔥 true     // because we have 'l' in 'welcome'

// 6. The replace() method replaces the first occurrence of a specified value with another value in a string:
let Microsoft =
  "Welcome to Microsoft. Microsoft is a Technology Corporation. Please visit https://www.microsoft.com/about for more.";

let updateCorporation = Microsoft.replace(".", "!");
console.log(updateCorporation); //🔥 Welcome to Microsoft! Microsoft is a Technology Corporation. Please visit https://www.microsoft.com/about for more.

// Replacing the whole word.
updateCorporation = updateCorporation.replace("Corporation", "Company");
console.log(updateCorporation); //🔥 Welcome to Microsoft! Microsoft is a Technology Company. Please visit https://www.microsoft.com/about for more.

// 7. The replaceAll() method replaces all occurrence of a specified value.
updateCorporation = updateCorporation.replaceAll("s", "S");
console.log(updateCorporation); //🔥 Welcome to MicroSoft! MicroSoft iS a Technology Company. PleaSe viSit httpS://www.microSoft.com/about for more.

//* We can use a Regular Expression with the replace() and replaceAll() methods. The first parameter can be a string(target) or a RegExp(target) and second one is the replacement.
// Perform a global match with /g flag and replace all occurrences of 'Microsoft' with 'Google'
let Google = Microsoft.replace(/Microsoft/g, "Google");
console.log(Google); //🔥 Welcome to Google. Google is a Technology Corporation. Please visit https://www.microsoft.com/about for more.

// Perform a global match with /g and /i flag and replace all occurrences of 'google' with 'google' . 'i' is a modifier, it modifies the search to be case-insensitive i.e., it will match any 'google', regardless of upper-case or lower-case.
Google = Google.replace(/google/gi, "google");
console.log(Google); //🔥 Welcome to google. google is a Technology Corporation. Please visit https://www.microsoft.com/about for more.

// Finally, setting the right web address.
Google = Google.replace("www.microsoft.com/about", "about.google");
console.log(Google); //🔥 Welcome to google. google is a Technology Corporation. Please visit https://about.google for more.

// 8. The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string.
let whiteSpace = "     Hello World!     ";
let trimSpace = whiteSpace.trim();

console.log(whiteSpace); //🔥      Hello World!
console.log(trimSpace); //🔥 Hello World!

// 9. The split() method splits a string into an array of substrings. The split() method returns the new array.
// We can split a string on any character we want. Example, comma, quote, period, underscore, empty space etc.
// It also receives the second argument (an integer) which specifies the limit of splits.
let splitMe = "apple,banana,orange";
let splitted = splitMe.split(",");
console.log(splitted); //🔥 ['apple', 'banana', 'orange']
console.log("write hello world program in JavaScript".split(" "));
//🔥 ["write", "hello", "world", "program", "in", "JavaScript"];
//  If no space exist, it will return an array with a single element containing the entire string.
console.log("helloworld123".split(" ")); //🔥 [helloworld123]
// 'hello'.split('') will split the string into an array of individual characters. ['h', 'e', 'l', 'l', 'o']

// 💡 We can access the string methods or properties using the square bracket notation as well.
// ⛔ However, this approach is not commonly used and can make our code harder to read and understand. It is better to use the traditional dot notation (.) when calling string methods directly on a variable.

// To access a method or property of a string using the square bracket notation, you can use the name of the method or property as a string inside the square brackets.
// For example, here is how you can access the length property of a string using the square bracket notation:
let title = "bracket notation";
console.log(title["length"]); //🔥 16

// For example, here is how you can access the toLowerCase method of a string using the square bracket notation:
const userName = "John STEVE";
console.log(userName["toLowerCase"]()); //🔥 'john steve'

// You can also use variables or expressions inside the square brackets to access properties dynamically. For example:
const fullName = "John Holmes";
const property = "length"; // storing length property in 'property' variable.
console.log(fullName[property]); //🔥  11
//* Keep in mind that when using the square bracket notation to access a method, you still need to include the parentheses after the method name to call it.
// accessing method
const Method = "toUpperCase";
console.log(fullName[Method]()); //🔥 JOHN HOLMES

//💡 String Comparison
// Greater than > and less than < are used to compare strings.
// First letter of strings (on either sides) is used for comparison.

// 1. Successor alphabet is greater than its predecessor.
let ceo = "Andrew";
console.log(ceo > "Brandon");
//🔥 false  // Because letter "B" comes after letter "A"

// 2. lowercase alphabet is always greater than the uppercase letter even if the values are same.
let manager = "sanderson";
console.log(manager > "Sanderson");
//🔥 true

// 3. lowercase alphabet is greater even if the first letter of the compared value is the predecessor of first value.
let newbie = "alan";
console.log(newbie > "Prince");
//🔥 true

//💡 parseInt () method parses a string and returns (converts it) the first integer.

// We have to deal with integers not the strings for different calculations and other stuff. For that we convert the string into an integer with parseInt() method. If the first character of string cannot be converted, NaN is returned.

// parseInt () method ignores the text or any number that appears after a whitespace after the first integer and also the fractional part after decimal point. It will return NaN if the first value isn't an integer.
const num = "12oneTwo";
const integer = "05 5Years"; // since there is a whitespace between numbers, it will not parse any number after it.
const decimals = "01.00Month";
const notFirst = "days 6";
const include_Us = "    -24"; // ignores the whitespace before the integer.
console.log(
  parseInt(num),
  parseInt(integer),
  parseInt(decimals),
  parseInt(notFirst),
  parseInt(include_Us)
);
//🔥 12 5 1 NaN -24

// We created a function that takes in a string (as an argument) and returns the first integer. It uses the parseInt () method for the conversation.
function toInteger(stringParam) {
  return parseInt(stringParam);
}
let converted = toInteger("45 22");
console.log(typeof converted, converted); //🔥 number 45

//* parseInt function with a radix parameter.
// The parseInt () method can also be used with a radix. parseInt() takes two arguments, a string and a radix. A radix parameter specifies the number system to use for the numeric string (informs javaScript about the type of number system) before converting into the integer. Such as a number with base 2 would be binary, 8 => octal, 10 => decimal, and 16 => hexadecimal. If the radix is omitted, JavaScript assumes radix 10 by default i.e, decimal number system. If the value begins with '0x', JavaScript assumes radix 16.
//⚠️ Remember, it doesn't convert the integer into another number system but informs it to which number system it belongs.

// In the below example, parseInt method converts the value of hexadecimal number into an integer
let hex = "7c";
console.log(parseInt(hex, 16)); //🔥 124

// Converting a binary number to an integer with a function.
function withRadix(radixParam) {
  return parseInt(radixParam, 2);
}
console.log(withRadix("10011")); //🔥 19

// For floats, we have parseFloat() method.
const floats = "01.123";
console.log(parseFloat(floats)); //🔥 1.123

//💡 Template literals
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
// With template literals, you can use both single and double quotes inside a string.
// With literals we can write a string in multiple lines.
//* with template literals we don't need to use '+' operator for concatenation instead we use ${placeholder} syntax. This is called string interpolation. whatever is in the curly braces is taken as an expression and is computed before returning the final value. We can place any expression inside the ${} in a template literal string.
const recipient = "James";
const sender = "John";
const template = `
        Hey ${recipient}! 
        How is it going? 
        Hey! ${sender} I'm doing pretty well 
        How about you? 
        What's been happening on your end?`;

// example 1.
let num1 = 2;
let num2 = 4;
const sum = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(sum); //🔥 The sum of 2 and 4 is 6

// example 2.
let username = "Bob";
let greeting = `Hello, ${username.toUpperCase()}!`; //🔥 Hello, BOB!

// The value of the expression inside the ${} is converted to a string and inserted into the template literal
// example 3.
let today = new Date();
let date = `Today is ${today.toLocaleDateString()}`; //🔥 Today is 12/29/2021
