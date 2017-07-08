function hamming(string1, string2){

  var charCounter = 0;

  string1.split('');
  string2.split('');

  if (!(string1.length == string2.length)) {
    return 0;
  }
  
  for (var i = 0; i < string1.length; i++) {
    
    if (string1[i] == string2[i]) {
      charCounter += 1;
    }
    
  }

  return charCounter;

}

module.exports = hamming;

