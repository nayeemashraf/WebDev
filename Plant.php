<?php
//💡 Required for autoloading concept
namespace assets;

class Plant
{
    public $name;
    public $color;
    public function __construct($name, $color)
    {
        $this->name = $name;
        $this->color = $color;
    }
    public function message()
    {
        echo "The plant is {$this->name} and the color is {$this->color}.";
    }
}
