/*
  Challenge:
  Using the JavaScript language, have the function PrimeMover(num) 
  return the numth prime number. The range will be from 1 to 10^4. 
  For example: if num is 16 the output should be 53 as 53 is the 
  16th prime number. 

  Challenge: ACCEPTED.
  * First store all possible primes from 2 to 10^4(10,000) in an array.
  * To store only primes use the same thinking as the PrimeTime challenge
    by looping over each number from 2 to 10,000 and checking each one if
    it is a prime number or not.
  * If it is prime push the the number into primeArr.
  * Now you can find the exact location of the prime number needed by simply
    accessing it with the num. Make sure to add -1 because in an array count
    starts at 0, thus the result will be one prime after the answer.
*/
function PrimeMover(num){
  var primeArr=[];
	
  for(var i=2; i<=10000; i++){
    var isPrime=true;
    
    for(var j=2; j<=i; j++){
      if(i/j === Math.round(i/j) && i !==j){ 
        isPrime=false;
      }
    }
    
    if(isPrime === true){
      primeArr.push(i);
    }
  	
  }
	
  return primeArr[num-1]; // -1 because it counts the first item as 0 in array.
}

/*
  Another way to solve is when and how you choose to return. This way may 
  be more efficient and faster since not all primes from 2-10,000 have to be
  printed to find the answer.
*/

function PrimeMover(num){
  var primeArr=[]; // or var count =0;
	
  for(var i=2; i<=10000; i++){
    var isPrime=true;
    
    for(var j=2; j<=i; j++){
      if(i/j === Math.round(i/j) && i !==j){ 
      	isPrime=false;
      }
    }
    
    if(isPrime === true){
      primeArr.push(i); // or count+=1;
      
      // if num === the amount in array, we have arrived!
      if(num === primeArr.length){ // or if(num===count)
      	return i;
      }
    }
  	
  }
	
}
// TESTS
console.log("---");
console.log(PrimeMover(16)); // 53
console.log(PrimeMover(9)); // 23
console.log(PrimeMover(100)); // 541
