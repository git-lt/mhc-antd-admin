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
export { default as BgImg } from './BgImg';
export { default as BraftEditor } from './BraftEditor';
export { default as CopyToClipboard } from './CopyToClipboard';
export { default as EmptyContent } from './EmptyContent';
export { default as Exception } from './Exception';
export { default as FlvPlayer } from './FlvPlayer';
export { default as ImgViewer } from './ImgViewer';
export { default as CountDown } from './CountDown';
export { default as TagIcon } from './TagIcon';
export { default as QRcode } from './QRcode';
export { default as StateTag } from './StateTag';
export { default as DateTimePicker } from './DateTimePicker';
export { default as XUpload } from './XUpload';
