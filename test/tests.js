/* eslint-disable */
'use strict';
const assert = require('assert');
const w = require('../');
const walkdir = w.walkdir;
const walkdirSync = w.walkdirSync;

describe('Walkdir', function() {
  this.slow(1000);
  it('should walk directory async', function(done) {
    let ok = 0;
    walkdir('./', function(next, f, stats) {
      if (stats.isDirectory()) {
        if (f.substring(0, 1) === '.' || f.startsWith('node_modules'))
          return next(false);
        if (f === 'lib')
          ok++;
      } else {
        if (f === 'README.md')
          ok++;
        if (f === 'lib/walkdir.js')
          ok++;
      }
      next();
    }, function() {
      assert(ok === 3, 'Failed');
      done();
    });
  });

  it('should walk directory sync', function() {
    let ok = 0;
    walkdirSync('./', function(f, stats) {
      if (stats.isDirectory()) {
        if (f.substring(0, 1) === '.' || f.startsWith('node_modules'))
          return false;
        if (f === 'lib')
          ok++;
      } else {
        if (f === 'README.md')
          ok++;
        if (f === 'lib/walkdir.js')
          ok++;
      }
    });
    assert(ok === 3, 'Failed');
  });

  it('should ignore directory async', function(done) {
    let ok = 1;
    walkdir('./', function(next, f, stats) {
      if (stats.isDirectory()) {
        if (f.substring(0, 1) === '.' || f.startsWith('node_modules'))
          return next(false);
        if (f === 'test')
          return next(false);
      } else {
        if (f.startsWith('test/'))
          ok = 0;
      }
      next();
    }, function() {
      assert(ok, 'Failed');
      done();
    });
  });

  it('should ignore directory sync', function() {
    let ok = 1;
    walkdirSync('./', (f, stats) => {
      if (stats.isDirectory()) {
        if (f.substring(0, 1) === '.' || f.startsWith('node_modules'))
          return false;
        if (f === 'test')
          return false;
      } else {
        if (f.startsWith('test/'))
          ok = 0;
      }
    });
    assert(ok, 'Failed');
  });

});

