import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from 'antd';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.lessLoaded = false;
  }

  render() {
    return (
      <footer id="footer">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.resources" /></h2>
                <div>
                  <a href="http://pro.ant.design">Ant Design Pro</a>
                </div>
                <div>
                  <a href="http://mobile.ant.design">Ant Design Mobile</a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.community" /></h2>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://zhuanlan.zhihu.com/antdesign">
                    <FormattedMessage id="app.footer.zhihu" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.help" /></h2>
                <div>
                  <a target="_blank " href="https://github.com/git-lt/mhc-antd-admin">
                    GitHub
                  </a>
                </div>
                <div>
                  <a href="/CHANGELOG-cn">
                    <FormattedMessage id="app.footer.change-log" />
                  </a>
                </div>
              </div>
            </Col>

          </Row>
        </div>
        <div className="bottom-bar">
          Made with <span className="heart">❤</span> by <FormattedMessage id="app.footer.company" />
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
