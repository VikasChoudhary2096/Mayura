const { validationResult } = require('express-validator');

const Transaction = require('../models/transaction');

const PdfCreate = require('../util/createPdf');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allTransaction] = await Transaction.fetchAll(req.userId);
    res.status(200).json(allTransaction);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.fetchPdf = async (req, res, next) => {
  try {
    
    const [allTransaction] = await Transaction.fetchAll(req.userId);
    const pdfLink = await PdfCreate(req.userId, allTransaction);
    
    const responseBody = {
      "summary": pdfLink
    };

    res.status(200).json(responseBody);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postTransaction = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  };

  const transferor_id = req.body.transferor_id;
  const transferee_id = req.body.transferee_id;
  const amount = req.body.amount;

  try {
    const transaction = {
      transferor_id: transferor_id,
      transferee_id: transferee_id,
      amount: amount,
    };
    const result = await Transaction.transact(transaction);
    res.status(201).json({ message: 'Transaction Complete!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
