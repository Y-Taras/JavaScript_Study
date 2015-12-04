
/* 
  Challenge:
  Using the JavaScript language, have the function FirstFactorial(num) take 
  the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
  For the test cases, the range will be between 1 and 18. 

  Challenge: ACCEPTED.
  Loop through numbers starting with 1(since we're not multiplying by 0) until num.
  Multiply each result with the preceding number until reach greater than num.
*/


function FirstFactorial(num) { 
  var newNum=1;
  
	for(var i=1; i<=num ;i++){
    newNum*=i;
  }
  	
  return newNum;         
}
