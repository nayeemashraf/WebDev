<?php
// Classes and objects are the two main aspects of object-oriented programming.

// A class is a template for objects, and an object is an instance of a class.

// In a class, variables are called properties and functions are called methods!

// When the individual objects are created, they inherit all the properties and behaviors from the class, but each object will have different values for the properties.

// '->' This is the object operator in PHP, used to access methods and properties of an object.

// Example...
// Let's assume we have a class named Car. A Car can have properties like model, color, etc. We can define variables like $model, $color, and so on, to hold the values of these properties.

// When the individual objects (Volvo, BMW, Toyota, etc.) are created, they inherit all the properties and behaviors from the class, but each object will have different values for the properties.

class Car
{
  public $color;
  public $model;
  public function __construct($color, $model)
  {
    $this->color = $color;
    $this->model = $model;
  }
  public function message()
  {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("black", "Volvo");
echo $myCar->message();

echo "<br>";

$myCar = new Car("red", "Toyota");
echo $myCar->message();


// Below we declare a class named 'FRUIT' consisting of two properties ($name and $color) and four methods set_name(), get_name(), set_color, and get_color for setting and getting the $name and $color properties:
class FRUIT
{
  // Properties:
  public $name;
  public $color;

  // Methods:

  // 1. setter
  function set_name($name)
  {
    $this->name = $name;
  }

  // setter
  function set_color($color)
  {
    $this->color = $color;
  }

  // 2. getter
  function get_name()
  {
    return $this->name;
  }
  // getter
  function get_color()
  {
    return $this->color;
  }
}

// Below we created the objects from 'FRUIT' class
// OR.............. 
// $apple and $banana are instances of the class 'FRUIT'

$apple = new FRUIT();
$banana = new FRUIT();

$apple->set_name('Apple');
$banana->set_name('Banana');

$apple->set_color('Red');
$banana->set_color('Yellow');

echo "Name: " . $apple->get_name();
echo "<br>";
echo "Color: " . $apple->get_color();

echo "<br>";

echo "Name: " . $banana->get_name();
echo "<br>";
echo "Color: " . $banana->get_color();


//💡 we change the value of the properties in two ways:

// 1. Inside the class (by adding a method (set_name()) and use $this keyword):
class Gadget
{
  public $name;

  function set_name($name)
  {
    $this->name = $name;
  }
}
$smartwatch = new Gadget();
$smartwatch->set_name('Apple Vision Pro');

// 2. Outside the class (by directly changing the property value):
class Users
{
  public $name;
}
$username = new Users();
$username->name = "John Doe";


//💡 constructor 
// A constructor allows you to initialize an object's properties upon creation of the object.
// If you create a __construct() function, PHP will automatically call this function when you create an object from a class.
// We pass in properties to the constructor from the outside.
// Using a constructor saves us from calling the set_name() method which reduces the amount of code:
class Student
{
  public $Name, $Age, $Standard;

  function __construct($name, $age, $standard)
  {
    $this->Name = $name;
    $this->Age = $age;
    $this->Standard = $standard;
  }
  function get_name()
  {
    return $this->Name;
  }
  function get_Age()
  {
    return $this->Age;
  }
}
// The constructor is called whenever an object is created from the class.
$Student1 = new Student("Henry", '15', '7');
echo $Student1->get_name() . " :" . $Student1->get_Age();

//💡 Inheritance in OOP = When a class derives from another class.
/*
  Inheritance is the ability to create a new class from an existing class.
  It is achieved by creating a new class that extends an existing class.
*/

// The child class will inherit all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods.

// An inherited class is defined by using the 'extends' keyword.

// Let's look at an example:
class Fruits
{
  public $name;
  public $color;
  public function __construct($name, $color)
  {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro()
  {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

// Strawberry class is inherited from Fruits class
class Strawberry extends Fruits
{
  public function message()
  {
    echo "Am I a fruit or a berry? ";
  }
}
$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message();
$strawberry->intro();

// The Strawberry class is inherited from the Fruit class.

// This means that the Strawberry class can use the public $name and $color properties as well as the public __construct() and intro() methods from the Fruit class because of inheritance.

// The Strawberry class also has its own method message() which is not present in the Fruits class.

//💡 Access Modifiers

// Access Modifiers: Properties and methods can have access modifiers which control where they can be accessed. There are three access modifiers: public, private, and protected
// public - the property or method can be accessed from anywhere. This is default i.e., if we don't explicitly write any of the access modifier infront of a property/method, it is public by default.
// private - the property or method can only be accessed from inside the class. [Prioritize private].
// protected - the property or method can be accessed from inside the class and by classes derived from that class.

// If we have protected or private property/method and we want to access them from outside, we can return them through a public method. Here, we wanted to return both properties from a single function that's why we returned them as an array.
class Visibility
{
  protected $first = 'First';
  private $second = 'Second';
  public function owner()
  {
    $one = $this->first;
    $two = $this->second;
    return [$one, $two];
  }
}

$access = new Visibility();
$multi_values = $access->owner();
print_r($multi_values); //🔥 ['First', 'Second']

//💡 PHP - Inheritance and the Protected Access Modifier
// protected properties and methods are accessible from inside the derived class. Let's see this in the below example.

class Tool
{
  public $name;
  public $color;
  public function __construct($name, $color)
  {
    $this->name = $name;
    $this->color = $color;
  }
  protected function intro()
  {
    echo "The tool is {$this->name} and the color is {$this->color}.";
  }
}

class Hammer extends Tool
{
  public function message()
  {
    echo "Am I a tool or a hammer? ";

    // Call protected method from within derived class - OK
    $this->intro();
  }
}

// Try to call all three methods from outside class
$hammer = new Hammer("Tile Hammer", "orange");  // OK. __construct() is public
$hammer->message();  // OK. message() is public and it calls intro() (which is protected) from within the derived class

// However, if we try to call a protected method (intro()) from outside the class, we will receive an error.
// $hammer->intro(); // ERROR. intro() is protected

//💡 this keyword
// In object-oriented programming, the this keyword refers to the instance of the object that is currently executing the method. It represents the object on which the method or property is invoked.

// When a method is called on an object, this inside that method refers to the specific instance of the object that made the method call. It allows you to access and manipulate the properties and methods of that particular object.
//* It is only available inside methods.