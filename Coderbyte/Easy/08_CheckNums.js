/*
  Challenge:
  Using the JavaScript language, have the function CheckNums(num1,num2) 
  take both parameters being passed and return the string true if num2 
  is greater than num1, otherwise return the string false. If the parameter 
  values are equal to each other then return the string -1.
  
  Challenge: ACCEPTED.
  * Using a ternary operator if both numbers are equal return -1.
  * Otherwise, return the result of num2 > num1. So if num2 is greater than 
    num1 it will return true, otherwise it will return false.
*/

function CheckNums(num1,num2) { 
  return num1 === num2 ? -1 : num2 > num1;
}

// TESTS
console.log(CheckNums(3, 122)); // true
console.log(CheckNums(67, 67)); // -1
