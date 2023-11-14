//💡 Coding Challenge #1
// We're building a football app!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data.
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// So here are your tasks:

// 1. Create a players array for each team
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in each player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// TEST DATA: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
const printGoals = function (...players) {
  console.log(players[0], players[1], players[2], players[3]);
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// Explanation:
// The spread operator (...) is used inside the function call to pass the individual elements of the scored array as separate arguments to the printGoals function. This is necessary because the printGoals function is defined with a rest parameter (...players), which allows it to accept a variable number of arguments and treat them as an array.

// Without using the spread operator, if you passed the scored array directly to the function like this:
printGoals(game.scored);
// The entire scored array would be treated as a single argument inside the printGoals function. In other words, the players array within the function would contain just one element, which is the entire scored array. When you try to access players[0], players[1], etc, you would not get the individual player names as intended.

// By using the spread operator like this:
printGoals(...game.scored);
// You are essentially "spreading" the elements of the scored array into separate arguments. So, the players array inside the printGoals function receives these separate elements as distinct arguments. This allows you to access each player's name using array indices (players[0], players[1], etc.), and the template string that displays the number of goals scored will correctly reflect the number of individual players passed to the function.

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// 8. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
game.scored.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));

// 9. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 10. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 11. Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// In each iteration of the loop, the code checks whether scorers[player] is truthy (already exists) using the ternary conditional operator.
//  If scorers[player] is truthy, meaning the player's name already exists as a property in the scorers object, then scorers[player]++ increments the value associated with that player's name.
//  If scorers[player] is falsy (not yet in the scorers object), then (scorers[player] = 1) assigns a value of 1 to the scorers object using the player's name as the key.
//  We are incrementing the already existing player in the object to counter the second occurrence of 'Lewandowski' element.

//💡 Coding Challenge #2
// Let's continue with our football app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
// 'gameEvents.values()' method returns an iterable containing all the values in the Map.
// The iterable returned by values() is used to create a new Set object with 'new Set(gameEvents.values())'.
// Finally, the spread operator (...) is used to convert the Set of distinct values back into an array. This is done by spreading the elements of the iterable into a new array with this. [...new Set gameEvents.values()]
console.log(events);

// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So, remove this event from the game events log.
gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes). NOTE: It will only work after an event is deleted which we did in the above task.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Our game actually lasted for 92 minutes. Now, Calculate the average time of each event that happened during the game.
const time = [...gameEvents.keys()].pop();
// [...gameEvents.keys()]: converts the keys of the gameEvents Map into an array using the spread operator ([...]). So, at this point, you have an array of all the keys.
// .pop(): method is called on the array of keys. It removes and returns the last element from the array. Since pop() returns the last element, it will return a single value, not an array.
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 5. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//💡 Coding Challenge #3
// Write a program that receives a list of strings in the form of 'underscore_case' and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// USE THIS TEST DATA (paste into the textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a string made in the form of 'a_b'

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const button = document.querySelector("button");
button.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = first + second.replace(second[0], second[0].toUpperCase());
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
