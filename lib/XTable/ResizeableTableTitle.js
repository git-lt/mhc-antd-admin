'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResizable = require('react-resizable');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('react-resizable/css/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ResizeableTableTitle = function ResizeableTableTitle(props) {
  var onResize = props.onResize,
      width = props.width,
      restProps = _objectWithoutProperties(props, ['onResize', 'width']);

  if (!width) {
    return _react2.default.createElement('th', restProps);
  }

  return _react2.default.createElement(
    _reactResizable.Resizable,
    { width: width, height: 0, onResize: onResize },
    _react2.default.createElement('th', restProps)
  );
};

ResizeableTableTitle.propTypes = {
  onResize: _propTypes2.default.func,
  width: _propTypes2.default.number
};

exports.default = ResizeableTableTitle;