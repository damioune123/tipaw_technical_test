const mongoose = require('mongoose');

// Schema defines how contacts are stored
const contactSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true,
        maxlength: 200,
    },
    firstName: {
        type: String,
        required: true,
        maxlength: 200,
    },
    email: {
        type: String,
        required: true,
        maxlength: 200,
    },
    messageObject: {
        type: String,
        required: true,
        maxlength: 150,
    },
    messageContent: {
        type: String,
        required: true,
        maxlength: 2000,
    },
    phoneNumber: {
        type: String,
        required: false,
        maxlength: 20,
    },
}, {
    timestamps: true,
});
// *****************************************************************************
// Utils
// *****************************************************************************

const Contact = mongoose.model('Norm', contactSchema);
module.exports = Contact;