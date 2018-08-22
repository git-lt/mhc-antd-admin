import React, { Component } from 'react';
import { Tag, Badge } from 'antd';
import PropTypes from 'prop-types';
import './index.less';
import classNames from 'classnames';

const stateMap = {
  filled: {
    warning: '#faad14',
    processing: '#1890ff',
    success: '#52c41a',
    error: '#f5222d',
    default: '#d9d9d9',
  },
  solid: {
    warning: 'orange',
    processing: 'blue',
    success: 'green',
    error: 'red',
    default: 'cyan',
  }
};

class StateTag extends Component {

  static propTypes = {
    options: PropTypes.array,
    code: PropTypes.number,
    type: PropTypes.string,
  }

  static defaultProps = {
    options: [],
    code: '',
    type: 'dot',
  }

  render() {
    const { options, type, code, className } = this.props;
    // type: dot / filled / solid
    const data = options.filter(v => v.key == code)[0];
    const cls = classNames({
      [className]: className
    });

    return (
      <span className={cls}>
        {
          (() => {
            if (['filled', 'solid'].indexOf(type) > -1) {
              return <Tag color={stateMap[type][data.state]} className="tag_inner_text">{data.value}</Tag>;
            } else {
              return <Badge status={data.state} text={data.value} />;
            }
          })()
        }
      </span>
    );
  }
}

export default StateTag;
