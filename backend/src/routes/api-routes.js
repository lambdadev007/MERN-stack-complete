const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RestHub Crafted with Love, Awesome!'
    });
});

const contactController = require('../controllers/contactController');

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;