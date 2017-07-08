function palindromeCheck(word){

  if (word.split('').reverse().join('') == word) {
    return true;
  } 
  
  return false;

}

module.exports = palindromeCheck;