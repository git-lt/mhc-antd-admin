import React, { Component } from 'react';
import { Icon, Tag, Badge } from 'antd';

class StateTag extends Component {

  constructor(props) {
    super(props);

    this.state = {
      state: props.state,
      code: props.code,
      style: props.style,
    };

  }
  render() {
    const { color, text, type, spin, state, style, code } = this.state;
    return (
      state.map((item, index) => {
        console.log(item, item.key, '6789');
        switch (style) {
          case 'solid':
            return (
              <div>
                <Tag color="green">volcano</Tag>
                <Tag color="red">volcano</Tag>
                <Tag color="cyan">volcano</Tag>
                <Tag color="blue">volcano</Tag>
                <Tag color="orange">volcano</Tag>
              </div>
            );
            break;
            // if (index === code) {
            //   return (<Badge status="success" text={item.value} />);
            // }
            // break;
          case 'line':
            console.log(item, code, 9999888);
            if (code == item.key) {
              console.log(item.value);
              return (
                <div>
                  <Tag color={item.color}>{item.value}</Tag>
                </div>
              );
            }
            break;
            // if (index === code) {
            //   return (<Tag color={item.color}>volcano</Tag>);
            // }
            // break;
          case 'dot':
            if (code == item.key) {
              return (
                <div>
                  <Badge status={item.state} />{item.value}
                </div>
              );
            }
            break;
        }


      })
    );
  }
}

export default StateTag;
