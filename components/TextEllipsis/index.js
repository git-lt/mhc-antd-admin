import React, { Component } from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

export default class TextEllipsis extends Component {

  static propTypes = {
    before: PropTypes.any,
    after: PropTypes.any,
    text: PropTypes.string,
    more: PropTypes.any,
    collapsed: PropTypes.bool,
    height: PropTypes.number.isRequired,
    tooltip: PropTypes.bool,
  }

  static defaultProps = {
    before: null,
    after: null,
    text: '',
    more: '...',
    collapsed: true,
    height: 24,
    tooltip: false,
  }

  constructor(props) {
    super(props);
    this.wrapDOM = React.createRef();
    this.textDOM = React.createRef();
    this.moreDOM = React.createRef();
    this.afterDOM = React.createRef();

    this.state = {
      keyIndex: 0,
      oversize: false,
      collapsed: props.collapsed,
      text: props.text,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.collapsed !== prevState.collapsed || nextProps.text !== prevState.text || nextProps.height !== prevState.height) {
      return {
        keyIndex: prevState.keyIndex + 1,
        oversize: false,
        collapsed: nextProps.collapsed,
        text: nextProps.text,
      };
    }
    return null;
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.collapsed) {
      this.moreDOM.current.style.display = 'none';
      return;
    }
    if (this.props.text !== prevState.text || this.props.height !== prevState.height) {
      this.update();
    }
  }

  update = () => {
    const { textDOM, moreDOM, wrapDOM, afterDOM } = this;
    const after = this.props.after;
    const { height } = this.props;
    let n = 1000;
    if (wrapDOM.current.offsetHeight > height) {
      moreDOM.current.style.display = 'inline-block';
      after && (afterDOM.current.style.display = 'inline-block');
      let text = this.state.text;
      while (wrapDOM.current.offsetHeight > height && n > 0) {
        textDOM.current.innerText = text = text.substring(0, text.length - 1);
        n--;
      }
      this.props.onHide && this.props.onHide();
    } else {
      moreDOM.current.style.display = 'none';
      after && (afterDOM.current.style.display = 'none');
      this.props.onShow && this.props.onShow();
    }
  }

  render() {
    const { before, after, more, tooltip, ...others } = this.props;
    const { oversize, text, keyIndex } = this.state;

    const con =  (
      <div {...others} ref={this.wrapDOM} className="sys-text-ellispsis-wrap">
        {!!before && <span>{before}</span>}
        <span ref={this.textDOM} key={keyIndex}>{text}</span>
        <span ref={this.moreDOM} style={{ display: oversize ? 'inline-block' : 'none' }}>{more}</span>
        {!!after && <span ref={this.afterDOM}>{after}</span>}
      </div>
    );

    return (tooltip && !after) ? <Tooltip placement="top" title={text}>{con}</Tooltip> : con;
  }
}