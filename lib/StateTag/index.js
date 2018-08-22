'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = require('antd/es/badge');

var _badge2 = _interopRequireDefault(_badge);

var _tag = require('antd/es/tag');

var _tag2 = _interopRequireDefault(_tag);

require('antd/es/badge/style/css');

require('antd/es/tag/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var StateTag = function StateTag(_ref) {
  var options = _ref.options,
      type = _ref.type,
      code = _ref.code,
      others = _objectWithoutProperties(_ref, ['options', 'type', 'code']);

  // type: dot / filled / solid
  var data = options[code];
  var text = data.text,
      state = data.state;


  return _react2.default.createElement(
    'span',
    others,
    function () {
      if (['filled', 'solid'].indexOf(type) > -1) {
        return _react2.default.createElement(
          _tag2.default,
          { color: stateMap[type][state], className: 'tag_inner_text' },
          text
        );
      } else {
        return _react2.default.createElement(_badge2.default, { status: state, text: text });
      }
    }()
  );
};

StateTag.propTypes = {
  options: _propTypes2.default.array,
  code: _propTypes2.default.number,
  type: _propTypes2.default.string
};

StateTag.defaultProps = {
  options: [],
  code: '',
  type: 'dot'
};

exports.default = StateTag;