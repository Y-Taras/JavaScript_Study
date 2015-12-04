/* 
  Challenge:
  Using the JavaScript language, have the function LongestWord(sen) take the sen 
  parameter being passed and return the largest word in the string. If there are 
  two or more words that are the same length, return the first word from the string 
  with that length. Ignore punctuation and assume sen will not be empty. 
 
  Challenge: ACCEPTED.
  * Take out any punctuations in the sentence and split it into words.
  *loop through each word:
    if the word is just as long as the previous one. Print the previous one.
    if either word is longer than the other, print that longest word.
*/

function LongestWord(sen) { 
  var words=sen.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
  var theLongestWord="";
  	
  words.forEach(function(word){ // practicing my forEach loops.
    if(word.length === theLongestWord.length) {
      theLongestWord=theLongestWord;
    }else if(word.length>theLongestWord.length) {
      theLongestWord=word;
    }else if(word.length<theLongestWord.length){
      theLongestWord=theLongestWord; 
    }
  });
   
  return theLongestWord; 
}
