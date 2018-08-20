---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

````jsx
import { Offcanvas } from 'mhc-antd-admin';
import { Button } from 'antd';


class App extends React.Component {
  state = {
    show: false,
  }

  showDetail = () => this.setState({ show: true });

  hideDetail = () => this.setState({ show: false });

  render() {
    return (
      <div>
        <Button onClick={this.showDetail}>显示详情</Button>
        <Offcanvas show={this.state.show} position="right" onClose={this.hideDetail} closeByMask>
          <div id="offcanvas-inner">
            <div>详情内容</div>
            <div>详情内容</div>
            <div>详情内容</div>
            <div>详情内容</div>
            <div>详情内容</div>
          </div>
        </Offcanvas>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
<style>
#offcanvas-inner {
  background: #f2f4f5;
  padding: 30px;
  font-size: 16px;
  height: 100%;
  width: 500px;
  text-align: center;
}
</style>
