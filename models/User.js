const mongoose = require('../db');

const userSchema = {
  firstName: { type: String, default: 'Karl' },
  lastName: { type: String, default: 'Pilkington' }
}

module.exports = mongoose.model('User', userSchema);
