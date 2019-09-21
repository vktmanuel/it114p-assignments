const express = require('express');
const router = express.Router();

const dataController = require('../controller/data');

// add-product => GET
router.get('/add-data', dataController.getAddData);

// add-product => POST
router.post('/add-data', dataController.postAddData);

exports.routes = router;
