/* 
  Challenge:
  Using the JavaScript language, have the function LetterCapitalize(str) take 
  the str parameter being passed and capitalize the first letter of each word. 
  Words will be separated by only one space. 
  
  Challenge: ACCEPTED.
    * Split the string into words(assuming it's a sentence).
    * Loop through each word.
    * Using charAt() method, print the first letter and capitalize it and join it 
      with the rest of the word, except the first letter with the slice() method.
    * Lastly, turn array into string + join the words into a sentence with the join() method.
*/

function LetterCapitalize(str) { 
  var words = str.split(" ");
  var newArrString = [];
  
  for(var i = 0; i < words.length; i++) {
    newArrString.push(words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  
  return newArrString.join(" ");
}

// TESTS
console.log(LetterCapitalize("hello world")); // "Hello World"
console.log(LetterCapitalize("i ran there")); // "I Ran There"
