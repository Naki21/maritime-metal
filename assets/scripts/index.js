'use strict';
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const clickhandlers = require('./clickhandlers')
import ScrollReveal from 'scrollreveal'

$(() => {
  setAPIOrigin(location, config)
  // scroll reveal
  window.sr = ScrollReveal({
    origin: 'left',
  })
  sr.reveal('.details')

  // add clickhandlers
  clickhandlers.addHandlers();
  $('.menu-options').hide()

  let aboutTab = document.querySelector(".svg-about-tab");
  let about = document.querySelector(".about");


  // this handler will be executed only once when the cursor moves over the unordered list
  aboutTab.addEventListener("mouseenter", function( event )   {
    // highlight the mouseenter target
    about.style.height = "500px";
  });
  aboutTab.addEventListener("mouseout", function( event )   {
    // highlight the mouseenter target
    about.style.height = "0px";
  });
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
