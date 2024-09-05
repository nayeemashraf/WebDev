//💡 Alternative syntax for control structures
<!-- PHP offers an alternative syntax for some of its control structures such as: if, while, for, foreach, and switch. -->
<?php if ($a == 5) : ?>
    A is equal to 5
<?php endif; ?>

<!-- The following is an if structure with elseif and else in the alternative format: -->
<?php if ($a == 5) : ?>
    <strong>a equals 5</strong>
<?php elseif ($a == 6) : ?>
    <strong>a equals 6</strong>
<?php else : ?>
    <strong>a is neither 5 nor 6</strong>
<?php endif; ?>

<?php
// In PHP, both 'break' and 'continue' keywords can optionally accept an integer argument.
// This argument specifies the number of nested loops to break out of or continue with.
// If no argument is provided, they only affect the innermost loop. By default, it is set to 1 implicitly.

// break n; breaks out of n levels of nested loops.
// In the below example, when 'j' will be 4, it will break out of 2 levels of loops in this case the inner loop and the main outer loop. However, if we didn't pass the optional argument and just went with the default one which is 1, then only the inner loop will break when j == 4 and we will still be left with the outer loop which will echo out the letters 'a' to 'd'.

for ($i = 'a'; $i < 'e'; $i++) {
    echo "\n$i ";

    for ($j = 0; $j < 5; $j++) {
        if ($j == 4) {
            break 2; // This breaks out of both the inner and outer loops when $j is 4
        }
        echo "$j ";
    }
}
// When used with a numeric argument (e.g., break n), it terminates n levels of enclosing loops.
// Output with break 2
//🔥 a 0 1 2 3

// When used without an argument, break terminates the innermost loop it is in.
// Output without optional argument to break keyword.
//🔥 a 0 1 2 3 
//🔥 b 0 1 2 3 
//🔥 c 0 1 2 3 
//🔥 d 0 1 2 3 

// continue n; skips to the beginning of the nth enclosing loop.
// When used with the optional numeric argument (e.g., continue n), it continues with the next iteration of the n levels of enclosing loops.
for ($i = 'a'; $i < 'e'; $i++) {
    echo "\n$i ";
    for ($j = 0; $j < 5; $j++) {
        if ($j == 2) {
            continue 2;
            // This skips the rest of the inner loop and moves to the next outer loop iteration when $j is 2
        }
        echo "$j ";
    }
}
// Output with continue 2
//🔥 a 0 1 
//🔥 b 0 1 
//🔥 c 0 1 
//🔥 d 0 1 

// Output without optional argument to the 'continue' keyword
//🔥 a 0 1 3 4 
//🔥 b 0 1 3 4 
//🔥 c 0 1 3 4 
//🔥 d 0 1 3 4 

//💡 we can directly loop through the characters of a string
$myString = "Hello world!";

for ($i = 0; $i < strlen($myString); $i++) {
    echo $myString[$i] . "<br>";  // Output each character on a new line
}

//💡 multiple expressions
// The parentheses can contain multiple expressions separated by comma in a for loop. The semi-colon ; determines the end of an expression in a loop. Here, "print $i, $i++" is considered as one of the expression.
for ($i = 0; $i < 5; print $i, $i++) {
    # code...
}
// It will print the numbers from 0-4.

// calling conditional expression (count($anyVar) or strlen($anyVar)) in a loop has some performance issues:
//⚡ As you know conditional expressions run at the beginning of each iteration, calling it 4 - 10 times is not that big of a deal but in the cases where our array might be too big or our function call might be expensive this might cause some performance issues and it is always a good practice to not make any unnecessary computations or function calls. The solution to this is to store the result of the expression in a variable, ensuring it's computed only once and subsequently use that variable.

// Case 1.
// Instead of evaluating the length of the array on each iteration, we can get this at once and assign that to a variable and then use that variable in the loop.
$text = ['a', 'b', 'c', 'd'];
$length = count($text);
for ($i = 0; $i < $length; $i++) {
    echo $text[$i] . '<br>';
}

