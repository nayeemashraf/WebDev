//💡 A regular expression is a pattern of characters. The pattern is used for pattern-matching "search-and-replace" functions on text.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.
//⚡ Used for client Input validation, find-and-replace, string-search and extracting data.

//💡 In JavaScript, there are three string methods that can be used with regular expressions:
//⚡ often used with first two methods.
//* search() method: This method searches a string for a match against a regular expression and returns the index of the first match. It returns -1 if no match is found.

//* replace() method: This method searches a string for a match against a regular expression and replaces the matched substring with a replacement string.

//* match() method: This method searches a string for a match against a regular expression and returns an array containing the matched results. It returns null if no match is found.

// Syntax:     /pattern/modifiers;

let robertFrost = `The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep`;

// using regular expression to get the first occurrence of the word 'sleep'
let position = robertFrost.search(/sleep/); //🔥 92
let target = /woods/; // we can store the pattern in a variable
let updatedVerse = robertFrost.replace(target, "oceans");
//🔥 The oceans are lovely, dark, and deep,
//🔥 But I have promises to keep,
//🔥 And miles to go before I sleep,
//🔥 And miles to go before I sleep

//* Expression flags change how the expression is interpreted. Flags follow the closing forward slash of the expression (ex. /.+/igm ). They are also called the Modifiers. Examples of commonly used Modifiers:

//💡 /g flag: Perform a global match, find all matches and replace 'sleep' with 'rest'
let allOccurrences = robertFrost.replace(/sleep/g, "rest");
//🔥 The woods are lovely, dark, and deep,
//🔥 But I have promises to keep,
//🔥 And miles to go before I rest,
//🔥 And miles to go before I rest

//💡 /i flag: Perform case-insensitive matching.
let caseInsensitive = /and/i;
let result = robertFrost.match(caseInsensitive);
//🔥 ['and']

//💡 /m flag: Perform multiline matching. The "m" modifier is case-sensitive and not global.
// Do a global, multiline search for 'and' at the beginning of each line in a string.
let multiLine = /^And/gm; // using /m flag with ^n quantifier that matches any string with n at the beginning of it.
let multiLineMatch = robertFrost.match(multiLine);
//🔥 [ 'And', 'And' ]

//💡 Quantifiers

// The n$ quantifier matches any string with 'n' at the end of it.
//⚠️ It will not work if there is any white Space after the targeted word/character at the end of a line.
let post = `When words
or phrases
are repeated
can you find
the words
that are
repeated
`;
// Do a global and case-insensitive, multiline search for the word "Repeated" at the end of each line in the string.
let multiEnd = /Repeated$/gim; // find all occurrences of 'Repeated' at the end of each line, ignoring the case.
let multiLineEnd = post.replace(multiEnd, "repetitive"); // replace 'multiEnd' pattern with the word 'repetitive'
//🔥 When words
//🔥 or phrases
//🔥 are repetitive
//🔥 can you find
//🔥 the words
//🔥 that are
//🔥 repetitive

//💡 The n+ quantifier matches any string that contains at least one or multiple instances of n.
//* When there are multiple instances of n in a row, It takes them as a single entity and doesn't match them individually.
let phrase = "Hellooo World! Hello W3Schools!";
let pattern = /o+/g;
let newOne = phrase.replace(pattern, "+");
//🔥 Hell+ W+rld! Hell+ W3Sch+ls!

//💡 The n* quantifier matches any string that contains zero or more occurrences of n followed by the preceding character or word.
let followedByPattern = /lo*/g; // It will match each 'l' character with zero or more 'o' characters after it. If one or more 'o' characters occur after 'l', it will take them as single entity.
let expFollowedBy = phrase.replace(followedByPattern, "*");
//🔥 He** Wor*d! He** W3Schoo*s!

//* Another example of n* with a word.
let text1 =
  "So remarkable is Milton's son's talent for writing that he will soon be writing a sonnet.";
let wordFollowedBy = /son*/gi; // using /i flag to negate case-sensitivity
let resultFollowedBy = text1.replace(wordFollowedBy, "*"); // match "so" as well as any other word with zero or more instances of "n", immediately following "so"
//🔥 * remarkable is Milton's *'s talent for writing that he will *on be writing a *et.

//💡 The n? quantifier matches any string that contains zero or one occurrences of n immediately following a character or word.
//* When there are many instances of n in a row, it only matches the first one.
let expOptional = /on?/g;
let resultOptional = text1.replace(expOptional, "?");
//🔥 S? remarkable is Milt?'s s?'s talent f?r writing that he will s?? be writing a s?net.

//💡 RegExp Object Methods
// In JavaScript, a RegExp Object is a pattern with Properties and Methods.

//* The test() method is a RegExp method. It searches a string for a pattern, and returns true if it finds the match otherwise it returns false.

let text =
  "Hello world! is a sample program designed to familiarize users with most programming languages";

// look for "Hello"
let pattern1 = /Hello/g;
let result1 = pattern1.test(text); // Do a global search for "Hello" in a string:
//🔥 true

// look for "Web3"
let pattern2 = /code/g;
let result2 = pattern2.test(text); // Do a global search for "code" in a string:
//🔥 false

//* The exec() method tests for a match in a string. If it finds a match, it returns a result array, otherwise it returns null.
let pattern3 = /program/;
let result3 = pattern3.exec(text);
//🔥 ['program', index: 73, input: 'Hello world! is a sample program designed to familiarize users with most programming languages', groups: undefined]

// You don't have to put the regular expression in a variable first. The above two lines can be shortened:
let inOneLine = /Sample/.exec(text); //🔥 null

//💡 Some of the commonly used regular expressions in JavaScript.
// This regular expression is used to match and validate email addresses.
let validMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let pass = validMail.test("hello@gmail.com"); //🔥 true

// shorthand
validMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
  "hello@gmail.com"
); //🔥 true

// This regular expression is used to match and validate Social Security numbers in the format of "123-45-6789".
const securityPattern = /^\d{3}-\d{2}-\d{4}$/.test("123-45-6789"); //🔥 true

// This regular expression is used to match and validate URLs.
const urls =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-z]{2,}(\/[a-zA-Z0-9]+)*\/?$/;

// This regular expression is used to match and validate IP addresses.
const ipAddress = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

// This regular expression is used to match and validate date in the format of "yyyy-mm-dd"
const date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

// This regular expression is used to match and validate phone numbers with minimum of 7 numbers and a maximum of 14.
const phoneNumber = /^\+?[0-9]{7,14}$/;

//?               //////////////////////////////////////////////////////////////////////////           ?//
// characterset: [nnn]nnn match either of the 'n' in the brackets followed by 'nnn' (after brackets) in the exact same order after.

let characterSetString = "abcdef a cdef b bdef c adef d abf e bff f";

// This will match either 'a' or 'b' or 'c' followed by 'd' followed by 'e' followed by 'f'.
let characterSetpattern = /[abc]def/; // It will match 'adef', 'bdef' and 'cdef'

// if we only use [n] brackets it will match 'n' either a single character or the whole word if it is so.
let characterSetBracketsOnly = /[abf]/; // This will match 'a', 'b' and 'f'
