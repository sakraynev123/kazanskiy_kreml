import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browser from 'browser-sync';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import {deleteAsync} from 'del';
const sass = gulpSass(dartSass)
const browserSync = browser.create();

//Styles
const styles = () => {
  return gulp.src('source/sass/style.scss', {sourcemaps: true})
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('source/style', {sourcemaps: '.'}))
  .pipe(browser.stream());
}

const clean = () => {
  return deleteAsync('source/style')
}

const server = (done) => {
  browserSync.init({
    server: {
      baseDir: 'source'
    }
  });
  done();
}

// Reload

const reload = (done) => {
  browserSync.reload(),
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles, reload));
  gulp.watch('source/*.html', reload);
  gulp.watch('source/js/**/*.js', reload);
}

export default gulp.series(
  clean,
  styles,
  server,
  watcher
);
