'use strict';
const authentication = require('./authentication');
const user = require('./user');
const feed = require('./feed');
const news = require('./new');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(feed);
  app.configure(news);
};
