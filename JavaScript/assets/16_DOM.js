/*
                                            Web APIs
Web APIs are sets of methods, properties, and events that are provided by web browsers to enable web developers to interact with various features and components of the web platform. The Web APIs include a wide range of functionality, such as network communication, storage, multimedia, user interface, and more. They generally fall into two categories:
1. Browser APIs.  Examples: DOM, Fetch API, Web Audio API, and WebRTC, Geolocation API, and Web Storage API etc.
2. Third-party APIs.  Examples: Google Maps API, YouTube API, Twitter API and Facebook API etc.

                                              DOM
The DOM API is a part of the Web APIs that allows web developers to dynamically manipulate the content and structure of HTML and XML documents. The DOM provides a hierarchical tree-like representation of an HTML or XML document, where each node in the tree represents an element, attribute, or text content of the document. The DOM API provides methods and properties to access and modify the nodes in the tree, add or remove nodes, modify attributes and styles, and handle user events. The DOM API is implemented by web browsers and is available to web developers through JavaScript.

methods-properties-events:
The set of methods, properties, and events provided by the DOM API to manipulate the nodes in the DOM tree, add or remove nodes, modify attributes and styles, and handle user events.

Here are some examples of the most common DOM methods, properties, and events:
DOM Methods:
- `getElementById()`: Returns the element with the specified ID.
- `getElementsByTagName()`: Returns a list of all elements with the specified tag name.
- `getElementsByClassName()`: Returns a list of all elements with the specified class name.
- `querySelector()`: Returns the first element that matches the specified CSS selector.
- `querySelectorAll()`: Returns a list of all elements that match the specified CSS selector.
- `appendChild()`: Adds a new child node to an element.
- `removeChild()`: Removes a child node from an element.
- `setAttribute()`: Sets the value of the specified attribute of an element.
- `getAttribute()`: Returns the value of the specified attribute of an element.

DOM Properties:
- `innerHTML`: Gets or sets the HTML content of an element.
- `textContent`: Gets or sets the text content of an element.
- `classList`: Gets the list of classes of an element as a DOMTokenList object.
- `style`: Gets or sets the style attributes of an element as a CSSStyleDeclaration object.
- `parentNode`: Gets the parent node of an element.
- `children`: Gets the child elements of an element as an HTMLCollection object.
- `nodeName`: Gets the name of the node as a string.
- `nodeType`: Gets the type of the node as a number.

DOM Events:
- `click`: Triggered when an element is clicked.
- `submit`: Triggered when a form is submitted.
- `keydown`: Triggered when a key is pressed down.
- `keyup`: Triggered when a key is released.
- `load`: Triggered when a page or an element is fully loaded.
- `unload`: Triggered when a page is unloaded.
- `mouseover`: Triggered when the mouse is moved over an element.
- `mouseout`: Triggered when the mouse is moved off an element.
*/

//💡 DOM is not part of the JavaScript language. DOM and its methods are part of web APIs. Web APIs are like libraries (written in JavaScript) that browsers implement and that we can access from our JavaScript code.
//* DOM Selectors
// This method returns an HTMLCollection. The elements in a collection can be accessed by an index number (starting at 0).
document.getElementsByTagName("p");
document.getElementsByTagName("p")[0];

// This method returns an HTMLCollection. The elements in a collection can be accessed by an index number.
document.getElementsByClassName("unordered");
document.getElementsByClassName("unordered")[1];

//* An HTMLCollection object is an array-like list (collection) of HTML elements.
//⚠️ An HTMLCollection may look like an array, but it is not. You can loop through the list and refer to the elements with a number (just like an array). However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.
const myCollection = document.getElementsByTagName("li");
console.log(myCollection.length);

// selects the particular element with the given id
document.getElementById("h2");

// selects only the first element that matches the selector. If we have multiple same elements, it will only select the first one among them.
document.querySelector("p");

// selects the particular element with the given id
document.querySelector("#username");

// selects the first element with the given class name
document.querySelector(".items");

//* To select a specific occurrence of an element with querySelector we can use nth-child() pseudo-class selector
// selects the 3rd 'li' element
document.querySelector("li:nth-child(2)");

//* querySelector can select any combination of these css selectors for more specificity.
document.querySelector("div#myDiv.myClass");

// Selects elements that have specific attributes and attribute values. For example, you can select an element that has a data- attribute with a specific value
document.querySelector('[data-name="value"]');

// Selects elements that match pseudo-classes such as :hover, :checked, and :nth-child(). For example, you can select the first child element of a parent element
document.querySelector("li:nth-child(1)");

// document.querySelectorAll() selects all the elements that matches the selector.
// selects all 'li' elements.
document.querySelectorAll("li");

// selects all the elements matching the class
document.querySelectorAll(".items");

// selects the second 'li' among the multiple 'li' elements.
document.querySelectorAll("li")[1];

// selects the 3rd element matching the class name.
document.querySelectorAll(".heading")[2];

//* Selects distinct of multiple elements
// selects the all the 'h1' and 'p' elements
document.querySelectorAll("h1, p");

