/*
  Challenge:
  Using the JavaScript language, have the function ArrayAddition(arr)
  take the array of numbers stored in arr and return the string true if 
  any combination of numbers in the array can be added up to equal the 
  largest number in the array, otherwise return the string false. For example:
  if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 
  4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the 
  same elements, and may contain negative numbers.
  
  Challenge: ACCEPTED.
  I tried to solve this problem again without recursion.
  This is as far as I got for now: https://jsfiddle.net/rv9dbzkt/12/
  I can't get the first and last item to return correctly so for now I am just
  posting the way I solved this problem in the easy section, with recusion.
  https://github.com/Mashadim/JavaScript_Study/blob/master/Coderbyte/Easy/ArrayAddition_I.js
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
console.log(ArrayAdditionI([1,2,3,5,4])); // true
console.log(ArrayAdditionI([21,10,12,9,2])); // true
console.log(ArrayAdditionI([4,6,23,10,1,3])); // true
console.log(ArrayAdditionI([5,7,16,1,2])); // false
console.log(ArrayAdditionI([3,5,-1,8,12])); // true
