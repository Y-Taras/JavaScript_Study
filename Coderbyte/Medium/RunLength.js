/*
  Challenge:
  Using the JavaScript language, have the function RunLength(str) 
  take the str parameter being passed and return a compressed version 
  of the string using the Run-length encoding algorithm. This 
  algorithm works by taking the occurrence of each repeating character 
  and outputting that number along with a single character of the 
  repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. 
  The string will not contain any numbers, punctuation, or symbols. 

  Challenge: ACCEPTED.
  * Loop through string.
    - If the letter is same as next one or before it add point to numRepeats.
    - Also, if the letter is the same as the one before it but not the one 
      after it, this must mean it's the last letter. Thus, push the numRepeats
      and the current letter into the result. Don't forget to reset numRepeats
      for different letter!
    - Otherwise, if the letter is not the same as the one before or after it,
      this must mean there are no repeats thus push 1 and the letter into the
      result array.
  * Lastly, return the result as a string.
*/

function RunLength(str){
  var numRepeats=0;
  var result=[];
 
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) === str.charAt(i+1) || str.charAt(i) === str.charAt(i-1)){
      numRepeats+=1;
      if(str.charAt(i) !== str.charAt(i+1) && str.charAt(i) === str.charAt(i-1)){
      	result.push(numRepeats,str.charAt(i)); // result = [3, w] 
        numRepeats=0; // reset for different letter
      }
    }else{
      result.push(1,str.charAt(i));
   }
 }
 return result.join("");
}

// TESTS 
console.log("----");
console.log(RunLength("wwwggopp")); // "3w2g1o2p"
console.log(RunLength("aabbcde")); // "2a2b1c1d1e"
console.log(RunLength("wwwbbbw")); // "3w3b1w"
