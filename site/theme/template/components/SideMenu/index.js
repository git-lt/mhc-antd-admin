import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';
import { obj2arr } from '../../utils';
import _sortBy from 'lodash/sortBy';
import _groupBy from 'lodash/groupBy';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default props => {
  const { data, defaultSelectedKey } = props;
  console.log(props);
  // 获取 meta 信息
  const docMetas = _sortBy(obj2arr(data.docs).map(v => v.meta), ['order']);
  const logMeta = data.changelog.CHANGELOG.meta;
  const comMetas = _groupBy(obj2arr(data.components).map(v => v.index.meta), 'type');

  docMetas.push(logMeta);

  // 处理链接 文章 docs/start.md => docs/start
  docMetas.forEach(v => { v.path = v.filename.replace('.md', '') });

  // 处理链接 组件 components/XSelect/index.md => components/XSelect
  Object.keys(comMetas).forEach(v => {
    comMetas[v].forEach(m => { m.path = m.filename.replace('/index.md', '') });
  });

  return (
    <Menu
      mode="inline"
      className="doc-sidemenus"
      defaultSelectedKeys={[defaultSelectedKey]}
      defaultOpenKeys={['components']}>
      {docMetas.map((v, i) => (
        <Menu.Item key={v.path}><Link to={v.path}>{v.title}</Link></Menu.Item>
      ))}
      <SubMenu key="components" title={<h4 style={{ margin: 0 }}>Components</h4>} >
        {
          Object.keys(comMetas).map((k, i) => {
            return (
              <MenuItemGroup title={k} key={i}>
                {comMetas[k].map((v, i) => (
                  <Menu.Item key={v.path}>
                    <Link to={v.path}>
                      <span>{v.title}</span>
                      <span className="chinese">{v.subtitle}</span>
                    </Link>
                  </Menu.Item>
                ))}
              </MenuItemGroup>
            );
          })}
      </SubMenu>
    </Menu>
  );
};