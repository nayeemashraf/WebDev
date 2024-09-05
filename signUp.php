<?php
// When we receive the data from the input fields on the form submission, it will be stored either in $_GET or $_POST Global, depending upon the method used. These superglobals are associative arrays.

//💡 $_GET - Contains information about variables passed through a URL or a form.
// In the GET method, data is not sent securely. Data is attached to the URL address.
//⛔ NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!)
// GET is good for non-secure data, like query strings in Google
// OR 
// It is used to get data through URLs and Forms.

//💡 $_POST - Contains information about variables passed through a form.
// In the POST method, data is sent more securely. Data is sent in the request header. We can get the data through forms only.
//⚡ Use $_POST for forms.


// The $_POST or $_GET is an associative array where the keys are the names of the form fields, and the values are the corresponding data entered by the user.
// Looks like this:
// $_POST = [
//     'name' => 'John',
//     'email' => 'john@example.com',
//     'password' => 'secretPassword',
//     'submit' => 'Submit',
// ];

// The isset($_POST['submit']) check is used to determine whether the form has been submitted.
// Here, we check whether the form has been submitted (either by clicking the submit button with a mouse or using a keyboard shortcut like Enter key), regardless of whether the input fields are empty or not. In the the below example, we are checking whether the form has been submitted. If yes, the $_POST['submit'] value will be set, and isset($_POST['submit']) will return true and then in the if block we are echoing out the values of the input keys.
// if (isset($_POST['submit'])) {
//     echo $_POST['name'] ."<br>";
//     echo $_POST['email'] ."<br>";
//     echo $_POST['password'] ."<br>";
// }


//💡 XSS - Cross-Site Scripting
// In web-based applications, cross-site scripting (XSS) occurs when an attacker injects malicious scripts into the code of a trusted application or website. The malicious scripts are then executed by the victim's browser when the victim visits the vulnerable application or website.

// Insert some JavaScript in one of the input field and then hit submit. Example, <script>alert('hello world')</script>, the script will be executed by the browser because we haven't sanitized the data before accepting it.

//💡 Sanitizing Input
// To prevent XSS, we should properly sanitize all user-supplied input before displaying it to the user. This process removes or modifies potentially harmful characters from user input. Sanitization is often used before displaying data to prevent attacks like Cross-Site Scripting (XSS). In this case, you would sanitize the data retrieved from the database before showing it on the webpage.

// There are a few different ways to sanitize user input in PHP. One common method is to use the filter_var() function. The filter_var() function takes two parameters: the input to be sanitized and the filter to be used.
// This would remove any illegal characters from the email address.
// $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
// echo $email;
//⚡ Use filter_var() to filter standalone variables.

// filter_input()
// The filter_input() function gets an external variable (e.g. from form input) and filters it. This function is used to validate variables from insecure sources, such as user input.
// It is typically used for getting values from superglobals like $_GET, $_POST, etc.
// The first argument is the input type (INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER, or INPUT_ENV), the second argument is the variable, third is the filter to apply and the last argument is optional.
// $email = filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL);

//⚡ Use filter_input() to filter values from external sources, such as $_GET, $_POST, $_COOKIE, $_SERVER, or $_ENV.

// Another common method for sanitizing user input in PHP is to use the htmlspecialchars() function. The htmlspecialchars() function converts special characters into HTML entities. This is useful for preventing cross-site scripting (XSS) attacks. 
// First insert some JavaScript into any input field and see the output. Again insert some Javascript but this time use this to see the difference.
// if (isset($_POST['submit'])) {
//     $name = htmlspecialchars($_POST['name']);
// }

//⚠️ We don't normally sanitize data with htmlspecialchars() when inserting data into the database. When inserting data into the database, the primary concern is preventing SQL injection attacks and for that we use validation.

//💡 getting input keys and their corresponding values as key-value pairs with foreach loop.
// foreach ($_POST as $key => $value) {
// echo out the input fields and their respective values.
// echo "key: $key -- value: $value <br>";
// }

//💡 getting input keys from $_POST associative array using the array_keys method.
// $array_keys = array_keys($_POST); // Getting all input fields as keys in the form.
// print_r($array_keys);

//💡 getting input values from $_POST associative array using the array_values method.
// $values = array_values($_POST); // Getting all input values as values in the form.
// print_r($values);

//💡 getting input keys and their corresponding values from the $_POST associative array.
// print_r($_POST);
// Or storing it in a variable and then echoing out.
// $key_value = $_POST;
// print_r($key_value);


//💡 Form submission
// We can either choose to submit the form data to the same php file where the html structure is defined or to a separate file. Consider this:

//* For simple forms with basic processing, submitting to the same file using is a good choice.
// Submitting Form Data to the Same File:

// Simplicity: Submitting form data to the same file keeps everything contained in one place, making it simpler and easier to manage for smaller applications or forms.
// Ease of Access: Since the form data is submitted to the same file, you can access it directly within the same script without the need for additional file includes or redirects.
// Code Organization: It may be easier to maintain code logic when both form display and form processing are in the same file, especially for smaller scripts or simple forms.
// Performance: There might be a slight performance benefit as there's no need to make an additional HTTP request to another file.

