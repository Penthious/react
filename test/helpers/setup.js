require('babel-register');
require('babel-polyfill');
require('babel-core/register');

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>');

global.window = document.defaultView;

global.navigator = window.navigator;
