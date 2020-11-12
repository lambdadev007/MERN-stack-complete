const cities = require('./dataset/cities.json');

module.exports = {
  async up(db) {
    return await db.collection('cities').insertMany(cities, {});
  },
  async down(db) {
    return await db.collection('cities').deleteMany({});
  },
};
