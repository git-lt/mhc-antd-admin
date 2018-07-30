import React from 'react';
import Header from './Header';
import Footer from './Footer';
require('../../../static/style');
require('antd/dist/antd.css');


export default props => (
  <div className="wrapper">
    <Header location={props.location}></Header>
    <div className="layout">{props.children}</div>
    <Footer></Footer>
  </div>
);

