// In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.

//💡 There are two types of type conversion in JavaScript.
// Implicit Conversion - automatic type conversion
// Explicit Conversion - manual type conversion

//💡 JavaScript Implicit Conversion or Type Coercion
// In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

//* Implicit Conversion to String
// String (including numeric) used with (+) operator on any datatype results in 'string type'
let string;
string = 'abc' + true;              console.log(string);    //🔥 "abctrue"
string = false + 'abc';             console.log(string);    //🔥 "falseabc"
string = 'abc' + undefined;         console.log(string);    //🔥 "abcundefined"
string = null + 'abc';              console.log(string);    //🔥 "nullabc"
string = '3' + true;                console.log(string);    //🔥 "3true"
string = '3' + undefined;           console.log(string);    //🔥 "3undefined"
string = null + '3';                console.log(string);    //🔥 "null3"
string = "0" + "one" + 1 + false;   console.log(string);    //🔥 "0one1false"

// When a number is added to a string, JavaScript converts the number to a string before concatenation.
string = '3' + 2;                   console.log(string)     //🔥 "32"

// Note: If the numbers are at the beginning it will do the normal addition then it will concatenate them.
string = 5 + 3 + "3";               console.log(string);    //🔥 "83"

//* Implicit Conversion to Number
// numeric string used with these (- , / , *, %) operators on Numbers results to 'number type'

let numericToNum;
numericToNum = '4' - '2';   console.log(numericToNum);  //🔥 2

numericToNum = '4' - 2;     console.log(numericToNum);  //🔥 2

numericToNum = '4' * 2;     console.log(numericToNum);  //🔥 8

numericToNum = '4' / 2;     console.log(numericToNum);  //🔥 2

// Number (including numeric string) used with any operator accept addition '+' operator on Booleans results to 'Number type'
// Boolean 'true' has a numeric value of 1 and 'false' has a value of 0.

let booleanToNum;
booleanToNum = '4' - true;      console.log(booleanToNum);   //🔥 3

booleanToNum = true + 4;        console.log(booleanToNum);   //🔥 5

booleanToNum = 4 * false;       console.log(booleanToNum);   //🔥 0

booleanToNum = -4 + true;       console.log(booleanToNum);   //🔥 -3

// Note: JavaScript considers 0 as false and all non-zero numbers as true. And, if true is converted to a number, the result is always 1.


// null used the these (+, -, /, *, %) operators on numbers results in 'Number type'
// Note: null is 0 when used with number

let nullToNum;
nullToNum = 4 + null;       console.log(nullToNum);  //🔥 4

nullToNum = 4 * null;       console.log(nullToNum);  //🔥 0


//* Implicit conversion to NaN
// string (excluding numeric to numeric string) used with these (- , / , *, %) operators on any datatype results in 'NaN'.

let stringToNaN;
stringToNaN = 'hello' - 'world';        console.log(stringToNaN);   //🔥 NaN

stringToNaN = '4' * 'hello';            console.log(stringToNaN);   //🔥 NaN

stringToNaN = "hello" * undefined;      console.log(stringToNaN);   //🔥 NaN

stringToNaN = "hello" - true;           console.log(stringToNaN);   //🔥 NaN

stringToNaN = "hello" / null;           console.log(stringToNaN);   //🔥 NaN

stringToNaN = NaN % 'hello';           console.log(stringToNaN);    //🔥 NaN
// Note: NaN by default is number type


// undefined used with these (+, -, /, *, %) operators on number, boolean, null and NaN results in NaN

let toNaN;
toNaN = 4 + undefined;      console.log(toNaN);  //🔥 NaN

toNaN = 4 / undefined;      console.log(toNaN);  //🔥 NaN

toNaN = true + undefined;   console.log(toNaN);  //🔥 NaN

toNaN = null + undefined;   console.log(toNaN);  //🔥 NaN

toNaN = NaN + undefined;   console.log(toNaN);   //🔥 NaN


