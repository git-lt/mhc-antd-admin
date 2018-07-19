---
order: 1
title: 快速上手
---

MHC Antd Admin 致力于提供给提升管理平台前端的开发体验和开发效率。

> 在开始之前，推荐先学习 [React](http://facebook.github.io/react/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)，并正确安装和配置了 [Node.js](https://nodejs.org/) v6.5 或以上。
> 官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 全家桶的正确开发方式。如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。

提供基于 `atnd` 的扩展组件，以及常用的组件的最佳实践和示例，如：地图、图表、复制、图片上传、文件上传、图片查看、视频播放、富文本编辑器、Execel导入导出、登录注册等PC后台组件。

---

## 在线演示

最简单的使用方式参照以下 CodeSandbox 演示，也推荐 Fork 本例来进行 `Bug Report`。

- [antd CodeSandbox](https://u.ant.design/codesandbox-repro)


### 使用组件

脚手架会生成一个 Todo 应用实例（一个很有参考价值的 React 上手示例），先不管它，我们用来测试组件。

直接用下面的代码替换 `index.js` 的内容，用 React 的方式直接使用 antd 组件。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + (date ? date.toString() : ''));
    this.setState({ date });
  }
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>当前日期：{this.state.date && this.state.date.toString()}</div>
        </div>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

> 你可以在左侧菜单选用更多组件。


## 按需加载

如果你在开发环境的控制台看到下面的提示，那么你可能使用了 `import { Button } from 'antd';` 的写法引入了 antd 下所有的模块，这会影响应用的网络性能。

```
You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
```

> ![控制台警告](https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png)

可以通过以下的写法来按需加载组件。

```jsx
import Button from 'antd/lib/button';
import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
```

如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```jsx
import { Button } from 'antd';
```

插件会帮你转换成 `antd/lib/xxx` 的写法。另外此插件配合 [style](https://github.com/ant-design/babel-plugin-import#usage) 属性可以做到模块样式的按需自动加载。

> 注意，babel-plugin-import 的 `style` 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 `import 'antd/dist/antd.css` 手动引入，并覆盖全局样式。

