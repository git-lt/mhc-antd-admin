webpackHotUpdate(0,{

/***/ 1490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "通过设置 ",
      [
        "code",
        "height"
      ],
      " 属性指定最大高度，如果超过这个行数的文本会自动截取。但是在这种模式下所有 ",
      [
        "code",
        "children"
      ],
      " 将会被转换成纯文本。"
    ],
    [
      "p",
      "并且注意在这种模式下，外容器需要有指定的宽度（或设置自身宽度）。"
    ]
  ],
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "按照行数省略",
      "en-US": "Truncate according to the number of rows"
    },
    "filename": "components/TextEllipsis/demo/create.md",
    "id": "components-TextEllipsis-demo-create"
  },
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TextEllipsis <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'mhc-antd-admin'</span><span class=\"token punctuation\">;</span>\n\n\n<span class=\"token keyword\">const</span> text1 <span class=\"token operator\">=</span> <span class=\"token string\">'An open source react rich-text editor ( mordern react editor includes media support such as texts, images, videos, audios, links etc. ), development based on Draft-Js and Ant-design, good support html, markdown, draft-raw mode. '</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> text2 <span class=\"token operator\">=</span> <span class=\"token string\">'自从去年9月份 React 团队发布了 v16.0 版本开始，到18年3月刚发布的 v16.3 版本，React 陆续推出了多项重磅新特性，并改进了原有功能中反馈呼声很高的一些问题，例如 render 方法内单节点层级嵌套问题，提供生命周期错误捕捉，组件指定 render 到任意 DOM 节点 (Portal) 等能力，以及最新的 Context API 和 Ref API。我们在对以上新特性经过一段时间的使用过后，通过本文进行一些细节分享和总结。'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  displayName <span class=\"token operator\">=</span> <span class=\"token string\">'Dashboard'</span>\n  state<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>\n    height<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span>\n    collapsed<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    i<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  setHeight <span class=\"token operator\">=</span> height <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  setText <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> i <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> i <span class=\"token operator\">%</span> <span class=\"token number\">2</span> <span class=\"token operator\">?</span> text1 <span class=\"token punctuation\">:</span> text2<span class=\"token punctuation\">,</span> i <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  onCollapsed <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> collapsed<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setHeight</span><span class=\"token punctuation\">(</span><span class=\"token number\">24</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>一行<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setHeight</span><span class=\"token punctuation\">(</span><span class=\"token number\">50</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>两行<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setHeight</span><span class=\"token punctuation\">(</span><span class=\"token number\">80</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>三行<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>setText<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>更新文本<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextEllipsis</span>\n            <span class=\"token attr-name\">tooltip</span>\n            <span class=\"token attr-name\">collapsed</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>height<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">text</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>text<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">before={&lt;a</span><span class=\"token punctuation\">></span></span>NEW<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            after<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onCollapsed<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed <span class=\"token operator\">?</span> <span class=\"token string\">'查看更多'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'折叠'</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TextEllipsis</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(11);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(40);

  var _mhcAntdAdmin = __webpack_require__(81);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var text1 = 'An open source react rich-text editor ( mordern react editor includes media support such as texts, images, videos, audios, links etc. ), development based on Draft-Js and Ant-design, good support html, markdown, draft-raw mode. ';
  var text2 = '自从去年9月份 React 团队发布了 v16.0 版本开始，到18年3月刚发布的 v16.3 版本，React 陆续推出了多项重磅新特性，并改进了原有功能中反馈呼声很高的一些问题，例如 render 方法内单节点层级嵌套问题，提供生命周期错误捕捉，组件指定 render 到任意 DOM 节点 (Portal) 等能力，以及最新的 Context API 和 Ref API。我们在对以上新特性经过一段时间的使用过后，通过本文进行一些细节分享和总结。';

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Dashboard', _this.state = {
        height: 24,
        collapsed: true,
        i: 0
      }, _this.setHeight = function (height) {
        return function () {
          _this.setState({
            height: height
          });
        };
      }, _this.setText = function () {
        var i = _this.state.i + 1;

        _this.setState({
          text: i % 2 ? text1 : text2,
          i: i
        });
      }, _this.onCollapsed = function () {
        _this.setState({
          collapsed: !_this.state.collapsed
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Button,
            {
              onClick: this.setHeight(24)
            },
            "一行"
          ),
          React.createElement(
            _antd.Button,
            {
              onClick: this.setHeight(50)
            },
            "两行"
          ),
          React.createElement(
            _antd.Button,
            {
              onClick: this.setHeight(80)
            },
            "三行"
          ),
          React.createElement(
            _antd.Button,
            {
              onClick: this.setText
            },
            "更新文本"
          ),
          React.createElement(
            "div",
            {
              style: {
                width: 200
              }
            },
            React.createElement(_mhcAntdAdmin.TextEllipsis, {
              tooltip: true,
              collapsed: this.state.collapsed,
              height: this.state.height,
              text: this.state.text,
              before: React.createElement(
                "a",
                null,
                "NEW"
              ),
              after: React.createElement(
                "a",
                {
                  onClick: this.onCollapsed
                },
                this.state.collapsed ? '查看更多' : '折叠'
              )
            })
          )
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