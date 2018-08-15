---
category: Components
type: Data Display
subtitle: 背景图片
title: BgImg
cols: 1
---

背景图片

## 何时使用

- 展示图片时，图片尺寸、图片比例大小未知时，并且需要图片垂直居中显示。

## 功能点

- 可配置大小
- 可添加文本描述
- 配置CDN地址和图片处理后缀
- 可设置图片未加载时的占位图
- 可配置图片显示动画

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 容器高 | Number | 100 |
| width | 窗口宽 | Number | 120 |
| url | 图片地址 | String | - |
| title | 图片描述 | String | - |
| prefix | 图片CDN地址，用于后端只给图片CDN的key时，显示图片 | String | - |
| suffix | CDN提供的图片裁切相关后缀 | String | - |
| placholderImg | 图片未加载时的占位图 | String | - |
| animateName | 显示动画名称 | String | fadeIn |


 `animateName` 请参考 [animate.css](https://github.com/daneden/animate.css)，添加相关动画样式后即可使用，默认为 `fadeIn`