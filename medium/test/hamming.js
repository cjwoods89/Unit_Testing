var hammingCounter = require('../hamming');
var chai = require('chai');
var expect = chai.expect;

describe('hammingCounter()', function() {

    context('when string1 is "test" and string2 is "fell"', function() {
        it('return 1', function() {
            expect(hammingCounter("test", "fell")).to.equal(1);
        });
    });

    context('when string1 is "toast" and string2 is "bread"', function() {
        it('return 0', function() {
            expect(hammingCounter("toast", "bread")).to.equal(0);
        });
    });

    context('when string1 is "goat" and string2 is "man"', function() {
        it('return 0', function() {
            expect(hammingCounter("goat", "man")).to.equal(0);
        });
    });

});

