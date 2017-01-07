import Scene from './Scene.es6';
export default class Layer {
  constructor(x, y, w, h, layerType) {
    // super();
    this.x = x;
    this.y = y;
    this.width = this.w = w;
    this.height = this.h = h;
    this.layerType = layerType;

    console.log(getLajer(this.layerType));
  }

  getLajer() {
    return document.body.appendChild(document.createElement('canvas')).getContext('2d')

  }


}

// let Layer = {

// };

// export default Layer;