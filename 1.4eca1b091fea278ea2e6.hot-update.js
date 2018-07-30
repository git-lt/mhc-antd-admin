webpackHotUpdate(1,{

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(629);
__webpack_require__(831);

/* eslint-disable no-unused-vars */
var React = __webpack_require__(0);
/* eslint-enable no-unused-vars */
var ReactDOM = __webpack_require__(10);
var ReactRouter = __webpack_require__(146);
var history = __webpack_require__(841);
var data = __webpack_require__(853);
var createElement = __webpack_require__(1538);
var routes = __webpack_require__(1539)(data);

var _window$location = window.location,
    pathname = _window$location.pathname,
    search = _window$location.search,
    hash = _window$location.hash;

var location = '' + pathname + search + hash;
var basename = '/mhc-antd-admin/';
ReactRouter.match({ routes: routes, location: location, basename: basename }, function () {
  var router = React.createElement(ReactRouter.Router, {
    history: ReactRouter.useRouterHistory(history.createHistory)({ basename: basename }),
    routes: routes,
    createElement: createElement
  });
  ReactDOM.render(router, document.getElementById('react-content'));
});

/***/ })

})