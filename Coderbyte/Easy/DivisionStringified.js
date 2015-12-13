/*
  Challenge:
  Using the JavaScript language, have the function DivisionStringified(num1,num2)
  take both parameters being passed, divide num1 by num2, and return the result
  as a string with properly formatted commas. If an answer is only 3 digits long,
  return the number with no commas (ie. 2 / 3 should output "1").
  
  Challenge: ACCEPTED.
  Tips:
    - Starting last is more convenient because the last 3 numbers do not have a comma.
  * First divide the numbers normally and round to get whole numbers.
  * Then we need to turn the numbers into an array.
  * If the numbers length is greater than 3 loop throught the array every 3
    starting from the 3rd to last number.
  * Add a comma before every 3rd to last number and return result as a string.
*/

function DivisionStringified(num1, num2){
	var divide=Math.round((num1/num2)).toString().split("");
  
  if(divide.length>3){
  	for(var i=divide.length-3; i>0; i-=3){
    	divide[i]= "," + divide[i];
    	} 
  }
    return divide.join("");
}

// TESTS
console.log("----");
console.log(DivisionStringified(123456789, 10000)); //  === "12,346"
console.log(DivisionStringified(5, 2)); // === "3"
console.log(DivisionStringified(6874, 67)); //  === "103"
console.log(DivisionStringified(2, 3)); //  === "1"