// Or we could define that variable (responsible for getting the array length) within the first expression of the loop and as you know the first expression only runs the first time so the count will only be called once. Here, "$i = 0, $length = count($text);" is considered one expression because a semi-colon determines the end of the expression not the comma.
for ($i = 0, $length = count($text); $i < $length; $i++) {
    echo $text[$i] . '<br>';
}

// Case 2:
// In this example, the x() function is called three times, as evident from the three "Done" echo outputs.
function x()
{
    echo "Done <br>";
    return 3;
}

if (x() === 1) {
    echo (1);
} else if (x() === 2) {
    echo (2);
} else if (x() === 3) {
    echo (3);
} else {
    echo (4);
}

// To tackle this, we can store the function return in a variable and then use that variable, that way the x() function is only called once.
$y = x();
if ($y === 1) {
    echo (1);
} else if ($y === 2) {
    echo (2);
} else if ($y === 3) {
    echo (3);
} else {
    echo (4);
}

//💡 foreach loop is used to iterate over arrays and objects
$programmingLanguages = ['php', 'java', 'c++', 'go', 'rust'];

// On each iteration, the current element of the array is assigned to the second variable. Here it is the $language variable.
foreach ($programmingLanguages as $language) {
    echo $language . '<br>';
}
//🔥 php
//🔥 java
//🔥 c++
//🔥 go
//🔥 rust

// Array variable within the foreach loop is not destroyed in this case the 'language' variable will remain after the foreach loop is complete.
echo $language; //🔥 rust
// you can see we were able to get the 'language' variable outside of the foreach loop. It is the reference to the last item of the array.

// we can access the keys of the array elements by using a variable followed by the arrow assignment symbol => and to access their corresponding values, we use another variable. If we use it on an indexed arrays, the keys would be the index numbers. So, this would be 0 1 2 3 and 4.
foreach ($programmingLanguages as $key => $language) {
    echo $key . ': ' . $language . '<br>';
}

//🔥 0: php
//🔥 1: java
//🔥 2: c++
//🔥 3: go
//🔥 4: rust

//💡 pass by reference
// By default, the current element of the array is assigned by value. However, we can assign it by reference by adding the '&' symbol before the variable and this basically just assigns the value of the current element by reference which means that if you modify this, it will actually modify the original array.

// For example we can set the $language to php
foreach ($programmingLanguages as $key => &$language) {
    $language = 'php';
}
print_r($programmingLanguages);
//🔥 Array ( [0] => php [1] => php [2] => php [3] => php [4] => php )

// Now, all elements are 'php'. If we don't do it by reference and we do it by value, the original array is not changed.

$programmingLanguages = ['php', 'java', 'c++', 'go', 'rust'];
// As we know the array variable isn't destroyed after the foreach loop has finished which means that if you decided to use this variable somewhere else or you made a typo and you use this variable instead of another variable this could cause some issues in your code especially when you're working with the references so when you're working with something like this:
foreach ($programmingLanguages as $key => &$language) {
    # code...
}

// If we update this '$language' variable and then check the programmingLanguages array, you'll see that the last item gets changed to 'C#'. The last item was 'rust' and now it got changed to 'C#' because this $language variable is still the reference to the last element in the array.
$language = 'C#';
print_r($programmingLanguages);

// In such cases if you decide to use the reference, after foreach loop just destroy the variable using the 'unset' method and this will no longer overwrite anything in the original array in our case 'programmingLanguages'
foreach ($programmingLanguages as $key => &$language) {
    # code...
}
unset($language);

// Now, if we change the $language to 'C#', it doesn't update the array element, we see the last element is unchanged.
$language = 'C#';
print_r($programmingLanguages);

//💡 Switch statement
// The switch statement executes line by line but it only starts executing line by line after it finds the matching case i.e., none of the blocks get executed if no matching case is found. As soon as one of the case passes the check then it starts executing statements line by line until the end of the switch block or until the first break statement. The execution is stopped as soon as one of the case matches the expression.
// It allows us to compare the same expression with the multiple different values and run different parts of code based on which value matches the given expression.
// The default case is not optional.
// Remember, in php, the switch statement performs the loose comparison, i.e., it uses loose equality (==). It performs type coercion (conversion) before comparing.

