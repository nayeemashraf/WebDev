<?php

namespace assets\namespace\products;

// The namespace name represents all the code that is defined inside this file i.e., everything (Constants, classes and functions) below it belongs to this (assets\namespace\products) namespace. We can name it as we like but the convention is to name it as its directory structure. For example, if you have a file under App/Model/Customer.php, you can name it as: App\Model\Customer. We use backslash symbol to separate subdirectories in a namespace name.

class MyClass
{
    public function __construct()
    {
        echo "Hello from products class <br>";
    }
}


//💡 Instantiating an object in a namespace from another namespace
// creating an object of another class that is in another namespace
// We can even instantiate an object from the sameClass class, present inside the services.php file in the below class. Here we need to add the backslash at the start of the namespace name (it is know as fully qualified namespace) to reference the class from the other namespace.

// Inside the constructor of the below SameClass class, we're instantiating an object of the SameClass class from the assets\namespace\services namespace, present in services.php file. The SameClass's constructor inside services.php will run, printing "Instantiating an object Inside the constructor of one namespace from another namespaces' class"
class SameClass
{
    public function __construct()
    {
        $sameClassInstanceInServicesFile = new \assets\namespace\services\SameClass();
    }
}

//💡 In a namespaced file, PHP tries to load the classes from the current namespace when we access them. Therefore, if we try to reference the built-in classes, we need to prepend a backslash or import them, to tell the php to load it from the global space.
// In the below example, if we try to access the built-in class "DateTime" without prepending a backslash or importing it first, we get an error. 
// var_dump(new DateTime());    // uncomment it to see the error

// with backslash
var_dump(new \DateTime());

//⚡ with import use this method on top of the file. This way you don't have to add the \backslash on each occurrence of the built-in class.
use DateTime;

var_dump(new DateTime());
