

function cleanString(str) {

    // going to create 2 strings from 1 usernames because 1 could map to i or l
    let string1 = changeChar(str);
    let string2 = changeChar(string1);

    string1 = string1.replace(/[1]/g,'i')
    string2 = string2.replace(/[1]/g,'l')

    // remove any other special symbols
    const removeSymbols = /[_\- .,:;|/\\#~^&*+=▒▓│┐─┘÷×±∑∞£€¥¢•‣◦●→←↑↓↔{}[\]()<>!"'%?§¶©®™¤☼☮★☆♠♣♥♦]/g;

    string1 = string1.replace(removeSymbols, '')
    string2 = string2.replace(removeSymbols, '')

    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();


    return [string1, string2]
}


function changeChar(str) {
  let string1 = str;

  string1 = str.replace(/[@]/g, "a")
  string1 = str.replace(/[$]/g, "s")
  string1 = str.replace(/[3]/g, "e")
  string1 = str.replace(/[0]/g, "o")
  string1 = str.replace(/[(]/g, "c")
  string1 = str.replace(/[!]/g, "i")

  return string1
}
  

export default cleanString;