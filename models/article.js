const db = require('../db/config');
const Article = {};

Article.findAll = () => {
  return db.query('SELECT * FROM articles');
};

Article.findById = id => {
  return db.oneOrNone(`SELECT * FROM articles WHERE id = $1`,
  [id]);
};

Article.update = (article, id) => {
  return db.none(
    `
      UPDATE articles SET
      title = $1,
      thoughts = $2
      WHERE id = $3
    `,
    [article.title, article.thoughts, id]
  );
};


module.exports = Article;
