'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tag = require('antd/es/tag');

var _tag2 = _interopRequireDefault(_tag);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/tag/style/css');

require('antd/es/icon/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagIcon = function (_Component) {
  _inherits(TagIcon, _Component);

  function TagIcon(props) {
    _classCallCheck(this, TagIcon);

    var _this = _possibleConstructorReturn(this, (TagIcon.__proto__ || Object.getPrototypeOf(TagIcon)).call(this, props));

    _this.state = {
      text: props.text,
      color: props.color,
      type: props.type,
      spin: props.spin
    };

    return _this;
  }

  _createClass(TagIcon, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          color = _state.color,
          text = _state.text,
          type = _state.type,
          spin = _state.spin;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _tag2.default,
          { color: color },
          _react2.default.createElement(_icon2.default, { type: type, style: { fontSize: 10 }, spin: spin }),
          text
        )
      );
    }
  }]);

  return TagIcon;
}(_react.Component);

exports.default = TagIcon;