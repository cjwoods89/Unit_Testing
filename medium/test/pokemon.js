var pokemonCounter = require('../pokemon');
var chai = require('chai');
var expect = chai.expect;

describe('pokemonCounter()', function() {

    context('when you catch [1, 5, 7, 2] pokemon', function() {
        it('return 15', function() {
            expect(pokemonCounter([1, 5, 7, 2])).to.equal(15);
        });
    });

    context('when you catch [0, 5, 7, 0] pokemon', function() {
        it('return 15', function() {
            expect(pokemonCounter([1, 5, 7, 2])).to.equal(15);
        });
    });

});

