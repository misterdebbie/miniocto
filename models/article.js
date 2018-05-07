const db = require('../db/config');
const Article = {};

Article.findAll = () => {
  return db.query('SELECT * FROM articles');
};

Article.findById = id => {
  return db.oneOrNone(`SELECT * FROM articles WHERE id = $1`,
  [id]);
};


module.exports = Article;
