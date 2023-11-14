//! Exercise 1. login validation
const database = [
  {
    username: "john",
    password: "777",
  },
  {
    username: "andrew",
    password: "666",
  },
  {
    username: "sally",
    password: "999",
  },
];

//* This function checks whether the arguments passed to user and otp matches with the username and password in database.
function isValid(user, otp) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === otp) {
      return true;
    }
  }
  return false;
}

//* This function checks whether the isValid function with name and pin parameters returns true or false.
function logIn(name, pin) {
  if (isValid(name, pin)) {
    console.log("Logged-In"); // if isValid returns true with these parameters log 'Logged-In' to the console.
  } else {
    alert("wrong username or password"); // else log 'wrong username or password'
  }
}
let UserName = prompt("Enter username");
let Password = prompt("Enter password");

logIn(UserName, Password);

//! Exercise 2. Adding ! at the end of each item in the array then emptying the whole array. With this method we can also replace any array item. Example todos[i] = Hi
const todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "learn javaScript",
  "eat healthy",
];

const todosLength = todos.length; // We did this to make the todos.pop() work properly.
for (i = 0; i < todosLength; i++) {
  todos[i] = todos[i] + "!";
  // todos.pop();           // first run it without the todos.pop() and then uncomment this line to see the difference.
  console.log(todos[i]);
}

//! Exercise 2.2 ForEach loop on todos array.
const updatedArray = [];
todos.forEach((todo, index) => {
  // Replacing 'r' with 'br' in the first element
  if (index === 0) {
    updatedArray.push(todo.replace("r", "br"));
  }
  // Replacing 'learn' with 'study' in the fourth element
  else if (index === 3) {
    updatedArray.push(todo.replace("learn", "study"));
  }
  // For other elements, add the original value to the updated array
  else {
    updatedArray.push(todo);
  }
});

console.log(updatedArray);

//! Exercise 3.
const teamDolphins = [44, 23, 71];
const teamKoalas = [65, 54, 49];

// calculate average score of a team
const calcAverage = (team) => {
  const sum = team.reduce((x, y) => x + y, 0);
  const avgScore = sum / team.length;
  return avgScore;
};

// calling the calcAverage() function to store the average scores in the corresponding variables.
const avgDolphins = calcAverage(teamDolphins);
const avgKoalas = calcAverage(teamKoalas);

// determine the winner based on the average score. A team only wins if it's average score is greater and twice the opponent team.
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins)
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  else console.log("Oh...! We have draw 🤝🏻");
};

// calling the checkWinner() function to determine the winner.
checkWinner(avgDolphins, avgKoalas);

//! Exercise 4 calculating tips.
const bills = [125, 555, 44];
const calcTip = (bill) => {
  const tips = [];
  const total = [];
  for (const cost of bill) {
    if (cost <= 300 && cost >= 50) {
      const tipAmount = 0.15 * cost;
      tips.push(tipAmount);
      total.push(cost + tipAmount);
    } else {
      const tipAmount = 0.2 * cost;
      tips.push(tipAmount);
      total.push(cost + tipAmount);
    }
  }
  return ["bills:", bills, "tips:", tips, "total:", total];
};
calcTip(bills);
// we can get the average of bills, tips and total array with the help of calcAverage() function defined in exercise 1.
calcAverage(bills);
calcAverage(tips);
calcAverage(total);

//! Exercise 5. calculating the BMI and also compare it.
const user1 = {
  firstName: "John",
  lastName: "Smith",
  height: 1.95,
  weight: 92,
};
const user2 = {
  firstName: "Mark",
  lastName: "Miller",
  height: 1.69,
  weight: 78,
};

const BMI = (user1, user2) => {
  const user1BMI = user1.weight / user1.height ** 2;
  const user2BMI = user2.weight / user2.height ** 2;
  const compareBMI = () => {
    return user1BMI > user2BMI
      ? `${user1.firstName} ${user1.lastName}'s BMI (${user1BMI}) is higher than ${user2.firstName} ${user2.lastName}'s (${user2BMI})!`
      : `${user2.firstName} ${user2.lastName}'s BMI (${user2BMI}) is higher than ${user1.firstName} ${user1.lastName}'s (${user1BMI})!`;
  };
  return compareBMI();
};
BMI(user1, user2);
//🔥 Mark Miller's BMI (27.309968138370508) is higher than John Smith's (24.194608809993426)!

//! Exercise 6. Strings: slice use case.
// B and E are middle seats in an airplane. Determine the user's seat based on the seat no.
const checkMiddleSeat = (seat) => {
  const currentSeat = seat.slice(-1);
  currentSeat === "B" || currentSeat === "E"
    ? console.log("You got the middle seat 😦")
    : console.log("You got lucky seat 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("33E");

//! Exercise 6.1 Fix capitalization in name
const passenger = "jOnAS";
// We want to convert it into this: 'Jonas'
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//! Exercise 6.2 Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n"; // correct this incorrect loginEmail entered by a user to match the above email. Here, '\n' is the newline which implies the user has pressed the enter key at the end of the email.
// Solution 1.
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(email === normalizedEmail);

// Solution 2. We can do this in one line.
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//! Exercise 6.3 replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
// We are doing it on one line by chaining the methods together. priceGB.replace('£', '$') will return the string '288, 97$' then we are calling another replace method on it to replace the ',' with '.'
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

//! Exercise 6.4 starts or ends with string.
const plane = "Airbus A320neo";
console.log(plane.startsWith("Airb"));
console.log(plane.endsWith("neo"));

if (plane.startsWith("Airbus") && plane.endsWith("neo"));
console.log("Part of the NEW ARirbus family");

//! Exercise 6.5 includes method.
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//! Exercise 6.6 Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//! Exercise 6.7 Padding
const message = 'Go to gate 23!';
// add '+' before the string until the total string length is not more than 20 and add '+' at the end of the string until the string length is 30.
// since the length of the message is 14 initially then we add '+' at the start till the total length of the string remains 20 and now the total length is 20. After that we add '+' at the end of the string until the total length is 30.
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

//! Exercise 6.8 Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

//! Exercise 7. String methods.
// Format this string and extract the relevant output.
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// SHOULD PRODUCE THIS OUTPUT (4 separate console.log outputs)
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


const destination = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${destination(from)} to ${destination(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(44);
  console.log(output)
}