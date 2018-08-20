---
order: 1
title: 
  zh-CN: 按照行数省略
  en-US: Truncate according to the number of rows
---

通过设置 `height` 属性指定最大高度，如果超过这个行数的文本会自动截取。但是在这种模式下所有 `children` 将会被转换成纯文本。

并且注意在这种模式下，外容器需要有指定的宽度（或设置自身宽度）。


````jsx
import { Button } from 'antd';
import { TextEllipsis } from 'mhc-antd-admin';

const text1 = 'An open source react rich-text editor ( mordern react editor includes media support such as texts, images, videos, audios, links etc. ), development based on Draft-Js and Ant-design, good support html, markdown, draft-raw mode. ';

const text2 = '自从去年9月份 React 团队发布了 v16.0 版本开始，到18年3月刚发布的 v16.3 版本，React 陆续推出了多项重磅新特性，并改进了原有功能中反馈呼声很高的一些问题，例如 render 方法内单节点层级嵌套问题，提供生命周期错误捕捉，组件指定 render 到任意 DOM 节点 (Portal) 等能力，以及最新的 Context API 和 Ref API。我们在对以上新特性经过一段时间的使用过后，通过本文进行一些细节分享和总结。';

class App extends React.Component {
  displayName = 'Dashboard'
  state={
    text: text2,
    height: 24,
    collapsed: true,
    i: 0,
  }

  setHeight = height => () => {
    this.setState({ height });
  }
  setText = () => {
    const i = this.state.i + 1;
    this.setState({ text: i % 2 ? text1 : text2, i });
  }
  onCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    return (
      <div>
        <Button onClick={this.setHeight(24)}>一行</Button>
        <Button onClick={this.setHeight(50)}>两行</Button>
        <Button onClick={this.setHeight(80)}>三行</Button>
        <Button onClick={this.setText}>更新文本</Button>

        <div style={{ width: 200 }}>
          <TextEllipsis
            tooltip
            collapsed={this.state.collapsed}
            height={this.state.height}
            text={this.state.text}
            before={<a>NEW</a>}
            after={<a onClick={this.onCollapsed}>{this.state.collapsed ? '查看更多' : '折叠'}</a>}
          ></TextEllipsis>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
