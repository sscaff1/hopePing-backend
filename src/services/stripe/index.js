'use strict';

const memory = require('feathers-memory');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/stripes', memory());

  // Get our initialize service to that we can bind hooks
  const newService = app.service('/stripes');

  // Set up our before hooks
  newService.before(hooks.before);

  // Set up our after hooks
  newService.after(hooks.after);
};
