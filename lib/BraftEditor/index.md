---
category: Components
type: Data Display
subtitle: 富文本编辑器
title: BraftEditor
cols: 1
---

富文本编辑器

## 何时使用

- 基于 [braft-editor](https://github.com/margox/braft-editor/blob/master/README.md) 的富文本编辑器，图片上传添加了七牛的上传配置，你需要提供 `token` 和 七牛的资源前缀。


## API

其它配置请查看  [braft-editor](https://github.com/margox/braft-editor/blob/master/README.md) 文档说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| token | 七牛上传token | String | - |
| prefix | 七牛资源前缀（静态资源域名地址） | String | - |
| suffix | 七牛资源后缀，用于图片缩放或裁剪 | String | - |
| contentId | 编辑器ID，用于设置默认值后更新 | String | - |