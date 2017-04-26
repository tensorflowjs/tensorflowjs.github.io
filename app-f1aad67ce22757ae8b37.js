webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawCanvas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = __webpack_require__(58);

var _immutable2 = _interopRequireDefault(_immutable);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint babel/new-cap: 0 */

var DrawCanvas = exports.DrawCanvas = function (_Component) {
  _inherits(DrawCanvas, _Component);

  function DrawCanvas() {
    _classCallCheck(this, DrawCanvas);

    var _this = _possibleConstructorReturn(this, (DrawCanvas.__proto__ || Object.getPrototypeOf(DrawCanvas)).call(this));

    _this.state = {
      _lines: _immutable2.default.List([]),
      _paint: false
    };
    return _this;
  }

  _createClass(DrawCanvas, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this._canvas;
    }
  }, {
    key: 'clearCanvas',
    value: function clearCanvas() {
      var _this2 = this;

      this.setState({
        _lines: this.state._lines.clear()
      }, function () {
        if (_this2.props.onChange) {
          _this2.props.onChange();
        }
      });
    }
  }, {
    key: 'redrawCanvas',
    value: function redrawCanvas() {
      var context = this._canvas.getContext('2d');

      // clear the canvas
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillStyle = "#000000";
      context.fillRect(0, 0, this._canvas.width, this._canvas.height);

      // repaint the canvas
      context.strokeStyle = "#FFFFFF";
      context.lineJoin = "round";
      context.lineWidth = 20;

      var lines = this.state._lines.toJS();

      // check for the empty state
      if (lines.length === 0) {
        context.font = '20px sans-serif';
        context.textAlign = "center";
        context.fillStyle = "#666666";
        context.fillText('Draw Here!', 100, 100);
      }

      for (var ii = 0; ii < lines.length; ii++) {
        var line = lines[ii];

        if (line.length === 0) {
          continue;
        }

        context.beginPath();
        for (var jj = 0; jj < line.length; jj++) {
          if (jj === 0) {
            context.moveTo(line[jj][0], line[jj][1]);
          } else {
            context.lineTo(line[jj][0], line[jj][1]);
          }
        }
        context.moveTo(line[0][0], line[0][1]);
        context.closePath();
        context.stroke();
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (this.state._paint) {
        var mouseX = e.pageX - this._canvas.offsetLeft;
        var mouseY = e.pageY - this._canvas.offsetTop;

        this.setState({
          _lines: this.state._lines.update(-1, function (line) {
            return line.push([mouseX, mouseY]);
          })
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.redrawCanvas();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.redrawCanvas();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('canvas', {
          height: 200,
          width: 200,
          onMouseDown: function onMouseDown(e) {
            _this3.setState({
              _lines: _this3.state._lines.push(_immutable2.default.List([])),
              _paint: true
            });
          },
          onMouseUp: function onMouseUp(e) {
            _this3.setState({
              _paint: false
            });
            if (_this3.props.onChange) {
              _this3.props.onChange();
            }
          },
          onMouseLeave: function onMouseLeave(e) {
            _this3.setState({
              _paint: false
            });
            if (_this3.props.onChange) {
              _this3.props.onChange();
            }
          },
          onMouseMove: this.handleMouseMove.bind(this),
          className: 'drawCanvas',
          ref: function ref(c) {
            _this3._canvas = c;
          }
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: '#', onClick: this.clearCanvas.bind(this) },
            'Clear'
          )
        )
      );
    }
  }]);

  return DrawCanvas;
}(_react.Component);

DrawCanvas.propTypes = {
  onChange: _react2.default.PropTypes.function
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loading_animation = __webpack_require__(59);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = exports.Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'centeredContainer' },
          _react2.default.createElement(
            'div',
            { className: 'centeredContainerTitle' },
            'Loading...'
          ),
          this.props.message,
          _react2.default.createElement(_loading_animation.LoadingAnimation, null)
        )
      );
    }
  }]);

  return Loading;
}(_react.Component);

Loading.propTypes = {
  message: _react2.default.PropTypes.string.isRequired
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGraphAsArrayBuffer = loadGraphAsArrayBuffer;
exports.loadText = loadText;
exports.loadGraph = loadGraph;
exports.topK = topK;
var _ = __webpack_require__(13);

function loadGraphAsArrayBuffer(graph) {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", graph, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function (ev) {
      var arrayBuffer = oReq.response; // Note: not oReq.responseText
      if (arrayBuffer) {
        var byteArray = new Uint8Array(arrayBuffer);

        resolve(byteArray);
      }
    };

    oReq.send(null);
  });
}

function loadText(url) {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "text";

    oReq.onload = function (ev) {
      resolve(oReq.responseText);
    };

    oReq.send(null);
  });
}

function loadGraph(graph) {
  return loadGraphAsArrayBuffer(graph).then(function (byteArray) {
    // convert to string
    var graph = "";
    for (var ii = 0; ii < byteArray.length; ii++) {
      graph += String.fromCharCode(byteArray[ii]);
    }

    return graph;
  });
}

