const mongoose = require("mongoose");
const moment = require("moment");

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
  date: {
    type: String,
    default: () => moment().format("D MMMM  YYYY, h:mm:ss a"),
  },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