//⚡ Use querySelector() and querySelectorAll() selectors

//💡 It is important to cache selectors in variables.
let cached = document.querySelector("h6");

//⚡ CSS Property value is set as a string.
let styleElement = (document.querySelector("p").style.width = "20rem");

//💡 Getting and Manipulating html elements and css style

// caching/storing the element in a variable named 'para'.
let para = document.querySelector("p");

// getting the attribute value
para.getAttribute("type");
console.log(para); //🔥 <p type="fr09">Get them done.</p>

// changing the attribute value
para.setAttribute("type", "text");
console.log(para); //🔥 <p type="text">Get them done.</p>

// adding a new attribute
para.setAttribute("random", "22");
console.log(para); //🔥 <p type="fr09" random="22">Get them done.</p>

//💡 changing the css style.
// We should avoid manipulating style properties with JavaScript instead we should change it through an action and not in a direct way (more about this below).
//⚠️ We use the Camel case notation in DOM methods whenever we have multi-word property or any other character between property name like the hyphen (-) E.g.,
let h1bgColor = document.querySelector("h1");
// bgColor.style.background-color = 'aliceblue' // uncomment this line to see the underline error highlighted by vscode due to '-' in-between 'background' and 'color'.

//⚠️ comment the above incorrect line to run the below code.
h1bgColor.style.backgroundColor = "rgb(240 90 90)"; // correct way.

// adding the css class by className property
// change the css style by adding the predefined class
let formElement = document.querySelector("form");
formElement.className = "formStyle";

// getting the css class list
let unorderedList = document.querySelector(".unordered");
console.log(unorderedList.classList); //🔥 ['unordered', 'list', 'items', value: 'unordered list items']

// classList object has three methods: 'add' 'remove' and 'toggle'

// 1. adding new class to unordered list element
unorderedList.classList.add("ulItems"); //⚡ use classList to add a new class instead of className

// 2. removing the class from form element
let resetStyle = formElement.classList.remove("formStyle");

// 3. toggling back class. It acts as on/off.
formElement.classList.toggle("formStyle"); // toggling to previous style.

//💡 innerHTML, innerText and textContent

//* .innerHTML
// innerHTML is used to set or get the html content inside of an element, including any child elements and their attributes. It can also be used to create new elements and insert them into the DOM, or to modify existing elements.

// In the below example we will write a span element with innerHTML that will be added dynamically inside of the first 'li' element replacing the existing text content.
document.querySelector(".first").innerHTML =
  "<span>This is a span element. It was created using the innerHTML property on the first 'li' element. It replaced the existing text content of the 'li' with the span element.</span>";

// Get the HTML content of an element.
let htmlContent = document.querySelector("ul").innerHTML;
console.log(htmlContent);
console.log(document.querySelector("li:nth-child(1)").innerHTML);

//* textContent
// Get the text content of an element
console.log(document.querySelector("li").textContent);

// changing the text content of an html element
// para.textContent = "changed the text content of the para element with textContent";
// console.log(para)

// Set the text content of an element
let li2nd = document.querySelector("li:nth-child(2)");
li2nd.textContent =
  "<span> textContent can't be used to create an html element. It is only used to set or get the text content of an element. </span>";
console.log(para);

//⚡ If you need to create and add html elements dynamically use createElement instead of innerHTML. If you need to get or set the text content of an element use textContent

//* parentElement and childElement
let parent = li2nd.parentElement;
console.log(parent);

let child = unorderedList.children;
console.log(child);

// li's parent is 'ul' whose parent is 'body' her children are 'h1', 'form', 'h2', 'p', 'p', 'ul', 'h2'
let parentage = li2nd.parentElement.parentElement.children;
console.log(parentage);

//* Setting or manipulating the value of an input field
let inputField = document.querySelector("#inp");
inputField.value = 4;

// Getting the value of an input field with .value method.
console.log(inputField.value);

//⚠️ We always get the input as a String. To convert the numbers into number type use any method of number conversion like Number(a)
let inputValue = inputField.value;
console.log(typeof inputValue, inputValue);

let toNumber = Number(inputValue);
console.log(typeof toNumber, toNumber);

// 💡 Events and Event Handling
// Event is something that happens on a page like mouse click, mouse hover or a keypress etc. The most common events are mouse events and keyboard events.

//* addEventListener
// addEventListener is a method. It is a built-in method provided by the EventTarget interface in JavaScript. It accepts two arguments, first argument specifies what type of event we want to listen to and second one specifies what we want to trigger or what do with that.

// We call addEventListener on the DOM element or object to which we want to attach an event listener. For example, if we want to listen for a click event on a button element, we would call addEventListener on that button element, specifying the event type ("click") and the event handler function to be executed when the event occurs.

let button = document.querySelector("#submit");

// Here we declare when the button is clicked run the function.
button.addEventListener("click", function () {
  console.log("Click!!!");
});

