/*
  Challenge:
  Using the JavaScript language, have the function Division(num1,num2)
  take both parameters being passed and return the Greatest Common Factor.
  That is, return the greatest number that evenly goes into both numbers with
  no remainder.For example: 12 and 16 both are divisible by 1, 2, and 4 so the
  output should be 4. The range for both parameters will be from 1 to 10^3.
 
  Challenge: ACCEPTED.
  Tips:
  - If you need help better understanding GCF view this: 
    https://www.mathsisfun.com/greatest-common-factor.html 
    
  * First loop through both numbers and store common factors in separate arrays.
    - If the number divided by a number between 1 - the number is a whole number,
      store it in it's array.
  * Now compare both arrays by looping through both.
    - If you find a match and it's higher than the GCF this becomes the new GCF.
    - Keeping looping until the highest GCF is found then return it.
*/

function Division(num1, num2){
  var GreatComFact=0;
  var num1Arr=[];
  var num2Arr=[];
  
  // Store all possibly common factors of num1.
 for(var i=1; i<=num1;i++){
  if(num1/i === Math.round(num1/i)){ 
    num1Arr.push(i);
  }
 }
  // Store all possibly common factors of num2.
 for(var i=1; i<=num2;i++){
  if(num2/i === Math.round(num2/i)){ 
    num2Arr.push(i);
  }
 }
  // Now loop through both. If there are any matches, the greatest one is the GCF!
  for(var i=0; i<num1Arr.length; i++){
    for(var j=0; j<num2Arr.length; j++){
      if(num1Arr[i] === num2Arr[j]){
      	if(num1Arr[i]>GreatComFact){
          GreatComFact=num1Arr[i];
        }
      }
    }
  }
  
 return GreatComFact;
}

console.log("---");
console.log(Division(12,16)); // 4
console.log(Division(7,3)); // 1
console.log(Division(36,54)); // 18
