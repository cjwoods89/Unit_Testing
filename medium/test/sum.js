var sumChecker = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('sumChecker()', function() {

    context('when adding 1, 2, and 3', function() {
        it('return 6', function() {
            expect(sumChecker(1,2,3)).to.equal(6);
        });
    });

    context('when adding 50, 25, 25', function() {
        it('return 100', function() {
            expect(sumChecker(50, 25, 25)).to.equal(100);
        });
    });
    
});

