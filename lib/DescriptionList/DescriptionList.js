'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/row/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DescriptionList = function DescriptionList(_ref) {
  var className = _ref.className,
      _ref$col = _ref.col,
      col = _ref$col === undefined ? 3 : _ref$col,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? 'vertical' : _ref$layout,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 32 : _ref$gutter,
      children = _ref.children,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['className', 'col', 'layout', 'gutter', 'children', 'size']);

  var column = col > 6 ? 6 : col;
  var cls = (0, _classnames2.default)('descriptionList', _defineProperty({
    'horizontal': layout === 'horizontal',
    'vertical': layout !== 'horizontal'
  }, className, className));

  return _react2.default.createElement(
    'div',
    _extends({ className: cls }, restProps),
    _react2.default.createElement(
      _row2.default,
      { gutter: gutter },
      _react2.default.Children.map(children, function (child) {
        return child ? _react2.default.cloneElement(child, { column: column }) : child;
      })
    )
  );
};

exports.default = DescriptionList;