/*
  Challenge:
  Description: Using the JavaScript language, have the function SwapCase(str) take the str
  parameter and swap the case of each character. For example: if str is "Hello World" the
  output should be hELLO wORLD. Let numbers and symbols stay the way they are.
  
  Challenge: ACCEPTED.
  * Split string into array.
  * Loop through and make changes using map().
  * If it is a letter, either lowercase or capitalized:
      - If current letter is lowercase, make it capitalized and push into new array.
      - If current letter is capitalized, lowecase it and push into new array..
  * If it's not a letter, just push it into the new array.
  * Turn the new array into a string and return it.
*/
 
function SwapCase(str){
	var strArr=str.split("");
  var newStr=[];
  
  strArr.map(function(char){
  	if(/[a-z A-Z]/.test(char)){ // if letter
    	if(char === char.toLowerCase()){ // if letter is the same as a lowercase letter
      	newStr.push(char.toUpperCase()); // capitalize it
      }else if(char === char.toUpperCase()){ // is letter is the same as capitalized
      	newStr.push(char.toLowerCase()); // lowercase it
      }
    }else {
    	newStr.push(char);
    }
  });
  return newStr.join("");
}
 
// TESTS
console.log("----");
console.log(SwapCase("Hello World")); // "hELLO wORLD"
console.log(SwapCase("Hello-LOL")); // "hELLO-lol"
console.log(SwapCase("Sup DUDE!!?")); // "sUP dude!!?"
