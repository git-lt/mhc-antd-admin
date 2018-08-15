webpackHotUpdate(0,{

/***/ 1563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "最简单的用法。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/ImgViewer/demo/basic.md",
    "id": "components-ImgViewer-demo-basic"
  },
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Card<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ImgViewer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'mhc-antd-admin'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span><span class=\"token punctuation\">{</span> \n    visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    activeIndex<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n  showImgViewer <span class=\"token operator\">=</span>  activeIndex <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> activeIndex <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  hideImgViewer <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> visible <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> showImgViewer<span class=\"token punctuation\">,</span> hideImgViewer <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> images <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">4</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> r <span class=\"token operator\">=</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">16</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">substring</span><span class=\"token punctuation\">(</span><span class=\"token number\">4</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      images<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        alt<span class=\"token punctuation\">:</span> <span class=\"token string\">'标题内容'</span><span class=\"token operator\">+</span>i<span class=\"token punctuation\">,</span>\n        src<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`http://placeimg.com/320/200/nature?</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>r<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        downloadUrl<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`http://placeimg.com/320/200/nature?</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>r<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n            <span class=\"token attr-name\">grid</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> gutter<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> column<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>images<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token operator\">&lt;</span>Card onClick<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">showImgViewer</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>alt<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>src<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxWidth<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Card</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Viewer</span>\n            <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>visible<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>hideImgViewer<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">images</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>images<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">activeIndex</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>activeIndex<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">downloadable</span>\n            <span class=\"token attr-name\">customToolbar</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>toolbars<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n              <span class=\"token keyword\">return</span> toolbars<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n                key<span class=\"token punctuation\">:</span> <span class=\"token string\">'test'</span><span class=\"token punctuation\">,</span>\n                render<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>C<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n                onClick<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>activeImage<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n                  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>activeImage<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n              <span class=\"token punctuation\">}</span></span><span class=\"token attr-name\">]);</span>\n            <span class=\"token attr-name\">}}</span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(27);

  var _mhcAntdAdmin = __webpack_require__(35);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        visible: false,
        activeIndex: 0
      }, _this.showImgViewer = function (activeIndex) {
        return function () {
          return _this.setState({
            visible: true,
            activeIndex: activeIndex
          });
        };
      }, _this.hideImgViewer = function () {
        return _this.setState({
          visible: false
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var visible = this.state.visible;
        var showImgViewer = this.showImgViewer,
            hideImgViewer = this.hideImgViewer;
        var images = [];

        for (var i = 0; i < 4; i++) {
          var r = Math.random().toString(16).substring(4);
          images.push({
            alt: '标题内容' + i,
            src: "http://placeimg.com/320/200/nature?" + r,
            downloadUrl: "http://placeimg.com/320/200/nature?" + r
          });
        }

        return React.createElement(
          "div",
          null,
          React.createElement(_antd.List, {
            grid: {
              gutter: 16,
              column: 4
            },
            dataSource: images,
            renderItem: function renderItem(item, i) {
              return React.createElement(
                _antd.List.Item,
                null,
                React.createElement(
                  _antd.Card,
                  {
                    onClick: showImgViewer(i)
                  },
                  React.createElement("img", {
                    alt: item.alt,
                    src: item.src,
                    style: {
                      maxWidth: '100%'
                    }
                  })
                )
              );
            }
          }),
          React.createElement(Viewer, {
            visible: visible,
            onClose: hideImgViewer,
            images: images,
            activeIndex: activeIndex,
            downloadable: true,
            customToolbar: function customToolbar(toolbars) {
              return toolbars.concat([{
                key: 'test',
                render: React.createElement(
                  "div",
                  null,
                  "C"
                ),
                onClick: function onClick(activeImage) {
                  console.log(activeImage);
                }
              }]);
            }
          })
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ })

})