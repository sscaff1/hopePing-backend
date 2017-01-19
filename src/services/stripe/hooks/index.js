'use strict';

const hooks = require('feathers-hooks');
const auth = require('feathers-authentication');
const getToken = require('./getToken');
const createCustomer = require('./createCustomer');
const chargeCard = require('./chargeCard');

exports.before = {
  all: [],
  find: [],
  get: [
    getToken(),
  ],
  create: [
    createCustomer(),
    chargeCard(),
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
