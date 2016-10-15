'use strict';
const chai = require('chai');
const expect = chai.expect;
chai.should();

function isEven(num) {
  return num % 2 === 0;
}

describe('isEven', () => {
  it('should return true when the number is even', () => {
    isEven(10).should.be.true;
  });
  it('should return false when the number is odd', () => {
    isEven(3).should.be.false;
  });
});
