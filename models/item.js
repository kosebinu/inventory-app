const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Category = require('./category'); // Import the Category model

// Define the Item model
const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Item name cannot be empty.',
            },
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true, // Description is optional
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: {
                msg: 'Price must be a valid number.',
            },
            min: {
                args: [0],
                msg: 'Price must be a positive value.',
            },
        },
    },
});

// Define relationships
Item.belongsTo(Category, {
    onDelete: 'CASCADE', // Delete items if the associated category is deleted
    foreignKey: 'CategoryId', // Foreign key in the items table
});
Category.hasMany(Item, {
    foreignKey: 'CategoryId', // Foreign key in the items table
});

// Export the model
module.exports = Item;
