var mongoose = require('mongoose');
var Loc = mongoose.model('book');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
  
module.exports.booksCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
  
module.exports.booksList = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.booksReadOne = async function (req, res) {
  try {
    const book = await
    Loc.findById(req.params.bookId).exec();
    sendJsonResponse(res, 200, book);
    console.log(book)
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: 'An error occurred' });
  }
};
  
module.exports.booksUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.booksDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};