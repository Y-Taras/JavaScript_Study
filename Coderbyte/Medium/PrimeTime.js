/*
  Challenge:
  Using the JavaScript language, have the function PrimeTime(num) 
  take the num parameter being passed and return the string true 
  if the parameter is a prime number, otherwise return the string 
  false. The range will be between 1 and 2^16 (65536).

  Challenge: ACCEPTED.
  Tips: 
  - A prime number is a whole number greater than 1, whose only two 
    whole-number factors are 1 and itself. 
    e.g. 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 etc.
    
  * One way to test if the number is not prime is by dividing
    the number by any number between 2-9 in a loop.
  * If the result is a whole number, this means it divides
    by more numbers than 1 and itself and thus is not a
    prime number.
  * Also, make sure it doesn't divide by itself because if it
    is prime it will return false within the loop.
*/

function PrimeTime(num){
  for(var i=2; i<10; i++){
    if(num/i === Math.round(num/i) && num !==i){ 
      return false;
    }
  }
  return true;
}

// TESTS 
console.log("---");
console.log(PrimeTime(19)); // true
console.log(PrimeTime(110)); // false
console.log(PrimeTime(0)); // false
console.log(PrimeTime(5)); // true
console.log(PrimeTime(853)); // true
console.log(PrimeTime(636)); // false
console.log(PrimeTime(937)); // true
