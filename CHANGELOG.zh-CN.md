---
order: 6
title: 更新日志
toc: false
timeline: true
---

`antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 3.6.6

`2018-07-07`

- 🐞 修复 `DatePicker` 组件被选中日期的样式问题。[#6146](https://github.com/ant-design/ant-design/issues/6146) [#9529](https://github.com/ant-design/ant-design/issues/9529)
- 🐞 修复 `DatePicker.RangePicker` 组件中被选中日期的样式问题。[004561b](https://github.com/ant-design/ant-design/commit/004561ba1f3b894dc164225e9e27b0a90679d15c)
- 🐞 修复 `Cascader` 组件在 `Form.Item` 下的对齐问题。[#9827](https://github.com/ant-design/ant-design/issues/9827) [#11133](https://github.com/ant-design/ant-design/issues/11133)
- 🐞 修复 `InputNumber` 组件的 `handler` 的背景样式问题。[4aabc53](https://github.com/ant-design/ant-design/commit/4aabc5374497359e13a958ef81ae4569db6164a7)
- 🐞 修复 `Table` 组件在 `FireFox` 浏览器下数据为空时的头部溢出的样式问题。[#11135](https://github.com/ant-design/ant-design/issues/11135)
