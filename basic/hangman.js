function hangmanGuess(hangman_word, guessed_letter) {

    // if ( hangman_word.indexOf(guessed_letter) < 0) {
    //     return false;
    // } 
    
    // return true;  

    return hangman_word.indexOf(guessed_letter) < 0 ? true : false;

}

module.exports = hangmanGuess;

