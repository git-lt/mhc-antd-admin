---
category: Components
type: Data Display
subtitle: 通用表单
cols: 1
title: XForm
---

通用表单

## 何时使用

- 快速构建表单

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 表单项配置 | Array | - |
| actionsConfig | 操作项配置 | Object | - |
| loading | 提交按钮的 `Loading` 状态 | Boolean | false |

### items

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 表单项的 `label` | String | - |
| layout | 表单项的布局 | Object | - |
| itemLayout | `label` 与 `input` 的布局 | Object | `{ labelCol: { md: { span: 8 }}, wrapperCol: { md: { span: 16 }} }` |
| formItem | 表单项 | Node | false |


### actionsConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | 操作项的布局 | Object | - |
| submitText | 确认文本 | String | - |
| onSubmit | 提交的回调 | Function | `(form) => {}` |
| onReset | 重置的回调 | Function | `(form) => {}`|
| onCancel | 取消的回调 | Function | `(form) => {}` |


items 配置示例

```javascript
export const getFormItemsConfig = context => {
  const { data } = context.state;
  return [
    {
      label: '用户名',
      layout: { md: 24 },
      itemLayout: {
        labelCol: { md: { span: 4 }},
        wrapperCol: { md: { span: 18 }}
      },
      formItem: getFieldDecorator => {
        return getFieldDecorator('uname', {
          initialValue: data.name || ''
        })(<Input placeholder="请输入"/>);
      },
    }
  ]
}
```


actionsConfig 配置示例

```javascript
export const getSubmitConfig = context => {
  return {
    layout: { md: 8 },
    onSubmit: context.onSubmit,
    submitText: '查询',
  };
};
```