'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselList = exports.CarouselButtons = exports.CarouselNav = exports.Carousel = undefined;

var _Components = require('./Components');

Object.defineProperty(exports, 'CarouselNav', {
  enumerable: true,
  get: function get() {
    return _Components.Nav;
  }
});
Object.defineProperty(exports, 'CarouselButtons', {
  enumerable: true,
  get: function get() {
    return _Components.Buttons;
  }
});
Object.defineProperty(exports, 'CarouselList', {
  enumerable: true,
  get: function get() {
    return _Components.List;
  }
});

var _Carousel2 = require('./Carousel');

var _Carousel3 = _interopRequireDefault(_Carousel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Carousel = _Carousel3.default;