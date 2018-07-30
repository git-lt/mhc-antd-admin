import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.less';

const noop = () => {};
window.__$tmsOffcanvas = window.__$tmsOffcanvas || {};

export default class Offcanvas extends Component {

  static propTypes = {
    show: PropTypes.bool,
    position: PropTypes.string,
    animate: PropTypes.string,
    closeByMask: PropTypes.bool,
    onClose: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onFirstShow: PropTypes.func,
    hideMask: PropTypes.bool,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    show: false,               // 显示隐藏，由外部控制
    position: 'center',        // top/left/bottom/center
    animate: 'slide-in-top',   // 显示时的动画，slide-in-top / slide-in-bottom / zoom-in
    closeByMask: true,         // 是否可以点击遮罩关闭
    onClose: noop,             // 关闭事件，组件关闭调用这个事件
    onShow: noop,              // 显示之后的回调
    onHide: noop,              // 关闭之后的回调
    hideMask: false,           // 用于隐藏遮罩，使其透明
    onFirstShow: noop,         // 用于第一次显示时的回调
    height: 'auto',
    width: 'auto',
  }

  state = {
    active: false,
    display: false,
    maskTransparent: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.show !== prevState.active) {
      return {
        active: nextProps.show,
        display: nextProps.show,
        maskTransparent: nextProps.show && !!Object.keys(window.__$tmsOffcanvas).length
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.active && this.props.show) {
      if (this.props.show) {
        this.props.onShow();
        if (this.isFirstShow) this.props.onFirstShow();
        window.__$tmsOffcanvas[this.uuid] = 1;
      } else {
        this.props.onHide();
        this.isFirstShow = false;
        delete window.__$tmsOffcanvas[this.uuid];
      }
    }
  }

  uuid = 'offcanvas-' + Math.random().toString(16).substr(2).slice(-5) + (new Date()).getTime().toString(16).slice(9);

  isFirstShow = true;

  render() {
    let {
      closeByMask, position, animate, onClose, hideMask,
      height, width, children,
    } = this.props;

    const { active, display, maskTransparent } = this.state;

    const wrapCls = classNames({
      'tms-offcanvas': true,
      'tms-offcanvas_mask-transparent': maskTransparent || hideMask,
      'active': active,
      [`tms-offcanvas-${position}`]: true,
      [`tms-offcanvas-${position}__show`]: display,
    });

    const innerCls = classNames('tms-offcanvas-inner', {
      [`tms-offcanvas-inner__${animate}`]: position === 'center',
    });

    const sty = {};
    if (height !== 'auto') sty.height = height;
    if (width !== 'auto') sty.width = width;

    return (
      <div>
        <div className={wrapCls} style={sty}>
          <div className={innerCls} style={sty}>{children}</div>
        </div>
        <div className="tms-offcanvas-mask"
          onTouchMove={e => e.preventDefault()}
          onClick={closeByMask ? onClose : null}
        />
      </div>
    );
  }
}

