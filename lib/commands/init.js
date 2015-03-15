'use strict';

var Q = require('q');
var inquirer = require('inquirer');

var executeCommand = require('../util/executeCommand');

var env;

function Init() {

  Q.fcall(aboutYou)
    .then(clone)
    .then(npmInstall)
    .then(jspmInstall)
    .catch(function(error) {
      console.log(error);
    })
    .done();

}

function aboutYou() {
  var deferred = Q.defer();
  inquirer.prompt([{
    type: 'input',
    name: 'projectName',
    default: 'horyujiApp',
    message: 'What\'s your project name?',
  }], function(answers) {
    //console.log(answers);
    env = answers;
    deferred.resolve(answers);
  });
  return deferred.promise;
}

function clone() {
  return executeCommand('git', ['clone', 'https://github.com/Horyuji/horyuji.git', env.projectName]);
}

function npmInstall() {
  return executeCommand('npm', ['install'], {
    cwd: env.projectName
  });
}

function jspmInstall() {
  return executeCommand('jspm', ['install'], {
    cwd: env.projectName
  });
}

module.exports = Init;
