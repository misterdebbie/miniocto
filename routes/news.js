const router = require('express').Router();
const controller = require('../controllers/news-controller');

router.get('/', controller.home);
router.post('/search', controller.results);

module.exports = router;
