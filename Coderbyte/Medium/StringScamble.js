/*
  Challenge:
  Using the JavaScript language, have the function StringScramble(str1,str2)
  take both parameters being passed and return the string true if a portion 
  of str1 characters can be rearranged to match str2, otherwise return the 
  string false. For example: if str1 is "rkqodlw"and str2 is "world" the 
  output should return true. Punctuation and symbols will not be entered
  with the parameters.

  Challenge: ACCEPTED.
  * Loop through both strings focusing str2.
    - For every match found push the letter to result array.
  * Turn result array into a string.
  * Compare the result with str1, if they are the same return true.

*/
function StringScramble(str1,str2){
  var str2Result=[]; 
  
  // This loop will loop through all of str1 for every str2[i].
  for(var i=0; i<str2.length; i++){
    for(var j=0; j<str1.length; j++){
      if(str2.charAt(i)===str1.charAt(j)){
      	str2Result.push(str2.charAt(i));
      }
    }
  }
  
  str2Result=str2Result.join(""); // [w,o,r,l,d] ==> world
  
  if(str2 === str2Result){ // world === world ?
    return true;
  }else{
    return false;
  }
}

// TESTS
console.log("---");
console.log(StringScramble("rkqodlw","world")); // true
console.log(StringScramble("cdore","coder")); // true
console.log(StringScramble("h3llko","hello")); // false
