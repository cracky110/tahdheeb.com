const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const AuthController = {
    register: async (req, res) => {
        const { username, password } = req.body;
        await User.create(username, password);
        res.status(201).json({ message: 'User registered' });
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user;
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.json({ message: 'Logout successful' });
    }
};

module.exports = AuthController;
