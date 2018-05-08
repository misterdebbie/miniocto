const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const PORT = process.env.PORT || 3000;

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', (req,res) => {
  res.send('Greetings! Let\'s get data from the New York Times');
});*/
app.use('/', require('./routes/news'));

app.get('*',(req,res) => {
  res.status(404).json({
    message: 'whoops, bad request'
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
