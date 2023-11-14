/* In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true.
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/
// if statements are used to make decisions in code. The 'if' keyword tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
// This function returns the string "It was true" if we pass true or "It was false" if we pass false. If the argument passed to the function evaluates to true, the if block is executed and "It was true" is returned. If the argument evaluates to false, the if block is not executed and "It was false" is returned because that is what the function is returning. If we call the function without any arguments, "It was false" will be returned..

// voting eligibility using comparison operators...
// If else statement checks if the first condition is true or false. If it's true it will execute the codeblock underneath. Suppose in the below example if we had placed the third statement i.e., (else if (userAge >= 18)) at second place. Then assigning userAge to 91 would have returned "Please cast your Vote", which we don't want to. Here it checked if 91 is greater than 18 or not, which is true. It executed its codeblock without checking the below condition. So, Order matters in if else statements.
let userAge = 18;
if (userAge < 18) {
  console.log("Thanks for showing your interest! you're too young to vote.");
} else if (userAge >= 91) {
  console.log("Sorry! you are not allowed to vote.");
} else if (userAge >= 18) {
  console.log("Please cast your Vote.");
} else {
  console.log("Please enter your age in number.");
}

// we can use return statements in if else. example 1.
function test(num) {
  if (num > 0) {
    return "Positive number";
  } else {
    return "Negative number";
  }
}
// example 2.
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
// example 3.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

//💡 nested if else
if (num > 5) {
  if (num < 10) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
// will only return 'Yes' if num is greater than 5 and less than 10.

// example 1.
if (condition1) {
  // code to execute if condition1 is true
  if (condition2) {
    // code to execute if condition2 is true
  } else {
    // code to execute if condition2 is false
  }
} else {
  // code to execute if condition1 is false
}

// example 2.
if (condition1) {
  // code to execute if condition1 is true
  if (condition2) {
    // code to execute if condition2 is true
    if (condition3) {
      // code to execute if condition3 is true
      if (condition4) {
        // code to execute if condition4 is true
      } else {
        // code to execute if condition4 is false
      }
    } else {
      // code to execute if condition3 is false
    }
  } else {
    // code to execute if condition2 is false
  }
} else {
  // code to execute if condition1 is false
}

// example 3.
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition1 is false and condition2 is true
  if (condition3) {
    // code to execute if condition3 is true
    if (condition4) {
      // code to execute if condition4 is true
    } else {
      // code to execute if condition4 is false
    }
  } else {
    // code to execute if condition3 is false
  }
} else {
  // code to execute if all conditions are false
}

//💡 Order is important in if else statements.
// The function is executed from top to bottom so we should be careful of what statement should come first.
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

// the second just switches the order of the statements:
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
// While these two functions look nearly identical but if we pass a value to both we get different outputs.
foo(0);
bar(0);

//💡 switch statement
// The switch statement is used to perform different actions based on different conditions.

// Use the switch statement to select one of many code blocks to be executed. If you have many options to choose from, use a switch statement.
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// The value of case can be a variable value, string, number or comparison expression.
// 'break' keyword is used to break out of the switch statement as soon as it matches the corresponding case without having to look for other cases. If we don't use this it will always throw the last case and run the code for every case below the matched case.
// 'default' acts as an else statement i.e., if we pass any unmatched value or an invalid value it will throw the default statement.
// Remember, switch statement uses strict equality i.e., it takes into consideration the type as well as the actual value.

let variableCondition = "c";
switch (variableCondition) {
  case "a":
    variableCondition = "apple";
    break;
  case "b":
    variableCondition = "mango";
    break;
  case "c":
    variableCondition = "grapes";
    break;
  case "d":
    variableCondition = "orange";
    break;
  default:
    variableCondition = "please enter a valid value";
}
console.log(variableCondition);

// The default case does not have to be the last case in a switch block. We can place it in the first statement.
// If default is not the last case in the switch block, remember to end the default case with 'break'.
let fruits = 1;
switch (fruits) {
  default:
    fruits = "please enter a valid value";
    break;
  case "a":
    fruits = "apple";
    break;
  case "b":
    fruits = "mango";
    break;
  case "c":
    fruits = "grapes";
    break;
  case "d":
    fruits = "orange";
}
console.log(fruits);

// Here we wrapped the switch statement in a function. We are checking the multiple possible values for a local variable "val". We created an empty variable 'answer' inside the function. The 'val' is checked in all the cases and at every case we have assigned the desired value to the variable 'answer' and then this variable answer is returned when we call the function. Since the function and switch use the same parameter (val) therefore the argument passed to the function will match the appropriate case and run the code block of that case.

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "not a valid entry";
  }
  return answer;
}
console.log(caseInSwitch(1));

// Sometimes we can have the same output for the multiple cases. This can be achieved by using multiple cases and placing the break keyword after the last case.
function operatingSystem(parameter) {
  let OS = "";
  switch (parameter) {
    case "Samsung":
    case "OnePlus":
    case "Oppo":
    case "Xiaomi":
      OS = "Android";
      break;
    case "iPhone":
    case "iPhone 13":
    case "iPhone 14":
      OS = "iOS";
      break;
    case "dell":
    case "hp":
    case "Asus":
      OS = "Windows";
      break;
    default:
      OS = "Please provide a valid input";
  }
  return OS;
}
console.log(operatingSystem("hp"));

// If multiple cases match the switch expression, the first case is executed.
let result = "a";
switch (result) {
  case "a":
    result = "apple";
    break;
  case "a":
    result = "mango";
    break;
  case "a":
    result = "grapes";
    break;
  case "a":
    result = "orange";
    break;
  default:
    result = "default value";
}
console.log(result);

// If the switch expression doesn't match with any case and no default is present, code block will not run.
let noDefault = 1;
switch (noDefault) {
  case "a":
    noDefault = "apple";
    break;
  case "b":
    noDefault = "mango";
    break;
  case "c":
    noDefault = "grapes";
    break;
  case "d":
    noDefault = "orange";
}
console.log(noDefault);

// If you want to use expressions as case conditions in a switch statement, you should use switch (true) to enable comparisons based on the truthiness of the expressions. When you use switch (true), each case expression is evaluated as a Boolean expression, and the first case whose expression evaluates to true will be executed.
function getTime(para) {
  let greet;
  switch (true) {
    case para >= 6 && para < 12:
      greet = "Good morning";
      break;
    case para >= 12 && para <= 15:
      greet = "Good afternoon";
      break;
    default:
      greet = "Good evening";
  }
  return greet;
}
console.log(getTime(12));

// Another Example:
let percentage;
let marks = 399;
switch (true) {
  case marks == 200:
  case marks <= 299:
    percentage = "poor";
    break;
  case marks == 300:
  case marks <= 399:
    percentage = "average";
    break;
  case marks == 400:
  case marks <= 459:
    percentage = "good";
    break;
  case marks == 460:
  case marks <= 500:
    percentage = "excellent";
    break;
  default:
    marks = "please enter within appropriate range";
}
