'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = require('antd/es/badge');

var _badge2 = _interopRequireDefault(_badge);

var _tag = require('antd/es/tag');

var _tag2 = _interopRequireDefault(_tag);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/badge/style/css');

require('antd/es/tag/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateTag = function (_Component) {
  _inherits(StateTag, _Component);

  function StateTag(props) {
    _classCallCheck(this, StateTag);

    var _this = _possibleConstructorReturn(this, (StateTag.__proto__ || Object.getPrototypeOf(StateTag)).call(this, props));

    _this.state = {
      state: props.state,
      code: props.code,
      style: props.style
    };

    return _this;
  }

  _createClass(StateTag, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          color = _state.color,
          text = _state.text,
          type = _state.type,
          spin = _state.spin,
          state = _state.state,
          style = _state.style,
          code = _state.code;

      return state.map(function (item, index) {
        console.log(item, item.key, '6789');
        switch (style) {
          case 'solid':
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _tag2.default,
                { color: 'green' },
                'volcano'
              ),
              _react2.default.createElement(
                _tag2.default,
                { color: 'red' },
                'volcano'
              ),
              _react2.default.createElement(
                _tag2.default,
                { color: 'cyan' },
                'volcano'
              ),
              _react2.default.createElement(
                _tag2.default,
                { color: 'blue' },
                'volcano'
              ),
              _react2.default.createElement(
                _tag2.default,
                { color: 'orange' },
                'volcano'
              )
            );
            break;
          // if (index === code) {
          //   return (<Badge status="success" text={item.value} />);
          // }
          // break;
          case 'line':
            console.log(item, code, 9999888);
            if (code == item.key) {
              console.log(item.value);
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _tag2.default,
                  { color: item.color },
                  item.value
                )
              );
            }
            break;
          // if (index === code) {
          //   return (<Tag color={item.color}>volcano</Tag>);
          // }
          // break;
          case 'dot':
            if (code == item.key) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_badge2.default, { status: item.state }),
                item.value
              );
            }
            break;
        }
      });
    }
  }]);

  return StateTag;
}(_react.Component);

exports.default = StateTag;