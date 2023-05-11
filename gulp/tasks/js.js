import webpack from 'webpack-stream';
import glob from 'glob';

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>",
      })
    ))
    .pipe(webpack({
      mode: app.isBuild ? 'production' : 'development',
      entry: toObject(glob.sync('./src/js/*.js')),
      output: {
        filename: '[name]',
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())   
  }

  function toObject(paths) {
    const entry = {};
    paths.forEach(function(p) {
      const name = p.substr(9);
        entry[name] = p;
    });
    return entry;
  }