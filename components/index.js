/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (ENV !== 'production'
    && ENV !== 'test'
    && typeof console !== 'undefined'
    && console.warn
    && typeof window !== 'undefined') {
  console.warn(
    'You are using a whole package of antd, '
    + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}

/* @remove-on-es-build-end */
export { default as XSelect } from './XSelect';
export { default as XForm } from './XForm';
export { default as XTable } from './XTable';
export { default as XRadioGroup } from './XRadioGroup';
export { default as TagSelect } from './TagSelect';
export { default as Offcanvas } from './Offcanvas';
export { default as TextEllipsis } from './TextEllipsis';
export { default as DescriptionList } from './DescriptionList';