/*
  Challenge:
  Using the JavaScript language, have the function DashInsert(num) insert dashes
  ('-') between each two odd numbers in num. For example: if num is 454793 the
  output should be 4547-9-3. Don't count zero as an odd number.
  
  Challenge: ACCEPTED.
  * First turn the number into an array by making it a string first and then using split().
  * Loop through the new array and test if both the current number and next number are odd.
    * If so, add a dash to the current number's right.
 */
 
function DashInsert(num) { 
  // turn num into array
  var numArr=num.toString().split("");
  
  // add a dash to current number's right if current number and next number is odd.
  for(var i=0; i<numArr.length; i++) {
    if(/[13579]/i.test(numArr[i]) && /[13579]/i.test(numArr[i+1])){
      numArr[i] = numArr[i] + "-";
    }
  }
  
  return numArr.join("");
}
 
// TESTS
console.log("----");
console.log(DashInsert(454793)); // "4547-9-3"
console.log(DashInsert(99946)); // "9-9-946"
console.log(DashInsert(56730)); // "567-30"
