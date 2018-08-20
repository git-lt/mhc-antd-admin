'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

require('antd/es/row/style/css');

require('antd/es/button/style/css');

require('antd/es/col/style/css');

require('antd/es/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;
var DataTable = (_dec = _form2.default.create(), _dec(_class = (_temp2 = _class2 = function (_PureComponent) {
  _inherits(DataTable, _PureComponent);

  function DataTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call.apply(_ref, [this].concat(args))), _this), _this.buildFormItems = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          items = _this$props.items;

      var getFieldDecorator = form.getFieldDecorator;
      var itemLayout = {
        labelCol: { md: { span: 8 } },
        wrapperCol: { md: { span: 16 } }
      };

      return items.map(function (v, i) {
        return _react2.default.createElement(
          _col2.default,
          _extends({}, v.layout, { key: i }),
          _react2.default.createElement(
            FormItem,
            _extends({ label: v.label }, v.itemLayout ? v.itemLayout : itemLayout),
            v.formItem(getFieldDecorator)
          )
        );
      });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var form = _this.props.form;

      form.validateFields(function (err, values) {
        if (err) return;
        var onSubmit = _this.props.actionsConfig.onSubmit;
        onSubmit && onSubmit(values, form);
      });
    }, _this.handleReset = function () {
      var form = _this.props.form;

      var onReset = _this.props.actionsConfig.onReset;
      form.resetFields();
      onReset && onReset(form);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DataTable, [{
    key: 'render',
    value: function render() {
      var _ref2 = this.props.actionsConfig || {},
          layout = _ref2.layout,
          onSubmit = _ref2.onSubmit,
          onCancel = _ref2.onCancel,
          submitText = _ref2.submitText;

      var loading = this.props.loading;

      var formOpt = {};
      if (onSubmit) formOpt.onSubmit = this.handleSubmit;
      return _react2.default.createElement(
        _form2.default,
        _extends({ className: 'tms-standardform', layout: 'inline' }, formOpt),
        _react2.default.createElement(
          _row2.default,
          { gutter: { md: 4, lg: 4, xl: 8 }, type: 'flex' },
          this.buildFormItems(),
          !!this.props.actionsConfig && _react2.default.createElement(
            _col2.default,
            layout,
            _react2.default.createElement(
              'div',
              { className: layout.md === 24 ? 'tms-standardform__submit_r' : 'tms-standardform__submit_l' },
              !!onCancel && _react2.default.createElement(
                _button2.default,
                { onClick: onCancel, style: { marginLeft: 8 } },
                ' \u53D6\u6D88 '
              ),
              !!onSubmit && _react2.default.createElement(
                _button2.default,
                { type: 'primary', htmlType: 'submit', loading: loading },
                submitText || '确定'
              ),
              _react2.default.createElement(
                _button2.default,
                { onClick: this.handleReset, style: { marginLeft: 8 } },
                ' \u91CD\u7F6E '
              )
            )
          )
        )
      );
    }
  }]);

  return DataTable;
}(_react.PureComponent), _class2.propTypes = {
  items: _propTypes2.default.array,
  loading: _propTypes2.default.bool,
  actionsConfig: _propTypes2.default.shape({
    layout: _propTypes2.default.object,
    submitText: _propTypes2.default.string,
    onSubmit: _propTypes2.default.func,
    onReset: _propTypes2.default.func,
    onCancel: _propTypes2.default.func
  })
}, _class2.defaultProps = {
  items: null,
  actionsConfig: null,
  loading: false
}, _temp2)) || _class);
exports.default = DataTable;