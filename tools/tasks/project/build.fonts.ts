import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import Config from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
return gulp.src(Config.FONTS_SRC)
      .pipe(gulp.dest(Config.FONTS_DEST));
};