module.exports = {
  async up(db) {
    await db.collection('states').drop();

    return await db.createCollection('states', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: [ 'name', 'abbreviation' ],
          properties: {
            name: {
              bsonType: 'string',
            },
            abbreviation: {
              bsonType: 'string',
            }
          },
        },
      },
      validationLevel: 'strict',
      validationAction: 'error',
    });
  },
  async down(db) {
    return await db.collection('states').drop()
  },
};
