const db = require('../db/config');
const Article = {};

Article.findAll = () => {
  return db.query('SELECT * FROM articles');
};

module.exports = Article;
