'use strict';

var parseurl = require('parseurl');
var nunjucks = require('nunjucks');
var path = require('path');

module.exports = function(app_url, selector_url) {
  app_url = app_url || '/';
  selector_url = selector_url || '/preview';

  var index = path.join(__dirname, 'static', 'index.html');
  var selector = nunjucks.render(index, {app_url: app_url});
  return function(req, res, next) {
    if(parseurl(req).pathname === selector_url) {
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Length', selector.length);
        res.setHeader('Content-Type','text/html; charset=UTF-8');
        res.end(selector);
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain; charset=UTF-8');
        res.end('Only GET supported in ' + selector_url + ' mode');
      }
    } else {
      next();
      return;
    }
  }
}
