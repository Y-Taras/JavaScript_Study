/* 
  Challenge:
  Using the JavaScript language, have the function FirstReverse(str) take 
  the str parameter being passed and return the string in reversed order.

  Challenge: ACCEPTED.
  I found two ways to solve this: the array way, or the plain ol' string way.
  
  The array way:
    * Create a new array by splitting each character with split();
    * Loop through each character normally.
    * Insert one character before another with unshift into array.
    * Turn the array back into a string by joining the characters together.
*/

function FirstReverse(str) { 
  var letters = str.split("");
  var reversedString=[];
  	
  for(var i=0; i<letters.length; i++){
    reversedString.unshift(letters[i])
  }
  
  return reversedString.join("");     
}

/*
  The plain ol' string way:
    *Loop through the string backwards.
    *Insert each letter into string.
*/
    
function FirstReverse(str) { 
  var reversedString=""; //have to add ="" or it will output undefined.
  	
  for(var i=str.length-1; i>=0; i--){
    reversedString+=(str[i]);
  }
  
  return reversedString;     
}

