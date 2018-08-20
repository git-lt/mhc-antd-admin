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

const tagtype = [
  { key: '-1', value: '全部', color:'#1890ff' },
  { key: '1', value: '已解决', color:'#52c41a' },
  { key: '0', value: '未解决', color:'#d9d9d9' },
  { key: '2', value: '不处理', color:'#f5222d' },
  { key: '3', value: '待处理', color:'#faad14' }];

const tagtype_yanche =  [
  { key: '5', value: '待分配', state: 'warning' },
  { key: '10', value: '待验车', state: 'processing' },
  { key: '15', value: '已完成', state: 'success' },
  { key: '99', value: '已作废', state: 'error' },
  { key: '76', value:'待调度', state:'default'}];

ReactDOM.render(
  <div>
<StateTag state={tagtype_yanche} code={5} style={'dot'}></StateTag>
<StateTag state={tagtype_yanche} code={10} style={'dot'}></StateTag>
<StateTag state={tagtype_yanche} code={15} style={'dot'}></StateTag>
<StateTag state={tagtype_yanche} code={99} style={'dot'}></StateTag>
<StateTag state={tagtype_yanche} code={76} style={'dot'}></StateTag>   



<StateTag state={tagtype} code={2} style={'line'}></StateTag>
<StateTag state={tagtype} code={1} style={'line'}></StateTag>
<StateTag state={tagtype} code={0} style={'line'}></StateTag>
<StateTag state={tagtype} code={3} style={'line'}></StateTag>
<StateTag state={tagtype} code={-1} style={'line'}></StateTag>
  </div>
, mountNode);
````
