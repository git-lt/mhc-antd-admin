---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。


````jsx
import { List } from 'antd';
import { BraftEditor } from 'mhc-antd-admin';

class App extends React.Component {
  render() {
    const con = '<p><span style="color:#ff0000;">Hello World!</span></p>';
    return (
      <BraftEditor height={400} initialContent={con}></BraftEditor>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````