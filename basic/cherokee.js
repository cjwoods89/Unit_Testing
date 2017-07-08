function cherokeeHare(startingPopulation, birthRate, numberOfWeeks) {

    var newPopulation = startingPopulation;

    for (var i = 1; i <= numberOfWeeks; i++) {

        newPopulation = (newPopulation * birthRate) + newPopulation;

    }

    return newPopulation;
     
}

module.exports = cherokeeHare;


