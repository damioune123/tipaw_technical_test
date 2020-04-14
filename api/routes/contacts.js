const express = require('express');
const router = new express.Router();

const contactsController = require('../controllers/contacts');
// /contacts [POST]
router.route('/').post(contactsController.add);


module.exports = router;
