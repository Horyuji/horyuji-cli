#!/usr/bin/env node

'use strict';

var pkg = require('../package.json');
var meow = require('meow');
var chalk = require('chalk');

var cli = meow({
  pkg: pkg
});

var args = cli.input;
var opts = cli.flags;
var command = args[0];

var homen = [
  '　 ／￣￣￣＼',
  '　｜　　　　｜',
  '　｜　　　　｜　' + chalk.yellow('＿'),
  '　｜　 ^　 ^ ) ' + chalk.yellow('///ﾄ､'),
  '　(　 >ﾉ(＿)'+chalk.red('Y') +' ' + chalk.yellow('////)|') + ' ho!! ho!!',
  chalk.blue('　∧') + '丶i-=ニ=|' + chalk.yellow('｜　｜|'),
  chalk.blue('／＼＼') + '＼ ￣ノ' + chalk.yellow('｜　ﾉノ'),
  chalk.blue('／　＼＼') + ' ￣　' + chalk.yellow('/　/ |')
].join('\n');

function pre() {

  // TODO debug info
  console.log(args);
  console.log(opts);
  console.log(command);

  console.log(homen);

  init();

}

function init() {

  run();

}

function run() {

}

pre();
