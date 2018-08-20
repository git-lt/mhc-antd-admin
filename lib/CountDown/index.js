'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function fixedZero(val) {
  return Number(val) < 10 ? '0' + val : val;
}

var CountDown = (_temp = _class = function (_Component) {
  _inherits(CountDown, _Component);

  function CountDown(props) {
    _classCallCheck(this, CountDown);

    var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

    _initialiseProps.call(_this);

    var _this$initTime = _this.initTime(props),
        lastTime = _this$initTime.lastTime;

    _this.state = {
      lastTime: lastTime
    };
    return _this;
  }

  _createClass(CountDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      var _this2 = this;

      var target = this.props.target;

      if (target !== nextProps.target) {
        clearTimeout(this.timer);

        var _initTime = this.initTime(nextProps),
            lastTime = _initTime.lastTime;

        this.setState({
          lastTime: lastTime
        }, function () {
          _this2.tick();
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }

    // defaultFormat = time => (
    //  <span>{moment(time).format('hh:mm:ss')}</span>
    // );

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$format = _props.format,
          format = _props$format === undefined ? this.defaultFormat : _props$format,
          onEnd = _props.onEnd,
          rest = _objectWithoutProperties(_props, ['format', 'onEnd']);

      var lastTime = this.state.lastTime;

      var result = format(lastTime);

      return _react2.default.createElement(
        'span',
        rest,
        result
      );
    }
  }]);

  return CountDown;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.timer = 0;
  this.interval = 1000;

  this.initTime = function (props) {
    var lastTime = 0;
    var targetTime = 0;
    try {
      if (Object.prototype.toString.call(props.target) === '[object Date]') {
        targetTime = props.target.getTime();
      } else {
        targetTime = new Date(props.target).getTime();
      }
    } catch (e) {
      throw new Error('invalid target prop', e);
    }

    lastTime = targetTime - new Date().getTime();
    return {
      lastTime: lastTime < 0 ? 0 : lastTime
    };
  };

  this.defaultFormat = function (time) {
    var hours = 60 * 60 * 1000;
    var minutes = 60 * 1000;

    var h = Math.floor(time / hours);
    var m = Math.floor((time - h * hours) / minutes);
    var s = Math.floor((time - h * hours - m * minutes) / 1000);
    return _react2.default.createElement(
      'span',
      null,
      fixedZero(h),
      ':',
      fixedZero(m),
      ':',
      fixedZero(s)
    );
  };

  this.tick = function () {
    var onEnd = _this3.props.onEnd;
    var lastTime = _this3.state.lastTime;


    _this3.timer = setTimeout(function () {
      if (lastTime < _this3.interval) {
        clearTimeout(_this3.timer);
        _this3.setState({
          lastTime: 0
        }, function () {
          if (onEnd) {
            onEnd();
          }
        });
      } else {
        lastTime -= _this3.interval;
        _this3.setState({
          lastTime: lastTime
        }, function () {
          _this3.tick();
        });
      }
    }, _this3.interval);
  };
}, _temp);
exports.default = CountDown;