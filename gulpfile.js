var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');
var mocha = require('gulp-mocha');
var react = require('gulp-react');
var path = require('path');
var _ = require('lodash');
var src_dir = 'src';
var build_dir = 'build';

gulp.task('babel', function() {
  return gulp.src(_.map(['shared', 'server'], function(folder) {
    return path.join(__dirname, src_dir, folder);
  }))
  
})




