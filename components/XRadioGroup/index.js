import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const { Group, Button } = Radio;

const XRadioGroup = ({
  current, onChange, data, keyName, valueName, hasAll, ...others
}) => {
  if (hasAll && data[0][valueName] !== '全部') {
    data.unshift({ [keyName]: '', [valueName]: '全部' });
  }
  return (
    <Group value={current} onChange={onChange} {...others}>
      {data.map((v, i) => <Button value={String(v[keyName])} key={i}>{v[valueName]}</Button>)}
    </Group>
  );
};

XRadioGroup.defaultProps = {
  onChange: () => {},
  hasAll: false,
  current: '',
  keyName: 'key',
  valueName: 'value',
  data: [],
};

XRadioGroup.propTypes = {
  onChange: PropTypes.func,
  current: PropTypes.string,
  hasAll: PropTypes.bool,
  keyName: PropTypes.string,
  valueName: PropTypes.string,
  data: PropTypes.array
};

export default XRadioGroup;