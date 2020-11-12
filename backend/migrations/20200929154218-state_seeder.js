const states = require('./dataset/states.json');

module.exports = {
  async up(db) {
    return await db.collection('states').insertMany(states, {});
  },
  async down(db) {
    return await db.collection('states').deleteMany({});
  },
};
