        var gulp = require('gulp');
        var sass = require('gulp-sass');
        var browserSync = require('browser-sync');
        var mmq = require('gulp-merge-media-queries');
        var phpConnect = require('gulp-connect-php');
        var autoPrefixer = require('gulp-autoprefixer');


        gulp.task('sass', function() {
          return gulp.src('assets/css/**/*.scss')
            .pipe(sass()) // Converts Sass to CSS with gulp-sass
            .pipe(autoPrefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
            .pipe(gulp.dest('assets/css'));
        });



        gulp.task('connect-sync', function() {
          phpConnect.server({}, function (){
            browserSync({
              proxy: '127.0.0.1:8000'
            });
          });
        });

        gulp.task('mmq', ['sass'], function () {
          gulp.src('assets/css/styles.css')
            .pipe(mmq({
              log: true
            }))
            .pipe(gulp.dest('assets/css'))
            .pipe(browserSync.reload({
              stream: true
        }));
        });

        gulp.task('watch', ['connect-sync', 'sass', 'mmq'], function(){
         gulp.watch('assets/css/**/*.scss', ['sass', 'mmq']);
         gulp.watch('*.php', browserSync.reload);
         gulp.watch('assets/includes/*.php', browserSync.reload);
         gulp.watch('assets/js/**/*.js', browserSync.reload);
          // Other watchers
        });