// calling it on objects.
window.addEventListener("resize", function () {
  console.log("Window resized!"); // resize the browser window and check the console log.
});

// we have many mouse events some of these include:

// when mouse is hovered over the button.
// button.addEventListener("mouseenter", function () {
//   console.log("Mouse on Me 🖱");
// });

// when mouse focus leaves the button.
// button.addEventListener("mouseleave", function () {
//   console.log("🖱 Left !!!");
// });

//* Adding 'li' elements dynamically to the 'To-dos' list.

// caching the html elements in variables.
const userInput = document.querySelector(".userinput");
const buttonClick = document.querySelector(".enter");
const ul = document.querySelector("ul");

// This function creates new 'li' elements by adding the user input as text content of 'li' elements.
const createListElement = function () {
  const input = userInput.value.trim(); // getting the input value and also trimming any leading and trailing space at the same time.
  userInput.value = ""; // clearing the input box after the button click or pressing the Enter key.
  if (input.length > 0) {
    // if the length of input value is greater than 0 run the below code.
    const listItem = document.createElement("li"); // create a new 'li' element.
    listItem.textContent = input; // set the text content of new 'li' element from the input value.
    // toggling 'line-through' css style with predefined '.strikethrough' class.
    listItem.addEventListener("click", function () {
      listItem.classList.toggle("strikethrough");
    });
    // adding 'Delete' button next to the each 'li' element
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; // setting the text content of button to 'Delete'
    deleteButton.classList.toggle("delBtn"); // toggling the css style on 'Delete' button with predefined '.delBtn' class
    deleteButton.addEventListener("click", function () {
      listItem.remove(); // removing the 'li' items when the 'Delete' button is clicked.
    });
    listItem.appendChild(deleteButton); // appending the 'Delete' button to the 'li' elements.
    ul.appendChild(listItem); // append the new 'li' element as a child element onto the 'ul' element.
  }
};

// Run the createListElement() function when the button is clicked.
buttonClick.addEventListener("click", function () {
  createListElement();
});

// Run the createListElement() function when the 'Enter' key is pressed.
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // check if the value of key property is "Enter" then run the below function.
    createListElement();
  }
});

//💡 event object
// In JavaScript, when an event occurs (e.g., a key is pressed, a button is clicked, etc.), an event object is created to contain information about the event. The event parameter is a reference to this event object and is automatically passed to the event handler function. By including the event parameter in the function signature, you can access and work with the properties and methods of the event object.

// event.key: The 'key' is a property of the event object that represents the key that was pressed during a keyboard event. For example, if the Enter key was pressed, event.key will get the string value "Enter". The event.key value is based on the physical key pressed and can vary depending on the user's keyboard layout and language settings.

//* event.preventDefault()
// event.preventDefault() is a method used to prevent the default behavior associated with certain events.
// It is commonly used with events like form submissions and link clicks to prevent the default action, such as navigating to a new page or submitting the form.
// Calling event.preventDefault() allows you to handle the event manually and implement custom logic or validations before proceeding.
// It can be used with various events, not limited to button clicks, including keypress events like when the "Enter" key is pressed.
// By using event.preventDefault() within the event handler, you can override the default behavior and define your own actions or conditions based on specific requirements.
// It provides control and flexibility in customizing the behavior of interactive elements on a webpage.

//* Dark and light mode
let body = document.querySelector("body");
let darkMode = document.querySelector(".set-dark");
let lightMode = document.querySelector(".set-light");

darkMode.addEventListener("click", function () {
  body.className = "";
  body.classList.toggle("dark-mode");
});

lightMode.addEventListener("click", function () {
  body.className = "";
  body.classList.toggle("light-mode");
});

//💡 Global events
// In the Document Object Model (DOM), global events are events that can be triggered at the document level or window level and are not tied to specific elements on the page. These events are attached directly to the document object or the window object, making them accessible and applicable across the entire web page. Examples of global events include DOMContentLoaded, DOMContentLoaded, resize, and scroll. These events are attached to the document or window object.

//⚡ Global events are fired for the entire page, while Non-Global events are only fired for the specific element that they are attached to. Attach global events to document and non-global events to specific element.

//💡 Non-Global events
// Non-global events are specific to individual elements on the web page and are triggered when a user interacts with those elements. Examples include: keydown, keyup, click, dblclick, contextmenu, focus, blur, submit, change input, mouseenter, and mouseleave.

//💡 Passing the functions directly in event listener
const fun = () => console.log("so");
body.addEventListener("click", fun);

// When you use addEventListener to attach an event handler to an element in JavaScript, you pass the function name as the second argument without using parentheses. The reason for not using parentheses in this context is that you want to pass the function reference itself, not the result of calling the function.

// In the addEventListener function, you provide a callback function that will be executed when the specified event occurs on the target element. By passing the function reference without parentheses, you are telling the browser to use that function as the event handler, rather than invoking it immediately and using the result.
// some scenarios where you pass the function definition without using parentheses:
// Event Listeners
// Higher-Order Functions
// Array Methods
// Promises
// Callbacks
