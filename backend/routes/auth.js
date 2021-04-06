const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/customer');

const auth = require('../middleware/auth');

const authController = require('../controllers/auth');

router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('username')
       .trim()
       .not()
       .isEmpty()
       .custom(async (username) => {
            const user = await User.findByUserName(username);
            if (user[0].length > 0) {
            return Promise.reject('Username already exist!');
            }
        }),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async (email) => {
            const user = await User.findByEmail(email);
            if (user[0].length > 0) {
            return Promise.reject('Email address already exist!');
            }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
  ],
  authController.signup
);

router.post('/login', authController.login);

router.post('/verify', auth, authController.verify);

module.exports = router;
