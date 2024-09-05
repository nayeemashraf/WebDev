<?php
//💡 sum of consecutive pair of numbers in an array
// This uses a single loop to iterate through the array and calculate the sum of each consecutive pair of numbers.
$array = [1, 2, 3, 4, 5];
function sumConsecutiveNum($array)
{
    $lastIndex = count($array) - 1;

    for ($i = 0; $i < $lastIndex; $i++) {
        $sum = $array[$i] + $array[$i + 1];
        echo "The sum of {$array[$i]} and {$array[$i + 1]} is: $sum <br>";
    }
}
sumConsecutiveNum($array);

// Alternate way
for ($i = 0; $i < count($array) - 1; $i++) {
    $currentNumber = $array[$i];
    $nextNumber = $array[$i + 1];
    $sum = $currentNumber + $nextNumber;

    echo "The sum of $currentNumber and $nextNumber is: $sum <br>";
}

//💡 sum of each number with next numbers in the array
// This code uses two nested loops to iterate through all possible pairs of numbers in the array and calculates their sum, printing the result in the specified format. The outer loop iterates over each element, and the inner loop iterates over the elements that come after the current one to avoid duplicate pairs.

for ($i = 0; $i < count($array) - 1; $i++) {

    for ($j = $i + 1; $j < count($array); $j++) {
        $sum = $array[$i] + $array[$j];
        echo "The sum of $array[$i] and $array[$j] is: $sum <br>";
    }
}
