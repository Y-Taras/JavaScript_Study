/* 
  Challenge:
  Using the JavaScript language, have the function VowelCount(str) take 
  the str string parameter being passed and return the number of vowels 
  the string contains (ie. "All cows eat grass" would return 5). Do not 
  count y as a vowel for this challenge.
  
  Challenge: ACCEPTED.
  I know it is easy to solve this problem with if str.charAt(i)=== every single vowel,
  but I wanted to solve it with less code. See below.
  * After creating an intial vowel count variable loop through string.
  * Using regex and test(), I test if each character in the string has a vowel.
  * If has vowel, one more point added to vowel.
*/

function VowelCount(str){
	var numOfVowels=0;
  for(var i=0; i<str.length; i++){
    if(/[aeiou]/.test(str[i])){
    	numOfVowels+=1;
    }
  }
  return numOfVowels;
}
