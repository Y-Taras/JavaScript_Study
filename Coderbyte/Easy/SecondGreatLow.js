/*
Challenge: 
Using the JavaScript language, have the function SecondGreatLow(arr)
take the array of numbers stored in arr and return the second lowest
and second greatest numbers, respectively, separated by a space.
For example: if arr contains [7, 7, 12, 98, 106] the output should be
12 98. The array will not be empty and will contain at least 2 numbers.
It can get tricky if there's just two numbers!

Challenge: ACCEPTED.
 Tips:
  * concat() method returns a new array of the combines arrays.
  * arr.length - 2 gives the length of an array. 
        arr[arr.length-2] gives the value on that index.
* First sort the array.
* Before moving on, create a function that deletes any duplicates.
* Now that the array is sorted and duplicates are gone, if there 
  are more than 2 items in the array push results into two separete arrays:
  - The second item in the array must be the second lowest num.
  - The second to last item in the array must be the second greatest num.
* If there are less than two numbers in the array:
  - The second item in the array would be the second lowest num.
  - The first item in the array would be the second greatest num.
* Combine both arrays and turn into string.
*/

function SecondGreatLow(arr){
	var theArr=arr.sort(function(a,b){return a-b;});
  var secondLow=[];
  var secondGreat=[];
  
 function findDuplicates(arr){
  for(var i=0; i<arr.length - 1; i++){ // loop up to second to last number.
      if(arr[i]===arr[i+1]){ // compare current number with one to the right of it.
        arr.splice(i,1); // if they are the space, remove it.
    }
  }
   return arr;
 }
  theArr= findDuplicates(theArr);
  
  // of this works because it is sorted.
  if(theArr.length>2){
  	secondLow.push(theArr[1]); 
  	secondGreat.push(theArr[theArr.length-2]);
  }else{
  	secondLow.push(theArr[0]); 
  	secondGreat.push(theArr[0]);
  }

	return secondLow.concat(secondGreat).join(" "); // combine into one array and turn into string.
}

// TESTS
console.log("----");
console.log(SecondGreatLow([2, 0, 4, 33, 9])); // === "2 9"
console.log(SecondGreatLow([7, 7, 12, 98, 106])); // === "12 98"
console.log(SecondGreatLow([1, 42, 42, 180])); //  === "42 42"
console.log(SecondGreatLow([4, 90])); //  === "90 4"
console.log(SecondGreatLow([103, 4, 90])); //  === "90 90"
console.log(SecondGreatLow([103, 4, 90, 6])); //  === "6 90"
