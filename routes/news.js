const router = require('express').Router();
const controller = require('../controllers/news-controller');

router.get('/', controller.home);
router.get('/view', controller.index);
router.get('/account', controller.account);

router.put('/:id', controller.update);
router.post('/search', controller.results);
router.get('/:id', controller.articleById);
router.get('/:id/edit', controller.edit);

module.exports = router;
