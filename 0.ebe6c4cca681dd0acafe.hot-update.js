webpackHotUpdate(0,{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(224);

var _menu2 = _interopRequireDefault(_menu);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(8).enterModule;

  enterModule && enterModule(module);
})();

__webpack_require__(651);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(19);

var _reactRouter = __webpack_require__(155);

var _utils = __webpack_require__(239);

var _sortBy2 = __webpack_require__(1718);

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _groupBy2 = __webpack_require__(1728);

var _groupBy3 = _interopRequireDefault(_groupBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SubMenu = _menu2.default.SubMenu;
var MenuItemGroup = _menu2.default.ItemGroup;

var _default = function _default(props) {
  var data = props.data,
      defaultSelectedKey = props.defaultSelectedKey,
      others = _objectWithoutProperties(props, ['data', 'defaultSelectedKey']);

  console.log(props);
  // 获取 meta 信息
  var docMetas = (0, _sortBy3.default)((0, _utils.obj2arr)(data.docs).map(function (v) {
    return v.meta;
  }), ['order']);
  var logMeta = data.changelog.CHANGELOG.meta;
  var comMetas = (0, _groupBy3.default)((0, _utils.obj2arr)(data.components).map(function (v) {
    return v.index.meta;
  }), 'type');

  docMetas.push(logMeta);

  // 处理链接 文章 docs/start.md => docs/start
  docMetas.forEach(function (v) {
    v.path = v.filename.replace('.md', '');
  });

  // 处理链接 组件 components/XSelect/index.md => components/XSelect
  Object.keys(comMetas).forEach(function (v) {
    comMetas[v].forEach(function (m) {
      m.path = m.filename.replace('/index.md', '');
    });
  });

  return _react2.default.createElement(
    _menu2.default,
    _extends({
      mode: 'inline',
      className: 'doc-sidemenus',
      defaultSelectedKeys: [defaultSelectedKey]
    }, others, {
      defaultOpenKeys: ['components'] }),
    docMetas.map(function (v, i) {
      return _react2.default.createElement(
        _menu2.default.Item,
        { key: v.path },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: v.path },
          v.title
        )
      );
    }),
    _react2.default.createElement(
      SubMenu,
      { key: 'components', title: _react2.default.createElement(
          'h4',
          { style: { margin: 0 } },
          'Components'
        ) },
      Object.keys(comMetas).map(function (k, i) {
        return _react2.default.createElement(
          MenuItemGroup,
          { title: k, key: i },
          comMetas[k].map(function (v, i) {
            return _react2.default.createElement(
              _menu2.default.Item,
              { key: v.path },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: v.path },
                _react2.default.createElement(
                  'span',
                  null,
                  v.title
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'chinese' },
                  v.subtitle
                )
              )
            );
          })
        );
      })
    )
  );
};

exports.default = _default;
module.exports = exports['default'];
;

(function () {
  var reactHotLoader = __webpack_require__(8).default;

  var leaveModule = __webpack_require__(8).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubMenu, 'SubMenu', '/Users/liutao/Desktop/mhc-antd-admin/site/theme/template/components/SideMenu/index.js');
  reactHotLoader.register(MenuItemGroup, 'MenuItemGroup', '/Users/liutao/Desktop/mhc-antd-admin/site/theme/template/components/SideMenu/index.js');
  reactHotLoader.register(_default, 'default', '/Users/liutao/Desktop/mhc-antd-admin/site/theme/template/components/SideMenu/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ })

})