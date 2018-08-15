import React, { Component } from 'react';
import { message } from 'antd';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import PropTypes from 'prop-types';

export default class CustomBraftEditor extends Component {
  static displayName = 'CustomBraftEditor';

  static propTypes = {
    token: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    contentId: PropTypes.string,
  };

  static defaultProps = {
    contentId: '1',
    prefix: '',
    suffix: '',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  beforeUpload = (file) => {
    const isJPG = /(jpg|jpeg|png)$/.test(file.type);
    const isLt2M = file.size / 1024 / 1024 < 2;

    let msg = '';
    msg = !isJPG && '图片格式不正确，请上传jpg/jpeg/png格式的图片';
    msg = !isLt2M && '图片大小超限，请上传小于 2M 图片';
    msg && message.error(msg);

    return isJPG && isLt2M;
  }

  onImgUpload = param => {
    const { prefix, suffix, token } = this.props;

    if (!token) return message.warning('七牛Token缺失');
    const fd = new FormData();
    fd.append('token', token);
    fd.append('file', param.file);

    const successFn = (response) => {
      try {
        const key = JSON.parse(xhr.responseText).key;
        param.success({ url: `${prefix}/${key}?${suffix}` });
      } catch (e) {
        param.error({ msg: '图片上传失败' });
      }
    };
    const progressFn = e => param.progress(Math.ceil(e.loaded / e.total * 100));
    const errorFn = () => { param.error({ msg: '图片上传失败' }) };

    const xhr = new XMLHttpRequest();
    xhr.onloadend = successFn;
    xhr.onerror = errorFn;
    xhr.onabort = errorFn;
    xhr.ontimeout = errorFn;
    xhr.onprogress = progressFn;
    xhr.open('POST', 'http://upload.qiniu.com', true);
    xhr.send(fd);
  }

  render() {
    const { children, contentId, ...others } = this.props;
    const { beforeUpload, onImgUpload } = this;
    const editorProps = {
      contentId,
      height: 500,
      contentFormat: 'html',
      initialContent: '<p></p>',
      media: {
        validateFn: beforeUpload,
        uploadFn: onImgUpload,
      },
      ...others
    };

    return (
      <BraftEditor {...editorProps} />
    );
  }
}