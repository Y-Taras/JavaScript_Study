/*
  Challenge:
  Using the JavaScript language, have the function CheckNums(num1,num2) 
  take both parameters being passed and return the string true if num2 
  is greater than num1, otherwise return the string false. If the parameter 
  values are equal to each other then return the string -1.
  
  Challenge: ACCEPTED.
  I found 3 possible ways to solve this. I wanted to try different ways of 
  solving the same problems and practice my problem solving skills + fun.
  
  First way(least complicated):
  * For hours simply divide number entered by 60.
  * Roundown with Math.floor() to delete remainder.
  * For minutes by using modulus we know if num goes evenly into 60, 
    there are no minutes, if it doesn't, will be minutes. 
*/

function TimeConvert(num) { 
	var hours=Math.floor(num/60); // Sometimes returns remainder. Math.floor rounds down, deleting this remainder.
  var minutes= num % 60;// remainder is minutes.
  
	return hours + ":" + minutes;
}

/* 
  More complicated way:
  * By using a while loop we make sure that as long as the number is greater than or = to 60
    one more hour will be added.
  * If the number is less than 60, or eventually after it's gone through the while loop,
    this must be the minutes.
*/

function TimeConvert(num) { 
    var hours=0;
    var minutes=0;

    while(num>=60) {
        hours+=1;
        num-=60;
    }

    if(num<60){
      minutes=num;
    }

    return(hours + ":" + minutes);          
}

/*
  Even more complicated way(How I originally solved it):
    * Also found on [Stack Overflow](http://stackoverflow.com/questions/34042206/timeconvert-javascript-function-on-coderbyte/34042320#34042320).
    * Loop through the num every 60. 
    * For every 60, add an hour, and subtract 60 for every iteration so num doesn't start over but goes every 60.
    * Once num gets down to less than 60, this number must be minutes.
*/
    
function TimeConvert(num) { 
  var hours=0;
  var minutes=0;

  for(var i=0; i<=num; i++) {
    if(num>=60) { //for every 60 add 1 hour
      hours+=1;
      num-=60;//makes sure that the loop goes every 60
    }else if(num<60){
      minutes=num;
    }
  }
  
  /*
  For extra style. Coderbyte won't accept though because they want 2:3 not 2:03:
  
  var newMinute=0;
  if (minutes<10){
    newMinutes="0"+minutes;
  }else if(minutes>10){
    newMinutes=minutes;
  }
    
  */
  
  return(hours + ":" + newMinutes); 
}
