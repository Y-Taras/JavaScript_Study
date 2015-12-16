/*
  Challenge: 
    Same as AdditivePersistence but multiplying instead of adding.
    See: https://github.com/Mashadim/JavaScript_Study/blob/master/Coderbyte/Easy/AdditivePersistence.js
    
  Challenge: ACCEPTED.
    * Same steps as Additive Persistence:
      - I just changed addition sign to multiplication
      - Also changed addCount to multiplyCount.
      - And addNum to multiplyNum.
*/

function MultiplicativePersistence(num){
  // turn into array and store result here.
  var result=num.toString().split("");
  var multiplyCount=0;
  
  // if there are more than 1 numbers in array turn into string.
  // multiply together and turn back into array.
  while(result.length !== 1){ 
    var numString = result.join("*");
    var multiplyNum= eval(numString);
    result= multiplyNum.toString().split("");
    multiplyCount++;
  }

  return multiplyCount;
}
 
// TESTS
console.log("---");
alert(MultiplicativePersistence(2879)); // 2
alert(MultiplicativePersistence(39)); // 3
