const Color1 = document.getElementById("color-1");
const Color2 = document.getElementById("color-2");
const Color3 = document.getElementById("color-3");
const Color4 = document.getElementById("color-4");
const body = document.getElementById("body");

// This function sets the background style of body element from the user input on color palette.
const setGradient = function () {
  // we can do this in 4 ways:
  // 1. with string literal.
  // body.style.background = 'linear-gradient(to right, ' + Color1.value + ", " + Color2.value + ", " + Color3.value + ", " + Color4.value + ")";

  // 2. adding direction by degree with template literals. Use template literal, it is easier and readable.
  // body.style.background = `linear-gradient(135deg, ${Color1.value}, ${Color2.value}, ${Color3.value}, ${Color4.value})`;

  // 3. adding percentage of each color with string literal.
  // body.style.background =
  //   "linear-gradient(" +
  //   "to right, " +
  //   Color1.value +
  //   " 0%, " +
  //   Color2.value +
  //   " 33%, " +
  //   Color3.value +
  //   " 66%, " +
  //   Color4.value +
  //   " 100% " +
  //   ")";

  // 4. adding percentage of each color.
  // body.style.background = `linear-gradient(45deg, ${Color1.value} 20%, ${Color2.value} 23%,  ${Color3.value} 30%, ${Color4.value} 20%)`;
  body.style.background = `linear-gradient(to bottom right, ${Color1.value}, ${Color2.value},  ${Color3.value}, ${Color4.value})`;

  // displaying the current value of each color.
  const gradient = document.querySelector("h3");
  gradient.textContent = body.style.background + ";";
};

// adding the event listener on color buttons and then calling the setGradient function.
Color1.addEventListener("input", setGradient);
Color2.addEventListener("input", setGradient);
Color3.addEventListener("input", setGradient);
Color4.addEventListener("input", setGradient);

// code to set the input value of color buttons to match the current (predefined in css file) linear-background.
const style = getComputedStyle(body);
const gradientValue = style.backgroundImage;
const colorInputs = document.querySelectorAll('input[type="color"]');
const colors = gradientValue.match(/rgba?\([\d\s,]+\)/g);

// Function to convert rgb to hex and extract individual color values
const rgbToHex = (rgb) => {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

// Function to assign converted colors to color input buttons
colorInputs.forEach((input, index) => {
  const hexColor = colors && colors[index] ? rgbToHex(colors[index]) : "";
  input.value = hexColor;
});

// displaying the current linear-gradient.
let currentGradientValues = document.querySelector("h3");
currentGradientValues.textContent = style.backgroundImage;
