const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const token = await userService.loginUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: 'Failed to login user' });
    }
};

exports.addBookReview = async (req, res) => {
    try {
        const { isbn } = req.params;
        const review = await userService.addBookReview(req.user, isbn, req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add book review' });
    }
};

exports.deleteBookReview = async (req, res) => {
    try {
        const { isbn } = req.params;
        await userService.deleteBookReview(req.user, isbn);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book review' });
    }
};
