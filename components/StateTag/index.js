import React from 'react';
import { Tag, Badge } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

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

const StateTag = ({ options, type, code, ...others }) => {

  // type: dot / filled / solid
  const data = options[code];
  const { text, state } = data;

  return (
    <span {...others}>
      {
        (() => {
          if (['filled', 'solid'].indexOf(type) > -1) {
            return <Tag color={stateMap[type][state]} className="tag_inner_text">{text}</Tag>;
          } else {
            return <Badge status={state} text={text} />;
          }
        })()
      }
    </span>
  );
};

StateTag.propTypes = {
  options: PropTypes.array,
  code: PropTypes.number,
  type: PropTypes.string,
};

StateTag.defaultProps = {
  options: [],
  code: '',
  type: 'dot',
};

export default StateTag;
