'use strict';
const chai = require('chai');

const User = require('../models/User');


describe('mongoDb', () => {
  it('should be able to create a user called Karl Pilkington', done => {
    let user = new User();
    user.save((err, karl) => {
      karl.firstName.should.equal("Karl");
      karl.lastName.should.equal("Pilkington");
      done();
    });
  });
});
