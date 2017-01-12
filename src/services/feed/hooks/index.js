'use strict';
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const getFeed = require('./getFeed');

exports.before = {
  all: [
    // auth.verifyToken(),
  ],
  find: [
    getFeed(),
  ],
  get: [
    hooks.disable(),
  ],
  create: [
    hooks.disable(),
  ],
  update: [
    hooks.disable(),
  ],
  patch: [
    hooks.disable(),
  ],
  remove: [
    hooks.disable(),
  ]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
