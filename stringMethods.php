<?php
// strlen - This function is used to get the length of a string. You can call this function by following the name of the function with the string in parentheses.
$stringLength = strlen("hello world"); //🔥$stringLength will be 12

// strpos - This function is used to find the position of a substring inside a string. The first argument is the string to search, the second argument is the substring to search for.
$position = strpos("hello world", "o"); //🔥 $position will be 4

// str_replace - This function is used to replace a substring with another substring inside a string. The first argument is the string, the second argument is the substring to replace, and the third argument is the substring to replace with.
$newString = str_replace("world", "Daniel", "hello world"); //🔥 $newString will be "hello Daniel"

// strtolower - This function is used to convert all letters in a string to lowercase. You can call this function by following the name of the function with the string in parentheses.
$lowerCaseString = strtolower("HELLO WORLD"); //🔥 $lowerCaseString will be "hello world"

// strtoupper - This function is used to convert all letters in a string to uppercase. You can call this function by following the name of the function with the string in parentheses.
$upperCaseString = strtoupper("hello world"); //🔥 $upperCaseString will be "HELLO WORLD"

// substr - This function is used to extract a part of a string. The first argument is the string, the second argument is the starting index, and the third argument is the length.
$subString = substr("hello world", 2, 2); //🔥 $subString will be "ll"

// explode - This function is used to split a string into an array based on a delimiter. The first argument is the string, and the second argument is the delimiter.
$myArray = explode(" ", "hello world"); //🔥 $myArray will be ["hello", "world"]