$x = "1";
switch ($x) {
    case 1:
        echo "This case will be executed.";
        break;
    case "1":
        echo "This case will also be executed.";
        break;
    default:
        echo "This is the default case.";
}

// break statement only breaks out of the switch statement.
// In this example, this line is executed: echo "<br>"; adding the line break after each matching case.
$paymentStatuses = [1, 2, 0];
foreach ($paymentStatuses as $paymentStatus) {
    switch ($paymentStatus) {
        case 1:
            echo "paid";
            break;
        case 2:
            echo "payment declined";
            break;
        case 0:
            echo "payment pending";
            break;
        default:
            echo "This is the default case.";
    }
    echo "<br>";
}

// As we know in php, the 'break' keyword takes the optional integer and if you wanted to break out of the loop you could do that by specifying the optional argument here to tell php how many levels you want to break out of.
// Here it will break out of both switch statement and the foreach loop as soon as case 1 is matched.
foreach ($paymentStatuses as $paymentStatus) {
    switch ($paymentStatus) {
        case 1:
            echo "paid";
            break 2;
        case 2:
            echo "payment declined";
            break;
        case 0:
            echo "payment pending";
            break;
        default:
            echo "This is the default case.";
    }
    echo "<br>";
}

// Similarly, we can use the continue keyword with an optional argument which will skip out of the both switch statement and the foreach loop iteration for the current element.

//💡 Switch Vs. if else
// The main difference between the two is that the expression within the switch statement is executed once while the expression within the if else conditional statements are executed for each statement. Overall the switch statement is slightly faster than the if else but it's negligible.

//💡 match expression
// Introduced in php 8, will not work in previous versions. match expression is quite similar to switch statement.
// The expression is passed into the parentheses same way as in switch statement. Within the curly braces, we provide the key-value pairs, separated by comma. Where key is the single conditional expression and the value is the return expression. The return expression can be any kind of expression such as a function that returns a value and so on. The value of the match expression is compared with the each key.
$paymentStatus = 1;
match ($paymentStatus) {
    1 => 'Paid',
    2 => 'Payment Declined',
    0 => 'Pending Payment'
};

// Similar to switch statement we can use multiple cases by separating them with commas. It works the same as OR condition i.e., if the match expression is either 2 or 3 then return 'Payment Declined'.
match ($paymentStatus) {
    1 => 'Paid',
    2, 3 => 'Payment Declined',
    0 => 'Pending Payment'
};

// In a match expression, both the keys (the values being matched) and the values (the results associated with the matches) can be expressions, as long as they evaluate to a single value. This flexibility allows you to use complex expressions, function calls, logical operators, or conditional expressions on both sides.
match ($paymentStatus) {
    getPaymentStatus() => 'Paid',
    3 => $someVariable ?: 'Payment Declined',
    $h ? $k : $l => 'Post Payment',
    0 => $paymentStatus === 0 ? 'Pending Payment' : 'No Status',
    ($x === $y) || ($z ? $n : $m) => 'NO Payment',
};

// However, the keys are expected to be simple literals, and complex expressions are not recommended directly in the keys. The keys must be constant values, such as integers, strings, or other literal values. If you need to use complex expressions for matching, you should compute the value first and then use the result in the match expression.
function getPaymentStatus()
{
    return 2;
}

$paymentStatusValue = getPaymentStatus();

match ($paymentStatusValue) {
    1 => 'Paid',
    2 => 'Payment Declined',
    0 => 'Pending Payment',
    default => 'Unknown'
};

//💡 match expression Vs. Switch statement.
// the main difference between switch statement and match expression is that the match expression is an expression that evaluates to a value and therefore it can be assigned to a variable, while the switch statement is a control flow statement that does not evaluate to a value.

// match expression will return whatever the return expression is and assign that to $paymentStatusDisplay. Since $paymentStatus is 1, it matches the first case (1 => 'Paid') so, first key's value will be returned. Therefore, 'Paid' will be assigned to $paymentStatusDisplay.

