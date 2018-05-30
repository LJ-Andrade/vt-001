const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=> 
    gulp.src('./sass/*.sass')
    .pipe(sass({
        outputStyle: 'nested', 
        sourceComments: false // Comments in the css where the property is in sass
    }).on('err', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
     .pipe(gulp.dest('./css'))
);
gulp.task('default', () => {
    gulp.watch('./sass/*.sass', ['sass'])
});