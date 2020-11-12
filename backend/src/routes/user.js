const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const userController = require('../controllers/userController');


router.route('/users/register')
    .post(userController.register);

router.route('/users/login')
    .post(userController.login);

router.route('/users/me').all(auth)
    .get(userController.user);

router.route('/users/email')
    .get(userController.emailExists);

router.route('/users/me/logout').all(auth)
    .post(userController.logout);

router.route('/users/me/logoutall').all(auth)
    .post(userController.logout_all);

module.exports = router;