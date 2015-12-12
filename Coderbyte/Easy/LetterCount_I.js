/*
  Challenge:
    Using the JavaScript language, have the function LetterCountI(str) take the str 
    parameter being passed and return the first word with the greatest number of 
    repeated letters. For example: "Today, is the greatest day ever!" should return 
    greatest because it has 2 e's (and 2 t's) and it comes before ever which also 
    has 2 e's. If there are no words with repeating letters return -1. Words will 
    be separated by spaces. 
    
  Challenge: ACCEPTED.
  
*/

function LetterCountI(str){
  var wordsAndAmount={};
	var mostRepeatLetters="";
  var words=str.split(" ");
  
  words.forEach(function(word){ 
    var howManyRepeat=word.toLowerCase().split("").sort().join("").match(/(.)\1+/g); // returns repeats
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
