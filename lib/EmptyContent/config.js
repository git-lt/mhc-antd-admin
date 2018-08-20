'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  'load': {
    title: '您还没有创建过任何订单',
    desc: _react2.default.createElement(
      'div',
      null,
      '\u60A8\u53EF\u4EE5\u524D\u5F80 ',
      _react2.default.createElement(
        'a',
        { href: 'javascript:;' },
        '\u8BA2\u5355\u7BA1\u7406'
      ),
      ' \u521B\u5EFA\u8BA2\u5355'
    ),
    imgUrl: require('./images/data-empty.svg')
  },
  'search': {
    title: '未查询到相关数据',
    desc: '请更换其它查询条件，再试试',
    imgUrl: require('./images/search-empty.svg')
  }
};

exports.default = config;