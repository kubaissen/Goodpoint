// @flow
import Layer from './Layer.es6'

export default class Scene {

  /**
   * @param  {int} x
   * @param  {int} y
   * @param  {int} w
   * @param  {int} h
   * @param  {sfs} layers
   */
  constructor(x, y, w, h) {
    // super(x, y, w, h);

    this.x = x;
    this.y = y;
    this.w = this.width = w;
    this.h = this.height = h;
    this.layersList = [];
  }

  createLayer(layerType) {

  }
  getFreeLayer() {
    return this.layersList[this.layersList];
  }

  moveTo(newX, newY) {
    console.log('mvw');
  }

  build(HTMLName, name) {
    this.layers[this.layers.depth++] = {
      inst: this.make(HTMLName),
      name: name
    };
  }

  make(HTMLName) {
    return document.body.appendChild(document.createElement(HTMLName))
  }
}