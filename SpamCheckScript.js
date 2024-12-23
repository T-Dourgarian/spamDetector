import testUsernameML from "./MLAzureAPI.js";
import cleanstring from "./cleanString.js"
import anyAscii from 'any-ascii';
import bannedWords from './bannedWords.js';


// ENTER TEST USERNAME HERE
const USERNAME = "DиkаЯ_k0шkА_РыЖеЙ_МаSтИ"
let isSpam = false;

// testUsernameML(USERNAME);

let cleanedUsername = anyAscii(USERNAME);
cleanedUsername = cleanstring(cleanedUsername); // returns 2 strings [string1, string2]


console.log(cleanedUsername)


for (let i=0; i<cleanedUsername.length;i++) {
  let user = cleanedUsername[i];

  for (let j=0; j<bannedWords.length;j++) {
    let bWord = bannedWords[j];

    if (user.includes(bWord)) {
      isSpam = true;
    }
  }
}

if (isSpam) {
  console.log(USERNAME, " is a spam username")
} else {
  console.log(USERNAME, " is not a spam username")
}