'use strict';
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const getFeed = require('./getFeed');

const PAGE_ID = '102800004322';
exports.before = {
  all: [
    // auth.verifyToken(),
  ],
  find: [
    getFeed(PAGE_ID)
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
