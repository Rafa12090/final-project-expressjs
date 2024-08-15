const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = []; // Temporary storage, replace with DB in production

exports.registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = { username: userData.username, password: hashedPassword };
    users.push(user);
    return user;
};

exports.loginUser = async (loginData) => {
    const user = users.find(u => u.username === loginData.username);
    if (user && await bcrypt.compare(loginData.password, user.password)) {
        const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' });
        return token;
    } else {
        throw new Error('Authentication failed');
    }
};

exports.addBookReview = async (user, isbn, reviewData) => {
    // Add review logic, e.g., storing in DB
    return { user, isbn, review: reviewData };
};

exports.deleteBookReview = async (user, isbn) => {
    // Delete review logic
};
