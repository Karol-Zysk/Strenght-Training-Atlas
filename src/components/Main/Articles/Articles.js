import React from "react";
import style from "./Articles.module.css";
import Article from "./Article/Article";
import NewArticle from "./Article/NewArticle";
import EditArticle from "./Article/EditArticle";
import logo from "./logo.PNG";
import Modal from "react-modal";
import axios from "../../../axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],

      showEditModal: false,
      editArticle: {},
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    const response = await axios.get("/articles");
    const articles = response.data;

    this.setState({ articles });
  }

  async deleteArticle(_id) {
    const articles = [...this.state.articles].filter(
      (article) => article._id !== _id
    );

    await axios.delete("/articles/" + _id);

    this.setState({ articles });
  }

  async addArticle(article) {
    const articles = [...this.state.articles];

    try {
      const response = await axios.post("/articles", article);
      const newArticle = response.data;

      articles.push(newArticle);
      this.setState({ articles });
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  async editArticle(article) {
    // edit backend
    await axios.put("/articles/" + article._id, article);

    // edit frontend
    const articles = [...this.state.articles];
    const index = articles.findIndex((x) => x._id === article._id);
    if (index >= 0) {
      articles[index] = article;
      this.setState({ articles });
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      showEditModal: !this.state.showEditModal,
    });
  }

  editArticleHandler(article) {
    this.toggleModal();
    this.setState({ editArticle: article });
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.article_card}>
          <img src={logo} alt="img" className={style.article_card_logo}></img>

          <NotificationContainer />
          <p>Articles</p>
          <NewArticle onAdd={(article) => this.addArticle(article)} />
          <Modal
            isOpen={this.state.showEditModal}
            ariaHideApp={false}
            contentLabel="Edit Article"
          >
            <EditArticle
              title={this.state.editArticle.title}
              body={this.state.editArticle.body}
              _id={this.state.editArticle._id}
              onEdit={(article) => this.editArticle(article)}
            />
            <button onClick={() => this.toggleModal()}>Cancel</button>
          </Modal>
          {this.state.articles.map((article) => (
            <Article
              key={article._id}
              title={article.title}
              body={article.body}
              _id={article._id}
              onEdit={(article) => this.editArticleHandler(article)}
              onDelete={(_id) => this.deleteArticle(_id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Articles;
