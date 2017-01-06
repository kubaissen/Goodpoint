//@flow
import Scene from './layer/Scene.es6';
import Layer from './layer/Layer.es6';
import Animation from './graph/animation.es6';
/// #HTMLCanvasElement

let myGame = new Scene(10, 40, 600, 400);
myGame.createLayer('CSS', 'bgDraw');

let layersList = [];
layersList.push(new Layer('CSS'));

console.log(Scene, Layer, Animation);


console.log('lay  : ', myGame);
let GoodPoint = (() => {



  console.log('canvas', 21);
  // let animation = require('./animation.es6');
  console.log('animation', Animation);

  // }, false);




  return {
    status: [status]
  };

})();

export default GoodPoint;