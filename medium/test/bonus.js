var bonus = require('../bonus');
var chai = require('chai');
var expect = chai.expect;

describe('bonus()', function() {

    context('when the bill is 50$', function() {
        it('return 60', function() {
            expect(bonus(50)).to.equal(60);
        });
    });
    
    context('when the bill is 47.24$', function() {
        it('return 57', function() {
            expect(bonus(47.24)).to.equal(57);
        });
    });

});

