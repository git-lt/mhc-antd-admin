import React from 'react';
import { Resizable } from 'react-resizable';
import PropTypes from 'prop-types';
import 'react-resizable/css/styles.css';

const ResizeableTableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

ResizeableTableTitle.propTypes = {
  onResize: PropTypes.func,
  width: PropTypes.number,
};

export default ResizeableTableTitle;