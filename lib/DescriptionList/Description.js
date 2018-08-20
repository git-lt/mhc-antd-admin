'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/col/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _responsive = require('./responsive');

var _responsive2 = _interopRequireDefault(_responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Description = function Description(_ref) {
  var term = _ref.term,
      column = _ref.column,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['term', 'column', 'className', 'children']);

  return _react2.default.createElement(
    _col2.default,
    _extends({ className: 'description' }, _responsive2.default[column], restProps),
    term && _react2.default.createElement(
      'div',
      { className: 'term' },
      term
    ),
    children !== null && children !== undefined && _react2.default.createElement(
      'div',
      { className: 'detail' },
      children || '暂无'
    )
  );
};

Description.defaultProps = {
  term: ''
};

Description.propTypes = {
  term: _propTypes2.default.node
};

exports.default = Description;