function topK(arr, k) {
  // this is currently O(N log N), the correct solution is O(N log K), consider fixing
  // can do O(N log K) by using a heap or by maintaining a sorted list of size K as you iterate through the array

  var enumerated = _.map(arr, function (x, idx) {
    return [idx, x];
  });

  var sorted = _.orderBy(enumerated, function (x) {
    return x[1];
  }, 'desc');

  return _.slice(sorted, 0, k);
}

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "09d826beb25c769632a0.worker.js");
};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tfjs = __webpack_require__(35);

var _tfjs2 = _interopRequireDefault(_tfjs);

var _header = __webpack_require__(90);

var _lib_loader = __webpack_require__(91);

var _splash = __webpack_require__(96);

var _faq = __webpack_require__(92);

var _about = __webpack_require__(89);

var _studio = __webpack_require__(97);

var _oneplus = __webpack_require__(95);

var _mnist = __webpack_require__(94);

var _inception = __webpack_require__(93);

__webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      _page: "Home",
      _lib: undefined,
      _downloadingLib: false,
      _password: ""
    };
    return _this;
  }

  _createClass(App, [{
    key: 'changePage',
    value: function changePage(page) {
      this.setState({
        _page: page
      });
    }
  }, {
    key: 'downloadLib',
    value: function downloadLib() {
      var _this2 = this;

      this.setState({
        _downloadingLib: true
      });

      _tfjs2.default.for_browser('/tensorflowjs/').then(function (lib) {
        _this2.setState({
          _downloadingLib: false,
          _lib: lib
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // "PASSWORD PROTECTED"
      // NOTE: This isn't meant to be secure, it's meant to deter a passerby
      var password = "inception";
      if (this.state._password !== password) {
        return _react2.default.createElement(
          'div',
          { className: 'centeredContainer' },
          _react2.default.createElement('input', {
            placeholder: 'Password...',
            value: this.state._password,
            onChange: function onChange(ev) {
              _this3.setState({
                _password: ev.target.value
              });
            }
          })
        );
      }

      // ACTUAL RENDER
      var pages = {
        "Home": _react2.default.createElement(_splash.Splash, null),
        "About": _react2.default.createElement(_about.About, null),
        // "FAQ": <Faq/>,
        "1 + 1": _react2.default.createElement(_lib_loader.LibLoader, { wraps: _oneplus.OnePlus, downloadLib: this.downloadLib.bind(this), lib: this.state._lib, downloadingLib: this.state._downloadingLib }),
        "MNIST": _react2.default.createElement(_lib_loader.LibLoader, { wraps: _mnist.MNIST, downloadLib: this.downloadLib.bind(this), lib: this.state._lib, downloadingLib: this.state._downloadingLib }),
        "Inception v3": _react2.default.createElement(_lib_loader.LibLoader, { wraps: _inception.Inception, downloadLib: this.downloadLib.bind(this), lib: this.state._lib, downloadingLib: this.state._downloadingLib }),
        "Studio": _react2.default.createElement(_studio.Studio, null)
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header.Header, { pages: pages, currentPage: this.state._page, changePage: this.changePage.bind(this) }),
        pages[this.state._page]
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingAnimation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingAnimation = exports.LoadingAnimation = function (_Component) {
  _inherits(LoadingAnimation, _Component);

  function LoadingAnimation() {
    _classCallCheck(this, LoadingAnimation);

    return _possibleConstructorReturn(this, (LoadingAnimation.__proto__ || Object.getPrototypeOf(LoadingAnimation)).apply(this, arguments));
  }

  _createClass(LoadingAnimation, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "sk-cube-grid" },
        _react2.default.createElement("div", { className: "sk-cube sk-cube1" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube2" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube3" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube4" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube5" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube6" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube7" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube8" }),
        _react2.default.createElement("div", { className: "sk-cube sk-cube9" })
      );
    }
  }]);

  return LoadingAnimation;
}(_react.Component);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = exports.About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "h2",
          null,
          "About"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Hi, my name is Tomas! I am a senior at Harvard College, and this is part of my senior thesis! I've been working on this project since September, so I have a lot to share. I intend to release a sequence of blog posts to help anyone interested in this field (or maybe I'll just post the thesis online). For now, I wanted to share with you how I got TensorFlow running in the browser, and how you can too!"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "TensorFlow Core"
        ),
        _react2.default.createElement(
          "p",
          { className: "note" },
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tomasreimers/tensorflow-emscripten" },
            "https://github.com/tomasreimers/tensorflow-emscripten"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "To get TensorFlow running in the browser, we decided to compile it rather than attempt to port it (although there is an awesome project to port ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/transcranial/keras-js" },
            "keras"
          ),
          " into JS). This decision was driven by a realization that TensorFlow (and machine learning) is still rapidly changing, and we wanted to be at the bleeding edge, as opposed to be lagged behind by the speed of porting. Over the course of this project, tensorflow has jumped from v0.10 to v0.11 to v0.12 to v1.0, each version bump took us <10 minutes to update, despite huge changes to the codebase. Additionally, ASM.js (our compile target) gives us some pretty awesome speed benefits."
        ),
        _react2.default.createElement(
          "p",
          null,
          "To port over to JS, we decided to use ",
          _react2.default.createElement(
            "a",
            { href: "http://kripken.github.io/emscripten-site/" },
            "Emscripten"
          ),
          ", a drop-in replacement for GCC that compiles C/C++ into LLVM-IR and then into ",
          _react2.default.createElement(
            "a",
            { href: "http://asmjs.org/" },
            "ASM.js"
          ),
          " (a subset of Javsacript meant to be used as a compile target). Emscripten has been used to port everything from games to physics engines, and is used in production by companies such as ",
          _react2.default.createElement(
            "a",
            { href: "https://www.figma.com" },
            "Figma"
          ),
          ". ASM apps report seeing up speeds as low as only 2x slower than native bytecode, and firefox even fasttracks ASM code. Emscripten can also compile into ",
          _react2.default.createElement(
            "a",
            { href: "http://webassembly.org/" },
            "WebAssembly"
          ),
          ", and we've begun to look into that."
        ),
        _react2.default.createElement(
          "p",
          null,
          "Emscripten requires a Makefile (where we can swap out the compiler), and TensorFlow is compiled with ",
          _react2.default.createElement(
            "a",
            { href: "https://bazel.build/" },
            "Bazel"
          ),
          ", Google's build tool. We considered extending the bazel files to include a ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/bazelbuild/bazel/wiki/Building-with-a-custom-toolchain" },
            "CrossTool"
          ),
          " but concluded it would make maintence more difficult and lose the 'bleeding-edge' advantage we were seeking. Fortuntely, Google maintains a ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/makefile" },
            "Makefile"
          ),
          " for android and iOS, so we decided to extend that. This means that we would be compiling with the same ops that one compiles for Android or iOS (for more on ops or how TF works in general, please see:",
          _react2.default.createElement(
            "a",
            { href: "https://www.tensorflow.org/versions/r0.10/get_started/basic_usage" },
            "https://www.tensorflow.org/versions/r0.10/get_started/basic_usage"
          ),
          "). We experimented (and succeeded) with including other ops, such as the Image ops (i.e. DecodeJpeg), but decided against keeping it for simplicity's sake (as it required us to also port and maintain libjpeg, libpng, and libgif in JS). See ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tomasreimers/tensorflow-emscripten/tree/saved_v0.10.0" },
            "this branch"
          ),
          " for a version pinned at v0.10 with the image ops included."
        ),
        _react2.default.createElement(
          "p",
          null,
          "To compile TensorFlow into JavaScript, there are three major things that need to happen: (1) port dependencies to JS, (2) fix types, and (3) single thread it. Porting dependencies was rather straight forward: Zlib already has an ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/emscripten-ports/zlib" },
            "emscripten port"
          ),
          ", libmath ships with Emscripten, and there was ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/invokr/protobuf-emscripten" },
            "prior work for protobufs"
          ),
          ", but we ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tomasreimers/protobuf-emscripten" },
            "forked it"
          ),
          " and made our own so we could pin versions. Next up was types, TensorFlow uses Eigen as it's linear algebra library. Eigen defines a type called Eigen::Scalar (or Eigen::Index) and ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/RLovelett/eigen/blob/f14463caef30220c1bc65510e3103d170908fefb/Eigen/src/Core/util/Meta.h#L25" },
            "defines it"
          ),
          "as ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/RLovelett/eigen/blob/c357eb377661d0674e5bc1acab48a4957d3d671f/Eigen/src/Core/util/Macros.h#L336" },
            "std::ptr_diff"
          ),
          ", to match the bitness of the host. Because TensorFlow officially only supports 64b systems, it sets Eigen::Scalars to be int64_t regularly. This is a problem because JavaScript only has doubles, so we only have 53b of integer precision. This forces Emscripten to define ptrdiff_t as 32, which in turn causes the compiler to throw an error; we fixed this by replacing all the int64 with Eigen::Index or Eigen::Scalar. The last issue to resolve was single threading, currently JavaScript isn't capable of doing threads (although Firefox is ",
          _react2.default.createElement(
            "a",
            { href: "https://hacks.mozilla.org/2016/05/a-taste-of-JavaScripts-new-parallel-primitives/" },
            "working on it"
          ),
          ".) This poses a problem, because TensorFlow uses a lot of threading. TensorFlow's computational model is to dispatch work (in the form of closures) to a threadpool. To singlethread this, we can simply replace the dispatch function with a function that executes the closure and returns. This also automatically works with all of the synchronization mechanisms because all varriers have been satisified by the time they are reached (as the paradigm is to dispatch work and then wait on it)."
        ),
        _react2.default.createElement(
          "p",
          null,
          "Having fixed all the problems, we can now compile TensorFlow into an archive we can link other programs against and compile to JavaScript."
        ),
        _react2.default.createElement(
          "h2",
          null,
          "TensorJS"
        ),
        _react2.default.createElement(
          "p",
          { className: "note" },
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tomasreimers/tensorjs" },
            "https://github.com/tomasreimers/tensorjs"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "Emscripten provides good interfaces to call functions with numbers, strings, and even vectors. Unfortunately, this isn't rich enough for our inputs, Tensors. This is problematic, because most use cases requires us to run models on user provided inputs (there isn't much sense in running graphs client-side on the same host-provided input). We explored a few solutions, including writing and reading images from Emscripten's mock file system (for image recognition) or using JSON. We settled on using Google's tensor protobuf used internally in TensorFlow."
        ),
        _react2.default.createElement(
          "p",
          null,
          "We developed the library TensorJS to read and write tensor protobufs from JavaScript multi-dimensional arrays. Currenlty it supports int tensors and float tensors."
        ),
        _react2.default.createElement(
          "h2",
          null,
          "Graph Runner"
        ),
        _react2.default.createElement(
          "p",
          { className: "note" },
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tomasreimers/tensorflowjs" },
            "https://github.com/tomasreimers/tensorflowjs"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "At this point we could compile C/C++ programs that used TensorFlow into JavaScript, and we could call them with Tensors from JavaScript. We started to notice that all programs kinda look similar (you create a session, pass it a graph, and then feed inputs to the graph while fetching outputs). We decided to generalize this and wrote a universal graph runner that could be used to execute any arbitrary graph. The graph runner is compiled by the main tensorflow-emscripten repository, but we export the build files here so that you don't have to build it yourself."
        ),
        _react2.default.createElement(
          "p",
          { className: "note" },
          "NOTE: It may still make sense to build your own version of graph runner if you need certain ops, or wish to exclude one's you're not using (per ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/tools/print_selective_registration_header.py" },
            "the selective registration header"
          ),
          ")."
        ),
        _react2.default.createElement(
          "h2",
          null,
          "TFJS"
        ),
        _react2.default.createElement(
          "p",
          { className: "note" },
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tomasreimers/tfjs" },
            "https://github.com/tomasreimers/tfjs"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "Even with the universal graph runner, there were still small frictions in writing programs (e.g. Emscripten forces you to delete any objects that functions return, because it can't tell when they're done). So we created a wrapper for TensorFlow.js which provides (almost) the same API as Python."
        )
      );
    }
  }]);

  return About;
}(_react.Component);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = exports.Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabs = [];

      var _loop = function _loop(ii) {
        var tabName = Object.keys(_this2.props.pages)[ii];

        var cn = "";
        if (tabName === _this2.props.currentPage) {
          cn = "active-tab";
        }

        tabs.push(_react2.default.createElement(
          "a",
          { key: tabName, className: cn, onClick: function onClick() {
              return _this2.props.changePage(tabName);
            }, href: "#" },
          tabName
        ));
      };

      for (var ii = 0; ii < Object.keys(this.props.pages).length; ii++) {
        _loop(ii);
      }

      return _react2.default.createElement(
        "div",
        { className: "header" },
        _react2.default.createElement(
          "div",
          { className: "header-left" },
          _react2.default.createElement("img", { src: "/images/tf.jpg", height: "40", width: "40", alt: "logo" }),
          ".js"
        ),
        _react2.default.createElement(
          "div",
          { className: "header-right" },
          tabs
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  changePage: _react2.default.PropTypes.func.isRequired,
  currentPage: _react2.default.PropTypes.string.isRequired,
  pages: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LibLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _download_warning = __webpack_require__(99);

var _loading = __webpack_require__(29);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LibLoader = exports.LibLoader = function (_Component) {
  _inherits(LibLoader, _Component);

  function LibLoader() {
    _classCallCheck(this, LibLoader);

    return _possibleConstructorReturn(this, (LibLoader.__proto__ || Object.getPrototypeOf(LibLoader)).apply(this, arguments));
  }

  _createClass(LibLoader, [{
    key: 'render',
    value: function render() {
      if (this.props.lib) {
        // requires an uppercase variable name *facepalm*
        var ToRender = this.props.wraps;
        return _react2.default.createElement(ToRender, { lib: this.props.lib });
      }

      if (this.props.downloadingLib) {
        return _react2.default.createElement(_loading.Loading, { message: "Downloading & Initializing TensorFlow.js" });
      }

      return _react2.default.createElement(_download_warning.DownloadWarning, { downloadLib: this.props.downloadLib });
    }
  }]);

  return LibLoader;
}(_react.Component);

LibLoader.propTypes = {
  wraps: _react2.default.PropTypes.func.isRequired,
  downloadLib: _react2.default.PropTypes.func.isRequired,
  downloadingLib: _react2.default.PropTypes.bool.isRequired,
  lib: _react2.default.PropTypes.object
};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Faq = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Faq = exports.Faq = function (_Component) {
  _inherits(Faq, _Component);

  function Faq() {
    _classCallCheck(this, Faq);

    return _possibleConstructorReturn(this, (Faq.__proto__ || Object.getPrototypeOf(Faq)).apply(this, arguments));
  }

  _createClass(Faq, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        "Hi!"
      );
    }
  }]);

  return Faq;
}(_react.Component);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inception = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loading = __webpack_require__(29);

