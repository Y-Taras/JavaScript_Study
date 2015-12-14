/*
  Challenge:
  Using the JavaScript language, have the function NumberAddition(str) take the
  str parameter, search for all the numbers in the string, add them together, then return
  that final number. For example: if str is "88Hello 3World!" the output should be 91.
  You will have to differentiate between single digit numbers and multiple digit numbers
  like in the example above. So "55Hello" and "5Hello 5" should return two different
   answers. Each string will contain at least one letter or symbol.
 
  Challenge: ACCEPTED.
  Tips: 
  - The match() method searches a string for a match against a regular expression, and returns the matches, as 		an Array object.
  - RegExp: \d searches for all number occurences. +search for all mutiple occurences of \d (greedy).
  - The parseInt() function parses a string argument and returns an integer.
  - The eval() function evaluates or executes an argument.
  
  * First find any numbers in string using match() method and regex.
  * Test if the arrays has at least one match.
  * If no match return 0, otherwise loop through array, turn items into numbers with parseInt() and add.
*/
 
 function NumberAddition(str){
 	// creates an array of num matches. 
  // Automatically together in array if they are next to each other.
 	var numInstance=str.match(/\d+/g); 
  var sum=0;
  
  if(numInstance === null){ // if there are no matches stop and return 0.
  	return 0;
  }else if(numInstance.length>=1){ // if at least one match, loop through array and add together.
  	for(var matches in numInstance){
    	sum+=parseInt(numInstance[matches]); // change to numbers and add together.
    }
  }
  return sum;
 
 }
 
 /*
 	Second way to solve. Instead of using for in loop, turn array into a string and
  add a plus sign. Then use the eval() function to your advantage and add everything together!
  Props for the eval() idea goes to connameg. I wanted to find another way to solve this and I really
  liked this idea. Very clever! :)
 */
 
 function NumberAddition(str){
 	// creates an array of num matches. 
  // Automatically together in array if they are next to each other.
 	var numInstance=str.match(/\d+/g); 
  var sum=0;
  
  if(numInstance === null){ // if there are no matches stop and return 0.
  	return 0;
  }else if(numInstance.length>=1){ // if at least one match, loop through array and add together.
  	var numToString= numInstance.join("+");
    sum+=eval(numToString);
  }
  return sum;
 
 }

// TESTS
console.log("--d--");
console.log(NumberAddition("Hello World!")); // 0
console.log(NumberAddition("88Hello 3World!")); // 91
console.log(NumberAddition("55Hello")); // 55
console.log(NumberAddition("5Hello 5")); // 10
console.log(NumberAddition("75Number9")); // 84
console.log(NumberAddition("10 2One Number*1")); // 13
