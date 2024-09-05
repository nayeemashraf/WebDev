<?php
//💡 1. Indexed array:
// There are two ways to create arrays:
$cars = array("Volvo", "BMW", "Toyota");
// OR
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";

// OR in one line:
$cars = ["Volvo", "BMW", "Toyota"];
echo $cars[0] . '<br>';

// Getting the array length. The same method is used to get the length in an associative array.
echo count($cars) . '<br>';

// Pushing a new item into the array.
$cars[] = 'Hyundai';

// looping over an indexed array.
for ($i = 0; $i < count($cars); $i++) {
    echo '<a href="https://www.example.com" target="_blank">' . $cars[$i] . '</a> <br>';
}

//💡 2. Associative array:
// Associative arrays are arrays that use named keys that you assign to them.
// Associative arrays are like key-value pairs.
// There are two ways to create an associative array:
$age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
// OR
$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";

// OR in one line:
$age = ["Peter" => "35", "Ben" => "37", "Joe" => "43"];

// the => syntax is used to create key-value pairs in an associative array
// the => syntax is used to associate a key (on the left side of =>) with a value (on the right side of =>) within an associative array.

// Accessing values from associative array:
echo "Peter is " . $age['Peter'] . " years old.";

echo "<br>";

// Modifying an existing item.
$age['Peter'] = '33';

// Pushing a new item into an associative array.
$age['Alex'] = '25';

// OR
$key = 'Shaun';
$value = '22';
$age[$key] = $value;

// Nested Associative array:
$dummyBooks = [
    [
        'name' => 'Do Androids Dream of Electric Sheep',
        'author' => 'Philip K. Dick',
        'purchaseUrl' => 'https://example.com',
        'releaseYear' => '2007'
    ],
    [
        'name' => 'Project Hail Mary',
        'author' => 'Andy Weir',
        'purchaseUrl' => 'https://example.com',
        'releaseYear' => '2020'
    ],
    [
        'name' => 'The Martian',
        'author' => 'Andy Weir',
        'releaseYear' => '2011',
        'purchaseUrl' => 'https://example.com'
    ],
    [
        'name' => 'Project Fire',
        'author' => 'Muller Nerd',
        'purchaseUrl' => 'https://example.com',
        'releaseYear' => '1990'
    ],
    [
        'name' => 'Goland Treasure',
        'author' => 'Samuel Fueir',
        'purchaseUrl' => 'https://example.com',
        'releaseYear' => '1960'
    ],
];

// Accessing values from a nested associative array.
$name = $dummyBooks[0]['name'];
echo $name;

?>
<!-- looping over an Associative array -->
<ul>
    <!-- here on each iteration, $book is the individual associative array -->
    <?php foreach ($dummyBooks as $book) : ?>
        <li>
            <a href="<?= $book['purchaseUrl'] ?>">
                <?= $book['name'] ?> (<?= $book['releaseYear'] ?>)
            </a>
        </li>
    <?php endforeach; ?>
</ul>

<?php
//💡 looping over this structure
$product = [
    'specifications' => [
        'brand' => 'Sample Brand',
        'model' => 'Model XYZ',
        'weight' => '1.5 kg',
    ],
    'description' => [
        'product_id' => 1,
        'name' => 'Example Product',
        'description' => 'This is a sample product description.',
        'price' => 19.99,
        'category' => 'Electronics',
    ],
    'dimensions' => [
        'length' => '10 inches',
        'width' => '5 inches',
        'height' => '2 inches'
    ],
    'Rating' => 8.5,
    'isLive' => true,
    [
        'Manufacturer' => 'OffComm',
        'Product Dimensions' => '8.6 x 6.2 x 3 cm;',
        'Mounting Hardware' => 'UV Filter'
    ],
];

// The outer foreach loop iterates through each key-value pair in the $product array. For each iteration, the variable $key represents the key (e.g., 'specifications', 'description', or 'dimensions'), and $value represents the associated value (which can be an array or a scalar value).
foreach ($product as $key => $value) {
    // $product is an array that you want to iterate over.
    // $key represents the key of the current element (key-value pair) in the array.
    // $value represents the value of the current element (key-value pair) in the array.
    // If statement checks if the current $value is an array using the is_array function. If it's an array, it means that it contains further key-value pairs to be extracted.
    if (is_array($value)) {
        foreach ($value as $subKey => $subValue) {
            echo "$subKey: $subValue <br>";
        }
        // If the $value is not an array (i.e., it's a scalar value), we simply echo the current key ($key) and its associated value ($value)
    } else {
        echo "$key: $value <br>";
    }
};

// looping over an associative array with value being the indexed array
$user = [
    'name' => 'Gio',
    'email' => 'gio@email.com',
    'skills' => ['php', 'graphql', 'react'],
];

// first outer foreach loop runs, echoing out all the keys from $user array. Then if statement checks if the value of any key is an array if so then we run the inner loop, getting each element in the $skill variable and echo out them. If the value isn't an array, else statement from the outer loop echoes out the corresponding value of each key.
foreach ($user as $key => $value) {
    echo $key . ': ';

    if (is_array($value)) {
        foreach ($value as $skill) {
            echo $skill . ' - ';
        }
    } else {
        echo $value;
    }

    echo "<br />";
}
//🔥 name: Gio
//🔥 email: gio@email.com
//🔥 skills: php - graphql - react -

// We can also get the key-value pair from this structure by using the implode() method together with the is_array method.
foreach ($user as $key => $value) {
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    echo $key . ': ' . $value . "<br />";
}

// looping over a specific sub-array in an associative array:
$business = [
    'name' => 'AcTech',
    'net worth' => '$200 billion',
    'categories' => ['Tech', 'consumer electronics', 'telecommunications']
];

