'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/es/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/select/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StandardSelect = function StandardSelect(_ref) {
  var onSelect = _ref.onSelect,
      labelInValue = _ref.labelInValue,
      data = _ref.data,
      placeholder = _ref.placeholder,
      keyName = _ref.keyName,
      valueName = _ref.valueName,
      hasAll = _ref.hasAll,
      others = _objectWithoutProperties(_ref, ['onSelect', 'labelInValue', 'data', 'placeholder', 'keyName', 'valueName', 'hasAll']);

  if (hasAll && data[0][valueName] !== '全部') {
    var _data$unshift;

    data.unshift((_data$unshift = {}, _defineProperty(_data$unshift, keyName, ''), _defineProperty(_data$unshift, valueName, '全部'), _data$unshift));
  }
  return _react2.default.createElement(
    _select2.default,
    _extends({
      placeholder: placeholder,
      labelInValue: labelInValue,
      onSelect: onSelect
    }, others),
    data.map(function (v, i) {
      return _react2.default.createElement(
        _select2.default.Option,
        { value: String(v[keyName]), key: i },
        v[valueName]
      );
    })
  );
};

StandardSelect.defaultProps = {
  onSelect: function onSelect() {},
  labelInValue: false,
  keyName: 'key',
  valueName: 'value',
  data: [],
  placeholder: '请选择',
  hasAll: false
};

StandardSelect.propTypes = {
  onSelect: _propTypes2.default.func,
  labelInValue: _propTypes2.default.bool,
  keyName: _propTypes2.default.string,
  valueName: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  data: _propTypes2.default.array,
  hasAll: _propTypes2.default.bool
};

exports.default = StandardSelect;