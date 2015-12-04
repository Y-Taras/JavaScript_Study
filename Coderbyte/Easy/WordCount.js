/* 
  Challenge:
  Using the JavaScript language, have the function WordCount(str) take the str
  string parameter being passed and return the number of words the string
  contains (ie. "Never eat shredded wheat" would return 4). Words will be
  separated by single spaces.
  
  Challenge: ACCEPTED.
  * Since the split() method returns an array of string characters/words(depending
    on how many spaces you place inside the ""), simply using the length() method
    after would count the elements in the array and return the number of words.
*/

function WordCount(str){
  return str.split(" ").length;
}
