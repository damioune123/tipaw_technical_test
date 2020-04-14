const Contact = require('../models/contacts');
const Joi = require('joi');
const logger = require('../utils/logger');

exports.add = async (req, res, next) => {
    const schema = Joi.object().keys({
        lastName: Joi.string().alphanum().min(1).max(100).required(),
        firstName: Joi.string().alphanum().min(1).max(100).required(),
        email: Joi.string().email().required(),
        messageObject: Joi.string().trim().min(1).max(150).required(),
        messageContent: Joi.string().trim().min(1).max(2000).required(),
        phoneNumber: Joi.string().trim().max(20).allow(''),
    });
    let value;
    try{
        value = await Joi.validate(req.body, schema);
    }catch(error){
        logger.log('error', 'An error occurred while creating a contact',  {error, value: req.body});
        return res.status(400).json(error);
    }
    const newContact = await Contact.create(value);
    const createdContact = await Contact.findById(newContact._id);
    return res.status(201).json(createdContact);
};