'use strict';

function rotateMenu(){
  console.log('click');
  $('.menu-icon').toggleClass('open-menu');
  // $('.menu-options').toggleClass('open-menu-options');
}


function bounceDown(){
  $('nav').css("margin-top", "0px");
}

function bounceUp(){
  $('nav').css("margin-top", "20px");
  setInterval(bounceDown, 2000);

}
const addHandlers = () => {
  $('.menu-icon').on('click', rotateMenu);
}

module.exports = {
  addHandlers,
  bounceUp,
  bounceDown,
};
