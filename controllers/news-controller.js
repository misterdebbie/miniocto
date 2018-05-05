const axios = require('axios');
const controller = {};

controller.home = (req,res) => {
  res.render('home');
};

controller.results = (req,res) => {
  console.log('results method!');
  axios({
    method: 'get',
    url: `https://api.nytimes.com/svc/topstories/v2/tmagazine.json?api-key=${process.env.API_KEY}`
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
module.exports = controller;