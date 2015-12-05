/*
  Challenge:
  Using the JavaScript language, have the function ArithGeo(arr) take the array of 
  numbers stored in arr and return the string "Arithmetic" if the sequence follows 
  an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
  If the sequence doesn't follow either pattern return -1. 
  
  An arithmetic sequence is one where the difference between each of the numbers is consistent, 
  where as in a geometric sequence, each term after the first is multiplied by some constant 
  or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
  Negative numbers may be entered as parameters, 0 will not be entered, and no array 
  will contain all the same elements. 
  
  Challenge: ACCEPTED.
  * Create arrays for Arithmetic & Geometric possibilities.
  * Loop through the parameter array.
  * Start at 1 since we will compare the second value with the first.
    - We will later check if all numbers are the same in both arrays so...
      - By subtracting the current value with value before it, we test if each number is the result of the same addition.
          - Push this number into arithmetic array.
      - By diving the current value with the one before it, we test if each number is the result of the same multiplication.
          - Push this number into geometric array.
  * Create a function that loops through an array and tests if all values are the same.
  * Use this new function on both the arithmetic and geometric arrays.
    - If either is true, this means all numbers are the same and thus return either Arithmetic or Geometric.
    - If neither work, return -1.
*/

function ArithGeo(arr){
  var arithmetic=[];
  var geometric=[];
  
  for(var i=1; i<arr.length; i++){
  	arithmetic.push(arr[i]-arr[i-1]);// number - previous number
    geometric.push(arr[i]/arr[i-1]); // number / previous number
  }
  
  function isSame(arr){ // test if all values in array the same
    for(var i=1; i<arr.length; i++){
      if (arr[i] !== arr[0]){ // if all values not the same as first number
        return false; // means there is at least one false case. 
      }
    }
    return true; // otherwise if same, true.
  }
  
  if(isSame(arithmetic)){
    return "Arithmetic";
  }else if(isSame(geometric)){
    return "Geometric";
  }else{
    return -1;
  }
}