//* For complex forms with extensive processing, separate files are recommended for better organization and maintainability.
// Submitting Form Data to a Separate File:

// Separation of Concerns: Separating form processing logic into a separate file adheres to the principle of separation of concerns, making the codebase cleaner and easier to understand, especially for larger applications.
// Modularity: Having form processing logic in a separate file promotes modularity and reusability, as you can use the same processing logic across multiple pages or forms.
// Security: In some cases, separating form processing into a separate file can enhance security by reducing the attack surface area and minimizing the risk of code injection attacks.
// Scalability: For larger applications, separating form processing into separate files can help maintainability and scalability by organizing code into smaller, more manageable units.
// If you need to redirect the user after form submission (e.g., to a success page), a separate file approach is more suitable.

//💡 To submit the form data to the same file where the HTML form structure is defined, it is recommended to use $_SERVER['PHP_SELF'] in the action attribute of the form element. It ensures the form submits to the current script regardless of its filename. This is helpful if you rename the file later or have multiple forms on the same page submitting to different logic within the same script.

//💡 After sumbission
// When the form is sumbitted, we retrieve the form data from the $_POST or $_GET superglobal associative array.
// We then perform any necessary validation, processing, and other logic based on the submitted data.
// Finally, we can display a response message, redirect to another page, or perform any other action based on the form processing results.

// 💡 Simple Form validation

$errors = ['name' => '', 'email' => '', 'password' => ''];
$name = $email = $password = '';
$isValid = false;
foreach ($_POST as $inputField => $value) {
    if (isset($_POST['submit'])) {
        validateInput($inputField, $value);
    }
}


function validateInput($inp, $value)
{
    global $errors, $name, $email, $password, $isValid;
    if ($inp === 'name') {
        if (empty($value)) {
            $errors['name'] = 'Please enter a name';
        } else {
            $name = $value;
            $regex = "/^[a-zA-Z-' ]*$/";
            if (!patternMatch($regex, $name)) {
                $errors['name'] = 'Only letters and White space allowed';
            }
        }
    }
    if ($inp === 'email') {
        if (empty($value)) {
            $errors['email'] = 'An email is required';
        } else {
            if (filter_var($value, FILTER_VALIDATE_EMAIL)) {
                $email = filter_var($value, FILTER_SANITIZE_EMAIL);
                $regex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
                if (!patternMatch($regex, $email)) {
                    $errors['email'] = 'Must be a valid email address';
                }
            }
        }
    }
    if ($inp === 'password') {
        if (empty($value)) {
            $errors['password'] = "A Password is required";
        } else {
            $password = $value;
            $regex = '/^(?=\S*[\d])(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[@#$%^&+=!\-~.*?\[\]\{\}])[\w@#$%^&+=!\-~.*?\[\]\{\}]{8,}$/';
            if (!patternMatch($regex, $password)) {
                $errors['password'] = 'Must be a valid password';
            }
        }
    }
    $isValid = true;
}

// Function for matching the user input with the regex.
function patternMatch($regex, $input)
{
    return preg_match($regex, $input);
}

if ($isValid) {
    if (!array_filter($errors)) {

        // To redirect to a specific page we use the below method.
        // header('location: dashboard.php');
        echo "<script>alert('submitted successfully')</script>";
        return;
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="signUp.css">
</head>

<body>
    <section>
        <form action="signUp.php" method="POST">
            <h4>Contact Us</h4>
            <label for="name" id="name">Name</label>
            <input type="text" placeholder="Enter your name" autofocus name="name" class="input" id="name" value="<?= htmlspecialchars($name); ?>">
            <div class="invalidInput"><?= $errors['name']; ?></div>
            <label for="email" id="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" class="input" id="emailInput" value="<?= htmlspecialchars($email); ?>">
            <div class="invalidInput"><?= $errors['email']; ?></div>
            <label for="password" id="password">Password</label>
            <input type="password" name="password" class="input" id="passwordInput" value="<?= htmlspecialchars($password); ?>">
            <div class="invalidInput"><?= $errors['password']; ?></div>
            <div id="passwordRequirements" style="<?= $errors['password'] === 'Must be a valid password' ? 'display: block' : 'none'; ?>">
                Password requirements:
                <div class="popup">
                    <p class="req">Must be at least 8 characters long.</p>
                    <p class="req">Not your email address or username.</p>
                    <p class="req">Must contain at least one special character and a number.</p>
                    <p class="req">Must contain a mix of uppercase and lowercase letters.</p>
                    <p class="req">Cannot contain spaces.</p>
                </div>
            </div>
            <label for="feedback">Leave us a few words</label>
            <textarea name="feedback" id="text-area" cols="30" rows="5" placeholder="Enter your feedback" class="input"></textarea>
            <input type="submit" name="submit" value="Submit" id="submit">
        </form>
    </section>
</body>

</html>