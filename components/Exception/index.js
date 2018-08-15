import React, { createElement } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import config from './typeConfig';
import './index.less';

const Exception = ({ className, linkElement = 'a', type, title, desc, img, actions, ...rest }) => {
  const pageType = type in config ? type : '404';
  const clsString = classNames('mhc-exception', {
    [className]: className
  });
  return (
    <div className={clsString} {...rest}>
      <div className="mhc-exception-imgBlock">
        <div
          className="mhc-exception-imgEle"
          style={{ backgroundImage: `url(${img || config[pageType].img})` }}
        />
      </div>
      <div className="mhc-exception-content">
        <h1>{title || config[pageType].title}</h1>
        <div className="mhc-exception-content-desc">{desc || config[pageType].desc}</div>
        <div className="mhc-exception-content-actions">
          {actions ||
            createElement(
              linkElement,
              {
                to: '/',
                href: '/',
              },
              <Button type="primary">返回首页</Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Exception;

// export default () => <div>正在完善中...</div>;