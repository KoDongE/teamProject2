const Sequelize = require('sequelize');
const User = require('./users');
const Token = require('./token');
const Posting = require('./postings');

const env = process.env.NODE_DEV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.User = User;
db.Token = Token;
db.Posting = Posting;

User.init(sequelize);
Token.init(sequelize);
Posting.init(sequelize);

module.exports = db;