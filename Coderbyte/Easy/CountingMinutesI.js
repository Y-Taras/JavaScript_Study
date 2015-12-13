/*
  Challenge:
  Using the JavaScript language, have the function CountingMinutesI(str) take the
  str parameter being passed which will be two times (each properly formatted with
  a colon and am or pm) separated by a hyphen and return the total number of
  minutes between the two times. The time will be in a 12 hour clock format.
  For example: if str is 9:00am-10:00am then the output should be 60.
  If str is 1:00pm-11:00am the output should be 1320.
  
  Challenge: ACCEPTED.
  
  
  Currently:In progress.. http://jsfiddle.net/tzm58d1L/6/
*/

function CountingMinutesI(str){
	var times=str.split("-"); // ["9:00am", "10:00am"]
  var newTime1=times[0].split(":"); // ["9", "00am"]
  var newTime2=times[1].split(":"); // ["10", "00am"]
  var hours1= newTime1[0].slice(0) * 60; // 9 * 60
  var hours2= newTime2[0].slice(0) * 60; // 10 * 60
  var minutes1= newTime1[1].slice(0,2) % 60; // 00 % 60 
  var minutes2= newTime2[1].slice(0,2) % 60; // 00 % 60 
  var hoursResult=0;
  var minutesResult=0;
  
  if(newTime1[1].slice(2,4) === newTime2[1].slice(2,4)){ // if both have am or both have pm.
  	if(hours1>hours2){ // if second time smaller than first number means second number is in next 12 hours.
    	hoursResult=hours1
    }else{ // .
    	hoursResult=hours1-hours2;
    }
    
    if(minutes1>minutes2){ // makes sure no negatives.
    	minutesResult=minutes1-minutes2;
    }else{
    	minutesResult=minutes2-minutes1;
    }
    
    return hoursResult + minutesResult;
  }else if(newTime1[1].slice(2,4) !== newTime2[1].slice(2,4)) // if one has pm and other am and viceversa.
  	
  
  }

}

// TESTS
console.log("----");
console.log(CountingMinutesI("9:00am-10:00am")); // 60
console.log(CountingMinutesI("1:00pm-11:00am")); // 1320
console.log(CountingMinutesI("12:30pm-12:00am")); // 690
console.log(CountingMinutesI("1:23am-1:08am")); // 1425
