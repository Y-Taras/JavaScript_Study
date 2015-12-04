/* 
  Challenge:
  Using the JavaScript language, have the function ABCheck(str) take the str
  parameter being passed and return the string true if the characters a and b
  are separated by exactly 3 places anywhere in the string at least once
  (ie. "lane borrowed" would result in true because there is exactly three
  characters between a and b). Otherwise return the string false. 
  
  Challenge: ACCEPTED.
  I figured out two ways to solve this challenge.
  
  The initial way I solved it:
    * Set to false, and test for true (assuming every input will have "a" and "b" letters).
    * Split the string into characters and lowercase them.
    * Loop through the characters.
      - If find "a" letter and the letter is 3 spaces in front of or 3 space behind "b" set to true.
      - If find "b", do the same(I later found this part was redundant, so I commented it out). 
*/

function ABCheck(str){
  var chars = str.toLowerCase().split("");
	var result=false;
  
  for(var i=0; i<chars.length; i++) {
  	if(chars[i] === "a") { //assuming all inputs are lowercase
    	if("b" === chars[i+4] || "b" === chars[i-4]){
      	result=true;
    	}
  	}
  	/* 
  	
  	else if(chars[i] === "b"){
      if("a" === chars[i+4] || "a" === chars[i-4]){
      	result=true;
  		}
  	}
  	*/
  }

  return result;
}

/*
  A much easier and cleaner solution using regExp. 
  THIS IS AWESOME!!!
*/

function ABCheck(str){
  var chars = str.toLowerCase().split("");
	return /a...b/.test(str) || /b...a/.test(str);
}
