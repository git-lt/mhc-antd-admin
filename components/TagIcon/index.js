import React, { Component } from 'react';
import { Icon, Tag } from 'antd';

class TagIcon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      color: props.color,
      type: props.type,
      spin: props.spin,
    };

  }
  render() {
    const { color, text, type, spin } = this.state;
    return <div>
      <Tag color={color}>
        <Icon type={type} style={{ fontSize: 10 }} spin={spin}></Icon>{text}
      </Tag>
    </div>;
  }
}

export default TagIcon;
