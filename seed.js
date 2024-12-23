const sequelize = require('./models/index');
const Category = require('./models/category');
const Item = require('./models/item');

const seedDatabase = async () => {
    await sequelize.sync();
    const category = await Category.create({ name: 'Electronics', description: 'Gadgets and devices' });
    await Item.create({ name: 'Laptop', description: 'Gaming Laptop', price: 1500, CategoryId: category.id });
    console.log('Database seeded!');
};

seedDatabase();
