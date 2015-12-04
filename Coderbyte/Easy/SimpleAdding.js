/*
  Challenge:
  Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers
  from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 
  
  Challenge: ACCEPTED.
  *Tips:
    -Similar to FirstFactorial problem.
  * Loop through each num from 1 to num.
  * Add each result with the preceding number until reach greater than num.
*/

function SimpleAdding(num) {
  var addedNum=0;
  
  for(i=1; i<=num; i++){
  	addedNum+=i; 
  }
  
  return addedNum;         
}
