const Item = require('../models/item');
const Category = require('../models/category');

// GET all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll({ include: Category });
        const categories = await Category.findAll();
        res.render('items', { items, categories });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('An error occurred while fetching items.');
    }
};

// POST create a new item
exports.createItem = async (req, res) => {
    try {
        const { name, description, price, categoryId } = req.body;
        await Item.create({ name, description, price, CategoryId: categoryId });
        res.redirect('/items'); // Redirect to the items page after adding
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).send('An error occurred while creating the item.');
    }
};
