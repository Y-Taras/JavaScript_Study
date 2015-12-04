/*
  Challenge:
  Using the JavaScript language, have the function CheckNums(num1,num2) 
  take both parameters being passed and return the string true if num2 
  is greater than num1, otherwise return the string false. If the parameter 
  values are equal to each other then return the string -1.
  
  Challenge: ACCEPTED.
  * Step by step instructions are literally in the explanation.
*/

function CheckNums(num1,num2) { 
  if(num2===num1){ // I reccomend putting this if statement first to dodge any possible errors/wrong results..
  	return -1; 
  }else if(num2>num1){
  	return true; 
  }else{
    return false;  
  }      
}
