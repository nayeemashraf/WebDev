<?php
// PHP has three different variable scopes:
// global
// local
// static

//💡 Global Scope:
// Variables declared outside of any function or class have a global scope. They can be accessed from anywhere in the script including an if else statement or loops.
$x = 5; // global scope

// Example 1.
if ($x) {
    echo "<p>Variable 'x' inside the if block is: $x <p>";
}
// Accessing in the global scope
echo "<p>Variable x outside function is: $x</p>";

// Example 2.
$colors = ['red', 'blue', 'beige'];
foreach ($colors as $color) {
    echo "<p>$color</p>";
}

//💡 global keyword
// We cannot use the global variables directly in a function or a method of a class. The 'global' keyword is used to access a global variable from within a function.
$y = 10; // global scope

function myTestGlobal()
{
    global $x, $y; // To access multiple global variables in one line do this.
    $y = $x + $y;
}

myTestGlobal();
echo "<p>$y<p>"; // We updated the global variable $y inside the myTestGlobal function.

// PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to access global variables directly.
function anotherGlobal()
{
    $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

anotherGlobal();
echo "<p>$y<p>"; //🔥 20

//💡 Local Scope:
// Variables declared inside a function have a local scope. They are accessible only within that function.
function localExample()
{
    $localVar = 5;
    echo "<p>$localVar<p>";
}

localExample(); //🔥 5
echo $localVar; // This will result in an error - $localVar is not defined outside the function

// You can have local variables with the same name in different functions, because local variables are only recognized by the function in which they are declared.
// Also, parameters are local to their function, we cannot access them outside the function.

// However, In an if else statement or loops we can access the local variable from outside.
if (true) {
    $w = 4;
}
echo $w;

//💡 Static Scope:
// Normally, when a function is completed/executed, all of its variables are deleted. However, sometimes we want a local variable NOT to be deleted. We need it for further purposes.
// To do this, use the static keyword when you first declare the variable.
// Variables declared as static inside a function retain their value between function calls. They are still local to the function, but their value persists.
function counter()
{
    static $count = 0; //  On subsequent calls, 'count' will not be re-initialized. It retains whatever value it had at the end of the previous function call. So, we can say this line is ignored after the first call.
    echo "<p>$count<p>";
    $count++; // On the second call, it will remember its previous value i.e., 1 and so on.
}

// each time the function is called, 'count' variable will still have the information it contained from the last time the function was called.
counter(); //🔥 0
counter(); //🔥 1
counter(); //🔥 2


//💡 Class Scope:
// Variables declared within a class but outside of any method have a class scope. They are accessible using the self keyword.
class Example
{
    public static $classVar = 20;

    public static function getClassVar()
    {
        return self::$classVar;
    }
}

echo Example::$classVar; // Accessing class variable directly
echo "<br>";
echo Example::getClassVar(); // Accessing class variable via a method
echo "<br>";


//💡 Namespace Scope:
// Variables declared at the namespace level have a namespace scope. They are accessible within that namespace.

// namespace MyNamespace;
// First Place the above line at the top of the script otherwise you will get the Fatal error.

$namespaceVar = 'Hello';

function exampleFunction()
{
    echo $GLOBALS['namespaceVar'];
}

exampleFunction(); //🔥 Hello