---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

最简单的用法。


````jsx
import { List, Card, Button } from 'antd';
import { BgImg } from 'mhc-antd-admin';

class App extends React.Component {
  state = {
    key: 1
  }
  refresh = () => {
    this.setState({ key: this.state.key+1})
  }
  render() {
    const listData = [];
    for (let i = 0; i < 4; i++) {
      const r = Math.random().toString(16).substring(4);
      listData.push({
        title: '标题内容'+i,
        url: `http://placeimg.com/320/200/nature?${r}`,
      });
    }
    const animateNames = ['fadeIn', 'flipInX', 'zoomIn', 'fadeIn']
    return (
      <div id="bgImgDemo">
        <div><Button onClick={this.refresh}>刷新</Button></div>
        <br/>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={listData}
          key={ this.state.key }
          renderItem={(item, i) => (
            <List.Item>
              <Card>
                <BgImg width={160} height={100} url={item.url} animateName={animateNames[i]}>{item.title}</BgImg>
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
```css
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
```