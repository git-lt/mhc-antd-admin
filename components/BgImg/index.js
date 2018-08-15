import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './index.less';

// width
// height
// suffix
// prefix
// url
// placholderImg
// title

// preview 后面扩展

export default class BgImg extends PureComponent {
  state = {
    loading: true
  }
  onLoad = () => {
    this.setState({ loading: false });
  }
  render() {
    const {
      url, title, children, className, placholderImg, animateName = 'fadeIn',
      prefix = '', suffix = '', width = 120, height = 100,
    } = this.props;
    const { loading } = this.state;
    const { onLoad } = this;

    let bgImg = loading ? (placholderImg || require('./images/img.svg')) : url;

    if (!loading && (prefix || suffix)) {
      bgImg = prefix ? `${prefix}/${bgImg}` : bgImg;
      bgImg = suffix ? `${bgImg}${suffix}` : bgImg;
    }
    const cls = classNames('mhc-bg-img', {
      [className]: className,
      [animateName]: !loading,
      'animated': true,
    });

    const sty = {
      width,
      height,
      backgroundImage: `url(${bgImg})`
    };

    if (loading && !placholderImg) sty.backgroundSize = '50% 50%';

    const txt = title || children;

    return (
      <div style={sty} className={cls}>
        {!!txt && <div className="mhc-bg-img__txt">{txt}</div>}
        <img src={url} onLoad={onLoad} style={{ display: 'none' }} />
      </div>
    );
  }
}
