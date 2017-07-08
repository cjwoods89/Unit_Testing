var palindromeChecker = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('palindromeChecker()', function() {

    context('when checking racecar for palindrome validity', function() {
        it('return true', function() {
            expect(palindromeChecker("racecar")).to.equal(true);
        });
    });

    context('when checking mom for palindrome validity', function() {
        it('return true', function() {
            expect(palindromeChecker("mom")).to.equal(true);
        });
    });

    context('when checking anna for palindrome validity', function() {
        it('return true', function() {
            expect(palindromeChecker("anna")).to.equal(true);
        });
    });
    
});

