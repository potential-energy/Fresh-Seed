const express = require('express')
const authController = reqiure('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.createUser);

module.exports = router;