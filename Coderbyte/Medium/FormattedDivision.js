/* 
  Challenge:
  Using the JavaScript language, have the function FormattedDivision(num1,num2)
  take both parameters being passed, divide num1 by num2, and return the result
  as a string with properly formatted commas and 4 significant digits after the
  decimal place. For example: if num1 is 123456789 and num2 is 10000 the output
  should be "12,345.6789". The output must contain a number in the one's place 
  even if it is a zero.
  
  Challenge: ACCEPTED.
  * First divide number and turn it into an array.
  * If the number is a whole number, this means there is no decimal or 0s thus:
    - add a decimal and four zeros to the number and return it.
  * Otherwise, if it is a decimal loop through array.
    - If you land on the decimal 
      - Add commas by first slicing everything before the decimal and storing
        this into a new array.
        - While looping backwards every 3 add a comma until you reach first number.
        - Add "." to this array.
      - To round the numbers and include at least and only 4 numbers after decimal
        create a new array that will store all numbers after decimal.
        - If the length of the array is 5 numbers or more and the 5th number is
          greater than 5, round the 4th number by 1. Only include first four numbers
          after decimal.
        - Otherwise if there are less than four items in the array add 0 until
          you reach four numbers.
    - Combine the two arrays, turn them into a string and return.
*/

function FormattedDivision(num1, num2){
  var divide=(num1/num2).toString().split("");
  var result=[];
	
  // if the divided result is a whole number.
  if(num1/num2 === Math.round(num1/num2)){
    divide.push("."+0+0+0+0); // add "." + four zeros in the end.
    result=divide;
  }else{
    for(var i=0; i<divide.length; i++){ // loop through array.
      // add commas
      if(divide[i]==="."){ // if character in array is decimal.
      	var commaArr=divide.slice(0,i); // split from first number until "."
  	for(var k=commaArr.length-3; k>0; k-=3){ // add a comma every 3 starting from end.
  	  commaArr[k]= "," + commaArr[k];  
  	}
    	commaArr.push("."); // add "." to array.
    	  
      // only first 4 after "." and round.
      	var newArr=divide.slice(i+1); // all numbers after "."
      	if(newArr.length>=4){ // if there 5 numbers or more in array.
          if(newArr[4]>=5){ // if 5th character is 5 or greater.
            newArr[3]=parseInt(newArr[3]) + 1; // increase/"round" 4th num up by 1.
            newArr=newArr.slice(0, 4); // include only first four numbers.
          }
        }else{
          while(newArr.length<4){ // add 0s until there are 4 numbers after decimal.
            newArr.push(0); 
          }
        }
      result=commaArr.concat(newArr); // combine two arrays.
      }
    }
  }
  return result.join("");
}

// TESTS
console.log(FormattedDivision(12, 30)); // 0.4000
console.log(FormattedDivision(123456789, 10000)); // 12,345.6789
console.log(FormattedDivision(2, 3)); // 0.6667
console.log(FormattedDivision(10,10)); // 1.0000
