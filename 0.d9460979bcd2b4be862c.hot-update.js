webpackHotUpdate(0,{

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(101);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(123);

var _col2 = _interopRequireDefault(_col);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(8).enterModule;

  enterModule && enterModule(module);
})();

__webpack_require__(148);

__webpack_require__(177);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(19);

var _Layout = __webpack_require__(150);

var _Layout2 = _interopRequireDefault(_Layout);

var _SideMenu = __webpack_require__(180);

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _ArticleDoc = __webpack_require__(181);

var _ArticleDoc2 = _interopRequireDefault(_ArticleDoc);

var _ComponentDoc = __webpack_require__(182);

var _ComponentDoc2 = _interopRequireDefault(_ComponentDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  var pageData = props.pageData,
      data = props.data,
      router = props.router,
      location = props.location,
      utils = props.utils;


  console.log(props);
  if (!pageData) {
    router.push('/404');
    return null;
  } else {
    var pathArr = location.pathname.split('/');
    var currDocName = pathArr.pop();
    console.log(currDocName);

    var currData = {};
    if (currDocName === 'CHANGELOG') {
      currDocName = currDocName.toUpperCase();
      currData = pageData[currDocName];
    } else {
      currData = pageData;
    }
    var isCom = pathArr[0] === 'components';

    console.log(currData);
    console.log(isCom);

    return _react2.default.createElement(
      _Layout2.default,
      { location: props.location },
      _react2.default.createElement(
        _row2.default,
        null,
        _react2.default.createElement(
          _col2.default,
          { xxl: 4, xl: 5, lg: 6, md: 24, sm: 24, xs: 24, className: 'main-menu' },
          _react2.default.createElement(_SideMenu2.default, { defaultSelectedKey: location.pathname, data: data })
        ),
        _react2.default.createElement(
          _col2.default,
          { xxl: 20, xl: 19, lg: 18, md: 24, sm: 24, xs: 24, className: 'main-container' },
          isCom ? _react2.default.createElement(_ComponentDoc2.default, _extends({ demos: currData.demo, doc: currData.index }, props)) : _react2.default.createElement(_ArticleDoc2.default, _extends({}, currData, props))
        )
      )
    );
  }
};

exports.default = _default;

//  {/* <aside id="aside">
//         <SideMenu defaultSelectedKey={location.pathname} data={data} />
//       </aside>

//       <article id="article">
//         <div>
//           {
//             isCom
//               ? <ComponentDoc demos={currData.demo} doc={currData.index} {...props}></ComponentDoc>
//               : <ArticleDoc {...currData} {...props}></ArticleDoc>
//           }
//         </div>
//       </article> */}

module.exports = exports['default'];
;

(function () {
  var reactHotLoader = __webpack_require__(8).default;

  var leaveModule = __webpack_require__(8).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/liutao/Desktop/mhc-antd-admin/site/theme/template/Doc.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ })

})