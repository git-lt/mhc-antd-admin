---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

最简单的用法。

````jsx
import { List, Card, Button } from 'antd';
import { ImgViewer } from 'mhc-antd-admin';

class App extends React.Component {
  state ={ 
    visible: false,
    activeIndex: 0,
  }
  showImgViewer =  activeIndex => () => this.setState({ visible: true, activeIndex })
  hideImgViewer = () => this.setState({ visible: false })
  render() {
    const { visible, activeIndex } = this.state;
    const { showImgViewer, hideImgViewer } = this;
    const images = [];
    for (let i = 0; i < 4; i++) {
      images.push({
        alt: '标题内容'+i,
        src: `http://placeimg.com/320/200/nature?${i}`,
        downloadUrl: `http://placeimg.com/320/200/nature?${i}`,
      });
    }
    return (
      <div>
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={images}
            renderItem={(item, i) => (
              <List.Item>
                <Card onClick={showImgViewer(i)}>
                  <img alt={item.alt} src={item.src} style={{ maxWidth: '100%' }} />
                </Card>
              </List.Item>
            )}
          />
          <ImgViewer
            visible={visible}
            onClose={hideImgViewer}
            images={images}
            activeIndex={activeIndex}
            downloadable
            customToolbar={(toolbars) => {
              return toolbars.concat([{
                key: 'test',
                render: <div>C</div>,
                onClick: (activeImage) => {
                  console.log(activeImage);
                },
              }]);
            }}
          />
        </div>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
