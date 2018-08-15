---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

最简单的用法。

````jsx
import { FlvPlayer } from 'mhc-antd-admin';

class App extends React.Component {
  render() {
    return (
      <div>
        <FlvPlayer 
          url="https://vjs.zencdn.net/v/oceans.mp4" 
          type="mp4" 
          cors 
          showControls 
          autoPlay={false} 
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
