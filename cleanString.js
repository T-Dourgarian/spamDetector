
// my strategy here is to turn any username into a string of lowercase letters
function cleanString(str) {

    // going to create 2 strings from 1 username because the number "1" could map to "i" or "l"
    let string1 = changeChar(str);
    let string2 = changeChar(string1);

    string1 = string1.replace(/[1]/g,'i')
    string2 = string2.replace(/[1]/g,'l')

    // remove potential letter delimiters any other special symbols
    const removeSymbols = /[_\- .,:;|/\\#~^&*+=▒▓│┐─┘÷×±∑∞£€¥¢•‣◦●→←↑↓↔{}[\]()<>!"'%?§¶©®™¤☼☮★☆♠♣♥♦2456789]/g;

    string1 = string1.replace(removeSymbols, '')
    string2 = string2.replace(removeSymbols, '')

    // put strings in lower case because all of the banned words are lower case
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();


    return [string1, string2]
}


function changeChar(str) {
  let string1 = str;

  // mapping special characters and numbers to their common alphabet character
  string1 = str.replace(/[@]/g, "a")
  string1 = str.replace(/[$]/g, "s")
  string1 = str.replace(/[3]/g, "e")
  string1 = str.replace(/[5]/g, "s")
  string1 = str.replace(/[0]/g, "o")
  string1 = str.replace(/[([{]/g, "c")
  string1 = str.replace(/[!]/g, "i")

  return string1
}
  

export default cleanString;