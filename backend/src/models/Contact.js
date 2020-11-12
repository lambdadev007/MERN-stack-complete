var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    website: {
        type: String
    }
});

contactSchema.statics.findAll = async () => {
    const contacts = await Contact.find({});

    if (!contacts) {
        throw new Error('contacts not found');
    }

    return contacts;
}

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;