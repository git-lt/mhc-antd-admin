---
order: 2
title:
  zh-CN: 线框型图标
  en-US: solid
---

## zh-CN
用于标记事物的属性和维度,
进行分类。


````jsx
import {StateTag} from 'mhc-antd-admin';


 const tagtype_yanche = {
    '5': { text: '待分配', state: 'warning' },
    '10': { text: '待验车', state: 'processing' },
    '15': { text: '已完成', state: 'success' },
    '99': { text: '已作废', state: 'error' },
    '76': { text:'待调度', state:'default'}
  }


ReactDOM.render(
  <div>
    <StateTag options={tagtype_yanche} code={5} type={'solid'}></StateTag>
    <StateTag options={tagtype_yanche} code={10} type={'solid'}></StateTag>
    <StateTag options={tagtype_yanche} code={15} type={'solid'}></StateTag>
    <StateTag options={tagtype_yanche} code={99} type={'solid'}></StateTag>
    <StateTag options={tagtype_yanche} code={76} type={'solid'}></StateTag>  
  </div>
, mountNode);
````
