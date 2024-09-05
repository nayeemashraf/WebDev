<?php
//💡 PHP - Overriding Inherited Methods and Properties
// Inherited methods and properties can be overridden by redefining them (using the same name) in the child class. Overriding only happens when the property name or method name are identical in the parent class and the child class.
// OR
// When we have the same property name or same method with same signature in the child class, it is called overriding. The purpose is to change the behaviour of parent class property or method within the child class.

// In the below example, the 'title' property, __construct() and message() methods in the child class (Potato) will override the 'title' property, __construct() and message() methods from the parent class (Vegetable)
class Vegetable
{
    public $title = 'vegetable';
    public $name;
    public $color;
    public function __construct($name, $color)
    {
        $this->name = $name;
        $this->color = $color;
    }
    public function message()
    {
        echo "The vegetable is {$this->name} and the color is {$this->color}.";
    }
}

class Potato extends Vegetable
{
    public $title = 'potato';
    public $weight;
    public function __construct($name, $color, $weight)
    {
        $this->name = $name;
        $this->color = $color;
        $this->weight = $weight;
    }
    public function message()
    {
        echo "The vegetable is {$this->name}, the color is {$this->color}, and the weight is {$this->weight} gram.";
    }
}

$veg1 = new Potato("Potato", "brown", 50);
$veg1->title;   //🔥 potato
$veg1->message(); //🔥 The vegetable is Potato, the color is brown, and the weight is 50 gram.

//⚡ When we override inherited methods (including constructor) from the derived class in PHP, it does not modify the parent class methods. The overridden method in the child class creates a new implementation, separate from the method in the parent class.

$veg = new Vegetable("Carrot", "red");
$veg1->title;   //🔥 vegetable
$veg->message(); //🔥 The vegetable is Carrot and the color is red.

// NOTE: For overriding to occur, the child class method must have the same method signature i.e., name, number, type of parameters, and return type as the parent class method.

//⚠️ Child classes can introduce new parameters to their constructors, effectively "overloading" them. This is a distinct feature of constructors. In summary, while the concept of method overriding applies to regular methods in PHP, constructors behave slightly differently due to their special role in object instantiation.

//💡 Using the parent constructor inside child class - extending the behaviour of parent class constructor
class User
{
    public $name;
    public $email;
    public $password;

    public function __construct($name, $email, $password)
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
    }
}

// Instantiate a new user
$user1 = new User('Brad', 'brad@gmail.com', '123456');

// Extending User class
// The employee class has its own constructor that takes additional parameter/property ($title) compared to the parent constructor in the 'User' class, while inheriting all the properties and methods from the 'User' class.

// Using parent::__construct() explicitly calls the constructor of the parent class. This ensures that any initialization logic defined there happens first.
// Your child class constructor can then add its own initialization steps using the provided arguments or properties inherited from the parent.

// To use the parent constructor in the child class, we use the parent::__construct() syntax, which calls the __construct() method of the 'User' class and assigns the values of $name, $email, and $password to the 'employee' object. Then, we assign the value of $title to the 'employee' object as well.
class employee extends User
{
    public $title;
    public function __construct($name, $email, $password, $title)
    {
        // Calls the parent constructor to initialize inherited properties.
        parent::__construct($name, $email, $password);
        $this->title = $title;
    }

    public function getTitle()
    {
        return $this->title;
    }
}

$employee1 = new employee('John', 'johndoe@gmail.com', '123456', 'Manager');
echo $employee1->getTitle();


//💡 parent::__construct()

// using parent::__construct() in the child class constructor saves you from rewriting the initialization code for inherited properties of the parent constructor within the child class constructor when you override the parent constructor.

// OR................
// When a child class is created, its constructor is called automatically. If the child class has its own constructor, it overrides the constructor of the parent class. If the child class does not have its own constructor, the constructor of the parent class is called automatically. However, if the child class has its own constructor and you want to call the constructor of the parent class as well, you can use parent::__construct() in the child class constructor to call the constructor of the parent class.

// Why do we need it?

// Without parent::__construct(), you'd have to manually initialize inherited properties in the child class constructor, which can be tedious and repetitive.
// parent::__construct() simplifies inheritance by ensuring all inherited properties are properly initialized according to the parent class's logic.

// When do we use it?

// Always when the child class overrides the parent class constructor and you want to utilize the parent class's initialization steps.
// Even if the child class constructor doesn't directly modify inherited properties, calling parent::__construct() ensures the parent class's logic is executed first.


// We can use the parent:: with any other method apart from the construct method
class Alpha
{
    protected $prop1;
    protected $prop2;
    protected function set($param1, $param2)
    {
        $this->prop1 = $param1;
        $this->prop2 = $param2;
    }
}

