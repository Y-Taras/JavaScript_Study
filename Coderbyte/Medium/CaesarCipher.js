/*
  Challenge:
  Using the JavaScript language, have the function CaesarCipher(str,num)
  take the str parameter and perform a Caesar Cipher shift on it using the
  num parameter as the shifting number. A Caesar Cipher works by shifting 
  each letter in the string N places down in the alphabet (in this case N 
  will be num). Punctuation, spaces, and capitalization should remain intact.
  For example if the string is "Caesar Cipher" and num is 2 the output should
  be "Ecguct Ekrjgt".
 
 Tips:
 - charCode() gets Unicode from position of item. 
 - String.fromCharCode() gets letter from Unicode.

  * Split the string into individual items/letters array.
  * Use map() to loop through this array aand create a new array.
    - If the character is a letter:
      - Get the Unicode of the current letter by using charCode().
      - Add num to this code, this is where the shift will happen.
      - To get the letter of the new shifted Unicode, use 
        String.fromCharCode().
      - Push result into a new array.
    - Don't forget to include space if character is a space or
      it will return without it.
  * Turn the array into a string and return it.
 */

function CaesarCipher(str,num){
  var letters=str.split("");
  var shifted=[];
  
  letters.map(function(letter){
    if(/[a-z]/i.test(letter)){ // if character is a letter.
      shifted.push(String.fromCharCode(letter.charCodeAt(0)+num));
    }else if(/\s/g.test(letter)){ // if character is space.
      shifted.push(" "); // include space in array.
    }
  })
  
  return shifted.join("");
}

// TESTS
console.log("----");
console.log(CaesarCipher("Caesar Cipher", 2)) // Ecguct Ekrjgt
console.log(CaesarCipher("Hello", 4)) // Lipps
console.log(CaesarCipher("abc", 0)) // abc
