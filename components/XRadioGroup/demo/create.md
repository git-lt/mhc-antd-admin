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
import { XRadioGroup } from 'mhc-antd-admin';

const INSPECT_STATUS = [
  { key: '5', value: '待分配', state: 'warning' },
  { key: '10', value: '待验车', state: 'warning' },
  { key: '15', value: '已完成', state: 'success' },
  { key: '99', value: '已作废', state: 'default' },
];

class App extends React.Component {
  state = {
    current: '',
  }

  onStateChange = (e) => {
    this.setState({ current: e.target.value });
  }

  render() {
    return (
      <XRadioGroup
        current={this.state.current}
        onChange={this.onStateChange}
        data={INSPECT_STATUS}
        hasAll
      />
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
