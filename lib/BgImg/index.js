'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// width
// height
// suffix
// prefix
// url
// placholderImg
// title

// preview 后面扩展

var BgImg = function (_PureComponent) {
  _inherits(BgImg, _PureComponent);

  function BgImg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BgImg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BgImg.__proto__ || Object.getPrototypeOf(BgImg)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true
    }, _this.onLoad = function () {
      _this.setState({ loading: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BgImg, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          url = _props.url,
          title = _props.title,
          children = _props.children,
          className = _props.className,
          placholderImg = _props.placholderImg,
          _props$animateName = _props.animateName,
          animateName = _props$animateName === undefined ? 'fadeIn' : _props$animateName,
          _props$prefix = _props.prefix,
          prefix = _props$prefix === undefined ? '' : _props$prefix,
          _props$suffix = _props.suffix,
          suffix = _props$suffix === undefined ? '' : _props$suffix,
          _props$width = _props.width,
          width = _props$width === undefined ? 120 : _props$width,
          _props$height = _props.height,
          height = _props$height === undefined ? 100 : _props$height;
      var loading = this.state.loading;
      var onLoad = this.onLoad;


      var bgImg = loading ? placholderImg || require('./images/img.svg') : url;

      if (!loading && (prefix || suffix)) {
        bgImg = prefix ? prefix + '/' + bgImg : bgImg;
        bgImg = suffix ? '' + bgImg + suffix : bgImg;
      }
      var cls = (0, _classnames2.default)('mhc-bg-img', (_classNames = {}, _defineProperty(_classNames, className, className), _defineProperty(_classNames, animateName, !loading), _defineProperty(_classNames, 'animated', true), _classNames));

      var sty = {
        width: width,
        height: height,
        backgroundImage: 'url(' + bgImg + ')'
      };

      if (loading && !placholderImg) sty.backgroundSize = '50% 50%';

      var txt = title || children;

      return _react2.default.createElement(
        'div',
        { style: sty, className: cls },
        !!txt && _react2.default.createElement(
          'div',
          { className: 'mhc-bg-img__txt' },
          txt
        ),
        _react2.default.createElement('img', { src: url, onLoad: onLoad, style: { display: 'none' } })
      );
    }
  }]);

  return BgImg;
}(_react.PureComponent);

exports.default = BgImg;