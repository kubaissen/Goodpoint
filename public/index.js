/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./private/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nmodule.exports = {\r\n  //return instance of enigma\r\n  Enigma: __webpack_require__(/*! ./engine/GoodPoint.es6 */ 1)\r\n};\r\n\r\nconsole.log('modStatus', module.exports.Enigma);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByaXZhdGUvaW5kZXguanM/NDFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIC8vcmV0dXJuIGluc3RhbmNlIG9mIGVuaWdtYVxyXG4gIEVuaWdtYTogcmVxdWlyZSgnLi9lbmdpbmUvR29vZFBvaW50LmVzNicpXHJcbn07XHJcblxyXG5jb25zb2xlLmxvZygnbW9kU3RhdHVzJywgbW9kdWxlLmV4cG9ydHMuRW5pZ21hKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3ByaXZhdGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./private/engine/GoodPoint.es6 ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Scene = __webpack_require__(/*! ./layer/Scene.es6 */ 4);\n\nvar _Scene2 = _interopRequireDefault(_Scene);\n\nvar _Layer = __webpack_require__(/*! ./layer/Layer.es6 */ 3);\n\nvar _Layer2 = _interopRequireDefault(_Layer);\n\nvar _animation = __webpack_require__(/*! ./graph/animation.es6 */ 2);\n\nvar _animation2 = _interopRequireDefault(_animation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/// #HTMLCanvasElement\n\nvar myGame = new _Scene2.default(10, 40, 600, 400); //@flow\n\nmyGame.createLayer('CSS', 'bgDraw');\n\nvar layersList = [];\nlayersList.push(new _Layer2.default('CSS'));\n\nconsole.log(_Scene2.default, _Layer2.default, _animation2.default);\n\nconsole.log('lay  : ', myGame);\nvar GoodPoint = function () {\n\n  console.log('canvas', 21);\n  // let animation = require('./animation.es6');\n  console.log('animation', _animation2.default);\n\n  // }, false);\n\n\n  return {\n    status: [status]\n  };\n}();\n\nexports.default = GoodPoint;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcml2YXRlL2VuZ2luZS9Hb29kUG9pbnQuZXM2P2UzMDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy9AZmxvd1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9sYXllci9TY2VuZS5lczYnO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi9sYXllci9MYXllci5lczYnO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4vZ3JhcGgvYW5pbWF0aW9uLmVzNic7XHJcbi8vLyAjSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbmxldCBteUdhbWUgPSBuZXcgU2NlbmUoMTAsIDQwLCA2MDAsIDQwMCk7XHJcbm15R2FtZS5jcmVhdGVMYXllcignQ1NTJywgJ2JnRHJhdycpO1xyXG5cclxubGV0IGxheWVyc0xpc3QgPSBbXTtcclxubGF5ZXJzTGlzdC5wdXNoKG5ldyBMYXllcignQ1NTJykpO1xyXG5cclxuY29uc29sZS5sb2coU2NlbmUsIExheWVyLCBBbmltYXRpb24pO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdsYXkgIDogJywgbXlHYW1lKTtcclxubGV0IEdvb2RQb2ludCA9ICgoKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgY29uc29sZS5sb2coJ2NhbnZhcycsIDIxKTtcclxuICAvLyBsZXQgYW5pbWF0aW9uID0gcmVxdWlyZSgnLi9hbmltYXRpb24uZXM2Jyk7XHJcbiAgY29uc29sZS5sb2coJ2FuaW1hdGlvbicsIEFuaW1hdGlvbik7XHJcblxyXG4gIC8vIH0sIGZhbHNlKTtcclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXR1czogW3N0YXR1c11cclxuICB9O1xyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2RQb2ludDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHJpdmF0ZS9lbmdpbmUvR29vZFBvaW50LmVzNiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./private/engine/graph/animation.es6 ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Animation = function () {\n  // 'use strict';\n  console.log('this o anim: ', undefined);\n\n  // let createPaint = function(width, height) {\n\n  // };\n\n  return {\n    es6: 'ok'\n  };\n}();\n\nexports.default = Animation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcml2YXRlL2VuZ2luZS9ncmFwaC9hbmltYXRpb24uZXM2PzVjMzQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IEFuaW1hdGlvbiA9ICgoKCkgPT4ge1xyXG4gIC8vICd1c2Ugc3RyaWN0JztcclxuICBjb25zb2xlLmxvZygndGhpcyBvIGFuaW06ICcsIHRoaXMpO1xyXG5cclxuXHJcbiAgLy8gbGV0IGNyZWF0ZVBhaW50ID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG5cclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXM2OiAnb2snXHJcbiAgfTtcclxuXHJcbn0pKCkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcml2YXRlL2VuZ2luZS9ncmFwaC9hbmltYXRpb24uZXM2Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./private/engine/layer/Layer.es6 ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// import Scene from './Scene';\n// export default class Layer extends Scene {\n\n//   constructor(x, y, w, h, layerType){\n//   super(x, y, w , h);\n\n//   }\n\n// }\n\nvar Layer = {};\n\nexports.default = Layer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcml2YXRlL2VuZ2luZS9sYXllci9MYXllci5lczY/MWU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIGV4dGVuZHMgU2NlbmUge1xyXG5cclxuLy8gICBjb25zdHJ1Y3Rvcih4LCB5LCB3LCBoLCBsYXllclR5cGUpe1xyXG4vLyAgIHN1cGVyKHgsIHksIHcgLCBoKTtcclxuXHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxubGV0IExheWVyID0ge1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcml2YXRlL2VuZ2luZS9sYXllci9MYXllci5lczYiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./private/engine/layer/Scene.es6 ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene = function () {\n  //flow\n\n  /**\r\n   * @param  {int} x\r\n   * @param  {int} y\r\n   * @param  {} w\r\n   * @param  {width} h\r\n   * @param  {} layers\r\n   * @param  {0};for(letdepthinlayers} {this.x=x;this.y=y;this.w=this.width=w;this.h=this.height=h;this.layers={depth\r\n   */\n  function Scene(x, y, w, h) {\n    _classCallCheck(this, Scene);\n\n    this.x = x;\n    this.y = y;\n    this.w = this.width = w;\n    this.h = this.height = h;\n    this.layersList = [];\n  }\n\n  _createClass(Scene, [{\n    key: 'addLayer',\n    value: function addLayer(type) {\n      this.layers.push({\n        HTMLElement: document.createElement(type),\n        nodeElement: document.body.appendChild(HTMLElement),\n        c: function c() {\n          return nodeElement.getContext('2d');\n        }\n      });\n    }\n  }, {\n    key: 'moveTo',\n    value: function moveTo(newX, newY) {\n      console.log('mvw');\n    }\n    // this.build = {}\n    // console.dir(this.build());\n\n  }, {\n    key: 'build',\n    value: function build(HTMLName, name) {\n      this.layers[this.layers.depth++] = {\n        inst: this.make(HTMLName),\n        name: name\n      };\n      // this.layer[this.layer.depth++] = this.make('canvas');\n      // this.layer[this.layer.depth++] = this.make('canvas');\n      // this.layer[this.layer.depth++] = this.make('div');\n      // return this.layers;\n    }\n  }, {\n    key: 'make',\n    value: function make(HTMLName) {\n      return document.body.appendChild(document.createElement(HTMLName));\n    }\n  }]);\n\n  return Scene;\n}();\n\n/*\r\n\r\nlet Canvas = ((() => {\r\n  'use strict';\r\n\r\n  let status = {\r\n    on5: 5,\r\n    description: 'Just Created.'\r\n  };\r\n\r\n\r\n\r\n  let def = {\r\n    x: 200,\r\n    y: 150,\r\n    width: 550,\r\n    height: 400,\r\n    bgColor: 'yellowgreen'\r\n  };\r\n\r\n  let drawDirection = [];\r\n\r\n  let layers = {\r\n    bgCSS: make('div'),\r\n    canvas: make('canvas'),\r\n    postProcess: make('canvas'),\r\n\r\n    point: {\r\n      x: 0,\r\n      y: 0,\r\n    },\r\n\r\n    size: {\r\n      w: 0,\r\n      h: 0,\r\n    }\r\n  };\r\n\r\n  for (let layer in layers) {\r\n    // drawDirection[drawDirection.length] += layer;\r\n    console.log(layer);\r\n  }\r\n\r\n  function setStyle(element) {\r\n    element.style.position = 'relative';\r\n  }\r\n\r\n  function setSize(w, h) {\r\n    c.w = canvas.width = canvas.style.width = w;\r\n    c.h = canvas.height = canvas.style.height = h;\r\n  }\r\n\r\n  function setPosition() {\r\n\r\n  }\r\n\r\n  function make(tag) {\r\n    return drawDirection[drawDirection.length] = document.body.appendChild(document.createElement(tag));\r\n  }\r\n\r\n  console.log(this, drawDirection);\r\n\r\n  return {\r\n    getStatus: [status.on5, status.description],\r\n    getLayernsInfo: {\r\n      fromBottom: drawDirection\r\n    },\r\n\r\n    setPosition: setPosition\r\n  };\r\n\r\n})({ 12: 22, ewqw: 'fsdf' }));\r\n\r\nmodule.exports = Screen;\r\n\r\n\r\n//*/\n\n\nexports.default = Scene;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcml2YXRlL2VuZ2luZS9sYXllci9TY2VuZS5lczY/MGEzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XHJcbiAgLy9mbG93XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSAge2ludH0geFxyXG4gICAqIEBwYXJhbSAge2ludH0geVxyXG4gICAqIEBwYXJhbSAge30gd1xyXG4gICAqIEBwYXJhbSAge3dpZHRofSBoXHJcbiAgICogQHBhcmFtICB7fSBsYXllcnNcclxuICAgKiBAcGFyYW0gIHswfTtmb3IobGV0ZGVwdGhpbmxheWVyc30ge3RoaXMueD14O3RoaXMueT15O3RoaXMudz10aGlzLndpZHRoPXc7dGhpcy5oPXRoaXMuaGVpZ2h0PWg7dGhpcy5sYXllcnM9e2RlcHRoXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdywgaCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLncgPSB0aGlzLndpZHRoID0gdztcclxuICAgIHRoaXMuaCA9IHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgIHRoaXMubGF5ZXJzTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZExheWVyKHR5cGUpIHtcclxuICAgIHRoaXMubGF5ZXJzLnB1c2goe1xyXG4gICAgICBIVE1MRWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKSxcclxuICAgICAgbm9kZUVsZW1lbnQ6IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSFRNTEVsZW1lbnQpLFxyXG4gICAgICBjOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbm9kZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBtb3ZlVG8obmV3WCwgbmV3WSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbXZ3Jyk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmJ1aWxkID0ge31cclxuICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMuYnVpbGQoKSk7XHJcblxyXG4gIGJ1aWxkKEhUTUxOYW1lLCBuYW1lKSB7XHJcbiAgICB0aGlzLmxheWVyc1t0aGlzLmxheWVycy5kZXB0aCsrXSA9IHtcclxuICAgICAgaW5zdDogdGhpcy5tYWtlKEhUTUxOYW1lKSxcclxuICAgICAgbmFtZTogbmFtZVxyXG4gICAgfTtcclxuICAgIC8vIHRoaXMubGF5ZXJbdGhpcy5sYXllci5kZXB0aCsrXSA9IHRoaXMubWFrZSgnY2FudmFzJyk7XHJcbiAgICAvLyB0aGlzLmxheWVyW3RoaXMubGF5ZXIuZGVwdGgrK10gPSB0aGlzLm1ha2UoJ2NhbnZhcycpO1xyXG4gICAgLy8gdGhpcy5sYXllclt0aGlzLmxheWVyLmRlcHRoKytdID0gdGhpcy5tYWtlKCdkaXYnKTtcclxuICAgIC8vIHJldHVybiB0aGlzLmxheWVycztcclxuXHJcbiAgfVxyXG5cclxuICBtYWtlKEhUTUxOYW1lKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KEhUTUxOYW1lKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qXHJcblxyXG5sZXQgQ2FudmFzID0gKCgoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBsZXQgc3RhdHVzID0ge1xyXG4gICAgb241OiA1LFxyXG4gICAgZGVzY3JpcHRpb246ICdKdXN0IENyZWF0ZWQuJ1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgbGV0IGRlZiA9IHtcclxuICAgIHg6IDIwMCxcclxuICAgIHk6IDE1MCxcclxuICAgIHdpZHRoOiA1NTAsXHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICAgIGJnQ29sb3I6ICd5ZWxsb3dncmVlbidcclxuICB9O1xyXG5cclxuICBsZXQgZHJhd0RpcmVjdGlvbiA9IFtdO1xyXG5cclxuICBsZXQgbGF5ZXJzID0ge1xyXG4gICAgYmdDU1M6IG1ha2UoJ2RpdicpLFxyXG4gICAgY2FudmFzOiBtYWtlKCdjYW52YXMnKSxcclxuICAgIHBvc3RQcm9jZXNzOiBtYWtlKCdjYW52YXMnKSxcclxuXHJcbiAgICBwb2ludDoge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHc6IDAsXHJcbiAgICAgIGg6IDAsXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZm9yIChsZXQgbGF5ZXIgaW4gbGF5ZXJzKSB7XHJcbiAgICAvLyBkcmF3RGlyZWN0aW9uW2RyYXdEaXJlY3Rpb24ubGVuZ3RoXSArPSBsYXllcjtcclxuICAgIGNvbnNvbGUubG9nKGxheWVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0U2l6ZSh3LCBoKSB7XHJcbiAgICBjLncgPSBjYW52YXMud2lkdGggPSBjYW52YXMuc3R5bGUud2lkdGggPSB3O1xyXG4gICAgYy5oID0gY2FudmFzLmhlaWdodCA9IGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UG9zaXRpb24oKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZSh0YWcpIHtcclxuICAgIHJldHVybiBkcmF3RGlyZWN0aW9uW2RyYXdEaXJlY3Rpb24ubGVuZ3RoXSA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHRoaXMsIGRyYXdEaXJlY3Rpb24pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0U3RhdHVzOiBbc3RhdHVzLm9uNSwgc3RhdHVzLmRlc2NyaXB0aW9uXSxcclxuICAgIGdldExheWVybnNJbmZvOiB7XHJcbiAgICAgIGZyb21Cb3R0b206IGRyYXdEaXJlY3Rpb25cclxuICAgIH0sXHJcblxyXG4gICAgc2V0UG9zaXRpb246IHNldFBvc2l0aW9uXHJcbiAgfTtcclxuXHJcbn0pKHsgMTI6IDIyLCBld3F3OiAnZnNkZicgfSkpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTY3JlZW47XHJcblxyXG5cclxuLy8qL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcml2YXRlL2VuZ2luZS9sYXllci9TY2VuZS5lczYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./private/index.js */0);
(function webpackMissingModule() { throw new Error("Cannot find module \"E:\\virtualHost\\goodpoint\\flow\""); }());


/***/ }
/******/ ]);