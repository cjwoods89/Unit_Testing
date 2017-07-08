function pokemonCounter(caughtArray){

  var pokeCount = 0;
 
  for (var i = 0; i < caughtArray.length; i++) {
    
   pokeCount += caughtArray[i];
   console.log(pokeCount);

  }

  return pokeCount;

}

module.exports = pokemonCounter;

