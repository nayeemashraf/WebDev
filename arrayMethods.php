<?php
// is_array - This function is used to check if a variable is an array. You can call this function by following the name of the function with the variable in parentheses.
$isArray = is_array($myArray); //🔥 $isArray will be true if $myArray is an array

// array_push - This function is used to add an element to the end of an array. The first argument is the array, and the second argument is the element to add.
array_push($myArray, "kiwi");  //🔥 This will add "kiwi" to the end of $myArray

// array_pop - This function is used to remove the last element from an array.
$removedElement = array_pop($myArray); //🔥 This will remove the last element from $myArray and store it in $removedElement

// array_reverse - This function reverses the order of elements in an array.
$reversedArray = array_reverse($myArray); //🔥 Reverses the order of elements in $myArray and stores the result in $reversedArray (original array is modified)

// array_merge - This function merges the elements of one or more arrays together into a single array.
$mergedArray = array_merge($myArray1, $myArray2); //🔥 Merges elements of $myArray1 and $myArray2 into $mergedArray

// The spread operator (...) (available in PHP 7.4 and later) - This operator allows you to unpack the contents of an array into another array.
$mergedArray = [...$myArray1, ...$myArray2]; //🔥 Merges elements of $myArray1 and $myArray2 into $mergedArray

// array_splice - This function removes an item from the array. The first argument is the array, the second is the starting position, and the third is the end position.
$cars = ["Volvo", "BMW", "Toyota", "Hyundai"];
array_splice($cars, 0, 1); // removing the first item.
print_r($cars); //🔥 Array ( [0] => BMW [1] => Toyota [2] => Hyundai )

// adding an item at a specific index

// array_splice();