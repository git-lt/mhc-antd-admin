'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = require('antd/es/radio');

var _radio2 = _interopRequireDefault(_radio);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/radio/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Group = _radio2.default.Group,
    Button = _radio2.default.Button;


var XRadioGroup = function XRadioGroup(_ref) {
  var current = _ref.current,
      onChange = _ref.onChange,
      data = _ref.data,
      keyName = _ref.keyName,
      valueName = _ref.valueName,
      hasAll = _ref.hasAll,
      others = _objectWithoutProperties(_ref, ['current', 'onChange', 'data', 'keyName', 'valueName', 'hasAll']);

  if (hasAll && data[0][valueName] !== '全部') {
    var _data$unshift;

    data.unshift((_data$unshift = {}, _defineProperty(_data$unshift, keyName, ''), _defineProperty(_data$unshift, valueName, '全部'), _data$unshift));
  }
  return _react2.default.createElement(
    Group,
    _extends({ value: current, onChange: onChange }, others),
    data.map(function (v, i) {
      return _react2.default.createElement(
        Button,
        { value: String(v[keyName]), key: i },
        v[valueName]
      );
    })
  );
};

XRadioGroup.defaultProps = {
  onChange: function onChange() {},
  hasAll: false,
  current: '',
  keyName: 'key',
  valueName: 'value',
  data: []
};

XRadioGroup.propTypes = {
  onChange: _propTypes2.default.func,
  current: _propTypes2.default.string,
  hasAll: _propTypes2.default.bool,
  keyName: _propTypes2.default.string,
  valueName: _propTypes2.default.string,
  data: _propTypes2.default.array
};

exports.default = XRadioGroup;