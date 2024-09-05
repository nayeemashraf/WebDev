<?php

namespace assets\namespace\services;

class MyClass
{
    public function __construct()
    {
        echo "Hello from services class <br>";
    }
}

function hello()
{
    echo "Function in Services <br>";
}


//💡 Instantiating an object in a namespace from another namespace
class SameClass
{
    public function __construct()
    {
        echo "Instantiating an object Inside the constructor of one namespace from another namespaces' class";
    }
}