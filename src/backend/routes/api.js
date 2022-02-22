const express = require("express");
const router = express.Router();
const ArticleActions = require("../actions/api/articleActions");

//pobieranie wszystkich
router.get("/articles", ArticleActions.getAllArticles);

//pobieranie jednej
router.get("/articles/:id", ArticleActions.getOneArticle);

//dodawanie
router.post("/articles", ArticleActions.saveArticle);

//edytowanie
router.put("/articles/:id", ArticleActions.updateArticle);

//usuwanie
router.delete("/articles/:id", ArticleActions.deleteArticle);

module.exports = router;