class Beta extends Alpha
{
    private $prop0;

    function setter($p1, $p2, $p3)
    {
        parent::set($p1, $p2);
        $this->prop0 = $p3;
    }
    function get()
    {
        return $this->prop0 . ' ' . $this->prop1 . ' ' . $this->prop2;
    }
}

$obj = new Beta();
$obj->setter('p0', 'p1', 'p2');
echo $obj->get(); //🔥 p2 p0 p1

//💡 __destruct()
// In PHP, the __destruct() method is a special method that is automatically called when an object is no longer referenced or when the script ends.
// OR...................
// The __destruct() method is a special function that is automatically called when an object of a class is destroyed or removed from memory.

// Purpose
// It allows you to perform any necessary cleanup before the object is gone, such as closing database connections, releasing resources like file handles, or deleting temporary files. It provides a way to ensure that certain actions are taken before an object is destroyed, helping to manage resources more effectively.

// The __destruct() method has the following characteristics:

// It must be declared as public.
// It must have the name __destruct() with two underscores at the beginning. It cannot have any parameters or return any value.
// It is not necessary to define a __destruct() method for every class. If a class does not have a __destruct() method, PHP will use the default one, which does nothing.
// It is not possible to explicitly call the __destruct() method. It is only invoked by PHP when the object is no longer needed. This can happen when the script ends, when you unset the object, or when the object goes out of scope.

class MyClass
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    // defining the destruct() method inside the class
    public function __destruct()
    {
        // the function body can also be empty
        echo 'Object destroyed!';
    }
}

// Creating an instance of MyClass
$obj = new MyClass('john');

echo $obj->name;

//💡 Object Deletion
// The object is deleted: When we reach the end of the php script or if we use exit() or die() method or when we explicitly unset the object using the unset() function or when an object goes out of the scope.

// OR....................

// An object of a class is destroyed or removed from memory in PHP when it is no longer needed by the script. This can happen in different situations, such as:

// 1. When the php script ends or exits, (such as using exit() or die()) all the objects that were created during the execution are destroyed.

// 2. When you unset an object using the unset() function, the object is removed from memory.
unset($obj);
var_dump($obj);   //🔥 null

// 3. When an object goes out of scope, meaning that it is not accessible anymore by the code. For example, if you create an object inside a function, it will be destroyed when the function returns.
function createObject()
{
    $obj = new MyClass('smith');
    // $obj goes out of scope when the function ends
}

createObject();

//💡 Real application of __destruct() method:
// closing the database connection:
// In this example, the __destruct() method is used to close the database connection when the DatabaseConnection object is being destroyed.
class DatabaseConnection
{
    private $connection;

    public function __construct($host, $username, $password, $database)
    {
        // Connect to the database
        $this->connection = mysqli_connect($host, $username, $password, $database);
        if (!$this->connection) {
            die("Connection failed: " . mysqli_connect_error());
        }
        echo 'Database connection established!';
    }

    public function query($sql)
    {
        // Perform a database query
        $result = mysqli_query($this->connection, $sql);
        return $result;
    }

    public function __destruct()
    {
        // Close the database connection when the object is destroyed
        mysqli_close($this->connection);
        echo 'Database connection closed!';
    }
}

// Create an instance of DatabaseConnection
$db = new DatabaseConnection('localhost', 'username', 'password', 'database');

// Perform some database operations
$result = $db->query("SELECT * FROM users");

// Unset the object (simulate end of script or object going out of scope)
unset($db);


// Releasing File Handles:
// In this example, the __destruct() method is used to close the file handle when the FileHandler object is being destroyed.
class FileHandler
{
    private $fileHandle;

    public function __construct($filename, $mode)
    {
        // Open a file
        $this->fileHandle = fopen($filename, $mode);
        if (!$this->fileHandle) {
            die("Unable to open file!");
        }
        echo 'File opened successfully!';
    }

    public function write($data)
    {
        // Write data to the file
        fwrite($this->fileHandle, $data);
    }

    public function __destruct()
    {
        // Close the file handle when the object is destroyed
        fclose($this->fileHandle);
        echo 'File handle closed!';
    }
}

// Create an instance of FileHandler
$fileHandler = new FileHandler('example.txt', 'w');

// Write some data to the file
$fileHandler->write('Hello, World!');

// Unset the object (simulate end of script or object going out of scope)
unset($fileHandler);


//💡 Static Properties and Methods
// Static properties and methods are used when you want to create properties and methods that don't have to be part of an object.
// Static properties can be called directly - without creating an instance of a class.
// To access a static property or method use the class name, double colon (::), and the property or method name.
// We need to use the dollar symbol $ in front of a static property when defining or accessing it because its a variable associated with a class and not a property of an object.

