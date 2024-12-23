const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./models/index');
const categoryRoutes = require('./routes/categoryRoutes');
const itemRoutes = require('./routes/itemRoutes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Renders the 'index.ejs' file in the /views folder
});
app.use(categoryRoutes);
app.use(itemRoutes);

// Sync database and start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
