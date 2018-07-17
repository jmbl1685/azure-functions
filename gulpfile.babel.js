'use strict'

import  gulp   from 'gulp'
import server from 'gulp-server-livereload'
import  sass  from 'gulp-sass'

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