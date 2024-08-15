const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/:isbn/review', userController.addBookReview);
router.delete('/:isbn/review', userController.deleteBookReview);

module.exports = router;
