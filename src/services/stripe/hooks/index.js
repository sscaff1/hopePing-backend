'use strict';

const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const getToken = require('./getToken');

exports.before = {
  all: [
    // auth.verifyToken(),
  ],
  find: [
    hooks.disable(),
  ],
  get: [
    getToken(),
  ],
  create: [
    hook => console.log(hook),
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
