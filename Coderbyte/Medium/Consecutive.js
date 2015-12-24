/*
  Challenge:
  If arr contains [4, 8, 6] then the output should be 2 because
  two numbers need to be added to the array (5 and 7) to make it
  a consecutive array of numbers from 4 to 8. Negative numbers may
  be entered as parameters and no array will have less than 2 elements.
  
  Challenge: ACCEPTED.
  I found two ways to solve this problem.
  First way:
  * Sort the array from smallest to greatest.
  * Loop through the array starting from the second item in the array.
    - By subtracting the current number - the last number you will know how many
      numbers are in between until you reach the one before it.
    - Also, subtract by -1 because it counts the number before it, while we are
      looking for the numbers in between.
    - If there are no numbers in between e.g. 6-5-1 will equal 0.
 
*/

function Consecutive(arr){
 	var arrSort=arr.sort(function(a,b){return a-b;});
  var numNeed=0;
  
  for(var i=1; i<arrSort.length; i++){
  	numNeed+=arr[i]-arr[i-1]-1;
  }
  return numNeed;
 }

/*
 Second way:
  * Sort the array from smallest to greatest.
  * Loop through the array starting from the second item in the array.
	  - If current number-1 !== the number before it:
  	  - subtract -1 from the current number and add a point for
  	    the numbers in between needed until you arrive at the
  	    number before it.
 */

function Consecutive(arr){
	var arrSort=arr.sort(function(a,b){return a-b;});
  var numNeed=0;
  
  for(var i=1; i<arrSort.length; i++){
    var currentNum=arrSort[i];
    var numBefore=arrSort[i-1];
      
    while(currentNum-1 !== numBefore){
      currentNum-=1;
      numNeed+=1;
    }
  }
  
  return numNeed;
}
 
// TESTS
console.log("---");
console.log(Consecutive([4,8,6])); // 2
console.log(Consecutive([5,10,15])); // 8
console.log(Consecutive([-2,10,4])); // 10
console.log(Consecutive([-5,5,0,15,10])); // 16
