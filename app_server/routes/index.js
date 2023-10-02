require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlBooks = require('../controller/books')
var ctrlOthers = require('../controller/others')

router.get('/', ctrlBooks.homelist);
router.get('/book', ctrlBooks.bookInfo);
router.get('/book2', ctrlBooks.bookInfo2);
router.get('/book3', ctrlBooks.bookInfo3);
router.get('/book4', ctrlBooks.bookInfo4);

router.get('/book/review/new',ctrlBooks.bookReview);
router.get('/book/review/new2',ctrlBooks.bookReview2);
router.get('/book/review/new3',ctrlBooks.bookReview3);
router.get('/book/review/new4',ctrlBooks.bookReview4);

router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlOthers.signin);
router.get('/register', ctrlOthers.register);
module.exports = router;
