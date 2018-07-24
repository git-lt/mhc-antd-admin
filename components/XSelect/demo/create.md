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
import { XSelect } from 'mhc-antd-admin';

const CONTACT_INFO_TYPE = [
  { key: '6', value: '验车司机' },
  { key: '7', value: '验车专员' },
  { key: '8', value: '验车员' },
];

class App extends React.Component {
  render() {
    return (<XSelect data={CONTACT_INFO_TYPE} style={{ width: 140 }} />);
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
