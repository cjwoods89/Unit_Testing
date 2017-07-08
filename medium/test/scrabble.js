var scrabble = require('../scrabble');
var chai = require('chai');
var expect = chai.expect;

describe('scrabble()', function() {

    context('when the word is "scrabble"', function() {
        it('return 14', function() {
            expect(scrabble("scrabble")).to.equal(14);
        });
    });

    context('when the word is "oxyphenbutazone"', function() {
        it('return 41', function() {
            expect(scrabble("oxyphenbutazone")).to.equal(41);
        });
    });

    context('when the word is "eric schwartz"', function() {
        it('return Worthless!', function() {
            expect(scrabble("eric schwartz")).to.equal("Worthless!");
        });
    });

});

