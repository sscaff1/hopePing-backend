'use strict';
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication');
const getFeed = require('./getFeed');

exports.before = {
  all: [],
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
