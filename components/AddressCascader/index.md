---
category: Components
type: Data Display
subtitle: 地址级联选择器
title: AddressCascader
---

地址级联选择器

## 何时使用

- 地址设置表单中的省市区选择。

引用方式：

```javascript
import { AddressCascader } from 'mhc-antd-admin';
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSelect | 选择时的回调 | Function | false |
| labelInValue | 选择结果是否为对象 | Boolean | - |
| keyName | `Option` 中的 `value` 名称 | String | - |
| valueName | `Option` 中的显示值名称 | String | - |
| placeholder | 提示文本 | String | - |
| data | `Select` 组件的数据 | Array | - |
