---
category: Components
type: Data Display
subtitle: 滑动展示层
title: Offcanvas
---

滑动展示层

## 何时使用

- 可上下左右滑动出来显示，带 `mask` 遮罩层，常用于侧滑展示详情。


## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 显示隐藏，由外部控制 | bool | false |
| position | 从哪个位置滑出 `top/left/bottom/center` | string | center |
| animate | 显示时的动画，`slide-in-top / slide-in-bottom / zoom-in` | String | `slide-in-top` |
| closeByMask | 是否可以点击遮罩关闭 | bool | - |
| onClose | 关闭事件，组件关闭调用这个事件 | func | - |
| onShow | 显示之后的回调 | func | - |
| onHide | 关闭之后的回调 | func | - |
| onFirstShow | 用于第一次显示时的回调 | func | - |
| hideMask | 用于隐藏遮罩，使其透明 | bool | false |
| height | 浮层的高 | string | - |
| width | 浮层的宽| String | - |
