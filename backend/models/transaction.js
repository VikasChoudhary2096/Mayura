const db = require('../util/database');

module.exports = class Transaction {
  constructor(transferor_id, transferee_id, amount) {
    this.transferor_id = transferor_id;
    this.transferee_id = transferee_id;
    this.amount = amount;
  }

  static fetchAll(id) {
    return db.execute('SELECT * FROM transaction WHERE transferor_id = ? OR transferee_id = ?',
    [id, id]);
  }

  static transact(transaction) {
    return db.execute(
      'INSERT INTO transaction (transferor_id, transferee_id, amount) VALUES (?, ?, ?)',
      [transaction.transferor_id, transaction.transferee_id, transaction.amount]
    );
  }
};
