---
order: 9
title: 贡献指南
toc: false
---

这篇指南会指导你如何为 Ant Design 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。

## 行为准则

我们有一份 [行为准则](https://github.com/ant-design/ant-design/blob/master/CODE_OF_CONDUCT.md)，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。

## 透明的开发

我们所有的工作都会放在 [GitHub](https://github.com/ant-design) 上。不管是核心团队的成员还是外部贡献者的 pull request 都需要经过同样流程的 review。

## 分支管理

基于我们的 [发布周期](/changelog)，我们每个月都会从 `master` 分支切一个 `feature` 分支出来（比如 `features-3.1` 分支用来发布 3.1 版本）。 如果你要修一个 bug，那么请发 pull request 到 `master`；如果你要提一个增加新功能的 pull request，那么请基于 `feature` 分支来做。

## Bugs

我们使用 [GitHub Issues](https://github.com/ant-design/ant-design/issues) 来做 bug 追踪。 如果你想要你发现的 bug 被快速解决，最好的办法就是通过我们提供的 [issue 小助手](http://new-issue.ant.design) 来提 issue。并且能使用这个 [模板](https://u.ant.design/codesandbox-repro) 来提供重现。

在你报告一个 bug 之前，请先确保已经搜索过已有的 issue 和阅读了我们的 [常见问题](https://github.com/ant-design/ant-design/wiki/FAQ)。

## 新增功能

如果你有改进我们的 API 或者新增功能的想法，我们同样推荐你使用我们提供的 [issue 小助手](http://new-issue.ant.design) 来新建一个添加新功能的 issue。


## 开发流程

1. `npm start` 在本地运行 MHC Antd Admin 的网站。
2. `npm run build` 构建组件库。
3. `npm publish` 发布组件库。
4. `npm run deploy` 发布文档到 gh-pages。
