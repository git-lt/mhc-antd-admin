import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const StandardSelect = ({
  onSelect, labelInValue, data, placeholder, keyName, valueName, hasAll, ...others
}) => {
  if (hasAll && data[0][valueName] !== '全部') {
    data.unshift({ [keyName]: '', [valueName]: '全部' });
  }
  return (
    <Select
      placeholder={placeholder}
      labelInValue={labelInValue}
      onSelect={onSelect}
      {...others}
    >
      {data.map((v, i) => <Select.Option value={String(v[keyName])} key={i}>{v[valueName]}</Select.Option>)}
    </Select>
  );
};

StandardSelect.defaultProps = {
  onSelect: () => {},
  labelInValue: false,
  keyName: 'key',
  valueName: 'value',
  data: [],
  placeholder: '请选择',
  hasAll: false,
};

StandardSelect.propTypes = {
  onSelect: PropTypes.func,
  labelInValue: PropTypes.bool,
  keyName: PropTypes.string,
  valueName: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array,
  hasAll: PropTypes.bool,
};

export default StandardSelect;