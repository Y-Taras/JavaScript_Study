/* 
  Challenge:
  Using the JavaScript language, have the function ExOh(str) take the str
  parameter being passed and return the string true if there is an equal number
  of x's and o's, otherwise return the string false. Only these two letters will
  be entered in the string, no punctuation or numbers. For example: if str is
  "xooxxxxooxo" then the output should return false because there are 6 x's
  and 5 o's.
  
  Challenge: ACCEPTED.
  I found two ways to solve this.
  First way(simpler):
  * Create a count for x and y with variables.
  * Loop through string.
    - If character matches x or o, add point to corresponding variable.
  * After loop, test both counts and return true if they are the same amount.
*/

function ExOh(str) {
  var xCount=0
  var oCount=0;
  
  for(var i=0; i<str.length; i++) {  
    if(str[i] === "x") {
      xCount+=1;
    }else if(str[i] === "o") { // I could have just put "else" here since input will always be x's and os'.
      oCount+=1;
    }
 }

  return xCount === oCount ? true : false; // a simpler if else statement. boolean question ? if true : if false
}

/*
Second way(more complex. Using regExp and objects):
  * Create an object that will store x and o count.
  * Loop through string.
    - Use regExp to test if character in string is x or o.
    - Add corresponding point to x or o count property.
  * After loop, test both object properties and return true if they are the same amount.
*/

function ExOh(str) {
  var count = {
    xCount:0, 
    oCount:0
  }
  for(var i=0; i<str.length; i++) {  
    if(/x/.test(str[i])) {
      count.xCount+=1;
    }else if(/o/.test(str[i])) { 
      count.oCount+=1;
    }
 }

  return count.xCount === count.oCount ? true : false;
}

// TESTS
console.log(ExOh("xooxxo")); // true
console.log(ExOh("x")); // false
