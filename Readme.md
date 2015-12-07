# Responsive-selector
A helper utility that makes it easy to test responsive design in the browser. Adapts the template preview toobar from https://almsaeedstudio.com/preview

Designed to be used with an express application. 

# Install
    npm install responsive-selector

# Use
    var express = require('express');
    var app = express();
    app.use(responsiveSelector()); 

responsiveSelector can be customized with app_url & preview_url
    var app_url = '/';
    var preview_url = '/preview';
    app.use(responsiveSelector(app_url, preview_url));



