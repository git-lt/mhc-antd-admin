webpackHotUpdate(0,{

/***/ 1598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(11).enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTweenOne = __webpack_require__(1514);

var _rcTweenOne2 = _interopRequireDefault(_rcTweenOne);

var _rcQueueAnim = __webpack_require__(1606);

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

var _ScrollParallax = __webpack_require__(1620);

var _ScrollParallax2 = _interopRequireDefault(_ScrollParallax);

var _reactGithubButton = __webpack_require__(1614);

var _reactGithubButton2 = _interopRequireDefault(_reactGithubButton);

var _BannerImage = __webpack_require__(1599);

var _BannerImage2 = _interopRequireDefault(_BannerImage);

var _router = __webpack_require__(1557);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loop = {
  duration: 3000,
  yoyo: true,
  repeat: -1
};

var Banner = function (_React$PureComponent) {
  _inherits(Banner, _React$PureComponent);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          isMobile = _props.isMobile;

      return _react2.default.createElement(
        'div',
        { className: 'home-page-wrapper banner-wrapper', id: 'banner' },
        _react2.default.createElement(
          'div',
          { className: 'banner-bg-wrapper' },
          _react2.default.createElement(
            'svg',
            { width: '400px', height: '576px', viewBox: '0 0 400 576', fill: 'none' },
            _react2.default.createElement(
              _rcTweenOne2.default,
              { component: 'g', animation: [{ opacity: 0, type: 'from' }, _extends({}, loop, { y: 15 })] },
              _react2.default.createElement('ellipse', { id: 'Oval-9-Copy-4', cx: '100', cy: '100', rx: '6', ry: '6', stroke: '#2F54EB', strokeWidth: '1.6' })
            ),
            _react2.default.createElement(
              _rcTweenOne2.default,
              { component: 'g', animation: [{ opacity: 0, type: 'from' }, _extends({}, loop, { y: -15 })] },
              _react2.default.createElement(
                'g',
                { transform: 'translate(200 450)' },
                _react2.default.createElement(
                  'g',
                  { style: { transformOrigin: '50% 50%', transform: 'rotate(-340deg)' } },
                  _react2.default.createElement('rect', { stroke: '#FADB14', strokeWidth: '1.6', width: '9', height: '9' })
                )
              )
            )
          ),
          _react2.default.createElement(_ScrollParallax2.default, { location: 'banner', className: 'banner-bg', animation: { playScale: [1, 1.5], rotate: 0 } })
        ),
        _react2.default.createElement(
          _rcQueueAnim2.default,
          { className: className + ' page', type: 'alpha', delay: 150 },
          isMobile && _react2.default.createElement(
            'div',
            { className: 'img-wrapper', key: 'image' },
            _react2.default.createElement(_BannerImage2.default, null)
          ),
          _react2.default.createElement(
            _rcQueueAnim2.default,
            {
              className: 'text-wrapper',
              key: 'text',
              type: 'bottom'
            },
            _react2.default.createElement(
              'h1',
              { key: 'h1' },
              'MHC Antd Admin'
            ),
            _react2.default.createElement(
              'p',
              { key: 'p' },
              '\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848\u3002'
            ),
            _react2.default.createElement(
              'div',
              { className: 'banner-btns', key: 'buttons' },
              _react2.default.createElement(
                _router.Link,
                { className: 'banner-btn components', to: '/docs/start' },
                '\u5F00\u59CB\u4F7F\u7528'
              ),
              _react2.default.createElement(
                'a',
                { href: '#', className: 'banner-btn language' },
                '\u9884\u89C8'
              ),
              _react2.default.createElement(_reactGithubButton2.default, {
                key: 'github-button',
                size: 'large',
                type: 'stargazers',
                namespace: 'git-lt',
                repo: 'mhc-antd-admin'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'img-wrapper', key: 'image' },
            _react2.default.createElement(_ScrollParallax2.default, { location: 'banner', component: _BannerImage2.default, animation: { playScale: [1, 1.5], y: 80 } })
          )
        )
      );
    }
  }]);

  return Banner;
}(_react2.default.PureComponent);

Banner.propTypes = {
  className: _propTypes2.default.string
};
Banner.defaultProps = {
  className: 'banner'
};
var _default = Banner;
exports.default = _default;
module.exports = exports['default'];
;

(function () {
  var reactHotLoader = __webpack_require__(11).default;

  var leaveModule = __webpack_require__(11).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loop, 'loop', '/Users/liutao/Desktop/mhc-antd-admin/site/theme/template/components/Banner/index.js');
  reactHotLoader.register(Banner, 'Banner', '/Users/liutao/Desktop/mhc-antd-admin/site/theme/template/components/Banner/index.js');
  reactHotLoader.register(_default, 'default', '/Users/liutao/Desktop/mhc-antd-admin/site/theme/template/components/Banner/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }),

/***/ 1600:
false

})