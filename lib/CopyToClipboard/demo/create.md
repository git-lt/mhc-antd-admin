---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

点击文本复制。

````jsx
import { Input } from 'antd';
import { CopyToClipboard } from 'mhc-antd-admin';

const { TextArea } = Input;

class App extends React.Component {
  state = {
    text: '要复制的文本',
    copied: false,
  }

  onCopy = () => {
    this.setState({ copied: true });
    setTimeout(()=>this.setState({ copied: false}), 2000);
  }

  render() {
    const { text, copied } = this.state;

    return (
      <div>
        <div id="copyToClibard" className={copied ? 'copied' : ''}>
          <CopyToClipboard text={text} onCopy={this.onCopy}>
            <span>点击复制这条文本</span>
          </CopyToClipboard>
        </div>
        <TextArea rows={3} placeholder="粘贴复制的文字"/>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  mountNode
);
````
```css
#copyToClibard {
  position:relative;
  display: inline-block;
  margin-bottom: 16px;
}
#copyToClibard:hover{
  color: #2593FB;
  cursor: pointer;
}
#copyToClibard:after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "复制成功";
  text-align: center;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  opacity: 0;
  z-index: -1;
}
#copyToClibard.copied:after{
  z-index: 1;
  opacity:1;
  top: -20px;
}
```
