//💡 The Math object is a built-in object in JavaScript that has properties and methods for performing mathematical operations. Some of the most commonly used Math object properties and methods are:
// Math.PI: a property that represents the value of pi (approximately 3.14).
console.log(Math.PI); // Outputs: 3.141592653589793

// Math.random(): a method that returns a pseudo-random number between 0 (inclusive), and 1 (exclusive).
console.log(Math.random()); // Outputs: 0.47981281398913334

// Math.round(x): a method that returns the value of a number rounded to the nearest integer.
console.log(Math.round(4.6)); // Outputs: 4  // 4.5 will return 4

// Math.floor(x): a method that returns the number rounded down to its nearest integer.
console.log(Math.floor(7.7)); // Outputs: 7 // floors down the number to its integer part. Basically it ignores the decimal part.
console.log(Math.floor(-5.7)); // Outputs: -6 // because -6 is less than -5.

// Math.ceil(x): a method that returns the smallest integer greater than or equal to a number.
console.log(Math.ceil(6.1)); // Outputs: 7  // rounds up the number to its nearest integer. It's Opposite of floor method.

// Math.trunc(x): a method that returns the integer part of number.
console.log(Math.trunc(6.71)); // Outputs: 6  // drops the decimal part.

// Math.min(x, y, ...): a method that returns the smallest value in a list of arguments.
console.log(Math.min(0, 150, 30, 20, -8, -200)); // Outputs: -200

// Math.max(x, y, ...): a method that returns the largest value in a list of arguments.
console.log(Math.max(0, 150, 30, 20, -8, -200)); // Outputs: 150

// Math.sqrt(x): a method that returns the square root of a number.
console.log(Math.sqrt(64)); // Outputs: 8.

// Math.pow(x, y): a method that returns the result of raising a number to a power.
console.log(Math.pow(4, 2)); // Outputs: 16       //  It's like x raise power x²

// Math.sign(x) a method that returns if x is negative, null or positive.
console.log(Math.sign(-790)); // Outputs: -1  // returns 1 for positive numbers, -1 for negatives and 0 for 0 (exclusive). 0.something returns 1.

// Math.abs(x): a method that returns the absolute value of a number.
console.log(Math.abs(-43)); // Outputs: 43    // The absolute value of a number is its distance from 0.

// Combining both Math.random() and Math.floor together to get a random whole number. First JavaScript will solve the Math.random() * 6 which is inside the bracket because javaScript follows the conventional bodmass. Suppose Math.random returns 0.999, multiplying that with 6 which equals to 5.994 then Math.floor will remove the fractional part after the decimal point and return the number as 5.
// This will generate any number between 0 to 5.
let RandomNumber = Math.floor(Math.random() * 6);
console.log(RandomNumber);

// Generating a random number between 1 to 6.
let testNumber = Math.floor(Math.random() * 6 + 1);
console.log(testNumber);

// Creating a Roll Dice.
function rollDice() {
  let Dice = Math.floor(Math.random() * 6 + 1);
  return Dice;
}
let DiceResult = rollDice();
console.log(DiceResult);

//* Generating a whole number within a certain range using Math.random () and Math.floor () methods with a function.

// In the below example we want to generate a whole number dynamically with a function from 5 to 10. Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). The function then multiplies that value by the difference of ourMax and ourMin + 1, 1 is added so that it includes the number at maximum value (i.e., 10 in this case) and then adds ourMin so that we get a number within the desired range instead of any random number from 0-5. If we don't add ourMin at last, we will only get a random number from 0-5. Finally, Math.floor rounds down to an integer so that we don't end up with decimals or fractions as output for this function's return statement. Suppose we passed 5 and 10 as an argument to ourMin and ourMax parameters respectively.
// let's assume Math.random () gets 0.09. Now evaluate it: Math.floor(0.09 * ((10 - 5 + 1)) + 5
// Math.floor(0.54) + 5 ==>> Math.floor(5.54) = 5.

// It generates random numbers between first and last parameter including them as well.
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
let ourRange = ourRandomRange(5, 10);
console.log(ourRange);

// It generates random numbers within a range starting from 0. It does not allow a custom minimum value, and the maximum value is excluded from the generated range.
function rn(mn, mx) {
  return Math.floor(Math.random() * (mx - mn + 1));
}
