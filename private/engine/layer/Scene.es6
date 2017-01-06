export default class Scene {
  //flow

  /**
   * @param  {int} x
   * @param  {int} y
   * @param  {} w
   * @param  {width} h
   * @param  {} layers
   * @param  {0};for(letdepthinlayers} {this.x=x;this.y=y;this.w=this.width=w;this.h=this.height=h;this.layers={depth
   */
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = this.width = w;
    this.h = this.height = h;
    this.layersList = [];
  }


  addLayer(type) {
    this.layers.push({
      HTMLElement: document.createElement(type),
      nodeElement: document.body.appendChild(HTMLElement),
      c: function() {
        return nodeElement.getContext('2d');
      }
    })

  }

  moveTo(newX, newY) {
      console.log('mvw');
    }
    // this.build = {}
    // console.dir(this.build());

  build(HTMLName, name) {
    this.layers[this.layers.depth++] = {
      inst: this.make(HTMLName),
      name: name
    };
    // this.layer[this.layer.depth++] = this.make('canvas');
    // this.layer[this.layer.depth++] = this.make('canvas');
    // this.layer[this.layer.depth++] = this.make('div');
    // return this.layers;

  }

  make(HTMLName) {
    return document.body.appendChild(document.createElement(HTMLName));
  }

}


/*

let Canvas = ((() => {
  'use strict';

  let status = {
    on5: 5,
    description: 'Just Created.'
  };



  let def = {
    x: 200,
    y: 150,
    width: 550,
    height: 400,
    bgColor: 'yellowgreen'
  };

  let drawDirection = [];

  let layers = {
    bgCSS: make('div'),
    canvas: make('canvas'),
    postProcess: make('canvas'),

    point: {
      x: 0,
      y: 0,
    },

    size: {
      w: 0,
      h: 0,
    }
  };

  for (let layer in layers) {
    // drawDirection[drawDirection.length] += layer;
    console.log(layer);
  }

  function setStyle(element) {
    element.style.position = 'relative';
  }

  function setSize(w, h) {
    c.w = canvas.width = canvas.style.width = w;
    c.h = canvas.height = canvas.style.height = h;
  }

  function setPosition() {

  }

  function make(tag) {
    return drawDirection[drawDirection.length] = document.body.appendChild(document.createElement(tag));
  }

  console.log(this, drawDirection);

  return {
    getStatus: [status.on5, status.description],
    getLayernsInfo: {
      fromBottom: drawDirection
    },

    setPosition: setPosition
  };

})({ 12: 22, ewqw: 'fsdf' }));

module.exports = Screen;


//*/