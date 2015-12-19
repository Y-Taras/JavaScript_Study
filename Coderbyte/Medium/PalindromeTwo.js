/*
  Challenge:
  Using the JavaScript language, have the function PalindromeTwo(str) take
  the str parameter being passed and return the string true if the parameter
  is a palindrome, (the string is the same forward as it is backward) otherwise
  return the string false. The parameter entered may have punctuation and symbols
  but they should not affect whether the string is in fact a palindrome. For example: 
  "Anne, I vote more cars race Rome-to-Vienna" should return true.

  Challenge: ACCEPTED.
  Tips:
  -\W Matches any character that is not a word character from the basic Latin alphabet. 
    For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".
  
  * First make everything lowercase and remove all punctuations and spaces from the string.
  * To reverse the string, turn it into an array with split(), reversed it and turn it back 
    into a string with join();
  * Test if they match.
*/

function PalindromeTwo(str){
  str=str.toLowerCase().replace(/\W/g, "");
  var reversedStr=str.split("").reverse().join("");
  
  if(str === reversedStr){
    return true;
  }else{
    return false;
  }
}

// TESTS
console.log("---");
console.log(PalindromeTwo("derP die hErp")); // false
console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna")); // true
console.log(PalindromeTwo("Noel - sees Leon"  )); // true
console.log(PalindromeTwo("A war at Tarawa!")); // true
