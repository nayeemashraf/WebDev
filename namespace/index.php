<?php
//💡 namespace
// When you define a function, a constant or a class without a namespace definition, by default they will be put in a global space.
// Namespaces help prevent naming collisions, where two or more classes or functions have the same name, by providing a unique identifier for each code element.
// They allow the same name to be used for more than one class or function.
// Namespaces provide a structured way to organize your code. By grouping related code elements under a namespace, you can easily locate and manage them.

//? Why Namespaces
// Suppose we encounter a situation where we have multiple classes or functions with the same name and we want to include them in a file. In a single file, having two classes or functions with identical names won't work due to conflicts. However, namespaces come to our rescue in such scenarios. By using namespaces, we can include multiple classes or functions with the same name within a single file without causing clashes.

//? How
// We define a namespace by using the namespace keyword followed by a name at the beginning of a file. This namespace can then be included in another file. It's important to note that the namespace keyword should be the first line of code in that file, or after the declare statement like strict type definition if we are using strict mode.

// To use a namespace first, we include the necessary files using the include or require method. 
// In the below we will see three cases:
// Instantiating a class from a namespace.
// Referencing a function in a namespace.
// Instantiating an object in a namespace from another namespace.

include "products.php";
include "services.php";

//💡 We can reference and use elements (classes and functions) located within namespaces in three ways:

// Method 1 - Fully Qualified Name (FQN):
// Directly specifies the full path to the class within the namespace hierarchy.
$obj0 = new \assets\namespace\products\MyClass();

// Method 2 - Importing with use Statement 
// Importing specific element
use assets\namespace\products\MyClass;

$obj1 = new MyClass();

//⚡ Method 3 A) - Namespace Alias
// It can be useful to give a namespace or class or function an alias to make it easier to write.
// Imports a namespace or a specific element, assigning an alias for shorter reference.
// Import entire namespace and give it an alias:
use assets\namespace\services as service;

// accessing the specific element from a namespace
$obj2 = new service\MyClass();

// Method 3 B) - Import specific element
// Imports a single function from a namespace, giving it an alias.
use function assets\namespace\services\hello as ServicesHello;
//⛔ Not recommended to namespace functions or constants and then import them.

//💡 Function with same name
function hello()
{
    echo "Function in Index <br>";
}

// Since we have a function named hello() defined in this file and also in the services.php file, when we call it, it refers to the function in the current file. However, if we need to call the function which is in the services.php file, we can do so by prefixing the namespace name with the function name.
// Calling the hello() function defined inside the index file:
hello();

// calling the hello() function defined inside the services file with Method 1
assets\namespace\services\hello();

// calling the hello() function defined inside the services file with Method 3 B)
ServicesHello();


//💡 Instantiating an object in a namespace from another namespace
// In the below example, we're instantiating an object of a class from one namespace (assets\namespace\services) within the constructor of a class located in another namespace (assets\namespace\products). This demonstrates how we can create an object of a class that belongs to a different namespace in PHP.

use assets\namespace\products\SameClass;

$obj3 = new SameClass();
// For complete understanding Must See 'SameClass' in products.php and in services.php file.


//💡 To Remember;
// A qualified namespace is a namespace that has a prefix, but not a leading backslash. For example, assets\namespace\products is a qualified namespace. 
// A fully qualified namespace is a namespace that has a leading backslash. For example, \assets\namespace\products is a fully qualified namespace.