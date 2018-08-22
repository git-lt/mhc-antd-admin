'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = require('antd/es/badge');

var _badge2 = _interopRequireDefault(_badge);

var _tag = require('antd/es/tag');

var _tag2 = _interopRequireDefault(_tag);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('antd/es/badge/style/css');

require('antd/es/tag/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stateMap = {
  filled: {
    warning: '#faad14',
    processing: '#1890ff',
    success: '#52c41a',
    error: '#f5222d',
    default: '#d9d9d9'
  },
  solid: {
    warning: 'orange',
    processing: 'blue',
    success: 'green',
    error: 'red',
    default: 'cyan'
  }
};

var StateTag = (_temp = _class = function (_Component) {
  _inherits(StateTag, _Component);

  function StateTag(props) {
    _classCallCheck(this, StateTag);

    var _this = _possibleConstructorReturn(this, (StateTag.__proto__ || Object.getPrototypeOf(StateTag)).call(this, props));

    _this.state = {
      options: props.options,
      code: props.code,
      type: props.type
    };

    return _this;
  }

  _createClass(StateTag, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          options = _state.options,
          type = _state.type,
          code = _state.code;
      // type: dot / filled / solid

      var data = options.filter(function (v) {
        return v.key == code;
      })[0];
      console.log(data);
      return _react2.default.createElement(
        'div',
        null,
        function () {
          if (['filled', 'solid'].indexOf(type) > -1) {
            return _react2.default.createElement(
              _tag2.default,
              { color: stateMap[type][data.state], className: _index2.default.tag_inner_text },
              data.value
            );
          } else {
            return _react2.default.createElement(_badge2.default, { status: data.state, text: data.value });
          }
        }()
      );
    }
  }]);

  return StateTag;
}(_react.Component), _class.propTypes = {
  options: _propTypes2.default.array,
  code: _propTypes2.default.number,
  type: _propTypes2.default.string
}, _class.defaultProps = {
  options: [],
  code: '',
  type: 'dot'
}, _temp);
exports.default = StateTag;