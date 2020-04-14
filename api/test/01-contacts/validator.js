const should = require('should');

/**
 * Contacts validator
 */
const validator = {

    /**
     * checks if creating a new contact works
     * @param {Object} res - result if request is good
     * @param {Object} contact - mock contact
     */
    newContact: (res, contact) => {
        Object.keys(contact).forEach((key)=>{
           res.body[key].should.equal(contact[key]);
        });
    },
};

module.exports = validator;
