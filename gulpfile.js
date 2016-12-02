var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('compilejs', function(){
return gulp.src('assets/js/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/dist/'));
});

gulp.task('watch', function(){
	gulp.watch('assets/js/*.js', ['compilejs']);
});

gulp.task('default',['watch']);
