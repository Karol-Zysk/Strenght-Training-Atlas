const express = require("express");
const router = express.Router();
const ArticleActions = require("../actions/api/articleActions");
const User = require("../db/models/user");
const jwt = require('jsonwebtoken')

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

router.post("/register", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicated email" });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

router.get("/name", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await User.findOne({
      email: email,
    });

    return res.json({ status: "ok", name: user.name });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});

module.exports = router;
