/* 
  Challenge:
  Using the JavaScript language, have the function FirstFactorial(num) take 
  the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
  For the test cases, the range will be between 1 and 18. 

  Challenge: ACCEPTED.
  * Loop through and mutiply numbers starting with 1(since we're not multiplying by 0) until num.
*/

function FirstFactorial(num) {
  var newNum=1;
  
  for(var i=1; i<=num ;i++) {
    newNum*=i;
  }
  	
  return newNum;         
}

// TESTS
console.log(FirstFactorial(4)); // 24
console.log(FirstFactorial(8)); // 40320
