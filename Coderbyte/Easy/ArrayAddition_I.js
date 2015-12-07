/*
  Challenge:
  Using the JavaScript language, have the function ArrayAdditionI(arr) take the array 
  of numbers stored in arr and return the string true if any combination of numbers 
  in the array can be added up to equal the largest number in the array, otherwise
  return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output
  should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not 
  contain all the same elements, and may contain negative numbers. 
  
  Challenge: ACCEPTED.
  I have tried to solve this problem with a for loop but I missed the fact that the challenge 
  is not asking that all numbers need to add up to = the largest num, but it is also possible to
  add up to the largest num if we take some numbers out. Thus I decided to solve with recursion.
  Tips:
    * The Math.max.apply() method takes an array and returns the largest number. Note that it 
      usually works on strings as Math.max().
    * the sort() method can take a parameter to further expand it's purpose. Usually it only 
      sorts strings, but to sort numbers we include a function that finds which number is bigger.
    * First get the largest number.
    * Sort the array and remove the largest number to be used for recursion later.
    * Create a recursion function that checks if the numbers add up to the largest number, and if
      not, check that if some numbers in array are subtracted from the largest num they are ===
      to the largest number.
    
*/

 function ArrayAdditionI(array){
  var largestNum = Math.max.apply(0, array); // gets the largest number in array.
  array.sort(function(a,b){ return a-b;}).pop(); // sorts array and removes last(largest) number.
  
  function recursionCheck(arr, sum){
    // the base case when array empty.
    if(arr.length === 0){ 
      return sum === 0;
    }
      var arrBeginNum=arr[0];
      // for every recursion take away one number(the first one in this case).
      arr = arr.slice(1);
      // first check if numbers sum up to largest num if not, check if removing numbers adds up to largest num.
      return recursionCheck(arr, sum) || recursionCheck(arr, sum - arrBeginNum); 
  }
 // recursion needs to be called for it to start.
 return recursionCheck(array, largestNum);
}

// TESTS
console.log("-----");
console.log(ArrayAdditionI([1,2,3,5,4])); ==> true
console.log(ArrayAdditionI([21,10,12,9,2])); ==> true
console.log(ArrayAdditionI([4,6,23,10,1,3])); ===> true
console.log(ArrayAdditionI([5,7,16,1,2])); ===> false
console.log(ArrayAdditionI([3,5,-1,8,12])); ===> true
