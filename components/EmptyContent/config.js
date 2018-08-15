import React from 'react';

const config = {
  'load': {
    title: '您还没有创建过任何订单',
    desc: <div>您可以前往 <a href="javascript:;">订单管理</a> 创建订单</div>,
    imgUrl: require('./images/data-empty.svg'),
  },
  'search': {
    title: '未查询到相关数据',
    desc: '请更换其它查询条件，再试试',
    imgUrl: require('./images/search-empty.svg'),
  }
};

export default config;