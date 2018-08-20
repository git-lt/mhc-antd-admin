'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = require('antd/es/message');

var _message3 = _interopRequireDefault(_message2);

var _datePicker = require('antd/es/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

require('antd/es/message/style/css');

require('antd/es/date-picker/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPicker = _datePicker2.default.MonthPicker,
    RangePicker = _datePicker2.default.RangePicker,
    WeekPicker = _datePicker2.default.WeekPicker;
var DateTimePicker = (_temp = _class = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      date: ''
    };
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: 'handleChange',
    value: function handleChange(date) {
      _message3.default.info('Selected Date: ' + date.toString());
      this.setState({ date: date });
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type;

      return this.Picker(type);
    }
  }]);

  return DateTimePicker;
}(_react.Component), _class.propTypes = {
  hidden: _propTypes2.default.bool, // 父容器是否隐藏
  type: _propTypes2.default.string.isRequired,
  required: _propTypes2.default.bool,
  title: _propTypes2.default.any,
  placeholder: _propTypes2.default.any,
  className: _propTypes2.default.string // 绑定 父容器
}, _class.defaultProps = {
  hidden: false,
  required: null,
  title: null,
  type: "DatePicker",
  placeholder: "请选择"
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.Picker = function (type) {
    var _props = _this2.props,
        title = _props.title,
        hidden = _props.hidden,
        required = _props.required,
        props = _objectWithoutProperties(_props, ['title', 'hidden', 'required']);

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { className: 'labelTitle' },
        title,
        _react2.default.createElement(
          'span',
          { hidden: !required, className: 'required' },
          ' *'
        )
      ),
      type == "DatePicker" && _react2.default.createElement(_datePicker2.default, props),
      type == "MonthPicker" && _react2.default.createElement(MonthPicker, props),
      type == "RangePicker" && _react2.default.createElement(RangePicker, props),
      type == "WeekPicker" && _react2.default.createElement(WeekPicker, props)
    );
  };
}, _temp);
exports.default = DateTimePicker;