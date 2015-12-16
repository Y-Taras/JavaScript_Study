/*
  Challenge:
  Using the JavaScript language, have the function AdditivePersistence(num)
  take the num parameter being passed - which will always be a positive integer
  - and return its additive persistence which is the number of times you must add
  the digits in num until you reach a single digit. For example: if num is 2718 then
  your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
  
  Challenge: ACCEPTED.
  * Turn the number into array.
  * Loop through array.
    - If there is more than one item in array this means there are more items to add.
    - Turn array into a string and add "+". 
    - Make use of eval() function and add together then split the result again to
      continue loop if still more than one items in array.
    - Add point to addCount everytime add numbers.
    
*/

function AdditivePersistence(num){
	// turn into array and store result here.
	var result=num.toString().split("");
  var addCount=0;
  
  // if there are more than 1 numbers in array turn into string.
  // add together and turn back into array.
  while(result.length !== 1){ 
    var numString = result.join("+");
    var addNum= eval(numString);
    result= addNum.toString().split("");
    addCount++;
  }

	return addCount;
}
 
// TESTS
console.log("---");
console.log(AdditivePersistence(2718)); // 2
console.log(AdditivePersistence(2342342536496835063)); // 3
