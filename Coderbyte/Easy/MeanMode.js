/*
  Challenge:
  Using the JavaScript language, have the function MeanMode(arr) take the array
  of numbers stored in arr and return 1 if the mode equals the mean, 0 if they
  don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode
  (3) equals the mean (3)). The array will not be empty, will only contain positive
  integers, and will not contain more than one mode.
  
  Challenge: ACCEPTED.
  Tips:
 	The mean is all the numbers added up and divided by the length.
  The mode is the number repeated most.
  
  * Sort the array -- useful for finding mode later.
  * To get the mean we need to add all the numbers through a for loop and 
    divide total by the length of the array. Also round numbers so no decimals.
  * To get the mode we first sort the array.
  * Then in our loop we test how many repeats number for each number.
  * Number with most repeats is the mode.
  * Lastly, we return 1 if mode and mean are the same number or 0 otherwise.
 */
 
 function MeanMode(arr){
 	var theArr=arr.sort(function(a,b){return a-b});
  var mean=0;
  var mode=0;
  var currentRepeats=0;
  var mostRepeats=0;
  
  for(var i=0; i<theArr.length; i++){
  	// first step to get mean: add all the values.
  	mean+=theArr[i];
  }
  // second step to get mean: divide all added values by amount of values.
   mean=Math.round(mean/theArr.length);
  
  for(var i=1; i<theArr.length; i++){
    // to get mode compare sorted array.
    if(theArr[i] !== theArr[i-1]){
    	currentRepeats++;
    }else{
    	currentRepeats=0; // resets for every iteration if no repeats.
    }
    
    if(currentRepeats>mostRepeats){
    	mostRepeats=currentRepeats;
    	mode=theArr[i];
    }
  }
  return mean===mode ? 1 : 0;
}
 
// TESTS
console.log("----");
console.log(MeanMode([5, 3, 3, 3, 1])); // 1
console.log(MeanMode([1, 2, 3])); // 0
console.log(MeanMode([4, 4, 4, 6, 2])); // 1
