import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'antd';

const MenuItem  = Menu.Item;
export default props => {
  console.log(props.location);
  const defaultSelectedKeys = [props.location.pathname !== '/' ? 'docs/react' : '/'];
  return <header id="header">
    <div className="header-inner">
      <h2>MHC Antd Admin</h2>
      <Menu className="menu-site" key="nav" mode="horizontal" defaultSelectedKeys={defaultSelectedKeys}>
        <MenuItem key="/"> <Link to="/">首页</Link></MenuItem>
        <MenuItem key="docs/react"> <Link to="/docs/start">组件</Link></MenuItem>
        <MenuItem key="github"> <a href="https://github.com/git-lt/mhc-antd-admin/tree/master">Github</a></MenuItem>
      </Menu>
    </div>
  </header>;
};

{ /* <span><a href="https://github.com/ElemeFE/react-amap" target="_blank">GitHub</a></span> */ }

