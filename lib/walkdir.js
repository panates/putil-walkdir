/* putil-walkdir
 ------------------------
 (c) 2017-present Panates
 SQB may be freely distributed under the MIT license.
 For details and documentation:
 https://panates.github.io/putil-walkdir/
 */

const fs = require('fs');
const path = require('path');
const waterfall = require('putil-waterfall');

function walkdir(dirname, onFile, callback) {

  const doWalkDir = function(dir, callback) {
    waterfall([
      /* Read directory */
      function(next) {
        fs.readdir(dir, next);
      },
      /* Iterate files */
      function(next, files) {
        waterfall.every(files, function(next, f) {
          const filePath = path.join(dir, f);
          waterfall([
            function(next) {
              fs.stat(filePath, next);
            },
            function(next, stats) {
              if (stats.isDirectory()) {
                onFile(function(sub) {
                  if (sub || sub == null)
                    doWalkDir(filePath, next);
                  else next();
                }, path.relative(dirname, filePath), stats);
                return;
              }
              onFile(next, path.relative(dirname, filePath), stats);
            }
          ], next);

        }, next);
      }
    ], callback);
  };
  doWalkDir(dirname, callback);
}

function walkdirSync(dir, onFile) {
  const files = fs.readdirSync(dir);
  files.forEach(function(f) {
    const filePath = path.join(dir, f);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      const r = onFile(filePath, stats);
      return (r || r === undefined) &&
          walkdirSync(filePath, onFile);
    }
    onFile(filePath, stats);
  });
}

module.exports = {
  walkdir: walkdir,
  walkdirSync: walkdirSync
};
