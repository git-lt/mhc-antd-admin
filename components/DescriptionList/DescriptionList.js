import React from 'react';
import classNames from 'classnames';
import { Row } from 'antd';
import './index.less';

const DescriptionList = ({
  className,
  col = 3,
  layout = 'vertical',
  gutter = 32,
  children,
  size,
  ...restProps
}) => {
  const column = col > 6 ? 6 : col;
  const cls = classNames('descriptionList', {
    'horizontal': layout === 'horizontal',
    'vertical': layout !== 'horizontal',
    [className]: className,
  });

  return (
    <div className={cls} {...restProps}>
      <Row gutter={gutter}>
        {React.Children.map(children, child => (child ? React.cloneElement(child, { column }) : child))}
      </Row>
    </div>
  );
};

export default DescriptionList;
