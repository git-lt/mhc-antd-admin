---
order: 6
title: Change Log
toc: false
timeline: true
---

`antd` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Schedule

* Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
* Monthly release: minor version at the end of every month for new features.
* Major version release is not included in this schedule for breaking change and new features.

---

## 3.6.6

`2018-07-07`

- 🐞 Fix the style of the selected day for `DatePicker`. [#6146](https://github.com/ant-design/ant-design/issues/6146) [#9529](https://github.com/ant-design/ant-design/issues/9529)
- 🐞 Fix the style of the selected day for `DatePicker.RangePicker`. [004561b](https://github.com/ant-design/ant-design/commit/004561ba1f3b894dc164225e9e27b0a90679d15c)
- 🐞 Fix the alignment style wrapped by `Form.Item` for `Cascader`. [#9827](https://github.com/ant-design/ant-design/issues/9827) [#11133](https://github.com/ant-design/ant-design/issues/11133)
- 🐞 Fix the background style of the `handler` for `InputNumber`. [4aabc53](https://github.com/ant-design/ant-design/commit/4aabc5374497359e13a958ef81ae4569db6164a7)
- 🐞 Fix the header overflow in `FireFox` when the data is empty for `Table`. [#11135](https://github.com/ant-design/ant-design/issues/11135)

## 3.6.5

`2018-07-02`

- 🐞 Fixed wired `Transfer` repaint problem in IE or Edge. [#9697](https://github.com/ant-design/ant-design/issues/9697)
- 🐞 Fixed `Card` background overflow when zoom in chrome. [#9085](https://github.com/ant-design/ant-design/issues/9085)
- TypeScript
  - 🐞 Fixed `Table` incompatible type `size`. [bf5b6ae1](https://github.com/ant-design/ant-design/commit/bf5b6ae1f3b5da4629a7d10a2d1764eaa3fbbb04)
  - 🐞 Fixed `Select` missing showArrow option in types. [cde2a6b6](https://github.com/ant-design/ant-design/commit/cde2a6b6f011a5b3a367b3f58731def547bc98d8)
- 🐞 Add custom local support in `Pagination`. [babbbdd4](https://github.com/ant-design/ant-design/commit/babbbdd4e5c33ca050f8ee08969185c8d3269b4c)
- 🐞 Move max-width to ant-tooltip, so that it can be override by overlayStyle.maxWidth. [e2b359e9](https://github.com/ant-design/ant-design/commit/e2b359e9c3dae067eeba37a886f7896474c87e31)
- 🐞 Adjust `Select` mirror style to avoid to long string. [#11035](https://github.com/ant-design/ant-design/issues/11035)

## 3.6.4

`2018-06-23`

- 🐞 Fixed `Steps` theme `@process-icon-color`. [#10973](https://github.com/ant-design/ant-design/issues/10973)
- 🐞 Fixed style of RangePicker with preset ranges. [#10986](https://github.com/ant-design/ant-design/issues/10986)
- 🐞 Fixed `Dropdown` non-boolean attribute warning. [#7798](https://github.com/ant-design/ant-design/issues/7798)
- TypeScript
  - 🌟 Add `Tree` prop `className` definition. [#10950](https://github.com/ant-design/ant-design/issues/10950)
  - 🌟 Add `Tree` prop `selectable` definition. [3fb478e](https://github.com/ant-design/ant-design/commit/3fb478e743f3bad23dc300f501df11e5423468ba)

