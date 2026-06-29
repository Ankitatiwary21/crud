const express = require('express');
const router = express.Router();

// Change this depending on your folder structure
const User = require('./user'); // or '../models/User'

// @route   POST api/users
// @desc    Register user
router.post('/', async (req, res) => {
    const { name, email } = req.body;

    try {
        const user = new User({
            name,
            email
        });

        await user.save();

        res.send('User registered');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/users
// @desc    Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;   