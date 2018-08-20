---
order: 1
title:
  zh-CN: 点击图标复制
  en-US: Basic
---

点击图标复制。

````jsx
import { Input, Tooltip, Icon } from 'antd';
import { CopyToClipboard } from 'mhc-antd-admin';

const { TextArea } = Input;

class App extends React.Component {
  state = {
    text: '要复制的文本',
    copied: false,
    copyTooltipVisible: false,
  }

  onCopy = () => {
    this.setState({ copied: true });
    setTimeout(()=>this.setState({ copied: false}), 2000);
  }
  
  onCopyTooltipVisibleChange = visible => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false
      });
      return;
    }
    this.setState({
      copyTooltipVisible: visible
    });
  };

  render() {
    const { text, copied, copyTooltipVisible } = this.state;

    return (
      <div>
        <div id="copyToClibard2" className={copied ? 'copied' : ''}>
            要复制的文本
          <div className="code-box-actions">
            <CopyToClipboard
                text={text}
                onCopy={this.onCopy}
              >
              <Tooltip
                visible={copyTooltipVisible}
                onVisibleChange={this.onCopyTooltipVisibleChange}
                title={copied ? '复制成功' : '复制代码'}
              >
                <Icon
                  type={
                    copied && copyTooltipVisible
                      ? 'check'
                      : 'copy'
                  }
                  className="code-box-code-copy"
                />
              </Tooltip>
            </CopyToClipboard>
        </div>
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
#copyToClibard2 {
  position:relative;
  margin-bottom: 16px;
  height: 200px;
  border: 1px solid #ebedf0;
  padding: 42px 24px 50px;
  box-sizing: border-box;
}
#copyToClibard2:hover .code-box-code-copy {
  opacity: 1;
}
#copyToClibard2 .code-box-code-copy:hover{
  color: #697b8c;
  transform: scale(1.2);
}
```
