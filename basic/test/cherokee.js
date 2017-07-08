var cherokeeHare = require('../cherokee');
var chai = require('chai');
var expect = chai.expect;

describe('cherokeeHare()', function() {

    context('when starting population, birth rate, and number of weeks is: 200, 0.1, 5', function() {
        it('return 322.102', function() {
            expect(cherokeeHare(200, 0.1, 5)).to.equal(322.102);
        });
    });

    context('when starting population, birth rate, and number of weeks is: 325, 0.5, 3', function() {
        it('return 1096.875', function() {
            expect(cherokeeHare(325, 0.5, 3)).to.equal(1096.875);
        });
    });

});

