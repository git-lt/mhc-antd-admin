'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _tooltip = require('antd/es/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('antd/es/tooltip/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextEllipsis = (_temp = _class = function (_Component) {
  _inherits(TextEllipsis, _Component);

  function TextEllipsis(props) {
    _classCallCheck(this, TextEllipsis);

    var _this = _possibleConstructorReturn(this, (TextEllipsis.__proto__ || Object.getPrototypeOf(TextEllipsis)).call(this, props));

    _this.update = function () {
      var textDOM = _this.textDOM,
          moreDOM = _this.moreDOM,
          wrapDOM = _this.wrapDOM,
          afterDOM = _this.afterDOM;

      var after = _this.props.after;
      var height = _this.props.height;

      var n = 1000;
      if (wrapDOM.current.offsetHeight > height) {
        moreDOM.current.style.display = 'inline-block';
        after && (afterDOM.current.style.display = 'inline-block');
        var text = _this.state.text;
        while (wrapDOM.current.offsetHeight > height && n > 0) {
          textDOM.current.innerText = text = text.substring(0, text.length - 1);
          n--;
        }
        _this.props.onHide && _this.props.onHide();
      } else {
        moreDOM.current.style.display = 'none';
        after && (afterDOM.current.style.display = 'none');
        _this.props.onShow && _this.props.onShow();
      }
    };

    _this.wrapDOM = _react2.default.createRef();
    _this.textDOM = _react2.default.createRef();
    _this.moreDOM = _react2.default.createRef();
    _this.afterDOM = _react2.default.createRef();

    _this.state = {
      keyIndex: 0,
      oversize: false,
      collapsed: props.collapsed,
      text: props.text
    };
    return _this;
  }

  _createClass(TextEllipsis, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.props.collapsed) {
        this.moreDOM.current.style.display = 'none';
        return;
      }
      if (this.props.text !== prevState.text || this.props.height !== prevState.height) {
        this.update();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          before = _props.before,
          after = _props.after,
          more = _props.more,
          tooltip = _props.tooltip,
          others = _objectWithoutProperties(_props, ['before', 'after', 'more', 'tooltip']);

      var _state = this.state,
          oversize = _state.oversize,
          text = _state.text,
          keyIndex = _state.keyIndex;


      var con = _react2.default.createElement(
        'div',
        _extends({}, others, { ref: this.wrapDOM, className: 'sys-text-ellispsis-wrap' }),
        !!before && _react2.default.createElement(
          'span',
          null,
          before
        ),
        _react2.default.createElement(
          'span',
          { ref: this.textDOM, key: keyIndex },
          text
        ),
        _react2.default.createElement(
          'span',
          { ref: this.moreDOM, style: { display: oversize ? 'inline-block' : 'none' } },
          more
        ),
        !!after && _react2.default.createElement(
          'span',
          { ref: this.afterDOM },
          after
        )
      );

      return tooltip && !after ? _react2.default.createElement(
        _tooltip2.default,
        { placement: 'top', title: text },
        con
      ) : con;
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.collapsed !== prevState.collapsed || nextProps.text !== prevState.text || nextProps.height !== prevState.height) {
        return {
          keyIndex: prevState.keyIndex + 1,
          oversize: false,
          collapsed: nextProps.collapsed,
          text: nextProps.text
        };
      }
      return null;
    }
  }]);

  return TextEllipsis;
}(_react.Component), _class.propTypes = {
  before: _propTypes2.default.any,
  after: _propTypes2.default.any,
  text: _propTypes2.default.string,
  more: _propTypes2.default.any,
  collapsed: _propTypes2.default.bool,
  height: _propTypes2.default.number.isRequired,
  tooltip: _propTypes2.default.bool
}, _class.defaultProps = {
  before: null,
  after: null,
  text: '',
  more: '...',
  collapsed: true,
  height: 24,
  tooltip: false
}, _temp);
exports.default = TextEllipsis;