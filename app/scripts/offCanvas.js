'use strict';

var classie = require('classie');
var constants = require('./constants');

var offCanvasTrigger = document.querySelector('.hamburger');

offCanvasTrigger.addEventListener('click', function() {
  classie.toggle(constants.body, 'offCanvas-open');
});

