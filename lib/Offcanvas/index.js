'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};
window.__$tmsOffcanvas = window.__$tmsOffcanvas || {};

var Offcanvas = (_temp2 = _class = function (_Component) {
  _inherits(Offcanvas, _Component);

  function Offcanvas() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Offcanvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Offcanvas.__proto__ || Object.getPrototypeOf(Offcanvas)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      display: false,
      maskTransparent: false
    }, _this.uuid = 'offcanvas-' + Math.random().toString(16).substr(2).slice(-5) + new Date().getTime().toString(16).slice(9), _this.isFirstShow = true, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Offcanvas, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.active && this.props.show) {
        if (this.props.show) {
          this.props.onShow();
          if (this.isFirstShow) this.props.onFirstShow();
          window.__$tmsOffcanvas[this.uuid] = 1;
        } else {
          this.props.onHide();
          this.isFirstShow = false;
          delete window.__$tmsOffcanvas[this.uuid];
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          closeByMask = _props.closeByMask,
          position = _props.position,
          animate = _props.animate,
          onClose = _props.onClose,
          hideMask = _props.hideMask,
          height = _props.height,
          width = _props.width,
          children = _props.children;
      var _state = this.state,
          active = _state.active,
          display = _state.display,
          maskTransparent = _state.maskTransparent;


      var wrapCls = (0, _classnames2.default)((_classNames = {
        'tms-offcanvas': true,
        'tms-offcanvas_mask-transparent': maskTransparent || hideMask,
        'active': active
      }, _defineProperty(_classNames, 'tms-offcanvas-' + position, true), _defineProperty(_classNames, 'tms-offcanvas-' + position + '__show', display), _classNames));

      var innerCls = (0, _classnames2.default)('tms-offcanvas-inner', _defineProperty({}, 'tms-offcanvas-inner__' + animate, position === 'center'));

      var sty = {};
      if (height !== 'auto') sty.height = height;
      if (width !== 'auto') sty.width = width;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: wrapCls, style: sty },
          _react2.default.createElement(
            'div',
            { className: innerCls, style: sty },
            children
          )
        ),
        _react2.default.createElement('div', { className: 'tms-offcanvas-mask',
          onTouchMove: function onTouchMove(e) {
            return e.preventDefault();
          },
          onClick: closeByMask ? onClose : null
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.show !== prevState.active) {
        return {
          active: nextProps.show,
          display: nextProps.show,
          maskTransparent: nextProps.show && !!Object.keys(window.__$tmsOffcanvas).length
        };
      }
      return null;
    }
  }]);

  return Offcanvas;
}(_react.Component), _class.propTypes = {
  show: _propTypes2.default.bool,
  position: _propTypes2.default.string,
  animate: _propTypes2.default.string,
  closeByMask: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onFirstShow: _propTypes2.default.func,
  hideMask: _propTypes2.default.bool,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string
}, _class.defaultProps = {
  show: false, // 显示隐藏，由外部控制
  position: 'center', // top/left/bottom/center
  animate: 'slide-in-top', // 显示时的动画，slide-in-top / slide-in-bottom / zoom-in
  closeByMask: true, // 是否可以点击遮罩关闭
  onClose: noop, // 关闭事件，组件关闭调用这个事件
  onShow: noop, // 显示之后的回调
  onHide: noop, // 关闭之后的回调
  hideMask: false, // 用于隐藏遮罩，使其透明
  onFirstShow: noop, // 用于第一次显示时的回调
  height: 'auto',
  width: 'auto'
}, _temp2);
exports.default = Offcanvas;