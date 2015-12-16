/*
  Challenge:
  Description: Using the JavaScript language, have the function 
  PowersofTwo(num) take the num parameter being passed which will
  be an integer and return the string true if it's a power of two.
  If it's not return the string false. For example if the input
  is 16 then your program should return the string true but if the
  input is 22 then the output should be the string false.
  
  Challenge: ACCEPTED.
  * Start a while loop that will break the number down to the 
    smallest possible whole number greater than 2.
    - As long as the number is a whole number divide by 2 until 
      it becomes 2 or not a whole number.
    - As soon as it's no longer a whole number, this means it can't  
      be a power of two, return false.
    - A final step to make sure if the whole number left is 2, is by 
      either testing if the number equals to 2 or if the number goes 
      perfectly into 2 using modulos.
*/

function PowersofTwo(num){
  while(num !==2){  
    if(num === Math.floor(num)){
      num= num/2;
    }else if(num !== Math.floor(num)){
      num= num*2; 
      break;
    }else{
      break;
    }	    
  }
  
return num % 2 === 0 ? true : false;
}

// TESTS
PowersofTwo(16); // true
PowersofTwo(22); // false
PowersofTwo(4); // true
PowersofTwo(124); // false
