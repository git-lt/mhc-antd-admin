import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Menu, Row, Col, Icon, Popover, Input, Button } from 'antd';
import * as utils from '../utils';
import { version as antdVersion } from '../../../../package.json';

let docsearch;
if (typeof window !== 'undefined') {
  docsearch = require('docsearch.js'); // eslint-disable-line
}

function initDocSearch(locale) {
  if (!docsearch) {
    return;
  }
  const lang = locale === 'zh-CN' ? 'cn' : 'en';
  docsearch({
    apiKey: '60ac2c1a7d26ab713757e4a081e133d0',
    indexName: 'ant_design',
    inputSelector: '#search-box input',
    algoliaOptions: { facetFilters: [`tags:${lang}`] },
    transformData(hits) {
      hits.forEach((hit) => {
        hit.url = hit.url.replace('ant.design', location.host);
        hit.url = hit.url.replace('https:', location.protocol);
      });
      return hits;
    },
    debug: false, // Set debug to true if you want to inspect the dropdown
  });
}

export default class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
  }

  state = {
    menuVisible: false,
  };

  componentDidMount() {
    const { intl, router } = this.context;
    router.listen(this.handleHideMenu);
    const { searchInput } = this;
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus();
      }
    });
    initDocSearch(intl.locale);
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }

  handleVersionChange = (url) => {
    const currentUrl = window.location.href;
    const currentPathname = window.location.pathname;
    window.location.href = currentUrl.replace(window.location.origin, url)
      .replace(currentPathname, utils.getLocalizedPathname(currentPathname));
  }

  handleLangChange = () => {
    const { location: { pathname } } = this.props;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href = currentProtocol + currentHref.replace(
      window.location.pathname,
      utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
    );
  }

  render() {
    const { menuVisible } = this.state;
    const { isMobile } = this.context;
    const menuMode = isMobile ? 'inline' : 'horizontal';
    const {
      location,
    } = this.props;

    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/');
    let activeMenuItem = module || 'home';
    if (activeMenuItem === 'components' || location.pathname === 'changelog') {
      activeMenuItem = 'docs/react';
    }
    const { intl: { locale } } = this.context;
    const isZhCN = locale === 'zh-CN';

    const headerClassName = classNames({
      clearfix: true,
    });

    const menu = [
      <Button className="preview version" style={{ marginTop: 16, marginRight: 16, borderRadius: 40 }}><Icon type="eye-o" />预览 {antdVersion}</Button>,
      <Menu className="menu-site" mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to={utils.getLocalizedPathname('/', isZhCN)}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/react">
          <Link to={utils.getLocalizedPathname('/docs/react/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.components" />
          </Link>
        </Menu.Item>
      </Menu>,
    ];

    const searchPlaceholder = locale === 'zh-CN' ? '在 mhc.antd.admin 中搜索' : 'Search in mhc.antd.admin';
    return (
      <header id="header" className={headerClassName}>
        {isMobile && (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        )}
        <Row>
          <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <Link to={utils.getLocalizedPathname('/', isZhCN)} id="logo">
              <img alt="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMTE1cHgiIHZpZXdCb3g9IjAgMCAyMDAgMTE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgNDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iODIuMTYwNDgwNiUiIHkxPSI5LjQ4NjM3MTcxJSIgeDI9IjI3LjU1MzIwMzclIiB5Mj0iODcuMjc2MzMyNCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDAwMCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBMjAwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlhJQU9DSEVOR1hJIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzU2LjAwMDAwMCwgLTgzLjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTYuMDAwMDAwLCAzOC4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTU4LjUzNjU4NTQsMTQzLjM3NjczIEw1MC4xNjEzMTU3LDE0My4zNzY3MyBMMjcuMjAzNTAxLDE0My4zNzY3MyBDMjMuMzQwNTc3NSwxNDMuMzc2NzMgMjAuMjA5MDU5MiwxNDAuMjQ1MjEyIDIwLjIwOTA1OTIsMTM2LjM4MjI4OCBDMjAuMjA5MDU5MiwxMzIuNTE5MzY1IDIzLjM0MDU3NzUsMTI5LjM4Nzg0NiAyNy4yMDM1MDEsMTI5LjM4Nzg0NiBMNDkuNDc3MzUxOSwxMjkuMzg3ODQ2IEw1Mi4yMzkwMDc3LDEyOS4zODc4NDYgQzU2LjEwMTkzMTIsMTI5LjM4Nzg0NiA1OS4yMzM0NDk1LDEyNi4yNTYzMjggNTkuMjMzNDQ5NSwxMjIuMzkzNDA1IEM1OS4yMzM0NDk1LDExOC41MzA0ODEgNTYuMTAxOTMxMiwxMTUuMzk4OTYzIDUyLjIzOTAwNzcsMTE1LjM5ODk2MyBMNDkuNDc3MzUxOSwxMTUuMzk4OTYzIEwxMi40NDE0NDkyLDExNS4zOTg5NjMgQzguNTc4NTI1NjksMTE1LjM5ODk2MyA1LjQ0NzAwNzQ1LDExMi4yNjc0NDUgNS40NDcwMDc0NSwxMDguNDA0NTIxIEM1LjQ0NzAwNzQ1LDEwNC41NDE1OTggOC41Nzg1MjU2OSwxMDEuNDEwMDc5IDEyLjQ0MTQ0OTIsMTAxLjQxMDA3OSBMNDkuNDc3MzUxOSwxMDEuNDEwMDc5IEw2MC42MDEzNzcxLDEwMS40MTAwNzkgQzY0LjQ2NDMwMDYsMTAxLjQxMDA3OSA2Ny41OTU4MTg4LDk4LjI3ODU2MTIgNjcuNTk1ODE4OCw5NC40MTU2Mzc3IEM2Ny41OTU4MTg4LDkwLjU1MjcxNDIgNjQuNDY0MzAwNiw4Ny40MjExOTYgNjAuNjAxMzc3MSw4Ny40MjExOTYgTDQ5LjQ3NzM1MTksODcuNDIxMTk2IEwyMC45MzE3MjQsODcuNDIxMTk2IEMxNy4wNjg4MDA1LDg3LjQyMTE5NiAxMy45MzcyODIyLDg0LjI4OTY3NzcgMTMuOTM3MjgyMiw4MC40MjY3NTQyIEMxMy45MzcyODIyLDc2LjU2MzgzMDcgMTcuMDY4ODAwNSw3My40MzIzMTI1IDIwLjkzMTcyNCw3My40MzIzMTI1IEw0OS40NzczNTE5LDczLjQzMjMxMjUgTDc1LjIzNTUyMzQsNzMuNDMyMzEyNSBDNzkuMDk4NDQ2OSw3My40MzIzMTI1IDgyLjIyOTk2NTIsNzAuMzAwNzk0MiA4Mi4yMjk5NjUyLDY2LjQzNzg3MDcgQzgyLjIyOTk2NTIsNjIuNTc0OTQ3MiA3OS4wOTg0NDY5LDU5LjQ0MzQyOSA3NS4yMzU1MjM0LDU5LjQ0MzQyOSBMNDkuNDc3MzUxOSw1OS40NDM0MjkgTDM0Ljg2OTAwNjIsNTkuNDQzNDI5IEMzMS4wMDYwODI3LDU5LjQ0MzQyOSAyNy44NzQ1NjQ1LDU2LjMxMTkxMDcgMjcuODc0NTY0NSw1Mi40NDg5ODcyIEMyNy44NzQ1NjQ1LDQ4LjU4NjA2MzcgMzEuMDA2MDgyNyw0NS40NTQ1NDU1IDM0Ljg2OTAwNjIsNDUuNDU0NTQ1NSBMNjAuNjAxMzc3MSw0NS40NTQ1NDU1IEwxMzYuNTg0MDksNDUuNDU0NTQ1NSBDMTM4LjEyNDI2NCw0NS40NTQ1NDU1IDEzOS4zNzI4MjIsNDYuNzAzMTAzNSAxMzkuMzcyODIyLDQ4LjI0MzI3NzggTDEzOS4zNzI4MjIsNjAuMTQyODczMSBMMTcwLjY4NTE5Miw2MC4xNDI4NzMxIEMxNzEuNTg4NjY3LDYwLjE0Mjg3MzEgMTcyLjQzNjE1OSw2MC41ODA1NjE1IDE3Mi45NTkxNjIsNjEuMzE3MjY3NCBMMTk5LjQ4NTIzOCw5OC42ODIxMjAzIEMxOTkuODIwMTA3LDk5LjE1MzgxOTEgMjAwLDk5LjcxNzk4MDUgMjAwLDEwMC4yOTY0NTggTDIwMCwxNDAuNTg3OTk4IEMyMDAsMTQyLjEyODE3MiAxOTguNzUxNDQyLDE0My4zNzY3MyAxOTcuMjExMjY4LDE0My4zNzY3MyBMMTg0LjY2ODk5LDE0My4zNzY3MyBDMTg0LjY2ODk5LDEzMS43ODc5NTkgMTc1LjMwOTA4OSwxMjIuMzkzNDA1IDE2My43NjMwNjYsMTIyLjM5MzQwNSBDMTUyLjIxNzA0NCwxMjIuMzkzNDA1IDE0Mi44NTcxNDMsMTMxLjc4Nzk1OSAxNDIuODU3MTQzLDE0My4zNzY3MyBMMTI0LjA0MTgxMiwxNDMuMzc2NzMgTDEwMC4zNDg0MzIsMTQzLjM3NjczIEMxMDAuMzQ4NDMyLDEzMS43ODc5NTkgOTAuOTg4NTMxNCwxMjIuMzkzNDA1IDc5LjQ0MjUwODcsMTIyLjM5MzQwNSBDNjcuODk2NDg2MSwxMjIuMzkzNDA1IDU4LjUzNjU4NTQsMTMxLjc4Nzk1OSA1OC41MzY1ODU0LDE0My4zNzY3MyBaIE0xNDkuODI3MDYsNjcuMTM3MzE0OSBDMTQ4LjI4Njg4Niw2Ny4xMzczMTQ5IDE0Ny4wMzgzMjgsNjguMzg1ODcyOSAxNDcuMDM4MzI4LDY5LjkyNjA0NzMgTDE0Ny4wMzgzMjgsOTQuMDA3ODI5MSBDMTQ3LjAzODMyOCw5NS41NDgwMDM0IDE0OC4yODY4ODYsOTYuNzk2NTYxNSAxNDkuODI3MDYsOTYuNzk2NTYxNSBMMTgwLjM4Nzk1OSw5Ni43OTY1NjE1IEMxODAuOTY1NTI5LDk2Ljc5NjU2MTUgMTgxLjUyODg1MSw5Ni42MTcyMzEzIDE4Mi4wMDAxMjksOTYuMjgzMzM2OSBDMTgzLjI1Njg1Nyw5NS4zOTI5NiAxODMuNTUzODQzLDkzLjY1MjM4NzMgMTgyLjY2MzQ2Niw5Mi4zOTU2NTkgTDE2NS42MDE4MTMsNjguMzEzODc3MiBDMTY1LjA3ODk3LDY3LjU3NTkwNzUgMTY0LjIzMDcxOCw2Ny4xMzczMTQ5IDE2My4zMjYzMDUsNjcuMTM3MzE0OSBMMTQ5LjgyNzA2LDY3LjEzNzMxNDkgWiBNNi45OTQ0NDE3NSwxMjkuMzg3ODQ2IEw5LjczMDI5NjkzLDEyOS4zODc4NDYgQzEzLjU5MzIyMDQsMTI5LjM4Nzg0NiAxNi43MjQ3Mzg3LDEzMi41MTkzNjUgMTYuNzI0NzM4NywxMzYuMzgyMjg4IEMxNi43MjQ3Mzg3LDE0MC4yNDUyMTIgMTMuNTkzMjIwNCwxNDMuMzc2NzMgOS43MzAyOTY5MywxNDMuMzc2NzMgTDYuOTk0NDQxNzUsMTQzLjM3NjczIEMzLjEzMTUxODI0LDE0My4zNzY3MyA0LjczMDcxNjkxZS0xNiwxNDAuMjQ1MjEyIDAsMTM2LjM4MjI4OCBDLTQuNzMwNzE2OTFlLTE2LDEzMi41MTkzNjUgMy4xMzE1MTgyNCwxMjkuMzg3ODQ2IDYuOTk0NDQxNzUsMTI5LjM4Nzg0NiBaIE03OS4xNzM0NjYyLDE1OS4wOTA5MDkgQzcwLjc4NDMzMDgsMTU5LjA5MDkwOSA2My45ODM1OTI4LDE1Mi4yNDMzMjMgNjMuOTgzNTkyOCwxNDMuNzk2Mzk2IEM2My45ODM1OTI4LDEzNS4zNDk0NyA3MC43ODQzMzA4LDEyOC41MDE4ODQgNzkuMTczNDY2MiwxMjguNTAxODg0IEM4Ny41NjI2MDE3LDEyOC41MDE4ODQgOTQuMzYzMzM5NywxMzUuMzQ5NDcgOTQuMzYzMzM5NywxNDMuNzk2Mzk2IEM5NC4zNjMzMzk3LDE1Mi4yNDMzMjMgODcuNTYyNjAxNywxNTkuMDkwOTA5IDc5LjE3MzQ2NjIsMTU5LjA5MDkwOSBaIE0xNjMuNDk0MDI0LDE1OS4wOTA5MDkgQzE1NS4xMDQ4ODgsMTU5LjA5MDkwOSAxNDguMzA0MTUsMTUyLjI0MzMyMyAxNDguMzA0MTUsMTQzLjc5NjM5NiBDMTQ4LjMwNDE1LDEzNS4zNDk0NyAxNTUuMTA0ODg4LDEyOC41MDE4ODQgMTYzLjQ5NDAyNCwxMjguNTAxODg0IEMxNzEuODgzMTU5LDEyOC41MDE4ODQgMTc4LjY4Mzg5NywxMzUuMzQ5NDcgMTc4LjY4Mzg5NywxNDMuNzk2Mzk2IEMxNzguNjgzODk3LDE1Mi4yNDMzMjMgMTcxLjg4MzE1OSwxNTkuMDkwOTA5IDE2My40OTQwMjQsMTU5LjA5MDkwOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" />
              MHC Antd Admin
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Input ref={ref => this.searchInput = ref} placeholder={searchPlaceholder} />
            </div>
            {!isMobile && menu}
          </Col>
        </Row>
      </header>
    );
  }
}
