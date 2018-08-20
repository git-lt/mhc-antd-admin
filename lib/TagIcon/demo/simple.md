---
order: 0
title:
  zh-CN: 状态图标
  en-US: Badge
---

## zh-CN

用于简单状态区分。

## en-US

For simple state discrimination.

````jsx
import {TagIcon} from 'mhc-antd-admin';


ReactDOM.render(
  <div>
  <TagIcon color='#faad14' text='待接单' type='check-circle'/>
  <br/>
  <TagIcon color='gray' text='待调度' type='loading'/>
  <br/>  
  <TagIcon color='green' text='进行中' type='clock-circle-o' spin='true'/>
  <br/>
  <TagIcon color='rgb(49, 216, 13)' text='已完成' type='check-circle'/>
  <br/>
  <TagIcon color='red' text='已关闭' type='close-circle'/>
  <br/> 
  <TagIcon color='pink' text='已取消' type='minus-circle-o'/>
  </div>
, mountNode);
````
