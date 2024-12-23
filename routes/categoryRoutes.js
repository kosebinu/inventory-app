const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// GET all categories
router.get('/categories', categoryController.getAllCategories);

// POST create a new category
router.post('/categories', categoryController.createCategory);

// POST delete a category
router.post('/categories/:id/delete', categoryController.deleteCategory);

module.exports = router;
