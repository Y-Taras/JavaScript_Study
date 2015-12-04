/* 
  Challenge:
  Using the JavaScript language, have the function Palindrome(str) take the str
  parameter being passed and return the string true if the parameter is a
  palindrome, (the string is the same forward as it is backward) otherwise return
  the string false. For example: "racecar" is also "racecar" backwards.
  Punctuation and numbers will not be part of the string.
  
  Challenge: ACCEPTED.
  There are two ways I solved this. The only difference is how you reverse the string.
  First way(long way):
    * Create a string variable.
    * Loop through the string backwards and insert into variable.
    * Test if the string(naturally forwards) and the reversedString(backwards) match.
      -return true if they match.
*/

function Palindrome(str){
  var reversedString="";
  
  for(var i=str.length-1; i>=0; i--){
    reversedString+=str[i];
  }
  
  if(str === reversedString){
    return true;
  }else{
    return false;
  }
}

/*
  Second way(shorter way):
    * Make use of available JavaScript methods:
      - Create a variable that reverses the string using split(), reverse(), and join().
    * Test if the string(naturally forwards) and the reversedString(backwards) match.
      -return true if they match.
*/

function Palindrome(str){
  var reversedString=str.split("").reverse().join("");
  
  if(str === reversedString){
    return true;
  }else{
    return false;
  }
}
