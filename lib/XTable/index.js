'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _table = require('antd/es/table');

var _table2 = _interopRequireDefault(_table);

var _popover = require('antd/es/popover');

var _popover2 = _interopRequireDefault(_popover);

var _tooltip = require('antd/es/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _divider = require('antd/es/divider');

var _divider2 = _interopRequireDefault(_divider);

var _checkbox = require('antd/es/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

require('antd/es/table/style/css');

require('antd/es/popover/style/css');

require('antd/es/tooltip/style/css');

require('antd/es/icon/style/css');

require('antd/es/row/style/css');

require('antd/es/button/style/css');

require('antd/es/divider/style/css');

require('antd/es/checkbox/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ResizeableTableTitle = require('./ResizeableTableTitle.js');

var _ResizeableTableTitle2 = _interopRequireDefault(_ResizeableTableTitle);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};
var XTable = (_temp = _class = function (_PureComponent) {
  _inherits(XTable, _PureComponent);

  function XTable(props) {
    _classCallCheck(this, XTable);

    var _this = _possibleConstructorReturn(this, (XTable.__proto__ || Object.getPrototypeOf(XTable)).call(this, props));

    _initialiseProps.call(_this);

    var columnResizable = props.columnResizable,
        showColumnSelection = props.showColumnSelection,
        columns = props.columns,
        total = props.total;


    var realColumns = columns.map(function (v) {
      return _extends({}, v, { show: !v.hidden });
    });
    var components = null;
    if (columnResizable) {
      components = { header: { cell: _ResizeableTableTitle2.default } };
      realColumns = realColumns.map(function (col, index) {
        return _extends({}, col, {
          onHeaderCell: col.resizable === false ? noop : function (column) {
            return column.width ? { width: column.width, onResize: _this.onColumnResize(index) } : {};
          }
        });
      });
    }

    var columnSelection = [];
    var columnCheckedValues = [];
    if (showColumnSelection) {
      columnSelection = realColumns.map(function (v, i) {
        if (!v.hidden) columnCheckedValues.push(String(i));
        return {
          disabled: !!v.primary,
          value: String(i),
          label: v.title
        };
      });
    }

    _this.state = {
      columns: realColumns,
      columnSelectOptions: columnSelection,
      columnCheckedValues: columnCheckedValues,
      selectionVisible: false,
      components: components,
      showColumnSelection: showColumnSelection,
      originColumns: []
    };
    return _this;
  }

  _createClass(XTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          toolbar = _props.toolbar,
          showSearchForm = _props.showSearchForm,
          total = _props.total,
          current = _props.current,
          columns = _props.columns,
          pageSize = _props.pageSize,
          onPageChange = _props.onPageChange,
          showTotal = _props.showTotal,
          showQuickJumper = _props.showQuickJumper,
          children = _props.children,
          _props$pagination = _props.pagination,
          pagination = _props$pagination === undefined ? {} : _props$pagination,
          others = _objectWithoutProperties(_props, ['toolbar', 'showSearchForm', 'total', 'current', 'columns', 'pageSize', 'onPageChange', 'showTotal', 'showQuickJumper', 'children', 'pagination']);

      var _state = this.state,
          columnSelectOptions = _state.columnSelectOptions,
          showColumnSelection = _state.showColumnSelection,
          columnState = _state.columns,
          columnCheckedValues = _state.columnCheckedValues,
          selectionVisible = _state.selectionVisible,
          components = _state.components;


      var isShowSearchForm = children && showSearchForm;
      var filterColumns = columnState.filter(function (v) {
        return v.show;
      });

      var otherTableConfig = {
        pagination: _extends({}, pagination, { total: total, current: current, pageSize: pageSize, onChange: onPageChange, onShowSizeChange: onPageChange, showTotal: showTotal, showQuickJumper: showQuickJumper })
      };

      if (components) otherTableConfig.components = components;

      var columnSelectionCon = _react2.default.createElement(
        'div',
        { className: 'tms-columns-selection__inner' },
        _react2.default.createElement(_checkbox2.default.Group, {
          options: columnSelectOptions,
          value: columnCheckedValues,
          onChange: this.onColumnSelectChange
        }),
        _react2.default.createElement(_divider2.default, { style: { marginTop: 8, marginBottom: 0 } }),
        _react2.default.createElement(
          'div',
          { className: 'tms-columns-selection__actions' },
          _react2.default.createElement(
            _button2.default,
            { onClick: this.onCancel },
            '\u53D6\u6D88'
          ),
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', style: { marginLeft: 8 }, onClick: this.onOk },
            '\u786E\u5B9A'
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'tms-datatable' },
        _react2.default.createElement(
          'div',
          null,
          isShowSearchForm && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { className: 'tms-datatable-form' },
              children
            ),
            _react2.default.createElement(_divider2.default, { style: { margin: 0 }, dashed: true })
          )
        ),
        !!toolbar && _react2.default.createElement(
          _row2.default,
          { className: 'tms-datatable-tools', type: 'flex', justify: 'space-between' },
          toolbar
        ),
        _react2.default.createElement(
          'div',
          { className: 'tms-datatable-table' },
          showColumnSelection && _react2.default.createElement(
            'div',
            { className: 'tms-columns-selection' },
            _react2.default.createElement(
              _popover2.default,
              {
                content: columnSelectionCon,
                title: '\u9009\u62E9\u663E\u793A\u5B57\u6BB5',
                trigger: 'click',
                placement: 'bottomRight',
                visible: selectionVisible,
                onVisibleChange: this.onVisibleChange
              },
              _react2.default.createElement(
                _tooltip2.default,
                { placement: 'top', title: '\u8BBE\u7F6E\u663E\u793A\u5B57\u6BB5' },
                _react2.default.createElement(
                  'a',
                  null,
                  _react2.default.createElement(_icon2.default, { type: 'setting' })
                )
              )
            )
          ),
          _react2.default.createElement(_table2.default, _extends({}, otherTableConfig, { columns: filterColumns }, others))
        )
      );
    }
  }]);

  return XTable;
}(_react.PureComponent), _class.propTypes = {
  toolbar: _propTypes2.default.any,
  showSearchForm: _propTypes2.default.bool,
  columnResizable: _propTypes2.default.bool,
  showColumnSelection: _propTypes2.default.bool,
  onPageChange: _propTypes2.default.func,

  total: _propTypes2.default.number,
  current: _propTypes2.default.number,
  pageSize: _propTypes2.default.number,
  showTotal: _propTypes2.default.func,
  showQuickJumper: _propTypes2.default.func
}, _class.defaultProps = {
  toolbar: null,
  showSearchForm: false,
  columnResizable: false,
  showColumnSelection: false,
  total: 0,
  current: 0,
  pageSize: 30,
  onPageChange: noop,
  showTotal: noop,
  showQuickJumper: noop
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onColumnResize = function (index) {
    return function (e, _ref) {
      var size = _ref.size;

      _this2.setState(function (_ref2) {
        var columns = _ref2.columns;

        var nextColumns = [].concat(_toConsumableArray(columns));
        nextColumns[index] = _extends({}, nextColumns[index], {
          width: size.width
        });
        return { columns: nextColumns };
      });
    };
  };

  this.onColumnSelectChange = function (selectedKeys) {
    _this2.setState({ columnCheckedValues: selectedKeys });
  };

  this.onVisibleChange = function (selectionVisible) {
    _this2.setState({ selectionVisible: selectionVisible });
  };

  this.onCancel = function () {
    return _this2.setState({ selectionVisible: false });
  };

  this.onOk = function () {
    var _state2 = _this2.state,
        columns = _state2.columns,
        columnCheckedValues = _state2.columnCheckedValues;

    columns.forEach(function (item, i) {
      item.show = columnCheckedValues.indexOf(String(i)) > -1;
    });

    _this2.setState({ columns: [].concat(_toConsumableArray(columns)), selectionVisible: false });
  };
}, _temp);
exports.default = XTable;