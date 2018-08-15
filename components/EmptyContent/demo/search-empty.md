---
order: 2
title:
  zh-CN: 搜索为空提示
  en-US: Basic
---

搜索为空时的提示，配合自定义操作。

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
  <EmptyContent type="search" />
, mountNode);
````