// A class can have both static and non-static properties. A static property can be accessed from a method (either static or non-static) in the same class using the self keyword and double colon (::)

// In this example, $count is a static property that stores the number of times the increment() method is called. Both increment() and getCount() are static methods that operate on the static property $count. Finally we are resetting the $count property with the resetCounter() static method. These methods can be accessed directly using the class name (Counter::) without needing to create an instance of the class.
class Counter
{
    public static $count = 0;

    public static function increment()
    {
        self::$count++;
    }

    public static function getCount()
    {
        return self::$count;
    }

    public static function resetCounter($i)
    {
        self::$count = $i;
    }
}

Counter::increment(); // Increment the counter
Counter::increment(); // Increment the counter again

echo Counter::getCount(); //🔥 2

echo '<br>';

Counter::resetCounter(0); // resetting the counter
echo Counter::$count; //🔥 0

// To call a static property from a child class, use the parent keyword inside the child class:
class pi
{
    public static $value = 3.14159;
}

class x extends pi
{
    public function xStatic()
    {
        return parent::$value;
    }

    // accessing static properties from regular non-static methods.
    public function getValue()
    {
        return self::$value;
    }
}

// Get value of static property directly via child class
echo x::$value;

// or get value of static property via xStatic() method
$y = new x();
echo $y->xStatic();

// when we create a new object based off this class (x), the static properties and methods are not going to be part of this 'y' object but we can access them by returning them either from a regular method or static method.
echo $y->getValue();

// Purpose of Static properties and methods:
// Shared Data: Static properties allow you to store data that is shared among all instances of a class. This means that the value of a static property is the same across all instances of the class, and any changes made to it will affect all instances.

// Utility Functions: Static methods can be used as utility functions that do not rely on the state of individual objects. They can perform tasks related to the class as a whole, without needing to instantiate an object. This is useful for operations that are independent of any particular instance of the class.

// Global Access: Static properties and methods can be accessed without needing to instantiate an object of the class. They are accessible using the class name itself, making them globally available throughout your application.

// Performance Optimization: Since static methods and properties do not require instantiation, they can provide performance benefits in certain situations. They can be accessed directly without the overhead of creating an object, which may be advantageous for frequently used methods or properties.


//⚡ Prioritise Private Properties, set them with a setter method and then access them with a getter method.

//💡 Autoloading
// What is Autoloading?
// Autoloading is a feature in PHP that allows classes to be automatically loaded when they are referenced but not yet defined (not loaded in the current PHP script by including its class file with require or include method). In simpler terms, instead of manually including or requiring every class file in your code, autoloading takes care of loading classes on-demand as they are needed.

// How To?
// We do this with the help of built-in PHP function, spl_autoload_register. It is used to register custom autoloader functions. It allows us to define our own autoloading logic, which PHP will invoke whenever it encounters an undefined class or a newly instantiated class.

// The spl_autoload_register function takes the callback function which can be defined either inline or separately and then pass that function reference as a string argument to the spl_autoload_register. The callback function registered with spl_autoload_register is automatically called by PHP when an undefined class is encountered in your code. PHP invokes each registered autoloader function in the order they are registered until a class is successfully loaded.

// The $class parameter passed to the callback function receives the name of the class that needs to be loaded. This parameter contains the fully qualified class name, including the namespace, if any.

spl_autoload_register('autoloader');

function autoloader($class)
{
    echo "Attempting to autoload class: $class<br>";

    //⚡ we can construct the file path like this way. Use this method.
    $file = __DIR__ . '/' . str_replace('\\', '/', $class) . '.php';

    // or we can use this
    // $file = 'path/to/classes/' . str_replace('\\', '/', $class) . '.php';

    if (file_exists($file)) {
        echo "Including file: $file<br>";
        include $file;
    } else {
        echo "Class file not found: $file <br>";
        return false;
    }
}

// referencing a namespaced class:
$obj = new \assets\Plant('rose', 'white');
$obj->message();

// referencing a non-namespaced class:
$obj = new Fruits("Apple", "red");

//❓ Why adding forward slash '/' after __DIR__
// When we concatenate __DIR__ with other path components, such as file or directory names, we need to ensure that there is a directory separator between them to construct a valid file path. That's why we concatenate a forward slash ('/') after __DIR__. While Windows uses backslashes (\) as directory separators in file paths, PHP and many other programming languages and frameworks support forward slashes (/) as directory separators universally, even on Windows.
// Therefore, using forward slashes ensures that the file paths generated by the autoloader are compatible with all operating systems without needing conditional logic to handle different platforms.

