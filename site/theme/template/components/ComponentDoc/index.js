import React from 'react';
import DocumentTitle from 'react-document-title';
import { Row, Col, Affix, Alert } from 'antd';
import { getChildren } from 'jsonml.js/lib/utils';
import Demo from './Demo';

function handleAffixChange() {
  const tocNode = document.getElementById('demo-toc-bottom').parentNode;
  tocNode.style.position = 'static';
}

export default class ComponentDoc extends React.PureComponent {

  state = {
    affixMode: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const tocNode = document.getElementById('demo-toc');
    const dh = document.body.scrollHeight;
    const of = window.scrollY + ((tocNode && tocNode.offsetHeight) || this.tocHeight);

    if (dh - of <= 600) {
      if (this.state.affixMode) {
        this.tocHeight = tocNode.offsetHeight;
        this.setState({
          affixMode: false,
        });
      }
    } else if (!this.state.affixMode) {
      this.setState({
        affixMode: true,
      });
    }
  }

  async getDemos(demos) {
    const res = await demos();
    return res;
  }

  render() {
    const props = this.props;
    const { doc, location } = props;
    const { content, meta } = doc;
    if (!doc) return null;
    const demos = Object.keys(props.demos).map(key => props.demos[key]);
    const { affixMode, expand } = this.state;

    const isSingleCol = meta.cols === 1;
    const leftChildren = [];
    const rightChildren = [];
    const showedDemo = demos.some(demo => demo.meta.only)
      ? demos.filter(demo => demo.meta.only)
      : demos.filter(demo => demo.preview);

    showedDemo
      .sort((a, b) => a.meta.order - b.meta.order)
      .forEach((demoData, index) => {
        const demoElem = (
          <Demo
            {...demoData}
            themeConfig={props.themeConfig}
            key={demoData.meta.filename}
            utils={props.utils}
            expand={expand}
            location={location}
          />
        );
        if (index % 2 === 0 || isSingleCol) {
          leftChildren.push(demoElem);
        } else {
          rightChildren.push(demoElem);
        }
      });
    console.log('leftChildren');
    console.log(leftChildren);
    console.log('rightChildren');
    console.log(rightChildren);
    console.log(isSingleCol);

    const jumper = showedDemo.map((demo) => {
      const title = demo.meta.title['zh-CN'];
      const localizeTitle = title;
      return (
        <li key={demo.meta.id} title={localizeTitle}>
          <a href={`#${demo.meta.id}`}>
            {localizeTitle}
          </a>
        </li>
      );
    });

    const { title, subtitle } = meta;
    return (
      <DocumentTitle title={`${subtitle || ''} ${title} - HMC Antd Amdin`}>
        <article>
          <Affix
            className="toc-affix"
            offsetTop={16}
            style={affixMode ? { opacity: 1 } : { opacity: 0, zIndex: -99 }}
          >
            <ul id="demo-toc" className="toc"> {jumper} </ul>
          </Affix>
          <Affix
            className="toc-affix-bottom"
            onChange={handleAffixChange}
            offsetTop={16}
            style={affixMode ? { opacity: 0, zIndex: -99 } : { opacity: 1 }}
          >
            <ul id="demo-toc-bottom" className="toc"> {jumper} </ul>
          </Affix>
          <section className="markdown">
            <h1>
              {title}
              {!subtitle && <span className="subtitle">{subtitle}</span>}
            </h1>
            {
              props.utils.toReactComponent(['section', { className: 'markdown' }].concat(getChildren(content)))
            }
            <p>引用方式：</p>
            <pre className="language-jsx">
              <code>
                <span className="token keyword">import </span>
                {`{ ${title} }`}
                <span className="token keyword"> from </span>
                <span className="token string">{`'mhc-antd-amdin'`}</span>
                <span className="token punctuation">;</span>
              </code>
            </pre>
            <h2 style={{ marginBottom: 32 }}>代码演示</h2>
          </section>
          <Row gutter={16}>
            <Col
              span={isSingleCol ? '24' : '12'}
              className={isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1'}>
              {leftChildren}
            </Col>
            {!isSingleCol && <Col className="code-boxes-col-2-1" span={12}>{rightChildren}</Col>}
          </Row>
          {
            props.utils.toReactComponent(
              ['section', {
                className: 'markdown api-container',
              }].concat(getChildren(doc.api || ['placeholder']))
            )
          }
        </article>
      </DocumentTitle>
    );
  }
}
