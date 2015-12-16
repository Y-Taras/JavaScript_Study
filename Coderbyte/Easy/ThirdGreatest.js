/*
  Challenge:
  Using the JavaScript language, have the function ThirdGreatest(strArr)
  take the array of strings stored in strArr and return the third largest word within
  in. So for example: if strArr is ["hello", "world", "before", "all"] your output
  should be world because "before" is 6 letters long, and "hello" and "world" are both 5,
  but the output should be world because it appeared as the last 5 letter word in the
  array. If strArr was ["hello", "world", "after", "all"] the output should be after
  because the first three words are all 5 letters long, so return the last one. The array
  will have at least three strings and each string will only contain letters.
  
  Challenge: ACCEPTED.
  * First sort the array using sort() method and manipulate the function to work with arrays.
  * By subtracting the second length from the first:
    - the array is sorted from Greatest to Least.
    - when two items have the same length the position isn't changed.
  * Now the third word will always be the third greatest.
*/



function ThirdGreatest(strArr){
	var sortArr=strArr.sort(function(a,b){
  	return b.length-a.length;});

  var thirdGreatest=sortArr.slice(2,3); // third word in array
  return thirdGreatest;
}
 
// TESTS
console.log("---");
alert(ThirdGreatest(["hello", "world", "before", "all"])); // world
alert(ThirdGreatest(["hello", "world", "after", "all"])); // after
alert(ThirdGreatest(["coder","byte","code"])); // code
alert(ThirdGreatest(["abc","defg","z","hijk"])); // abc
