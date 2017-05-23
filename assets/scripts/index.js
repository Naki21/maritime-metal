'use strict';
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const clickhandlers = require('./clickhandlers')
import ScrollReveal from 'scrollreveal';

$(() => {
  setAPIOrigin(location, config)

  // scroll reveal
  window.sr = ScrollReveal({
    origin: 'left',
    distance: '40px',

  });
  sr.reveal('.service-container',
            {duration: 300},
            500);
  sr.reveal('.sr');
  sr.reveal('.what-we-buy');

  // add clickhandlers for mobile what we buy
  clickhandlers.addHandlers();


// add hover effect to about section
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
