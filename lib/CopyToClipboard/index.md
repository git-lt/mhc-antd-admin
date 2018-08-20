---
category: Components
type: Data Display
subtitle: 复制到剪切板
title: CopyToClipboard
---

复制到剪切板

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 需要复制的文本 | String | - |
| children | 显示的内容 | Element | - |
| onCopy | 复制后的回调 | Function | - |
| options | `copy-to-clipboard` 的配置 | Object | - |


[copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

`options` 可配置是否打印日志，默认不打印

```
options: {
  debug: true,
  message: 'Press #{key} to copy',
}
```