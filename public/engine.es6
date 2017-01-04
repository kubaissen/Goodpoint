'use strict'; //# sourceURL
// import {} from 'debug';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var cl = console.log.bind(console);

var GoodPoint = function() {
  var Name = 'GoodPoint';
  var Environment = {
    //default values
    name: 'GoodPoint',
    debug: true,
    engineIntro: true,
    parentElement: undefined,
    width: 800,
    height: 400,
    wind: {
      angle: '268 dec',
      energy: 11
    }
  };

  var Emiter = function() {

    var events = {};

    function setSub(eventName, callback) {
      if (events.hasOwnProperty[eventName]) {
        callback();
      }
    }

    return {
      setSub: setSub

    };
  }();

  // cl(new applicationCache(0))


  var canvas = document.createElement('canvas');
  //ct00x
  var c = canvas.getContext('2d');

  Object.defineProperty(c, 'w', {
    get: function get() {
      return this.canvas.width;
    },
    set: function set(val) {
      var w = val;
      console.warn('Someone try change width');
    }
  });

  c.setSize = function(w, h) {
    this.w = this.canvas.width = this.canvas.style.width = w;
    this.h = this.canvas.height = this.canvas.style.height = h;
  };
  c.setCenter = function() {
    this.canvas.style.left = window.innerWidth / 2 - this.w / 2 + 'px';
    this.canvas.style.top = window.innerHeight / 2 - this.h / 2 + 'px';
  };

  c.setSize(800, 450);
  c.setCenter();

  canvas.title = Name;
  setStyleWithStyle(canvas, {
    position: 'absolute',
    backgroundColor: '#b70020',
    color: 'white'
  });

  window.addEventListener('resize', function() {
    c.setCenter();
  });

  /********************************************************************************************************************
   * CONSTRUCTOR ( setSub.onConstr = call )
   */
  document.addEventListener('DOMContentLoaded', function() {

    document.body.appendChild(canvas);

    DB.init();
    Animation.start();
  });

  //localStorrageFunction
  var DB = {
    key: 'DB_KEY',
    changed: false,
    LOCAL_DB: {
      uniqueID: 100011155,
      initsHistory: [Date.now()],
      saveHistory: []
    },
    get uniqueID() {
      var val = DB.LOCAL_DB.uniqueID;
      DB.LOCAL_DB.uniqueID++;
      DB.save();
      return val;
    },
    save: function save() {
      DB.LOCAL_DB.saveHistory.push(Date.now());
      // localStorage.setItem(JSON.stringify(DB.LOCAL_DB));
      localStorage.setItem(DB.key, JSON.stringify(DB.LOCAL_DB));
    },
    load: function load(key) {
      // let _temp = localStorage.getItem(key);
      // cl(_temp);
      DB.LOCAL_DB = JSON.parse(localStorage.getItem(key));
      // DB.save();

      return 1;
    },
    init: function init() {
      DB.load(DB.key) ? function() {
        DB.LOCAL_DB.init.history.push(Date.now());
        DB.LOCAL_DB.init.saveHistory.push(Date.now());
      } : DB.save();
    }
  };

  var init = function init(object) {
    cl(object);
  };

  //   * @desc Just like dat. From nothing, in fraction of second: "we got our Universe!"
  //   * @param {project}
  var bigBANG = function bigBANG(params) {
    undefined.params = params;
    for (var props in params) {
      try {
        if (props in Environment) {
          // Override default Environment values
          if (Environment.hasOwnProperty(params) && undefined.params.hasOwnProperty(params)) {
            Environment[props] = params[props];
          }
        }
      } catch (Error) {
        //TODO: Create more officiant error handler;.

      }
    }
  };

  // let giveMe = {
  //   randomInt: (from, to) => {
  //     return (Math.floor(Math.random() * (to - from + 1)) + from);
  //   }
  // };

  function setStyleWithStyle(HTMLElement, newStyle) {
    for (var propertyName in newStyle) {
      if (newStyle.hasOwnProperty(propertyName) && HTMLElement.style.hasOwnProperty(propertyName)) {
        HTMLElement.style[propertyName] = newStyle[propertyName];
      } else {
        throw new Error(propertyName);
      }
    }
  }

  var Animation = {
    info: {
      stKey: 'animationStatus',
      status: 'Ready'
    },
    //     setStatus: (newStatus) => {
    //       MSG.emit('status change', 'Animation.setStatus()', newStatus);
    //       localStorage.setItem(Animation.info.stKey, newStatus);
    //       Animation.info.status = newStatus;
    //     },
    startTime: 0,
    stats: {
      frames: 0,
      requestedFrames: 0,
      get FPS() {
        return Math.floor(Animation.stats.frames / (Date.now() - Animation.startTime) * 100000) / 100;
      }
    },
    draw: function draw() {
      c.clearRect(0, 0, c.w, c.h);
      Animation.stats.requestedFrames = window.requestAnimationFrame(Animation.draw);
      c.fillRect(55, 55, 125, 451);
      c.fillStyle = ob.gradients.linear.sunset;
      c.fillRect(0, 0, c.w, c.h);

      c.fillStyle = 'white';
      c.font = '125px "Josefin Sans", sans-serif';
      c.fillText('fall balls', 50, 200);

      // c.putImageData(specialEffects.noise(c.getImageData(0, 0, 140, 140), 90), 200, 200);
      // c.fillStyle = ob.gradients.radial.sun;
      c.fillRect(100, 300, 30, 30);

      c.fillStyle = 'white';
      c.font = '30px "Josefin Sans", sans-serif';
      c.fillText(Animation.stats.FPS ? Animation.stats.FPS : 'ERROR', 30, 430);

      Animation.stats.frames++;
    },
    start: function start() {
      Animation.info.status = 'Play';

      //       Animation.ID = specialEffects.noise((new ImageData(c.w, c.h)), new color(123,11,22,1), 50);
      MSG.emit('animationStart', 'Animation.start', 'Play');
      Animation.startTime = Date.now();
      window.requestAnimationFrame(Animation.draw);
    }
  };

  var ob = {
    gradients: {
      linear: {
        get sunset() {
          // #000000 0%,#470d40 12%,#aa1b1d 26%,#ff2828 43%,#ffc528 57%,#007bff 70%,#ffffff 86%,#ffffff 100%
          this._temp = this._temp || c.createLinearGradient(0, 0, 0, c.h);
          this._temp.addColorStop(0.00, '#130a1d');
          this._temp.addColorStop(0.25, '#470d40');
          this._temp.addColorStop(0.50, '#aa0200');
          this._temp.addColorStop(0.70, '#ff8b00');
          this._temp.addColorStop(0.75, '#ffc528');
          this._temp.addColorStop(0.76, '#006eff');
          this._temp.addColorStop(1, '#000411');
          return this._temp;
        }
      },
      radial: {
        sun: function sun() {
          undefined._temp = undefined._temp || c.createRadialGradient(100, 100, 35, 900, 700, 200);
          undefined._temp.addColorStop(0, 'rgba(255,255,0, 0.1)');
          undefined._temp.addColorStop(0, 'rgba(255,255,0, 0.1)');
        }
      }
    }
  };

  var Transition = function Transition(value, newValue, amountTime, functionType, callback) {
    this.value = value;
    this.newValue = newValue;
    this.subValue = this.newValue > this.value ? this.newValue - this.value : this.value - this.newValue;
    this.amountTime = amountTime;
    this.go = this.currentTime = Date.now();
    this.end = this.start + amountTime;
    this.functionType = functionType;
    this.interval = 1000 / this.actualisation;
    this.pause = false;
    this.quant = this.subValue / this.time;
    this.percent = 0;

    // FPS this.updates 
  };

  // cl(new Transition(1000, 1000000, 36, 'linear', function() {
  //   cl(this);
  // }));

  var stage = function() {

    var make = {
      startUnique: 444555,
      get uniqueID() {
        return this.startUnique++;
      },
      set uniqueID(val) {
        console.warn('uniqueID is read only!');
      }
    };

    //timing
    var T = {
      START: Date.now()

    };
    //keepEvent
    var trigger = {};

    var draw = function draw() {};

    var BG = {
      layer: []
    };

    //Actor class
    var A = function A(ID, preRender, constructor, draw) {
      this.ID = ID;
      this.name = name;
      this.props = {
        startConditions: {
          time: null,
          calls: []
        },
        endConditions: {
          time: null,
          trigger: []
        }
      };
      this.draw = draw();
      this.preRender = preRender;
      this.status = 'Ready';
      cl('id: ', this.ID);
    };

    // let a = new A(make.uniqueID, name, ()=>{
    // cl(this);

    // });

    // cl(a);

    var DRAW = {
      bgLayers: [],
      midLayers: [],
      postprocessing: []
    };
  }();

  var InfoBox = function() {

    var form = {
      element: document.createElement('div'),
      node: undefined
    };

    function constr() {
      // let name = 'InfoBox';
      form.node = form.element.appendChild(document.createElement('div'));
      //       form.element.setAttribute('id', name + 'ID');
      var titleBar = form.node.appendChild(document.createElement('p'));
      titleBar.setAttribute('class', 'info title');
      titleBar.innerText = 'Title: Hello! Have a nice day!';
    }
    Emiter.setSub('onConstr', function() {
      InfoBox.onConstr;
    });

    function createInfoBar(fn) {
      var HTMLElement = form.node.appendChild(document.createElement('p'));
      if (typeof fn === 'function') {
        fn(InfoBox.onConstr);
      }
      HTMLElement.setAttribute('class', 'info bar');
      HTMLElement.set = true;
      return HTMLElement;
    };

    function run(inner) {
      setInterval(function(e) {
        var anim = {
          startTime: Animation.startTime,
          frames: Animation.stats.frames,
          status: Animation.info.status
        };
        inner = '' + Math.round(anim.frames / (Date.now() - anim.startTime) * 100000) / 100; // (Date.now() - anim.startTime));
        // return (anim.frames / anim.startTime, console.count());
      }, 1000);

      // return 'Aniamation: ' + Animation.stats.frames/Animation.startTime +  'status = ' + Animation.info.status + ', stKey = ' + Animation.info.stKey;
    }
    /*
        this.bars[this.bars.length] = this.createInfoBar(run);
        document.addEventListener('keypress', (e)=>{
          cl(e);
        });
          this.visible = true;
        this.switch = function() {
          if (this.visible) {
            //start animation hidding
          }
            return this.visible = !this.visible;
        };
    */
    // let msg = {
    //   new: (text, val, description) => {

    //   },
    //   allMsg: []
    // };

    // let data = localStorage.getItem('uniqueID') ? localStorage.setItem('uniqueID', JSON.stringify(msg)):'';//alert('ppp');

    return {
      onConstr: constr()

    };
  }();

  var MSG = function() {

    var key = 'emit';
    var uniqueId = localStorage.getItem(key) || 0;

    var clientsList = {};

    function addSub(trigger, callback) {
      clientsList[uniqueId] = {
        trigger: trigger,
        callback: callback
      };
      uniqueId++;
      localStorage.setItem(key, uniqueId);

      return uniqueId - 1;
    }

    function resign(emitId) {
      clientsList[emitId] = null;
    }

    function emit(trigger, functionCall, newValue) {
      for (var client in clientsList) {
        if (client.trigger && client.trigger === trigger) {
          cl(clientsList[client].callback);
        }
      }
    }

    return {
      emit: emit,
      addSub: addSub,
      resign: resign
    };
  }();

  var Color = function Color(r, g, b, alpha) {
    this.default = {
      shades: 255,
      chanel: 1
    };

    this.r = r || this.default.shades;
    this.g = g || this.default.shades;
    this.b = b || this.default.shades;
    this.alpha = alpha || this.default.chanel;

    this.show = function() {
      cl('%c ', '[                  ]' + this.get('rgb') + ' ', 'color values:  ' + this.get('rgba'));
    };

    this.DecToHex = function(val) {
      this.hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      this.initValue = val;
      this.hexValue = '';

      if (this.initValue < 16) {
        return this.hex[this.initValue];
      }

      this.recurrence = function(number) {
        var tempValue = Math.floor(number / 16);
        var letter = this.hex[number - tempValue * 16];
        this.hexValue = letter + this.hexValue;
        if (tempValue < 16) {
          return cl(this.hexValue);
        }
        this.recurrence(tempValue);
      };

      return this.recurrence(this.initValue);
    };

    this.get = function(option) {
      //Constructor
      option = option.toLowerCase();
      var retStr = '';
      var rgb = this.r + ', ' + this.g + ', ' + this.b;
      switch (option) {

        case 'rgb':
          {
            return retStr = 'RGB(' + rgb + ')';
          }

        case 'rgba':
          {
            return retStr = 'RGBA(' + rgb + ', ' + this.alpha + ')';
          }

        case 'object':
          {
            return {
              r: this.r,
              g: this.g,
              b: this.b,
              a: this.alpha
            };
          }

        case 'array':
          {
            return [this.r, this.g, this.b, this.alpha];
          }

        case 'hex':
          {
            return '#' + this.c(this.r) + this.DecToHex(this.g) + this.DecToHex(this.b);
          }

        default:
          {
            return this.get('object');
          }
      } //switch end
    };
  };

  cl(new Color(255, 255, 0, 1).show());

  var specialEffects = {
    // todo: draw artefact like: shadows, light:
    noise: function noise(imageData, noiseColor, amount) {
      var bgColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

      undefined.rgb = noiseColor.get('object');
      undefined.noiseColor = noiseColor;
      noiseColor.show();
      if (bgColor && (typeof bgColor === 'undefined' ? 'undefined' : _typeof(bgColor)) === 'object') {
        undefined.bgColor = bgColor.get('object');
      } else {
        undefined.bgColor = undefined;
      }
      undefined.amout = amount;
      undefined.imgData = imageData;

      undefined.setDots = function(imgData, amout, RGB, bgRGB) {
        for (var i = 0; i < imgData.data.length; i = i + 4) {
          if (Math.random() < amout / 100) {
            imgData.data[i] = RGB.r;
            imgData.data[i + 1] = RGB.g;
            imgData.data[i + 2] = RGB.b;
            imgData.data[i + 3] = RGB.a;
          } else {
            if (!this.bgColor) return;
            imgData.data[i] = bgRGB.r;
            imgData.data[i + 1] = bgRGB.g;
            imgData.data[i + 2] = bgRGB.b;
            imgData.data[i + 3] = bgRGB.a;
          }
        }
        return imgData;
      };
      return undefined.imgData = undefined.setDots(undefined.imgData, undefined.amout, undefined.rgb, undefined.bgColor);
    }
  };

  return {
    init: init,
    createWorld: bigBANG
  };

}();

// START OUR FUN VIRTUAL.createWorld({   parentElement:
// document.querySelector('body'),   name: 'mineCraft',   width: '600px',
// height: '450px', });

(function() {

  var setup = {
    projectName: 'Fall Balls',
    initBgColor: 'red',
    parentElement: document.body,
    width: 666,
    height: 450
  };

  // let game = null;
  /**
   * New game constructor:
   * @constructor
   */
  document.addEventListener('DOMContentLoaded', function() {
    var game = GoodPoint.init(setup);
  });
})();
//# sourceMappingURL=engine.js.map