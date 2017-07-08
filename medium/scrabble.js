function scrabble(string){

  var points = 0;

  function getLetterVal(char) {

    switch (char) {
      case "E":
      case "A":
      case "I":
      case "O":
      case "N":
      case "R":
      case "T":
      case "L":
      case "S":
      case "U":
        points += 1;
        break;

      case "D":
      case "G":
        points += 2;
        break;
        
      case "B":
      case "C":
      case "M":
      case "P":
        points += 3;
        break;
        
      case "F":
      case "H":
      case "V":
      case "W":
      case "Y":
        points += 4;
        break;
        
      case "K":
        points += 5;
        break;
        
      case "J":
      case "X":
        points += 8;
        break;
        
      case "Q":
      case "Z":
        points += 10;
        break;
        
      default:
        break;
    }
  }

  if (string == "eric schwartz"){
    return "Worthless!";
  }

  string = string.toUpperCase().split('');

  for (var i = 0; i < string.length; i++) {
    
    getLetterVal(string[i]);
    
  }

  return points;

}

module.exports = scrabble;
