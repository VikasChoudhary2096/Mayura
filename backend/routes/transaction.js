const express = require('express');

const { body } = require('express-validator');

const transactionController = require('../controllers/transaction');

const transaction = require('../middleware/transaction');

const router = express.Router();

router.get('/', transaction, transactionController.fetchAll);

router.post('/new', transaction, transactionController.postTransaction);

module.exports = router;
