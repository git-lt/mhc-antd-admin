'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.less');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyContent = (_temp = _class = function (_Component) {
  _inherits(EmptyContent, _Component);

  // 'load'/'search'

  function EmptyContent(props) {
    _classCallCheck(this, EmptyContent);

    var _this = _possibleConstructorReturn(this, (EmptyContent.__proto__ || Object.getPrototypeOf(EmptyContent)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(EmptyContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          imgUrl = _props.imgUrl,
          title = _props.title,
          desc = _props.desc;


      var data = _config2.default[type];
      if (imgUrl) data.imgUrl = imgUrl;
      if (title) data.title = title;
      if (desc) data.desc = desc;
      console.log(data);
      return _react2.default.createElement(
        'div',
        { className: 'empty-content' },
        _react2.default.createElement(
          'div',
          { className: 'empty-content-inner' },
          _react2.default.createElement('div', { className: 'empty-content-imgException', style: { backgroundImage: 'url(' + data.imgUrl + ')' } }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'empty-content-title' },
              data.title
            ),
            _react2.default.createElement(
              'p',
              { className: 'empty-content-description' },
              data.desc
            )
          )
        )
      );
    }
  }]);

  return EmptyContent;
}(_react.Component), _class.displayName = 'EmptyContent', _class.propTypes = {
  show: _propTypes2.default.bool,
  imgUrl: _propTypes2.default.string,
  type: _propTypes2.default.string,
  title: _propTypes2.default.string,
  desc: _propTypes2.default.string,
  actions: _propTypes2.default.any
}, _class.defaultProps = {
  show: false,
  type: 'load',
  actions: _propTypes2.default.any
}, _temp);
exports.default = EmptyContent;