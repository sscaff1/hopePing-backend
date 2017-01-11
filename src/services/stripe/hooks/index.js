'use strict';

const hooks = require('feathers-hooks');
const auth = require('feathers-authentication');
const getToken = require('./getToken');

exports.before = {
  all: [],
  find: [],
  get: [
    getToken(),
  ],
  create: [

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
