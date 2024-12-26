import testUsernameML from "./MLAzureAPI.js";
import cleanstring from "./cleanString.js"
import anyAscii from 'any-ascii';
import bannedWords from './bannedWords.js';


// ENTER TEST USERNAME HERE
const USERNAME = "🅲🅷🅴🅲🅺 🅼🆈 🅳🅴🆂🅲🆁🅸🅿🆃🅸🅾🅽"

let isSpam = false; // default 



// testing string evaluation script
let cleanedUsername = anyAscii(USERNAME);
cleanedUsername = cleanstring(cleanedUsername); // returns 2 strings [string1, string2]


// here and I am checking if the username contains any of the banned words, if it does, it gets marked as spam
for (let i=0; i<cleanedUsername.length;i++) {
  let user = cleanedUsername[i];

  for (let j=0; j<bannedWords.length;j++) {
    let bWord = bannedWords[j];

    if (user.includes(bWord)) {
      isSpam = true;
    }
  }
}

console.log("     ");

if (isSpam) {
  console.log(USERNAME, " is a spam username (OFFICIAL)")
} else {
  console.log(USERNAME, " is not a spam username (OFFICIAL)")
}

console.log("     ");


// I have used up the free credit from Azure, and this model doesn't really work well anyways so I am not going to pay to keep it going 
// console.log(" ");
// console.log("*****************")
// console.log(" ")
// // testing ML model

// const isSpamML = testUsernameML(USERNAME);

// if (isSpamML) {
//   console.log(USERNAME, " is a spam username (according to model) (UNOFFICIAL)")
// } else {
//   console.log(USERNAME, " is not a spam username (according to model) (UNOFFICIAL)")
// }