var _loading_animation = __webpack_require__(59);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = __webpack_require__(26);

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _tensorjs = __webpack_require__(27);

var _tensorjs2 = _interopRequireDefault(_tensorjs);

var _utils = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InceptionWorker = __webpack_require__(368);

var INCEPTION_IMG_SQ_SIZE = 299;

var Inception = exports.Inception = function (_Component) {
  _inherits(Inception, _Component);

  function Inception() {
    _classCallCheck(this, Inception);

    var _this = _possibleConstructorReturn(this, (Inception.__proto__ || Object.getPrototypeOf(Inception)).call(this));

    _this.state = {
      // using bool (instead of str of graph) b/c graph too big to store in memory
      _webworker: false,
      _webworkerLoaded: false,
      _results: undefined,
      _loadingResults: false,
      _imgWidth: INCEPTION_IMG_SQ_SIZE,
      _imgHeight: INCEPTION_IMG_SQ_SIZE,
      _noWebworkers: false,
      _labels: false
    };

    // set up the webworker
    if (!window.Worker) {
      // NOTE: Mutating state directly b/c not mounted yet... so setState is a no-op
      _this.state._noWebworkers = true; // eslint-disable-line react/no-direct-mutation-state
      return _possibleConstructorReturn(_this);
    }

    var inceptionWorker = new InceptionWorker();
    inceptionWorker.onmessage = function (e) {
      console.log("Recieved Message from Worker:", e);
      if (e.data.type === "DONE_INIT") {
        _this.setState({
          _webworkerLoaded: true
        });
      } else if (e.data.type === "COMPUTE_RESPONSE") {
        var topLabels = (0, _utils.topK)(e.data.data[0][0], 5);
        var topLabelsWithText = _lodash2.default.map(topLabels, function (label) {
          var textLabel = _this.state._labels[label[0]];
          return [textLabel].concat(label);
        });

        _this.setState({
          _loadingResults: false,
          _results: topLabelsWithText
        });
      }
    };

    _this.state._webworker = inceptionWorker; // eslint-disable-line react/no-direct-mutation-state

    // set up the graph labels
    (0, _utils.loadText)("/graphs/inception_labels.txt").then(function (labels) {
      _this.setState({
        _labels: labels.split("\n")
      });
    });
    return _this;
  }

  _createClass(Inception, [{
    key: 'willBeUnmounted',
    value: function willBeUnmounted() {
      if (this.state._webworker) {
        this.state._webworker.terminate();
      }
    }
  }, {
    key: 'compute',
    value: function compute(url) {
      var _this2 = this;

      var img = new Image();
      img.onload = function () {
        // create the image
        _this2.setState({
          _imgWidth: img.width,
          _imgHeight: img.height
        });
        _this2._origCanvas.getContext('2d').drawImage(img, 0, 0);

        // resize the image
        var top = 0;
        var left = 0;
        var size = 0;

        if (img.width > img.height) {
          size = img.height;
          left = (img.width - img.height) / 2;
        } else {
          size = img.width;
          top = (img.height - img.width) / 2;
        }

        var resizedContext = _this2._resizedCanvas.getContext('2d');
        resizedContext.imageSmoothingEnabled = true;
        resizedContext.mozImageSmoothingEnabled = true;
        resizedContext.webkitImageSmoothingEnabled = true;
        resizedContext.msImageSmoothingEnabled = true;

        resizedContext.drawImage(_this2._origCanvas, left, top, size, size, 0, 0, INCEPTION_IMG_SQ_SIZE, INCEPTION_IMG_SQ_SIZE);

        // print the data
        _this2._origImg.src = _this2._origCanvas.toDataURL();
        _this2._resizedImg.src = _this2._resizedCanvas.toDataURL();

        // get tensor
        var imageData = resizedContext.getImageData(0, 0, _this2._resizedCanvas.width, _this2._resizedCanvas.height);

        var imageDataArray = _this2.props.lib.image_ops.get_array(imageData, false, 128, 128);

        // fetch results
        console.log("Sending compute request...");
        _this2.setState({
          _loadingResults: true
        });

        _this2.state._webworker.postMessage({
          type: "COMPUTE_REQUEST",
          data: _tensorjs2.default.floatTensorAB(imageDataArray)
        });
      };
      img.src = url;
    }
  }, {
    key: 'loadLocalImage',
    value: function loadLocalImage() {
      var _this3 = this;

      // load image
      var reader = new FileReader();
      reader.onload = function (event) {
        _this3.compute(event.target.result);
      };

      reader.readAsDataURL(this._fileUpload.files[0]);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      // check all preconditions
      if (this.state._noWebworkers) {
        return _react2.default.createElement(_loading.Loading, { message: "This demo requires webworkers..." });
      }

      if (!this.state._webworkerLoaded) {
        return _react2.default.createElement(_loading.Loading, { message: "Setting up WebWorker..." });
      }

      if (!this.state._labels) {
        return _react2.default.createElement(_loading.Loading, { message: "Fetching Labels..." });
      }

      // compute results
      var results = void 0;
      if (this.state._loadingResults) {
        results = _react2.default.createElement(_loading_animation.LoadingAnimation, null);
      } else {
        var resultsArray = void 0;
        if (this.state._results) {
          resultsArray = _lodash2.default.map(this.state._results, function (result) {
            return _react2.default.createElement(
              'div',
              { className: 'dataResult', key: result[1] },
              '"',
              result[0],
              '" ',
              _react2.default.createElement(
                'span',
                { className: 'quiet' },
                '(confidence: ',
                result[2].toFixed(4),
                ')'
              )
            );
          });
        }

        results = _react2.default.createElement(
          'div',
          { className: 'dataResults' },
          resultsArray
        );
      }

      // create image buttons
      var preloadedImages = ["/data/apple.png", "/data/airplane.jpg", "/data/baseball.jpg", "/data/burger.jpg", "/data/dog.jpg"];

      var preloadedImageButtons = _lodash2.default.map(preloadedImages, function (img) {
        return _react2.default.createElement('div', {
          key: img,
          className: 'preloadedImageButton',
          onClick: function onClick() {
            _this4.compute(img);
          },
          style: { backgroundImage: 'url(' + img + ')' }
        });
      });

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement('canvas', {
          width: this.state._imgWidth,
          height: this.state._imgHeight,
          style: { display: "none" },
          ref: function ref(r) {
            _this4._origCanvas = r;
          }
        }),
        _react2.default.createElement('canvas', {
          width: INCEPTION_IMG_SQ_SIZE,
          height: INCEPTION_IMG_SQ_SIZE,
          style: { display: "none" },
          ref: function ref(r) {
            _this4._resizedCanvas = r;
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'demoDescription' },
          'This demo labels images.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'demo' },
          _react2.default.createElement(
            'div',
            { className: 'panels' },
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Select Image'
              ),
              preloadedImageButtons,
              _react2.default.createElement(
                'p',
                null,
                'Or upload your own...'
              ),
              _react2.default.createElement('input', {
                type: 'file',
                onChange: this.loadLocalImage.bind(this),
                ref: function ref(i) {
                  _this4._fileUpload = i;
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Original Image'
              ),
              _react2.default.createElement('img', {
                style: { maxWidth: "100%" },
                ref: function ref(r) {
                  _this4._origImg = r;
                }
              }),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Cropped & Resized Image'
              ),
              _react2.default.createElement('img', {
                style: { maxWidth: "100%" },
                ref: function ref(r) {
                  _this4._resizedImg = r;
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Results'
              ),
              results
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'p',
          null,
          'This demo is different than the others because the scale of the graph. Inception is Google\'s image recognition net, and is 27 layers deep with 91MiB of weights. In order to not block the render thread of the browser while computing results, on load we spin up a webworker. When you select an image to categorize, it is turned into a multidimensional array, which is then passed to the webworker to compute.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'note' },
          'NOTE: You may notice that if the top five labels include labels with extremily low confidence (<0.01) this graph outputs different labels than those produced by the ',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/label_image' },
            'label_image demo'
          ),
          ' provided by ',
          _react2.default.createElement(
            'a',
            { href: 'https://www.tensorflow.org/tutorials/image_recognition' },
            'Google'
          ),
          ' (which uses the exact same graph as this). This is because the inception requires images of exactly 299px by 299px. To achieve this, Google\'s demo uses ',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/tensorflow/tensorflow/blob/master/tensorflow/examples/label_image/main.cc#L120' },
            'bilinear downsampling'
          ),
          ' while we use the built in browser canvas ',
          _react2.default.createElement(
            'a',
            { href: 'http://entropymine.com/resamplescope/notes/browsers/' },
            'downscaling algorithms'
          ),
          ', which means we have slightly different input images.'
        )
      );
    }
  }]);

  return Inception;
}(_react.Component);

Inception.propTypes = {
  lib: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MNIST = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draw_canvas = __webpack_require__(100);

var _loading = __webpack_require__(29);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = __webpack_require__(26);

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _tensorjs = __webpack_require__(27);

var _tensorjs2 = _interopRequireDefault(_tensorjs);

var _utils = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MNIST = exports.MNIST = function (_Component) {
  _inherits(MNIST, _Component);

  function MNIST() {
    _classCallCheck(this, MNIST);

    var _this = _possibleConstructorReturn(this, (MNIST.__proto__ || Object.getPrototypeOf(MNIST)).call(this));

    _this.state = {
      _graph: "",
      _session: undefined,
      _results: undefined
    };

    (0, _utils.loadGraph)("/graphs/mnist.pb").then(function (graph) {
      _this.setState({
        _graph: graph
      });
      return new _this.props.lib.Session(graph);
    }).then(function (sess) {
      _this.setState({
        _session: sess
      });
    });
    return _this;
  }

  _createClass(MNIST, [{
    key: 'willBeUnmounted',
    value: function willBeUnmounted() {
      if (this.state._session) {
        this.state._session.delete();
      }
    }
  }, {
    key: 'compute',
    value: function compute() {
      // resize data
      var context = this._resizedCanvas.getContext('2d');
      context.imageSmoothingEnabled = true;
      context.mozImageSmoothingEnabled = true;
      context.webkitImageSmoothingEnabled = true;
      context.msImageSmoothingEnabled = true;

      var fromCanvas = this._drawCanvas.getCanvas();

      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.drawImage(fromCanvas, 0, 0, fromCanvas.width, fromCanvas.height, 0, 0, this._resizedCanvas.width, this._resizedCanvas.height);

      // get tensor
      var imageData = context.getImageData(0, 0, this._resizedCanvas.width, this._resizedCanvas.height);

      var imageDataArray = this.props.lib.image_ops.get_array(imageData, true, 0, 255);

      // fetch results
      // note: for single return value ops (like the below), the ":0" is optional
      var results = this.state._session.run({
        "Reshape:0": _tensorjs2.default.floatTensor(imageDataArray),
        "dropout:0": _tensorjs2.default.floatTensor(1.0)
      }, ["prediction_onehot:0"]);

      var prediction = results[0][0];

      // pull top n and display
      this.setState({
        _results: (0, _utils.topK)(prediction, 3)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state._graph) {
        return _react2.default.createElement(_loading.Loading, { message: "Downloading Graph" });
      }

      if (!this.state._session) {
        return _react2.default.createElement(_loading.Loading, { message: "Initializing Session" });
      }

      var results = void 0;
      if (this.state._results) {
        results = _lodash2.default.map(this.state._results, function (result) {
          return _react2.default.createElement(
            'div',
            { key: result[0] },
            result[0],
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'quiet' },
              '(output: ',
              result[1].toFixed(4),
              ')'
            )
          );
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'demoDescription' },
          'This demo recognizes handwritten digits between 0 and 9.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'demo' },
          _react2.default.createElement(
            'div',
            { className: 'panels' },
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Input (Draw Here!)'
              ),
              _react2.default.createElement(_draw_canvas.DrawCanvas, {
                ref: function ref(r) {
                  _this2._drawCanvas = r;
                },
                onChange: function onChange() {
                  _this2.compute();
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Scaled Image'
              ),
              _react2.default.createElement('canvas', {
                width: 28,
                height: 28,
                ref: function ref(r) {
                  _this2._resizedCanvas = r;
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Results'
              ),
              _react2.default.createElement(
                'div',
                { className: 'dataResults' },
                results
              )
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'This is literally just the graph from the TensorFlow ',
            _react2.default.createElement(
              'a',
              { href: 'https://www.tensorflow.org/get_started/mnist/pros' },
              'deep MNIST tutorial'
            ),
            '. I trained it locally on my laptop, exported the graph, and put it into the browser.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'note' },
            'NOTE: Because I trained it locally and kinda quickly, it may not be the best at recognizing all digits. Please be understanding.'
          )
        )
      );
    }
  }]);

  return MNIST;
}(_react.Component);

MNIST.propTypes = {
  lib: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnePlus = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loading = __webpack_require__(29);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = __webpack_require__(26);

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _tensorjs = __webpack_require__(27);

var _tensorjs2 = _interopRequireDefault(_tensorjs);

var _utils = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnePlus = exports.OnePlus = function (_Component) {
  _inherits(OnePlus, _Component);

  function OnePlus() {
    _classCallCheck(this, OnePlus);

    var _this = _possibleConstructorReturn(this, (OnePlus.__proto__ || Object.getPrototypeOf(OnePlus)).call(this));

    _this.state = {
      _graph: "",
      _session: undefined,
      _result: undefined
    };

    (0, _utils.loadGraph)("/graphs/add.pb").then(function (graph) {
      _this.setState({
        _graph: graph
      });
      return new _this.props.lib.Session(graph);
    }).then(function (sess) {
      _this.setState({
        _session: sess
      });
    });
    return _this;
  }

  _createClass(OnePlus, [{
    key: 'willBeUnmounted',
    value: function willBeUnmounted() {
      if (this.state._session) {
        this.state._session.delete();
      }
    }
  }, {
    key: 'compute',
    value: function compute() {
      var a = this.aInput.value;
      var b = this.bInput.value;

      var results = this.state._session.run({
        a: _tensorjs2.default.intTensor(a),
        b: _tensorjs2.default.intTensor(b)
      }, ["o"]);

      this.setState({
        _result: results[0]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state._graph) {
        return _react2.default.createElement(_loading.Loading, { message: "Downloading Graph" });
      }

      if (!this.state._session) {
        return _react2.default.createElement(_loading.Loading, { message: "Initializing Session" });
      }

      var content = 'tf.add(\n' + '  tf.placeholder(name="a"),\n' + '  tf.placeholder(name="b"),\n' + '  name="output"\n' + ');';

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'demoDescription' },
          'This demo takes two numbers as inputs and adds them.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'demo onePlusDemo' },
          _react2.default.createElement('input', {
            type: 'text',
            placeholder: 'a',
            ref: function ref(input) {
              _this2.aInput = input;
            }
          }),
          '+',
          _react2.default.createElement('input', {
            type: 'text',
            placeholder: 'b',
            ref: function ref(input) {
              _this2.bInput = input;
            }
          }),
          '=',
          _react2.default.createElement('input', {
            type: 'text',
            value: this.state._result,
            disabled: true
          }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '#',
                onClick: function onClick() {
                  _this2.compute();
                }
              },
              'Compute!'
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'So this is the simplest graph that we could create in tensorflow (that wasn\'t simply an identity). It takes in two tensors (a and b), and adds them. Fundamentally, it is equivalent to:'
          ),
          _react2.default.createElement(
            _reactHighlight2.default,
            { language: 'python' },
            content
          ),
          _react2.default.createElement(
            'p',
            null,
            'Despite it\'s simplicity, we still think this demos some cool features. Our code is modeled as a compiled TensorFlow core and a thin JS wrapper. To communicate between the two, we use strings encoding protobufs (which can be encoded and decoded on either side). On load, we download the file add_graph.pb, which encodes the graph described above. Then we send this file over to our compiled assembly code which constructs a session. Then we encode both numbers as tensors and send those over to the graph to compute the result, which is encoded as a tensor protobuf and sent back to the wrapper where it is decoded and shown to the user.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Inputs -> Encoded as Tensor Protobufs -> (Sent to Compiled JS) -> Decoded into Tensors -> Run Through Compute Graph to get Results -> Results Encoded as Tensor Protobufs -> (Sent back to HandWritten JS) -> Decoded as Values'
          )
        )
      );
    }
  }]);

  return OnePlus;
}(_react.Component);

OnePlus.propTypes = {
  lib: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Splash = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Splash = exports.Splash = function (_Component) {
  _inherits(Splash, _Component);

  function Splash() {
    _classCallCheck(this, Splash);

    return _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).apply(this, arguments));
  }

  _createClass(Splash, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "splash-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "splash-top" },
            _react2.default.createElement(
              "span",
              { className: "splash-text" },
              "Run TensorFlow in the Browser. ",
              _react2.default.createElement(
                "span",
                { className: "loud" },
                "Literally"
              ),
              "."
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "splash-panels panels" },
            _react2.default.createElement(
              "div",
              { className: "panel" },
              _react2.default.createElement("img", { src: "/images/js_icon.png", height: "40", width: "40", alt: "logo" }),
              _react2.default.createElement(
                "div",
                { className: "panel-body" },
                _react2.default.createElement(
                  "div",
                  { className: "bold" },
                  "Pure Javascript. "
                ),
                "TensorFlow.js is a (lightly modified) fork of TensorFlow that",
                _react2.default.createElement(
                  "a",
                  { href: "http://kripken.github.io/emscripten-site/" },
                  " compiles "
                ),
                "into pure javascript. Running it in the browser relies on no external dependencies or browser plugins."
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "panel" },
              _react2.default.createElement("img", { src: "/images/tf_icon.png", height: "40", width: "40", alt: "logo" }),
              _react2.default.createElement(
                "div",
                { className: "panel-body" },
                _react2.default.createElement(
                  "div",
                  { className: "bold" },
                  "(Interoperable) Machine Learning. "
                ),
                "TensorFlow.js is the same, old TensorFlow that you're used to. Train your model however you want. Export the graph. Use the graph protobuf directly in the browser. Checkout the demos above!"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "panel" },
              _react2.default.createElement("img", { src: "/images/git_icon.png", height: "40", width: "40", alt: "logo" }),
              _react2.default.createElement(
                "div",
                { className: "panel-body" },
                _react2.default.createElement(
                  "div",
                  { className: "bold" },
                  "Open Source. "
                ),
                "We're 100% open source. We encourage you to build on us and extend the work we've done thus far. ",
                _react2.default.createElement(
                  "a",
                  { href: "https://github.com/tomasreimers/tensorflow-emscripten" },
                  "Fork us on Github"
                ),
                "!"
              )
            )
          )
        )
      );
    }
  }]);

  return Splash;
}(_react.Component);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Studio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Studio = exports.Studio = function (_Component) {
  _inherits(Studio, _Component);

  function Studio() {
    _classCallCheck(this, Studio);

    return _possibleConstructorReturn(this, (Studio.__proto__ || Object.getPrototypeOf(Studio)).apply(this, arguments));
  }

  _createClass(Studio, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "centeredContainer" },
          _react2.default.createElement(
            "div",
            { className: "centeredContainerTitle" },
            "Coming soon!"
          ),
          "We're working on this. Soon you'll be able to upload your own graph and try it out right here in the browser :)"
        )
      );
    }
  }]);

  return Studio;
}(_react.Component);

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadWarning = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadWarning = exports.DownloadWarning = function (_Component) {
  _inherits(DownloadWarning, _Component);

  function DownloadWarning() {
    _classCallCheck(this, DownloadWarning);

    return _possibleConstructorReturn(this, (DownloadWarning.__proto__ || Object.getPrototypeOf(DownloadWarning)).apply(this, arguments));
  }

  _createClass(DownloadWarning, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "centeredContainer" },
          _react2.default.createElement(
            "div",
            { className: "centeredContainerTitle" },
            "Warning!"
          ),
          "This library is still under active development, and is still enormous in size. The demos on this site can download anywhere between 30-100MiB to your browser (you try compiling 1M+ lines of C++ into Javascript). Consider this if you are on a roaming or mobile connection.",
          _react2.default.createElement(
            "div",
            { className: "centeredContainerButton" },
            _react2.default.createElement(
              "a",
              { onClick: function onClick() {
                  return _this2.props.downloadLib();
                }, href: "#" },
              "I understand the risks, let's go!"
            )
          )
        )
      );
    }
  }]);

  return DownloadWarning;
}(_react.Component);

DownloadWarning.propTypes = {
  downloadLib: _react2.default.PropTypes.func.isRequired
};

/***/ })

},[369]);