webpackHotUpdate(1,{

/***/ 1626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _styleUtils = __webpack_require__(354);

var _util = __webpack_require__(1617);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function PathPlugin(target, vars) {
  this.target = target;
  var path = typeof vars === 'string' ? vars : vars.x || vars.y || vars.rotate;
  this.vars = vars;
  this.path = (0, _util.parsePath)(path);
  this.start = {};
  this.pathLength = this.path.getTotalLength();
}

PathPlugin.prototype = {
  name: 'path',
  useStyle: 'transform',
  getPoint: function getPoint(offset) {
    var o = offset || 0;
    var p = this.pathLength * this.progress + o;
    return this.path.getPointAtLength(p);
  },
  getAnimStart: function getAnimStart(computedStyle, isSvg) {
    var transform = (0, _styleUtils.getTransform)(computedStyle[isSvg ? 'transformSVG' : (0, _styleUtils.checkStyleName)('transform')]);
    this.start = transform;
    this.data = (0, _extends3['default'])({}, transform);
  },
  setRatio: function setRatio(r, t, computedStyle) {
    this.progress = r;
    var p = this.getPoint();
    var p0 = this.getPoint(-1);
    var p1 = this.getPoint(1);
    if (typeof this.vars === 'string') {
      this.data.translateX = p.x + this.start.translateX;
      this.data.translateY = p.y + this.start.translateY;
      this.data.rotate = Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    } else {
      this.data.translateX = this.vars.x ? p.x + this.start.translateX : this.data.translateX;
      this.data.translateY = this.vars.y ? p.y + this.start.translateY : this.data.translateY;
      this.data.rotate = this.vars.rotate ? Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI : this.data.rotate;
    }
    t.style.transform = (0, _util.getTransformValue)(this.data);
    if (computedStyle) {
      computedStyle.transformSVG = (0, _styleUtils.createMatrix)(t.style.transform).toString();
    }
  }
};

exports['default'] = PathPlugin;
module.exports = exports['default'];

/***/ })

})