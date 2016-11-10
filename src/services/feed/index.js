'use strict';

const memory = require('feathers-memory');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/feeds', memory());

  // Get our initialize service to that we can bind hooks
  const feedService = app.service('/feeds');

  // Set up our before hooks
  feedService.before(hooks.before);

  // Set up our after hooks
  feedService.after(hooks.after);
};
