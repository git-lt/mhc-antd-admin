---
order: 0
title:
  zh-CN: 生成二维码
  en-US: Badge
---

## zh-CN

用于二维码的生成。

## en-US

Used to generate qr code.

````jsx
import {QRcode} from 'mhc-antd-admin';


ReactDOM.render(
 <QRcode text='二维码生成' size={160} colsize={12}></QRcode>
, mountNode);
````
