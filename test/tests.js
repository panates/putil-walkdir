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
    walkdir('./', function(f, stats) {
      if (stats.isDirectory() && f === 'lib')
        ok++;
      if (!stats.isDirectory() && f === 'README.md')
        ok++;
    }, function() {
      assert(ok === 2, 'Failed');
      done();
    });
  });

  it('should walk directory sync', function() {
    let ok = 0;
    walkdirSync('./', function(f, stats) {
      if (stats.isDirectory() && f === 'lib')
        ok++;
      if (!stats.isDirectory() && f === 'README.md')
        ok++;
    });
    assert(ok === 2, 'Failed');
  });

  it('should ignore directory async', function(done) {
    let ok = 1;
    walkdir('./', function(f, stats) {
      if (stats.isDirectory() && f === 'test')
        return false;
      if (!stats.isDirectory() && f.startsWith('test/'))
        ok = 0;
    }, function() {
      assert(ok, 'Failed');
      done();
    });
  });

  it('should ignore directory sync', function() {
    let ok = 1;
    walkdir('./', function(f, stats) {
      if (stats.isDirectory() && f === 'test')
        return false;
      if (!stats.isDirectory() && f.startsWith('test/'))
        ok = 0;
    });
    assert(ok, 'Failed');
  });

});

