var express = require('express');
var router = express.Router();
var ctrlBooks = require('../controller/books');
var ctrlReviews = require('../controller/reviews');
router.get('/books', ctrlBooks.booksList);
router.post('/books', ctrlBooks.booksCreate);
router.get('/books/:bookId', ctrlBooks.booksReadOne);
router.put('/books/:bookId', ctrlBooks.booksUpdateOne);
router.delete('/books/:bookId', ctrlBooks.booksDeleteOne);
// reviews
router.post('/books/:bookId/reviews', ctrlReviews.reviewsCreate);
router.get('/books/:bookId/reviews/:reviewId',ctrlReviews.reviewsReadOne);
router.put('/books/:bookId/reviews/:reviewId',ctrlReviews.reviewsUpdateOne);
router.delete('/books/:bookId/reviews/:reviewId',ctrlReviews.reviewsDeleteOne);

module.exports = router;