'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const clickhandlers = require('./clickhandlers');
const carousel = require('./carousel');
import ScrollReveal from 'scrollreveal';

$(() => {
  setAPIOrigin(location, config);
  // scroll reveal
  window.sr = ScrollReveal({
    origin: 'left'
  });
  sr.reveal('.details');

  // add clickhandlers
  clickhandlers.addHandlers();
  $('.menu-options').hide();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example');
