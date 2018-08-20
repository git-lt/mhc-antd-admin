'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; // https://github.com/gwuhaolin/reflv/blob/master/src/index.js

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _flvMin = require('flv.js/dist/flv.min.js');

var _flvMin2 = _interopRequireDefault(_flvMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlvPlayer = (_temp2 = _class = function (_Component) {
  _inherits(FlvPlayer, _Component);

  function FlvPlayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FlvPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FlvPlayer.__proto__ || Object.getPrototypeOf(FlvPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.initFlv = function ($video) {
      if ($video) {
        if (_flvMin2.default.isSupported()) {
          var flvPlayer = _flvMin2.default.createPlayer(_extends({}, _this.props), _this.props.config);
          flvPlayer.attachMediaElement($video);
          flvPlayer.load();
          _this.props.autoPlay && flvPlayer.play();
          _this.flvPlayer = flvPlayer;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FlvPlayer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.flvPlayer) {
        this.flvPlayer.unload();
        this.flvPlayer.detachMediaElement();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          showControls = _props.showControls;

      var options = {};
      if (showControls) options.controls = 'controls';

      return _react2.default.createElement('video', _extends({
        className: className,
        style: Object.assign({ width: '100%' }, style),
        ref: this.initFlv
      }, options));
    }
  }]);

  return FlvPlayer;
}(_react.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /**
   * media URL, can be starts with 'https(s)' or 'ws(s)' (WebSocket)
   */
  url: _propTypes2.default.string,
  /**
   * media type, 'flv' or 'mp4'
   */
  type: _propTypes2.default.oneOf(['flv', 'mp4']).isRequired,
  /**
   * whether the data source is a **live stream**
   */
  isLive: _propTypes2.default.bool,
  /**
   * whether to enable CORS for http fetching
   */
  cors: _propTypes2.default.bool,
  /**
   * whether to do http fetching with cookies
   */
  withCredentials: _propTypes2.default.bool,
  /**
   * whether the stream has audio track
   */
  hasAudio: _propTypes2.default.bool,
  /**
   * whether the stream has video track
   */
  hasVideo: _propTypes2.default.bool,
  /**
   * total media duration, in milliseconds
   */
  duration: _propTypes2.default.bool,
  /**
   * total file size of media file, in bytes
   */
  filesize: _propTypes2.default.number,
  /**
   * Optional field for multipart playback, see MediaSegment
   */
  segments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /**
     * indicates segment duration in milliseconds
     */
    duration: _propTypes2.default.number.isRequired,
    /**
     * indicates segment file size in bytes
     */
    filesize: _propTypes2.default.number,
    /**
     * indicates segment file URL
     */
    url: _propTypes2.default.string.isRequired
  })),
  /**
   * @see https://github.com/Bilibili/flv.js/blob/master/docs/api.md#config
   */
  config: _propTypes2.default.object,

  showControls: _propTypes2.default.bool,
  autoPlay: _propTypes2.default.bool
}, _class.defaultProps = {
  showControls: false,
  autoPlay: true
}, _temp2);
exports.default = FlvPlayer;