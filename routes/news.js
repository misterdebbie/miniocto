const router = require('express').Router();
const controller = require('../controllers/news-controller');

router.get('/', controller.home);
router.get('/view', controller.index);
router.post('/search', controller.results);
router.get('/:id', controller.articleById);

module.exports = router;
