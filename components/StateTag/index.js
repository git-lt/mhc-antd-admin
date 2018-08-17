import React, { Component } from 'react';
import { Tag, Badge } from 'antd';
import PropTypes from 'prop-types';
import style from  './index.less';

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

  static defaultPros = {
    options: '',
    code: '',
    type: 'dot',
  }

  constructor(props) {
    super(props);

    this.state = {
      options: props.options,
      code: props.code,
      type: props.type,
    };

  }
  render() {
    const { options, type, code } = this.state;
    // type: dot / filled / solid
    const data = options.filter(v => v.key == code)[0];
    console.log(data);
    return (
      <div>
        {
          (() => {
            if (['filled', 'solid'].indexOf(type) > -1) {
              return <Tag color={stateMap[type][data.state]} className={style.tag_inner_text}>{data.value}</Tag>;
            } else {
              return <Badge status={data.state} text={data.value} />;
            }
          })()
        }
      </div>
    );
  }
}

export default StateTag;
