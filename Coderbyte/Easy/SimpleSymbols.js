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
  *Intially will be set to true so only have to test letters for false.
  *Check if character is a letter, if so then:
    - if the "+" is missing on either side return false.
*/

function SimpleSymbols(str) { 
	for(var i=0; i<str.length;i++){
    	if(/[a-z]/.test(str[i])){
        	if(str[i+1]!=="+" || str[i-1] !== "+"){
              	return false;
            }
        }
    }
    return true;     
}

