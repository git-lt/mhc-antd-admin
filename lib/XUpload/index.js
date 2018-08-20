'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = require('antd/es/modal');

var _modal2 = _interopRequireDefault(_modal);

var _upload = require('antd/es/upload');

var _upload2 = _interopRequireDefault(_upload);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('antd/es/modal/style/css');

require('antd/es/upload/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XUpload = (_temp = _class = function (_Component) {
    _inherits(XUpload, _Component);

    function XUpload(props) {
        _classCallCheck(this, XUpload);

        return _possibleConstructorReturn(this, (XUpload.__proto__ || Object.getPrototypeOf(XUpload)).call(this, props));
    }

    _createClass(XUpload, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                fileList = _props.fileList,
                value = _props.value,
                onChange = _props.onChange,
                onCancel = _props.onCancel,
                className = _props.className,
                maxLength = _props.maxLength,
                previewImage = _props.previewImage,
                previewVisible = _props.previewVisible,
                props = _objectWithoutProperties(_props, ['fileList', 'value', 'onChange', 'onCancel', 'className', 'maxLength', 'previewImage', 'previewVisible']);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_upload2.default, _extends({
                    fileList: fileList,
                    onChange: onChange
                }, props)),
                _react2.default.createElement(
                    _modal2.default,
                    { visible: previewVisible, footer: null, onCancel: onCancel },
                    _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
                )
            );
        }
    }]);

    return XUpload;
}(_react.Component), _class.propTypes = {
    onChange: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,
    multiple: _propTypes2.default.bool,
    fileList: _propTypes2.default.array,
    value: _propTypes2.default.string,
    className: _propTypes2.default.string, // 绑定 父容器
    maxLength: _propTypes2.default.number
}, _class.defaultProps = {
    multiple: false,
    value: 'Upload',
    className: 'upload-button',
    fileList: [],
    action: "",
    onChange: function onChange() {
        return null;
    },
    onCancel: function onCancel() {
        return null;
    },
    server: false,
    maxLength: 0
}, _temp);
exports.default = XUpload;