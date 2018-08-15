---
order: 0
title:
  zh-CN: 状态图标
  en-US: Badge
---

## zh-CN

用于标记事物的属性和维度,
进行分类。

## en-US

For simple state discrimination.

````jsx
import {StateTag} from 'mhc-antd-admin';

const tagtype =   [
  { key: '-1', value: '全部', color:'blue' },
  { key: '1', value: '已解决', color:'green' },
  { key: '0', value: '未解决', color:'rgb(250, 173, 20)' },
  { key: '2', value: '不处理', color:'red' }];

const tagtype_yanche =  [{ key: '5', value: '待分配', state: 'warning' },
  { key: '10', value: '待验车', state: 'warning' },
  { key: '15', value: '已完成', state: 'success' },
  { key: '99', value: '已作废', state: 'default' }];

ReactDOM.render(
  <div>
    <StateTag state={tagtype} code={1} style={'solid'}></StateTag>
    <br/>
    <StateTag state={tagtype} code={2} style={'line'}></StateTag>
    <br/>
    <StateTag state={tagtype_yanche} code={15} style={'dot'}></StateTag>
    
  </div>
, mountNode);
````
