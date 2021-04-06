const { validationResult } = require('express-validator');

const Transaction = require('../models/transaction');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allTransaction] = await Transaction.fetchAll();
    res.status(200).json(allTransaction);
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
    console.log(errors);  
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
