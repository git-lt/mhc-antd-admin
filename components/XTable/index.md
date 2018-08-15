---
category: Components
type: Data Display
subtitle: 通用列表
cols: 1
title: XTable
---

通用列表

基于 [Table](https://ant.design/components/table-cn/) 组件的扩展，提供基本的数据列表页布局、列的可配置和可拖动、高级查询等功能

## 何时使用

- 用于常规列表页面的展示，通过配置 `table` 和 `form` 来快速构建列表页面


## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| toolbar | 表格头部工具栏 | Any | null |
| showSearchForm | 是否显示高级搜索 | Boolean | - |
| columnResizable | 列的大小是否可拖动 | Boolean | - |
| showColumnSelection | 是否可以自定义列的显示隐藏 | Boolean | - |
| total | 数据总条数，对应 pagnation.total | Number | 0 |
| current | 当前页码，对应 pagnation.current | Number | 0 |
| pageSize | 每页显示条数，对应 pagnation.pageSize | Number | 0 |
| onChange | 点击分页或选择每页选择多少条时，对应 pagnation.onChange 和 pagnation.onShowSizeChange | Func | - |
