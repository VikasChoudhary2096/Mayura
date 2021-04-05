const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  static findByEmail(email) {
    return db.execute(`SELECT * FROM user WHERE email = ${email}`);
  }

  static findByUserName(username) {
    return db.execute(`SELECT * FROM user WHERE username = ${username}`);
  }

  static save(user) {
    return db.execute(
      `INSERT INTO users (name, email, username, password) VALUES (
          ${user.name}, 
          ${user.username}, 
          ${user.email}, 
          ${user.password})`
    );
  }
};