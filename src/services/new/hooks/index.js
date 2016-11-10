'use strict';

const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const getNews = require('./getNews');

const TOPIC = 'homeless';

exports.before = {
  all: [
    // auth.verifyToken(),
  ],
  find: [
    getNews(TOPIC),
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
