/*
  Challenge:
  Using the JavaScript language, have the function LetterCount(str) take
  the str parameter being passed and return the first word with the greatest number of
  repeated letters. For example: "Today, is the greatest day ever!" should return greatest
  because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
  are no words with repeating letters return -1. Words will be separated by spaces.

  Challenge: ACCEPTED.
  I completed this challenge similarly to the previous LetterCountI(easy):
  https://github.com/Mashadim/JavaScript_Study/blob/master/Coderbyte/Easy/LetterCount_I.js
 */

 function LetterCount(str){
  var wordsArr=str.split(" ");
  var numRepeats= {};
  var greatestNumRepeatsWord="";
 
  wordsArr.forEach(function(word){ // for every word in array
    var findMatch=word.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    if(findMatch !== null && findMatch !== 0){
      numRepeats[word]=findMatch;
    }else{
      numRepeats[word]=-1;
    }
  });
  
  for(var word in numRepeats){
    if(numRepeats[word].length>greatestNumRepeatsWord.length){
      greatestNumRepeatsWord=word;
    }
  }
 
 return greatestNumRepeatsWord ? greatestNumRepeatsWord : -1;
  
 }

// TESTS
console.log("----");
console.log(LetterCount("Today, is the greatest day ever!" )) // greatest
console.log(LetterCount("Hello apple pie")) // Hello
console.log(LetterCount("No words")) // -1
