'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _tag = require('antd/es/tag');

var _tag2 = _interopRequireDefault(_tag);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/icon/style/css');

require('antd/es/tag/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckableTag = _tag2.default.CheckableTag;


var TagSelectOption = function TagSelectOption(_ref) {
  var children = _ref.children,
      checked = _ref.checked,
      _onChange = _ref.onChange,
      value = _ref.value;
  return _react2.default.createElement(
    CheckableTag,
    { checked: checked, key: value, onChange: function onChange(state) {
        return _onChange(value, state);
      } },
    children
  );
};

TagSelectOption.isTagSelectOption = true;

var TagSelect = function (_Component) {
  _inherits(TagSelect, _Component);

  function TagSelect() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TagSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TagSelect.__proto__ || Object.getPrototypeOf(TagSelect)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      expand: false,
      value: _this.props.value || _this.props.defaultValue || []
    }, _this.onChange = function (value) {
      var onChange = _this.props.onChange;

      if (!('value' in _this.props)) {
        _this.setState({ value: value });
      }
      if (onChange) {
        onChange(value);
      }
    }, _this.onSelectAll = function (checked) {
      var checkedTags = [];
      if (checked) {
        checkedTags = _this.getAllTags();
      }
      _this.onChange(checkedTags);
    }, _this.handleTagChange = function (value, checked) {
      var checkedTags = [].concat(_toConsumableArray(_this.state.value));

      var index = checkedTags.indexOf(value);
      if (checked && index === -1) {
        checkedTags.push(value);
      } else if (!checked && index > -1) {
        checkedTags.splice(index, 1);
      }
      _this.onChange(checkedTags);
    }, _this.handleExpand = function () {
      _this.setState({
        expand: !_this.state.expand
      });
    }, _this.isTagSelectOption = function (node) {
      return node && node.type && (node.type.isTagSelectOption || node.type.displayName === 'TagSelectOption');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TagSelect, [{
    key: 'getAllTags',
    value: function getAllTags() {
      var _this2 = this;

      var children = this.props.children;

      children = _react2.default.Children.toArray(children);
      var checkedTags = children.filter(function (child) {
        return _this2.isTagSelectOption(child);
      }).map(function (child) {
        return child.props.value;
      });
      return checkedTags || [];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          value = _state.value,
          expand = _state.expand;
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          expandable = _props.expandable;


      var checkedAll = this.getAllTags().length === value.length;

      var cls = (0, _classnames2.default)('tagSelect', className, {
        'hasExpandTag': expandable,
        'expanded': expand
      });
      return _react2.default.createElement(
        'div',
        { className: cls, style: style },
        _react2.default.createElement(
          CheckableTag,
          { checked: checkedAll, key: 'tag-select-__all__', onChange: this.onSelectAll },
          '\u5168\u90E8'
        ),
        value && _react2.default.Children.map(children, function (child) {
          if (_this3.isTagSelectOption(child)) {
            return _react2.default.cloneElement(child, {
              key: 'tag-select-' + child.props.value,
              value: child.props.value,
              checked: value.indexOf(child.props.value) > -1,
              onChange: _this3.handleTagChange
            });
          }
          return child;
        }),
        expandable && _react2.default.createElement(
          'a',
          { className: 'trigger', onClick: this.handleExpand },
          expand ? '收起' : '展开',
          ' ',
          _react2.default.createElement(_icon2.default, { type: expand ? 'up' : 'down' })
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ('value' in nextProps && nextProps.value) {
        return { value: nextProps.value };
      }
      return null;
    }
  }]);

  return TagSelect;
}(_react.Component);

TagSelect.Option = TagSelectOption;

exports.default = TagSelect;