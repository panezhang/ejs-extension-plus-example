/**
 * node_modules
 */
var express = require('express');
// template engine
var ejs = require('ejs');
var ejsExtension = require('ejs-extension-plus');

/**
 * system modules
 */
var path = require('path');


var Constants = {
    globalTitle: 'ejs-extension-plus-example'
};
var Functions = {
    hello: function (name) {
        return 'hello, ' + name;
    }
};
var conf = {
    webRoot: __dirname,
    tplDir: 'fe',
    consts: Constants,
    funcs: Functions
};


// start create app
var app = express();

// view engine setup
app.set('views', path.join(conf.webRoot, conf.tplDir));        // template dir
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(ejsExtension(conf));

// 设置静态文件目录
app.use('/fe', express.static(path.join(conf.webRoot, conf.tplDir)));     // static dir

app.get('/', function (req, res, next) {
    res.renderPage({module: 'home', page: 'index'});
});

module.exports = app;
