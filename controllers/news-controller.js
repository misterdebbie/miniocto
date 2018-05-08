const axios = require('axios');
const Article = require('../models/article');
const controller = {};

controller.home = (req,res) => {
  res.render('home');
};

controller.results = (req,res) => {
  console.log('results method!');
  axios({
    method: 'get',
    url: `https://api.nytimes.com/svc/topstories/v2/${req.body.section}.json?api-key=${process.env.API_KEY}`
 })
  .then(data  => {
    console.log('here is the data', data.data);
    res.render ('results', {
      data: data.data
    })
  }).catch(err => {
    debugger;
    console.log(err);
    res.status(500).json(err)
  })
};

controller.index = (req,res) => {
  Article.findAll()
  .then(articles => {
    res.render('found', {
      articles: articles
    })
  }).catch(err => {
    res.status(400).json(err);
  });
};

controller.articleById = (req,res) => {
  Article.findById(req.params.id)
    .then(article => {
      res.render('show', {
        article: article
      })
    }).catch(err => {
      res.status(400).json(err);
    });
};

controller.edit = (req,res) => {
  Article.findById(req.params.id)
    .then(article => {
      res.render('edit', {
        article:article
      })
    }).catch(err => {
      res.status(400).json(err);
    });
};

controller.update = (req,res) => {
  Article.update({
    title: req.body.title,
    thoughts: req.body.thoughts
  }, req.params.id)
  .then(() => {
    res.redirect(`/${req.params.id}`)
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

module.exports = controller;
