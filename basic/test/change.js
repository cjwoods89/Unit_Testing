var changeMachine = require('../change');
var chai = require('chai');
var expect = chai.expect;

describe('changeMachine()', function() {

    context('when given 55 dollars', function() {
        it('return bills of: 2 twenties, 1 ten, 1 five, and 0 ones', function() {
            expect(changeMachine(55)).to.eql([ 2, 1, 1, 0]);
        });
    });

    context('when given 39 dollars', function() {
        it('return bills of: 1 twenties, 1 ten, 1 five, and 4 ones', function() {
            expect(changeMachine(39)).to.eql([ 1, 1, 1, 4]);
        });
    });
});

