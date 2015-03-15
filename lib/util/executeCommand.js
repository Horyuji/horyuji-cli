'use strict';

var Q = require('q');
var spawn = require('child_process').spawn;

var createError = require('./createError');

module.exports = function(command, args, options) {

  var deferred = Q.defer();
  var promise = deferred.promise;
  var stderr = '';
  var stdout = '';

  var fullCommand;
  fullCommand = command;
  fullCommand += args.length ? ' ' + args.join(' ') : '';
  console.log(fullCommand);

  var process = spawn(command, args, options);

  process.stdout.on('data', function(data) {
    data = data.toString();
    deferred.notify(data);
    stdout += data;
  });

  process.stderr.on('data', function(data) {
    data = data.toString();
    deferred.notify(data);
    stderr += data;
  });

  process.on('close', function(code) {
    var error;
    if (code) {
      error = createError('Failed to execute "' + fullCommand + '", exit code of #' + code + '\n' + stderr, 'ECMDERR', {
        details: stderr,
        exitCode: code
      });
      return deferred.reject(error);
    }
    return deferred.resolve([stdout, stderr]);
  });

  process.on('error', function(error) {
    return deferred.reject(error);
  });

  promise.progress(function(progress) {
    progress.split('\n').forEach(function(line) {
      if (line) {
        console.log(line);
      }
    });
  });

  return promise;

}
