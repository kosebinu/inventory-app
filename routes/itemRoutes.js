const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET all items
router.get('/items', itemController.getAllItems);

// POST create a new item
router.post('/items', itemController.createItem);

module.exports = router;
