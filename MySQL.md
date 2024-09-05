```
$sql = "INSERT INTO tableName (column1, column2, column3, ...) VALUES ('value1', 'value2', 'value3', ..)";
if ($conn->query($sql) === TRUE) {
    // do this ...
    } else {
    // do this ...
}

```

## The expression $conn->query($sql) is a method call that executes an SQL query on a database using the $conn object. Let's break down what's happening:

    $conn: This variable represents a database connection object, created using a database extension in PHP, such as MySQLi or PDO.

    query($sql): This is calling the query method on the $conn object, passing the SQL query string $sql as a parameter.

So, $conn->query($sql) is executing the SQL query specified by the $sql variable on the database connected through the $conn object.

## The return value of this method depends on the type of SQL query:

### For a SELECT query, it typically returns a result set (an object containing the data from the query).
    For other types of queries (e.g., INSERT, UPDATE, DELETE), it usually returns a boolean indicating success (true) or failure (false).
In the context of your original code, the if statement is checking whether the result of $conn->query($sql) is exactly equal to true using === TRUE. If it's true, the code inside the if block is executed; otherwise, the code inside the else block is executed.

## If we try to display the $conn object in the browser using print_r($conn) or var_dump($conn) functions, we don't see the query() method on this object:
    
    Because those functions don't show the class methods. This is because methods are a part of the class definition and are not considered part of the instance of the object.