foreach ($business['categories'] as $category) {
    echo $category . '<br>';
}
?>

<!-- //💡 Real examples -->
<!-- using conditional to filter books by author -->
<?php
function filterByAuthor($books, $author)
{
    $filteredbooks = [];
    foreach ($books as $book) {
        if ($book['author'] === $author) {
            // This line pushes the associative arrays to the filteredbooks array, if the 'author' key of the current book matches the author, passed as an argument to the filterByAuthor function.
            $filteredbooks[] = $book;
        }
    }

    return $filteredbooks;
}
?>


<ul>
    <?php foreach (filterByAuthor($dummyBooks, 'Philip K. Dick') as $book) : ?>
        <li>
            <a href="<?= $book['purchaseUrl'] ?>">
                <?= $book['name']; ?> (<?= $book['releaseYear']; ?>) - By <?= $book['author']; ?>
            </a>
        </li>
    <?php endforeach; ?>
</ul>

<?php

// To make the function more flexible and generic we will use the generic names for our variables and separate the use-case logic, in our case it is filtering Books by author or the release year.
// Higher order function Example:
function filter($items, $fn)
{
    $filteredItems = [];
    foreach ($items as $item) {
        // $fn parameter will be replaced by the callback function, received as an argument when the filter function is called.
        // At this line: if ($fn($item)), we are calling the anonymous function as a callback with $item being the argument passed to it. On each iteration, the value of $item will be the sub-array of the Books array.  
        // The value of $fn($item) will be as: false, false, true, true, false on each iteration, respectively.
        if ($fn($item)) {
            $filteredItems[] = $item;
        }
    }
    return $filteredItems;
}
/*
The filter function iterates over each element of the $dummyBooks array.
For each element in $dummyBooks, it calls the callback function provided as the second argument.
If the callback function returns true for a particular book, indicating that it meets the filtering condition, the book is added to the $filteredItems array.
Once all books have been processed, the filter function returns the $filteredItems array.
This returned array is then assigned to the variable $filteredBooks.
*/
// We can define an anonymous inline function and pass it directly as an argument to the filter function. Use this inline method when we don't need to reuse the anonymous function elsewhere.
$filteredBooks = filter($dummyBooks, function ($book) {
    // filter by releaseYear
    return $book['releaseYear'] < 2000;
    // filter by author
    // return $book['author'] === 'Andy Weir';
});

// OR
// We can also define an anonymous function and assign it to a variable and then pass it as an argument to the filter function.
$callBackFunction = function ($book) {
    return $book['releaseYear'] < 2000;
};

$filteredBooks = filter($dummyBooks, $callBackFunction);


//💡 We can achieve the same result with built-in array filter function.
$filteredBooks = array_filter($dummyBooks, function ($book) {
    return $book['author'] === 'Philip K. Dick';
});
?>

<ul>
    Refactored version:
    <?php foreach ($filteredBooks as $book) : ?>
        <li> <a href="<?= $book['purchaseUrl'] ?>">
                <?= $book['name']; ?> (<?= $book['releaseYear']; ?>) - By <?= $book['author']; ?>
            </a>
        </li>
    <?php endforeach; ?>
</ul>

<?php
//⚡ To view arrays in the browser window for debugging purposes use print_r() function. 
// NOTE: print_r() doesn't explicitly show the 'NULL' value. Instead, it represents the null value by leaving the corresponding key without any value. However, if we use the var_dump(), it provides a more comprehensive view of the variable, including its type and value. Therefore, explicitly shows the null value.
// print_r($array);

$array = array("a" => "red", "b" => null, "c" => "blue");
print_r($array);
//🔥 Array ( [a] => red [b] => [c] => blue )

var_dump($array);
//🔥 array(3) { ["a"]=> string(3) "red" ["b"]=> NULL ["c"]=> string(4) "blue" }

//💡 array_filter()
// The array_filter() function is used to filter the elements of an array using a callback function. The callback function decides which elements should be kept in the filtered array. It takes each element of the array as an argument and returns true if the element should be included in the result, or false if it should be excluded.
$numbers = [1, 2, 3, 4, 5];
// Filter even numbers
$evenNumbers = array_filter($numbers, function ($value) {
    return $value % 2 == 0;
});

print_r($evenNumbers);  // Output: Array ( [1] => 2 [3] => 4 )

// When array_filter() is used without a callback function and if all the elements of the passed array are falsy values, then the whole statement evaluates to false.
$emptyArray = ['a' => '', 'b' => 0, 'c' => []];
if (array_filter($emptyArray)) {
    echo "executed the 'if' block";
} else {
    echo "executed the 'else' block";
}

//💡 array_keys method
// array_keys gets all the keys from an associative array. In case of an indexed array, the keys will be the index no.s. Therefore not useful with an indexed array.
$keys = array_keys($business);
print_r($keys);

//💡 array_values method
// array_values gets all the values from an associative array.
$values = array_values($business);
print_r($values);

//💡 array_key_exists method
// The array_key_exists() function checks an array for a specified key, and returns true if the key exists and false if the key does not exist.
$models = ["Volvo" => "XC90", "BMW" => "X5"];
if (array_key_exists("Volvo", $models)) {
    echo "Key exists!";
} else {
    echo "Key does not exist!";
}

// with associative arrays
$colors = ["a" => "red", "b" => "green", "c" => "blue", "d" => "white"];
$keys = ['a', 'g', 'b', 'd'];
foreach ($keys as $key) {
    if (array_key_exists($key, $colors)) {
        echo "$key : key found <br>";
    } else echo 'NO key found <br>';
}
?>