//❓ Why replace backslash with forward slash in class name
// In PHP, namespace separators are represented by backslashes (\). However, in file paths, directory separators are represented by forward slashes (/). The reason for replacing backslashes with forward slashes in file paths is to ensure compatibility with different operating systems, particularly Windows and Unix-based systems.

// Windows vs. Unix Path Separators:

// Windows: File paths typically use backslashes (\) as directory separators. For example: C:\path\to\file.php.

// Unix-based systems (Linux, macOS): File paths use forward slashes (/) as directory separators. For example: /path/to/file.php.

// Namespace vs. File Path Conversion:

// Namespaces in PHP use backslashes (\) as namespace separators. For example: Namespace\SubNamespace\ClassName.

// When referencing class files in PHP, we often want to map namespaces to directory structures. In this context, we replace backslashes with forward slashes to convert namespace separators to directory separators.

// Cross-Platform Compatibility:

// By replacing backslashes with forward slashes in file paths, we ensure that the paths are valid and consistent across different operating systems.

// This practice allows PHP code to be more portable and compatible with various environments.

//💡 Put the autoload function in a separate file and then include it wherever you need to load the class.

//⚡ Name the class files as the class name.

//💡 Type Declaration
// Type declaration, also known as type hinting or type enforcement, is a feature in many programming languages, including PHP, that allows you to specify the data type of a parameter or return value in a function or method declaration. It enables you to enforce constraints on the types of values that can be passed to or returned from functions or methods. By enforcing type constraints, it helps catch type-related errors at compile-time or runtime, reducing the likelihood of bugs and enhancing code reliability.

//⚠️ We must use strict type to counter type coercion in order to better implement type declaration.
declare(strict_types=1);

// Parameter Type Declaration:
// Here, int and string are type declarations specifying that $param1 must be of type integer and $param2 must be of type string.

function myFunction(int $param1, string $param2)
{
    echo $param1 + $param2;
}
myFunction(4, '6'); // OK
// myFunction('4', 6); // Type error

// Return Type Declaration:
// Here, array is a return type declaration specifying that the function must return an array.
function myFunction0(): array
{
    // Function implementation
    return [];
}

// In this example the 'add' method of the Calculator class expects two integer parameters and returns an integer result, as indicated by the type declarations.
// If you try to pass a non-integer value to the add method, PHP will throw a type error, indicating a type mismatch.
class Calculator
{
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
}

$calculator = new Calculator();
$result = $calculator->add(3, 5); // OK
// $result = $calculator->add(3, '5'); // Type error

// commonly used types for type declaration, aside from int and string

// bool: Represents boolean values (true or false).
// float: Represents floating-point numbers (decimal numbers).
// array: Represents an array data structure containing zero or more elements.
// object: Represents an instance of a class.
// callable: Represents a callable entity, such as a function or method name.
// iterable: Represents an iterable data structure, such as arrays and objects that implement the Traversable interface.
// mixed: Represents a value of any type.

















//* Method overloading in PHP allows you to have a method that behaves differently based on the number of parameters it receives. Essentially, you can define multiple variations of the same method within the same class. These methods share the same name but may produce different outputs depending on the situation.

// Here's how it works:

// 1. Traditional Overloading:
//    - Imagine you have an `add` method that you want to use for summing numbers in different ways:
//  function add(int $a, int $b): int {
//      return $a + $b;
//  }

//  function add(int $a, int $b, int $c): int {
//      $sum = $a + $b + $c;
//      return $sum > 10 ? 10 : $sum;
//  }

//    - However, unlike some other programming languages, PHP doesn't allow you to redefine a method like this directly within the same class.
//    - You'd encounter an error if you tried to do so.

// 2. Using Magic Method `__call`:
//    - PHP supports method overloading using a magic keyword called `__call`.
//    - When PHP tries to execute a method of a class and doesn't find it, it invokes the `__call` method.
//    - The `__call` method takes in two arguments: the function name and an array of arguments to be passed into the function.
//    - You can create as many variations of a method as you like using `__call`.
//    - For example, to achieve our intended goal with the `add` function:
class SampleClass
{
    function __call($function_name, $arguments)
    {
        $count = count($arguments);
        if ($function_name == 'add') {
            if ($count == 2) {
                return array_sum($arguments);
            } else if ($count == 3) {
                return array_sum($arguments) > 10 ? 10 : array_sum($arguments);
            }
        }
    }
}
//    Now you can call `add` with different numbers of arguments, and it will behave accordingly.

//* Why use method overloading?
// - It allows you to create more flexible and versatile methods within a class.
// - You can handle different scenarios without cluttering your codebase with multiple method names.
// - It aligns with the concept of polymorphism, where objects of different classes can respond differently to the same message.