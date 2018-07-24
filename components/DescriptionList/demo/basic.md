---
order: 0
title:
  zh-CN: 水平型
  en-US: Basic
---

## zh-CN

水平展示。

## en-US

The most basic usage.

````jsx
import { DescriptionList } from 'mhc-antd-admin';

const { Description } = DescriptionList;

ReactDOM.render(
  <DescriptionList size="large" layout="horizontal">
    <Description term="品牌"> 奥迪 </Description>
    <Description term="车型"> 国产奥迪奥迪A3 </Description>
    <Description term="车架号"> VR8GDF7WAL7 </Description>
    <Description term="合同价"> 10万 </Description>
    <Description term="生产日期"> 2018-07-12 </Description>
    <Description term="公里数"> 100 </Description>
  </DescriptionList>,
  mountNode);
````
