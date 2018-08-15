import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import config from './config';

export default class EmptyContent extends Component {
  static displayName = 'EmptyContent';

  // 'load'/'search'

  static propTypes = {
    show: PropTypes.bool,
    imgUrl: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    actions: PropTypes.any,
  }

  static defaultProps = {
    show: false,
    type: 'load',
    actions: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, imgUrl, title, desc } = this.props;

    const data = config[type];
    if (imgUrl) data.imgUrl = imgUrl;
    if (title) data.title = title;
    if (desc) data.desc = desc;
    console.log(data);
    return (
      <div className="empty-content">
        <div className="empty-content-inner">
          <div className="empty-content-imgException" style={{ backgroundImage: `url(${data.imgUrl})` }}></div>
          <div>
            <h3 className="empty-content-title">{data.title}</h3>
            <p className="empty-content-description">{data.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}