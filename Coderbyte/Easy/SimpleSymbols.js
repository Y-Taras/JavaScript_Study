/*
  Challenge:
 Using the JavaScript language, have the function SimpleSymbols(str) take the str 
 parameter being passed and determine if it is an acceptable sequence by either 
 returning the string true or false. The str parameter will be composed of + and 
 = symbols with several letters between them (ie. ++d+===+c++==a) and for the string 
 to be true each letter must be surrounded by a + symbol. So the string to the left 
 would be false. The string will not be empty and will have at least one letter. 
  
  Challenge: ACCEPTED.
  * Tips:
    -The main point here is the letters, not the numbers or symbols other than "+". 
     So test the letters and it's surroundings for false possibilities.
  *First split() the string into individual characters.
  *Intially will be set to true so only have to test letters for false.
  *Check if character is a letter, if so then:
    - If it the index is at the beginning or end of the string it must be false because "+" wouldn't be on both side.
    - Othewise if the character is not in the beginning or end, test if the "+" is not both sides of the letter.
*/

function SimpleSymbols(str) { 
  var characters=str.split("");
  var result=true;
  
  for(var i=0; i<characters.length;i++){
    if(/[a-z A-Z]/i.test(characters[i])){ // if it is a letter, lowercase/uppercase.
      if(i===0 || i===characters.length-1){ // and if the index is at the beginning or end of the string.
        result=false;
      }else if(characters[i+1] !== "+" || characters[i-1] !== "+") { // or it doesn't have "+" on both sides.
        result=false; 
      }
    }
  }
  
  return result;        
}
