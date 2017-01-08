'use strict';

const authentication = require('feathers-authentication');
const oauth2 = require('feathers-authentication-oauth2');
const jwt = require('feathers-authentication-jwt');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function() {
  const app = this;

  const config = app.get('auth');
  config.facebook.Strategy = FacebookStrategy;
  app.set('auth', config);
  app.configure(authentication(config.config));
  app.configure(jwt());
  app.configure(oauth2(Object.assign({}, app.get('facebook'), config.facebook)));
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(['facebook', 'jwt']),
      ]
    }
  });
};
