/* 
  Challenge:
  Using the JavaScript language, have the function AlphabetSoup(str) take the
  str string parameter being passed and return the string with the letters in 
  alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation 
  symbols will not be included in the string. 
  
  Challenge: ACCEPTED.
    * split() the string into characters in a new array.
    * sort() the letters into an alphabetic order.
    * join() to turn it back into a string.
*/

function AlphabetSoup(str) { 
	var alphabetize=str.split("").sort().join("");
  
  return alphabetize;        
}
