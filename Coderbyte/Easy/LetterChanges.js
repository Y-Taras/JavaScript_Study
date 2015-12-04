/*
  Challenge:
  Using the JavaScript language, have the function LetterChanges(str) take the str parameter being 
  passed and modify it using the following algorithm. Replace every letter in the string with the 
  letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel 
  in this new string (a, e, i, o, u) and finally return this modified string. 
  
  Challenge: ACCEPTED.
  *Tips:
    -The map() method creates a new array with the results of calling a provided function on every element in this array.
    -regExp means regular expression. 
    -test() method will print true if finds match.
  * Split string into single characters and make them lowercase(only vowels will later be capitalized).
  * Using the map() method, create a new array:
    - If the character is a letter, then print the next letter in the alphabet.
    - If the next letter in the alphabet is a vowel, capitalize it.
    - Otherwise, if it is not a letter at all, just print the character.
*/

function LetterChanges(str) { 
  var characters=str.toLowerCase().split("");
  
  var newString=characters.map(function(character){
    if(/[a-z]/i.test(character)){// if the character is a letter using regExp.
      if(character==="z") {// because z returns }
        return "A";
      }else{
        // charCode() gets Unicode. fromCharCode() gets letter from Unicode.
        // +1 means next Unicode, combined with fromCharCode means next letter.
        var newLetter=String.fromCharCode(character.charCodeAt(0) +1); //
          if(/[aeiou]/i.test(newLetter)) { // if letter is vowel, using regExp.
            return newLetter.toUpperCase(); // capitalize vowels.
          }else {
            return newLetter; // if not vowel return letter.
          }
      }
    }else { // if not a letter just return the character.
          return character;
    }
  });
  
  return newString.join(""); // turns list of new array characters back into a string.   
}
   
