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
    const { color, text, type, spin, state, style } = this.state;
    return (
      state.map((item, index) => {
        console.log(item, item.key, '6789');
        switch (style) {
          case 'solid':

            // if (index === code) {
            //   return (<Badge status="success" text={item.value} />);
            // }
            // break;
          case 'line':
            return (<Tag color="volcano">volcano</Tag>);
            break;
            // if (index === code) {
            //   return (<Tag color={item.color}>volcano</Tag>);
            // }
            // break;
          case 'dot':
            return (<Badge status="warning" text="Warning" />);
            break;
          default:
            // if (index === code) {
            //   return (<div>
            //     <Tag color={color}>
            //       <Icon type={type} style={{ fontSize: 10 }} spin={spin}></Icon>{item.value}
            //     </Tag>
            //   </div>);
            // }
            // break;
        }


      })
    );
  }
}

export default StateTag;
