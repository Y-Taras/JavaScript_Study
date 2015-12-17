/*
  Challenge:
  Have the function OfflineMinimum take the StrArr parameter being
  passed which will be an array of integers raning from ...n and the
  letter 'E' and return the subset based on the following rules. The
  StrArr will be formatted as [i,i,i,E,i,E] where i stands for an 
  integer and 'E' stands for the letter E. Whenever the value of an
  index is E, return the lowest integer in the array. For example, 
  if StrArr is ["5","4","6","E","1","7","E","E","3","2"] it should 
  return 4,1,5. 

  Challenge: ACCEPTED.
  This challenge initially confused me because I thought they were asking to find the smallest
  integer in the whole array everytime you stop at E, but they are asking for the smallest
  integer before E for every E. Numbers after each E occurrence are not included.
  
  * For this problem we are going to need to store the smallest number and the result of each iteration.
  * In order to find the smallest number in the array we need to test it against the largest number
    when we loop through the array later. 
  * To find the largest number we take out the "E" instances.
    - First we join() the array into a string because replace() only works on strings.
    - Then we take out any "E" using regex, include "g" for all/global instances.
  * After sorting we can find the largest number with Math.max()--which works on strings.
  * Set both the smallest number and second smallest number to test against the largest number initially.
  * Now loop through the array.
    - If the current character is a number and is smaller than the smallestNum:
        - Set the previous smallestNum to be the new secondSmallestNum and set the 
          current character to be the new smallestNum. 
        - Otherwise, if thecurrent character is greater than the smallestNum but less 
          than the secondSmallestNum, it  becomes the new secondSmallestNum.
    - If the current character is "E", add the smallestNum to the result array and
      in order for the smallestNum to not be included in the next E occurance we 
      make the second smallest number the new smallest number.
  * Lastly, after looping through entire array return the result as a string.
*/

function OffLineMinimum(strArr){
  var onlyNums=strArr.join("").replace(/E/g, "");
  var largestNum= Math.max(null,onlyNums);
  var smallestNum=largestNum;
  var secondSmallestNum=largestNum;
  var result=[];

  for(var i=0; i<strArr.length; i++){
    if(!isNaN(strArr[i])){ 
      if(strArr[i]<smallestNum){
        secondSmallestNum=smallestNum; 
      	smallestNum=strArr[i];
      }else if(strArr[i]<secondSmallestNum){
        secondSmallestNum=strArr[i];
      }
    }else if(/E/ig.test(strArr[i])){
    	result.push(smallestNum);
        smallestNum=secondSmallestNum;    
    }
  }
  return result.join(","); 
}

// TESTS
console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])); // 4,1,5
console.log(OffLineMinimum(['1', '5', '3', 'E', 'E', '2', '1', 'E', '0', '2'])); // 1,3,1
