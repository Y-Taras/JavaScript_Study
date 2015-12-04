/*
  Challenge:
  Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers
  from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 
  
  Challenge: ACCEPTED.
  *Tips:
    -Similar to FirstFactorial problem.
  * Split string into single characters and make them lowercase(only vowels will later be capitalized).
*/

function SimpleAdding(num) { 
    var addedNum=0;
  
  	for(i=1; i<=num; i++){
  		addedNum+=i; 
  	}
  
  	return addedNum;         
}