//💡 JavaScript Explicit Conversion or Type conversion
// You can also convert one data type to another as per your requirement. The type conversion that you do manually is known as explicit type conversion.

// In JavaScript, explicit type conversion is done using built-in methods.

// Here are some common methods of explicit conversions.

//* 1. Explicit conversion to Number
// To convert numeric strings and boolean values to numbers, you can use Number() function.

// numeric string to number
let stringToNum;
stringToNum = Number('324');        console.log(stringToNum); //🔥 324

stringToNum = Number('324e-1');     console.log(stringToNum); //🔥 32.4

// boolean to number
let withBolean;
withBolean = Number(true);   console.log(withBolean); //🔥 1

withBolean = Number(false);  console.log(withBolean); //🔥 0

// In JavaScript, empty strings and null return 0.
let emptyStringandNull;
emptyStringandNull = Number(null);   console.log(emptyStringandNull);  //🔥 0

emptyStringandNull = Number(' ');    console.log(emptyStringandNull);  //🔥 0

// If a string is an invalid number, the result will be NaN.
let invalidNumToNan;
invalidNumToNan = Number('hello');      console.log(invalidNumToNan); //🔥 NaN

invalidNumToNan = Number(undefined);    console.log(invalidNumToNan); //🔥 NaN

invalidNumToNan = Number(NaN);          console.log(invalidNumToNan); //🔥 NaN

// Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor().
let num;
num = parseInt('20.01');        console.log(num); //🔥 20

num = parseFloat('20.01');      console.log(num); //🔥 20.01

num = +'20.01';                 console.log(num); //🔥 20.01

num = Math.floor('20.01');      console.log(num); //🔥 20


//* 2. Explicit conversion to String
// To convert other data types to strings, you can use either String() or toString().
let anyToString;
anyToString = String(324);          console.log(anyToString);  //🔥 "324"

anyToString = String(2 + 4);        console.log(anyToString); //🔥 "6"

anyToString = String(null);         console.log(anyToString); //🔥 "null"

anyToString = String(undefined);    console.log(anyToString); //🔥 "undefined"

anyToString = String(NaN);          console.log(anyToString); //🔥 "NaN"

anyToString = String(true);         console.log(anyToString); //🔥 "true"

anyToString = String(false);        console.log(anyToString); //🔥 "false"

// using toString()
// toString() method can be applied to variables, objects and Booleans in JavaScript but not on string literals.
let notString = 543;
let newString = notString.toString();  console.log(newString); //🔥 "543"

notString = 47;
// We can covert the number into a specific number system by passing the base no. as an argument.
newString = notString.toString(2);  console.log(newString); //🔥 "101111"

// we also use it directly on Booleans to convert them into their string representation.
newString = true.toString();   console.log(newString); //🔥 "true"

// Note: We cannot use toString() with null and undefined.


//* 3. Explicit conversion to Boolean
// To convert other data types to a boolean, you can use Boolean() function.

// In JavaScript, undefined, null, 0, NaN, empty string '', and false converts to false. Or we can say these are falsy values.

let booleanValue;
booleanValue = Boolean ('');         console.log(booleanValue); //🔥 false

booleanValue = Boolean(0);           console.log(booleanValue); //🔥 false

booleanValue = Boolean(undefined);   console.log(booleanValue); //🔥 false

booleanValue = Boolean(null);        console.log(booleanValue); //🔥 false

booleanValue = Boolean(NaN);         console.log(booleanValue); //🔥 false

booleanValue = Boolean(false);       console.log(booleanValue); //🔥 false


// All other values return true or are truthy values.

booleanValue = Boolean(324);         console.log(booleanValue); //🔥 true

booleanValue = Boolean('hello');     console.log(booleanValue); //🔥 true

booleanValue = Boolean(' ');         console.log(booleanValue); //🔥 true

booleanValue = Boolean([]);          console.log(booleanValue); //🔥 true

booleanValue = Boolean({});          console.log(booleanValue); //🔥 true