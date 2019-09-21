const express = require('express');

const displayController = require('../controller/display');

const router = express.Router();

router.get('/', displayController.getData);

module.exports = router;
