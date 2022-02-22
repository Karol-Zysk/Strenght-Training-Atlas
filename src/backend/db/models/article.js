const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "John Doe",
  },
  avatar: {
    type: String,
    default:
      "https://top-ten.tv/wp-content/uploads/2013/03/The-US-Office-Dwight-Schrute.jpg",
  },
  date: { type: String, default: Date },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
