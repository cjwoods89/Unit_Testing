var mountain = require('../mountain');
var chai = require('chai');
var expect = chai.expect;

var mountainHeight = [26545, 28169, 26660, 27825, 26906, 28251, 26795, 29029, 26759, 27940];

describe('tall_mountain()', function() {

    context('when mountain heights are [26545, 28169, 26660, 27825, 26906]', function() {
        it('return 28169 for the highest mountain', function() {
            expect(mountain([26545, 28169, 26660, 27825, 26906])).to.equal(28169);
        });
    });

    context('when mountain heights are [28251, 26795, 29029, 26759, 27940]', function() {
        it('return 29029 for the highest mountain', function() {
            expect(mountain([28251, 26795, 29029, 26759, 27940])).to.equal(29029);
        });
    });

});
