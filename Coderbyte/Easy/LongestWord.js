


function LongestWord(sen) { 
  var words=sen.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
  var theLongestWord="";
  	
  words.forEach(function(word){
    if(word.length === theLongestWord.length) {
      theLongestWord=theLongestWord;
    }else if(word.length>theLongestWord.length) {
      theLongestWord=word;
    }else if(word.length<theLongestWord.length){
      theLongestWord=theLongestWord; 
    }

  })
   
  return theLongestWord; 
}
