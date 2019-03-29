const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');

function copyEnv() {
    return src('env-example')
    .pipe(rename('.env'))
    .pipe(dest('.'));
}

exports.default = parallel(copyEnv);
