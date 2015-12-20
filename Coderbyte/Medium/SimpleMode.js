/*
  Challenge:
  Using the JavaScript language, have the function SimpleMode(arr)
  take the array of numbers stored in arr and return the number that
  appears most frequently (the mode). For example:if arr contains 
  [10, 4, 5, 2, 4] the output should be 4. If there is more than one 
  mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5]
  should return 5 because it appeared first). If there is no mode return -1.
  The array will not be empty.

  Challenge: ACCEPTED.
 * First make sure match is set to null.
 * Loop through the array twice. First time normally,
  second time inside the same array starting with the
  second item. This will thus loop throught he whole
  array for each position.
    - If item in array equals another item in array and it's
      not in the same position, and the match is intially null,
      this means it is the first match. 
        - Set it to this number.
    - Else if is not needed because any other match that is
      not intially set to null means it's a second match and
      the challenge only wants the first.
* If there is at least one match return it, otherwise return -1.
 
*/
 
function SimpleMode(arr){
 var match=null;
  
  for(var i=0; i<arr.length; i++){
    for(var j=1; j<arr.length; j++){
      if(arr[i]===arr[j] && i!==j &&  match===null){
      	match=arr[i];
      }
    }
  }
  
 return match !==null ? match : -1;
}
 
// TESTS
console.log("---");
console.log(SimpleMode([10,4,5,2,4])) // 4
console.log(SimpleMode([5,10,10,6,5])) // 5
console.log(SimpleMode([5,5,2,2,1])) // 5
 console.log(SimpleMode([3,4,1,6,10])) // -1
