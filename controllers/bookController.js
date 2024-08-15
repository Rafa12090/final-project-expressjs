const bookService = require('../services/bookService');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get books' });
    }
};

exports.getBookByISBN = (req, res) => {
    const { isbn } = req.params;
    bookService.getBookByISBN(isbn)
        .then(book => res.json(book))
        .catch(error => res.status(500).json({ error: 'Failed to get book by ISBN' }));
};

exports.getBooksByAuthor = async (req, res) => {
    try {
        const { author } = req.params;
        const books = await bookService.getBooksByAuthor(author);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get books by author' });
    }
};

exports.getBooksByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const books = await bookService.getBooksByTitle(title);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get books by title' });
    }
};

exports.getBookReview = async (req, res) => {
    try {
        const { isbn } = req.params;
        const reviews = await bookService.getBookReview(isbn);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get book reviews' });
    }
};
