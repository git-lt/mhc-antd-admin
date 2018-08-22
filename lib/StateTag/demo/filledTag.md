---
order: 1
title:
  zh-CN: 填充型图标
  en-US: filled
---

## zh-CN
用于标记事物的属性和维度,
进行分类。

````jsx
import {StateTag} from 'mhc-antd-admin';

const tagtype_yanche =  [
  { key: '5', value: '待分配', state: 'warning' },
  { key: '10', value: '待验车', state: 'processing' },
  { key: '15', value: '已完成', state: 'success' },
  { key: '99', value: '已作废', state: 'error' },
  { key: '76', value:'待调度', state:'default'}];

ReactDOM.render(
  <div>
    <StateTag options={tagtype_yanche} code={5} type={'filled'}></StateTag>
    <StateTag options={tagtype_yanche} code={10} type={'filled'}></StateTag>
    <StateTag options={tagtype_yanche} code={15} type={'filled'}></StateTag>
    <StateTag options={tagtype_yanche} code={99} type={'filled'}></StateTag>
    <StateTag options={tagtype_yanche} code={76} type={'filled'}></StateTag>  
  </div>
, mountNode);
````
