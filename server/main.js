var express = require('express');
var path = require('path');
var browserify = require('browserify-middleware');
var app = express();
var schedule = require('node-schedule');

var date = new Date(2016, 9, 21, 5, 30, 0);
// '41 17 * * 1-5 * (41 17 * * Mon-Fri *)'

app.use(express.static(path.join(__dirname, "../client/public")));

app.get('/app-bundle.js',
 browserify('./client/main.js', {
    transform: [ [ require('babelify'), { presets: ["es2015", "react"] } ] ]
  })
);

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on localhost:" + port);
