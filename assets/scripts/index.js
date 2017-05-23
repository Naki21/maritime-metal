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

  let aboutArrow = document.querySelector(".svg-about-tab-base svg polygon:nth-of-type(2)");

  aboutArrow.classList.add("bounce-class");
// add hover effect to about section
  let aboutTab = document.querySelector(".svg-about-tab");
  let about = document.querySelector(".about");


  // this handler will be executed only once when the cursor moves over the unordered list
  aboutTab.addEventListener("mouseenter", function( event )   {
    // highlight the mouseenter target
    about.style.height = "500px";
    aboutArrow.classList.remove("bounce-class");
  });
  aboutTab.addEventListener("mouseout", function( event )   {
    // highlight the mouseenter target
    about.style.height = "0px";
    aboutArrow.classList.add("bounce-class");
  });

})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
