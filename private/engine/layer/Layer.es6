/// <reference path="../../../bower_components/DefinitelyTyped/canvasjs" />
export default class Layer {
  constructor(x, y, w, h, layerType) {
    // super();
    this.T = {
      start: Date.now,
      framesGap: {
        get() {
          console.log('gry');
        },
        set(val) {
          return new Error(val);
        }
      },
    };
    this.play = true;
    this.stop = false;
    this.status = this.stop;
    this.x = this.left = x;
    this.y = this.top = y;
    this.height = this.h = h;
    this.width = this.width = w;
    this.layerType = layerType;

    this.c = this.getLayer();
    this.canvas = this.c.canvas;


    console.log(this.c, this);
  }

  getLayer() {
    let aa = this.T.framesGap;
    this.T.framesGap = 'fds';
    return document.body.appendChild(document.createElement('canvas')).getContext('2d');
  }

  startAnimation() {
    window.requestAnimationFrame(this.animation);
    this.status = this.play;
    return 0;
  }

  animation() {
    this.status ? window.requestAnimationFrame(this.animation) : '';
  }




}