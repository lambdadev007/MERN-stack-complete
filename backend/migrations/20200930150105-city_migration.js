module.exports = {
  async up(db) {
    await db.collection('cities').drop();

    return await db.createCollection('cities', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: [ 'name', 'state_code' ],
          properties: {
            name: {
              bsonType: 'string',
            },
            state_code: {
              bsonType: 'string',
            }
          },
        },
      },
      validationLevel: 'strict',
      validationAction: 'error',
    })
  },
  async down(db) {
    return await db.collection('cities').drop()
  },
};
