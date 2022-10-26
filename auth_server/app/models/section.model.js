const mongoose = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      questions: [String],
      answers: [String]
    }
  )
  return Section;

};
