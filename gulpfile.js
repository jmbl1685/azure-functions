'use strict'

const gulp = require('gulp')
const server = require('gulp-server-livereload')
const sass = require('gulp-sass')

const config = {
    host: '0.0.0.0',
    port: 4200
}

gulp.task('sass', () => {
    return gulp.src('./scss/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('sass:watch', () => {
    gulp.watch('./scss/**/style.scss', ['sass'])
})

gulp.task('live-reload', () => {
    gulp.src('').pipe(server({
        host: config.host,
        port: config.port,
        defaultFile: 'dist/index.html',
        livereload: true,
        directoryListing: false,
        open: true
    }))
})

gulp.task(
    'default',
    ['sass:watch', 'live-reload']
)