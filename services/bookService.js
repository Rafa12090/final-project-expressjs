const axios = require('axios');

exports.getAllBooks = async () => {
    const response = await axios.get('https://api.example.com/books');
    return response.data;
};

exports.getBookByISBN = (isbn) => {
    return axios.get(`https://api.example.com/books/${isbn}`)
        .then(response => response.data)
        .catch(error => { throw new Error('Failed to get book by ISBN'); });
};

exports.getBooksByAuthor = async (author) => {
    const response = await axios.get(`https://api.example.com/books?author=${author}`);
    return response.data;
};

exports.getBooksByTitle = async (title) => {
    const response = await axios.get(`https://api.example.com/books?title=${title}`);
    return response.data;
};

exports.getBookReview = async (isbn) => {
    const response = await axios.get(`https://api.example.com/books/${isbn}/reviews`);
    return response.data;
};
