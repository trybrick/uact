const path   = require('path');
const mix    = require('laravel-mix');
const public = mix.inProduction() ? 'lib' : 'example';

mix.setPublicPath(path.normalize(public));

const config = {
  externals: {
    'jquery': 'jQuery'
  },
  output: {
    path: path.resolve(public),
    filename: 'uact.min.js',
    library: 'uact',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    overlay: true,
    inline: true,
    quiet: false
  },
  devtool: 'cheap-source-map'
};

mix.webpackConfig(config).sourceMaps();
mix.js(`src/index.js`, `${ public }`);

if (mix.inProduction()) {
  mix.version();
  mix.disableNotifications();
} else {
  mix.browserSync({
    proxy: false,
    port: 3000,
    files: [
      'src/*',
      'example/*'
    ],
    browser: 'firefox',
    open: 'local',
    server: {
      baseDir: './example/'
    }
  });
}

