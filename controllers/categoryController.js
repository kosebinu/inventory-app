const Category = require('../models/category');
const Item = require('../models/item');

// GET all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [
                {
                    model: Item, // Include associated items
                },
            ],
        });
        res.render('categories', { categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).send('An error occurred while fetching categories.');
    }
};

// POST create a new category
exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        await Category.create({ name, description });
        res.redirect('/categories');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the category.');
    }
};

// POST delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const { adminPassword } = req.body;
        const { id } = req.params;

        // Check if admin password matches
        if (adminPassword === process.env.ADMIN_PASSWORD) {
            await Category.destroy({ where: { id } });
            res.redirect('/categories');
        } else {
            res.status(403).send('Unauthorized: Incorrect admin password.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the category.');
    }
};
