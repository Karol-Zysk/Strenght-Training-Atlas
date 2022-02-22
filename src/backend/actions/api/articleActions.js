const Article = require("../../db/models/article");

class ArticleActions {
  async saveArticle(request, response) {
    const title = request.body.title;
    const body = request.body.body;

    let article;

    try {
      article = new Article({ title, body });
      await article.save();
    } catch (err) {
      return response.status(422).json({ message: err.message });
    }

    response.status(200).json(article);
  }
  async getAllArticles(request, response) {
    const doc = await Article.find({});

    response.status(200).json(doc);
  }

  //pobranie jednego artykułu
  async getOneArticle(request, response) {
    const id = request.params.id;
    const article = await Article.findOne({ _id: id });
    response.status(200).json(article);
  }

  //aktualizacja
  async updateArticle(request, response) {
    const id = request.params.id;
    const title = request.body.title;
    const body = request.body.body;

    const article = await Article.findOne({ _id: id });
    article.title = title;
    article.body = body;
    try {
      await article.save();
    } catch (err) {
      return response.status(422).json({ message: err.message });
    }
    response.status(201).json(article);
  }

  //usunięcie
  async deleteArticle(request, response) {
    const id = request.params.id;
    await Article.deleteOne({ _id: id });

    response.sendStatus(204);
  }
}

module.exports = new ArticleActions();
