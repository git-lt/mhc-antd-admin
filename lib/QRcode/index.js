'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _message2 = require('antd/es/message');

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/row/style/css');

require('antd/es/button/style/css');

require('antd/es/col/style/css');

require('antd/es/input/style/css');

require('antd/es/message/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QRCode = require('qrcode.react');

var QRcode = function (_Component) {
  _inherits(QRcode, _Component);

  function QRcode(props) {
    _classCallCheck(this, QRcode);

    var _this = _possibleConstructorReturn(this, (QRcode.__proto__ || Object.getPrototypeOf(QRcode)).call(this, props));

    _this.showqrcode = function () {
      if (_this.state.inputurl) {
        _this.setState({ qrcodeshow: 'block' });
      } else {
        _message3.default.info('请输入转换内容');
        _this.setState({ qrcodeshow: 'none' });
      }
    };

    _this.onChange = function (e) {
      if (!e.target.value) {
        _this.setState({ qrcodeshow: 'none' });
      }
      _this.setState({ inputurl: e.target.value });
    };

    _this.onPressEnter = function () {
      _this.showqrcode();
    };

    _this.state = {
      inputurl: '',
      qrcodeshow: 'none',
      text: props.text || '二维码生成',
      size: props.size || 150,
      colsize: props.colsize || 6
    };

    return _this;
  }

  _createClass(QRcode, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          inputurl = _state.inputurl,
          qrcodeshow = _state.qrcodeshow,
          text = _state.text,
          size = _state.size,
          colsize = _state.colsize;
      var showqrcode = this.showqrcode,
          onPressEnter = this.onPressEnter,
          onChange = this.onChange;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            { span: colsize },
            _react2.default.createElement(_input2.default, { placeholder: '\u8F93\u5165\u8F6C\u6362\u5185\u5BB9', onChange: onChange, onPressEnter: onPressEnter })
          ),
          _react2.default.createElement(
            _col2.default,
            { span: colsize },
            _react2.default.createElement(
              _button2.default,
              { onClick: showqrcode },
              text
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { display: qrcodeshow } },
          _react2.default.createElement('br', null),
          _react2.default.createElement(QRCode, { size: size, value: inputurl })
        )
      );
    }
  }]);

  return QRcode;
}(_react.Component);

exports.default = QRcode;