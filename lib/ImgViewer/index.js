'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactViewer = require('react-viewer');

var _reactViewer2 = _interopRequireDefault(_reactViewer);

require('react-viewer/dist/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImgViewer = function ImgViewer(props) {
  return _react2.default.createElement(_reactViewer2.default, props);
};

exports.default = ImgViewer;