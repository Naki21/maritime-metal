'use strict';

let position = 0;
function nextSlide(){
    position -= 184;
    let leftStyle = position;
    $('.slide-container').css('left', leftStyle + 'px');
    if(position <= -1840){
      position = 0;
    }
}

function prevSlide(){
  $('.slide-container').css("left", "+=184px");
  if($('.slide-container').css("left") >= '0px'){
    $('.slide-container').css("left", "-1840px");
  }
}

const addHandlers = () => {
  $('.slideshow-next').on('click', nextSlide);
  $('.slideshow-previous').on('click', prevSlide);
}



module.exports = {
  addHandlers
}
