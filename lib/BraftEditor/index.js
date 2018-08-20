'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _message2 = require('antd/es/message');

var _message3 = _interopRequireDefault(_message2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('antd/es/message/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _braftEditor = require('braft-editor');

var _braftEditor2 = _interopRequireDefault(_braftEditor);

require('braft-editor/dist/braft.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomBraftEditor = (_temp = _class = function (_Component) {
  _inherits(CustomBraftEditor, _Component);

  function CustomBraftEditor(props) {
    _classCallCheck(this, CustomBraftEditor);

    var _this = _possibleConstructorReturn(this, (CustomBraftEditor.__proto__ || Object.getPrototypeOf(CustomBraftEditor)).call(this, props));

    _this.beforeUpload = function (file) {
      var isJPG = /(jpg|jpeg|png)$/.test(file.type);
      var isLt2M = file.size / 1024 / 1024 < 2;

      var msg = '';
      msg = !isJPG && '图片格式不正确，请上传jpg/jpeg/png格式的图片';
      msg = !isLt2M && '图片大小超限，请上传小于 2M 图片';
      msg && _message3.default.error(msg);

      return isJPG && isLt2M;
    };

    _this.onImgUpload = function (param) {
      var _this$props = _this.props,
          prefix = _this$props.prefix,
          suffix = _this$props.suffix,
          token = _this$props.token;


      if (!token) return _message3.default.warning('七牛Token缺失');
      var fd = new FormData();
      fd.append('token', token);
      fd.append('file', param.file);

      var successFn = function successFn(response) {
        try {
          var key = JSON.parse(xhr.responseText).key;
          param.success({ url: prefix + '/' + key + '?' + suffix });
        } catch (e) {
          param.error({ msg: '图片上传失败' });
        }
      };
      var progressFn = function progressFn(e) {
        return param.progress(Math.ceil(e.loaded / e.total * 100));
      };
      var errorFn = function errorFn() {
        param.error({ msg: '图片上传失败' });
      };

      var xhr = new XMLHttpRequest();
      xhr.onloadend = successFn;
      xhr.onerror = errorFn;
      xhr.onabort = errorFn;
      xhr.ontimeout = errorFn;
      xhr.onprogress = progressFn;
      xhr.open('POST', 'http://upload.qiniu.com', true);
      xhr.send(fd);
    };

    _this.state = {};
    return _this;
  }

  _createClass(CustomBraftEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          contentId = _props.contentId,
          others = _objectWithoutProperties(_props, ['children', 'contentId']);

      var beforeUpload = this.beforeUpload,
          onImgUpload = this.onImgUpload;

      var editorProps = _extends({
        contentId: contentId,
        height: 500,
        contentFormat: 'html',
        initialContent: '<p></p>',
        media: {
          validateFn: beforeUpload,
          uploadFn: onImgUpload
        }
      }, others);

      return _react2.default.createElement(_braftEditor2.default, editorProps);
    }
  }]);

  return CustomBraftEditor;
}(_react.Component), _class.displayName = 'CustomBraftEditor', _class.propTypes = {
  token: _propTypes2.default.string,
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  contentId: _propTypes2.default.string
}, _class.defaultProps = {
  contentId: '1',
  prefix: '',
  suffix: ''
}, _temp);
exports.default = CustomBraftEditor;