// Note: the match expression returns the matched value, not the result of the code block executed for the match. 
$paymentStatusDisplay = match ($paymentStatus) {
    1 => 'Paid',
    2 => 'Payment Declined',
    0 => 'Pending Payment'
};
echo $paymentStatusDisplay;

// Here are some of the key differences between switch statement and match expression:

// 1. Break statement: Break statement is not required in match expression, while it is required in switch statement to avoid unexpected results. Match expression does not fall through to other cases once a match is found, while switch statement falls through to other cases if there is no break statement.

// 2. Comparison: Match expression does strict comparison, while switch statement does loose comparison.

// 3. Default case: Match expression requires an exhaustive set of cases and will result in an error if all possible cases are not specified, while switch statement requires a default case to handle cases that are not found. However, if we don't specify all the possible cases then we have to specify the default case in match expression.
$paymentStatus = 5;
$paymentStatusDisplay = match ($paymentStatus) {
    1 => 'Paid',
    2 => 'Payment Declined',
    0 => 'Pending Payment',
    default => 'Unknown Payment Status'
};
echo $paymentStatusDisplay;

// 4. Multiple statements: In switch statement we can easily have multiple statements for the case blocks that wil be executed when a specific case is matched. To do the same in the match expression, we need to extract those blocks in a function and then use that function as the return value.
function some()
{
    $x = 'statement 1';
    $y = function () {
        return 'statement 2';
    };
    return $x . " " . $y();
}
$paymentStatusDisplay = match ($paymentStatus) {
    1 => some(),
    2 => 'Payment Declined',
    0 => 'Pending Payment',
    default => 'Unknown Payment Status'
};

// Here are some examples of how the difference between switch statement and match expression can be used:
// If you need to assign the result of a comparison to a variable, you can use a match expression.
// If you want to avoid using break statements, you can use a match expression.
// If you need to handle all possible cases explicitly, you can use a match expression.

//💡 return
// The return statement can also be used in the global scope, outside of any function. In this case, it will end the execution of the script and return the value of the expression (if specified any) or null (implicitly).
// return
// or
// return anyFun();

//💡 strict type
// The strict_types directive can be used to enable or disable strict mode for type declarations, such as declare(strict_types=1).
// The strict_types directive can be useful for improving the reliability and security of the code, as it can prevent unexpected type conversions and errors.
declare(strict_types=1);

// NOTE: If we use the strict type in a file and then require/include that file in another file, it doesn't automatically apply strict type in another file, we need to explicitly add strict type in there as well.

//💡 Sometimes we may want to capture the contents of a file into a string, we can do that using PHP Output Control Functions.
// This code is used to capture the output of the file.php script and store it in the $x variable, without sending it to the browser. This technique is called output buffering.
// Output buffering is useful when you want to manipulate or process the output of a script before displaying it, or when you want to use the output for other purposes, such as sending it as an email message body.
ob_start();
include 'file.php';
$x = ob_get_clean();
var_dump($x);   //$x now holds the contents of the 'file.php' file as a string. Now, we can do the string operations to it and then render the output accordingly. Example, str_replace('About', 'About Us', $x)

// The code works as follows:
// ob_start(); starts a new output buffer and turns on output buffering. This means that any subsequent output (code) from the script will be stored in the buffer, instead of being sent to the browser.

// include 'file.php';  Includes the contents of file.php into the current script. This effectively executes the code within file.php as if it were part of the current file.

// $x = ob_get_clean(); gets the contents of the output buffer and assigns it to the $x variable. It also deletes the buffer and turns off output buffering. This means that the output of the file.php script is now stored in the $x variable, and no output has been sent to the browser. The $x variable can then be used for further processing or manipulation.

// Common Use Cases:
// Manipulating Output: Capture output for modifications (e.g., adding a header, footer, or search-and-replace operations) before sending it to the browser.
// Storing Output for Later Use: Save generated content for email templates, file downloads, or other purposes.
// Controlling Output Timing: Delay output until specific conditions are met, enabling dynamic content generation or page redirects.
// Preventing Unwanted Output: Suppress output from included files or functions for cleaner code or to avoid conflicts.
?>