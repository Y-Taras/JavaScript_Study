/*
  Challenge:
    Using the JavaScript language, have the function ArithGeoII(arr) take
    the array of numbers stored in arr and return the string "Arithmetic" if the sequence
    follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern.
    If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one
    where the difference between each of the numbers is consistent, where as in a geometric
    sequence, each term after the first is multiplied by some constant or common ratio.
    Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers
    may be entered as parameters, 0 will not be entered, and no array will contain all the
    same elements.
    
  Challenge: ACCEPTED.
  I don't see anything different in the question from ArthGeo(easy). If there is some difference 
  missed, I would appreciate someone letting me know. I just re-did the same thing as ArithGeo(geo).
  
  * Loop through the array.
    - Start from 1 so you can subtract the current number from the one before it to test
      for Arithmetic. Push this in the Arithmetic array.
    - Start from 1 so you can divide the current number from the one before it to test
      for Geometric. Push this in the Geometric array.
  * Create a function that tests if all items in the array are the same. Because if 
    they are same, this means that it eithers adds or multiplies the same.
  * Test if they are all the same and return result.
*/
function ArithGeoII(arr){
	var arithmetic=[];
  var geometric=[];
  
  for(var i=1; i<arr.length; i++){
  	arithmetic.push(arr[i]-arr[i-1]);
    geometric.push(arr[i]/arr[i-1]);
  }
  
  function isSame(theArr){
  	for(var i=1; i<theArr.length; i++){
    	if(theArr[i] !== theArr[0]){
      	return false;
      }
    }
    return true;
  }
  
  if(isSame(arithmetic)){
  	return "Arithmetic";
  }else if(isSame(geometric)){
  	return "Geometric";
  }else{
  	return -1;
  }
}

// TESTS
console.log("---");
console.log(ArithGeoII([2, 4, 6, 8])); // "Arithmetic"
console.log(ArithGeoII([2, 6, 18, 54])); // "Geometric"
console.log(ArithGeoII([5,10,15])); // "Arithmetic"
console.log(ArithGeoII([2,4,16,24])); // -1
