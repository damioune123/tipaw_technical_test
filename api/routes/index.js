const express = require('express');
const router = new express.Router();

router.use('/contacts', require('./contacts'));

module.exports = router;
