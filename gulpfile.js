const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');

function copyEnv() {
    return src('env-example')
    .pipe(rename('.env'))
    .pipe(dest('.'));
}

function mysql() {
    return src('cfg/mysql-5.5/devilbox-custom.cnf-example')
    .pipe(rename('devilbox-custom.cnf'))
    .pipe(dest('cfg/mysql-5.5'));
}

exports.default = parallel(copyEnv, mysql);
