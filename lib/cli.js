#!/usr/bin/env node

'use strict';

var pkg = require('../package.json');
var meow = require('meow');
var chalk = require('chalk');

var homen = require('./util/homen');

var cli = meow({
  pkg: pkg
});

var args = cli.input;
var opts = cli.flags;
var command = args[0];

function pre() {

  // TODO debug info
  //console.log(args);
  //console.log(opts);
  //console.log(command);

  console.log(homen);

  init();

}

function init() {

  run();

}

function run() {

}

pre();
