var hangman = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('hangman()', function() {

    context('when hangman word is javascript and we guess the letter a', function() {
        it('return true', function() {
            expect(hangman("javascript","a")).to.equal(true);
        });
    });

    context('when hangman word is texas and we guess the letter z', function() {
        it('return true', function() {
            expect(hangman("texas","z")).to.equal(false);
        });
    });

});
