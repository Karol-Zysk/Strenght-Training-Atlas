module.exports = {
  port: process.env.PORT || 3001,
  database: process.env.MONGODB_URI || "mongodb://localhost:27017/article",
};