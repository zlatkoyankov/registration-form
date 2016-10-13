import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  index: "index.html",
  // the index path for web server

  headers: { "X-Custom-Header": "yes" },
  // custom headers

  stats: {
    colors: true
  }
  // options for formating the statistics
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));
app.use('/styles', express.static(path.resolve(__dirname + '/../styles')));
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
