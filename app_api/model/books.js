var mongoose = require('mongoose');


var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: String,
    author_info: String,
    type: String,
    overview: String,
    book_review: String,
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    literary_elements: [String],
    reviews: [reviewSchema]
});


mongoose.model('book', bookSchema);