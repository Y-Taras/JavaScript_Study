/*
  Challenge:
    Using the JavaScript language, have the function LetterCountI(str) take the str 
    parameter being passed and return the first word with the greatest number of 
    repeated letters. For example: "Today, is the greatest day ever!" should return 
    greatest because it has 2 e's (and 2 t's) and it comes before ever which also 
    has 2 e's. If there are no words with repeating letters return -1. Words will 
    be separated by spaces. 
    
  Challenge: ACCEPTED.
  Tips:
    * (.)\1+/g returns instances of repeated letters, one after another. This works only if the word is sorted.
    * The match() method searches a string for a match against a regular expression, and 
      returns the matches, as an Array object.
  * First split the string into an array of words.
  * Create a variable that will return the word with the most repeated letters.
  * Create an object that will store each word and repeated letters in that word for measuring
    against each other later.
  * Loop through the array of words.
  	- Find instances of repeated letters in the word.
  	- If there is at least once repeat instance:
  		- Push the current word and array of repeated letter matches into the object.
  	- else
  		- Push the current word and -1 into the the object.
  * Loop through the object using a for in loop.
  	If the amount of repeats in the current word is greater than the number in mostRepeatLetters:
  		This will be the new word with the most repeated letters.
  * If there are repeated letters in any of the words, return the word, otherwise return -1.
*/

function LetterCountI(str){
  var wordsAndAmount={};
  var mostRepeatLetters="";
  var words=str.split(" ");
  
  words.forEach(function(word){ 
    var howManyRepeat=word.toLowerCase().split("").sort().join("").match(/(.)\1+/g); // returns letters that repeat one after another.
	if(howManyRepeat !== null && howManyRepeat !== 0){ //if there is at least one repeat
      wordsAndAmount[word] = howManyRepeat; // insert repeats into object
	} else{
      wordsAndAmount[word] = -1; // else insert -1
    }
  });

  for(var word in wordsAndAmount){ // word is the key, wordsAndAmount[word] is the value of word.
    if(wordsAndAmount[word].length>mostRepeatLetters.length){
      mostRepeatLetters=word; 
  	}
  }	
  return mostRepeatLetters ? mostRepeatLetters : -1;
}

// TESTS
console.log("-----");
console.log(LetterCountI("Today, is the greatest day ever!")); // === "greatest"
console.log(LetterCountI("Hello apple pie")); // === "Hello"
console.log(LetterCountI("No words")); // === -1
