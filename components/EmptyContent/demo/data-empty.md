---
order: 0
title:
  zh-CN: 加载为空提示
  en-US: Basic
---

空内容提示 页面，配合自定义操作。

````jsx
import { EmptyContent } from 'mhc-antd-admin';
import { Button } from 'antd';

const actions = (
  <div>
    <Button type="primary" style={{marginRight: 16}}>Home</Button>
    <Button>Detail</Button>
  </div>
);

ReactDOM.render(
  <EmptyContent type="load"/>
, mountNode);
````