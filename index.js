const express = require('express');
const connectDB = require('./db.js');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Register Routes
app.use('/api/users', require('./userdata'));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));