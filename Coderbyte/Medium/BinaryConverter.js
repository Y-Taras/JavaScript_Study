/*
  Challenge:
  Using the JavaScript language, have the function BinaryConverter(str)
  return the decimal form of the binary value. For example: if 101 is passed
  return 5, or if 1000 is passed return 8.
  
  Challenge: ACCEPTED.
  Tips:
  - Binary is read from right to left. In JavaScript the first position, 0, 
    starts on the left. In binary, it starts on the right. ie. 3,2,1,0
  - For every 0 do 0 x 2^(any number) will equal 0.
  - For every 1 do 1 x 2^(it's position).
  - To solve this problem only focus on adding the 1s since 0 times anything
    will be 0. 
    
  * Split the string into an array.
  * Since binary reads from right to left reverse the array so 0 position starts 
    the same as in JavaScript, on the left. Push result to new array.
  * Now loop through the new array and for every 1 apply 2 to the power of the
    position of the 1's in the array.
  * Return the result.
*/

function BinaryConverter(str){
  var strArr=str.split("");
  var newStrArr=[];
  var result=0;
  
  for(var i=0; i<strArr.length; i++){
    newStrArr.unshift(strArr[i]);
  }
 	
   for(var i=0; i<newStrArr.length; i++){
     if(newStrArr[i]==="1"){
       result+=Math.pow(2, i);
     }
   }
  
 return result;
}
 
// TESTS
console.log(BinaryConverter("101")) // 5
console.log(BinaryConverter("100101")) // 37
console.log(BinaryConverter("011")) // 3
console.log(BinaryConverter("1000")) // 8
