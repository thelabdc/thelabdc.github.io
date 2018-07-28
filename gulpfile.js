var gulp            = require('gulp'),
    shell           = require('gulp-shell'),
    ghPages         = require('gulp-gh-pages'), imagemin        = require('gulp-imagemin'),
    browserSync     = require('browser-sync'),
    cp              = require('child_process'),
    runSequence     = require('run-sequence').use(gulp);

var messages = {
    jekyllBuild: 'building...'
};

// Browser Sync
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('image', function () {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('_site/images'));
});

gulp.task('contentful', shell.task(['bundle exec jekyll contentful']));

gulp.task('circleci', function () {
  return gulp.src('.circleci/*')
    .pipe(gulp.dest('_site/.circleci'));
});

gulp.task('push-gh-source', shell.task(['git push origin source']));

gulp.task('push-gh-pages', function () {
  return gulp.src('_site/**/*')
    .pipe(ghPages({ force: true, branch: 'master' }));
});

gulp.task('jekyll', shell.task(['bundle exec jekyll build --incremental']));

gulp.task('build:prod', shell.task(['bundle exec jekyll build']));

gulp.task('deploy', function (callback) {
  runSequence(
    'contentful',
    'build:prod',
    'image',
    'circleci',
    'push-gh-source',
    'push-gh-pages',
    callback
  );
});


gulp.task('jekyll-rebuild', ['jekyll'], function () {
    browserSync.reload();
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['jekyll-rebuild']);
});

gulp.task('default', function (callback) {
  runSequence(
    ['watch', 'browserSync'],
    callback
  );
});
