const User = require('../models/userModel');

exports.register = (req, res) => {
    User.register(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.login = (req, res) => {
    User.login(req.body, (err, user) => {
        if (err) return res.status(500).json(err);
        if (!user) return res.status(400).json({ message: "Invalid credentials" });
        res.json(user);
    });
};
