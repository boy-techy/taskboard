const express = require('express');
const User = require('../../server/api/employee');
const router = express.Router();

router.use('/user',User);

module.exports = router;