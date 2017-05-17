'use strict';

  const transformProp = 'transform';

  function Carousel3D(el) {
    this.element = el;
    this.rotation = 0;
    this.panelCount = 0;
    this.totalPanelCount = this.element.children.length;
    this.theta = 0;
    this.isHorizontal = true;
  }


  Carousel3D.prototype.modify = function(){
    let panel, angle, i;
    this.panelSize = this.element[this.isHorizontal ? 'offsetWidth' : 'offsetHeight'];
    this.rotateFn = 'rotateY';
    this.theta = 360 / this.panelCount;
    // do some trig to div out how big the carousel
    // is in 3D space
    this.radius = Math.round((this.panelSize / 2) / Math.tan(Math.PI / this.panelCount));
    for (i = 0; i < this.panelCount; i++) {
      panel = this.element.children[i];
      angle = this.theta * i;
      panel.style.opacity = 1;

      // rotate panel, then push it out in 3D space
      panel.style[transformProp] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
    }

    // hide other panels
    for (; i < this.totalPanelCount; i++) {
      panel = this.element.children[i];
      panel.style.opacity = 0;
      panel.style[transformProp] = 'none';
    }

    // adjust rotation so panels are always flat
    this.rotation = Math.round(this.rotation / this.theta) * this.theta;
    this.transform();
  };

  Carousel3D.prototype.transform = function() {
    // push the carousel back in 3D space,
    // and rotate it
    this.element.style[transformProp] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
  };

  //  make carousel appear on page, and create nav button functions
  // so when you click it changes the panel
  let init = function() {
    let carousel = new Carousel3D(document.getElementById('carousel')),
      navButtons = document.querySelectorAll('.navigation-button'),
      onNavButtonClick = function(event) {
        let increment = parseInt(event.target.getAttribute('data-increment'));
        carousel.rotation += carousel.theta * increment * -1;
        carousel.transform();
      };
    // amount of panels.
    // IMPORTANT!!!!! this needs to match the amount of divs in the HTML
    carousel.panelCount = 11;
    // apply modify protype to entire carousel
    carousel.modify();

    //  add the event listner to the nav buttons on page load
    for (let i = 0; i < 2; i++) {
      navButtons[i].addEventListener('click', onNavButtonClick);
    }

    //  add css class to body that has animations for when you click buttons
    // and carousel rotates
    // setTimeout(function() {
    //   document.body.className += 'ready';
    // }, 0);
  };
  window.addEventListener('DOMContentLoaded', init);
