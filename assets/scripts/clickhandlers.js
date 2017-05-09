'use strict';

function rotateMenu(){
  console.log('click');
  $('.menu-icon').toggleClass('open-menu');
  // $('.menu-options').toggleClass('open-menu-options');
}

const addHandlers = () => {
  $('.menu-icon').on('click', rotateMenu);
}

module.exports = {
  addHandlers
}
