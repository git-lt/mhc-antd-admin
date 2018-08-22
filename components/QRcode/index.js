import React, { Component } from 'react';
import { Button, Input, Row, Col, message } from 'antd';
import PropTypes from 'prop-types';
const QRCode = require('qrcode.react');

class QRcode extends Component {

  static propTypes = {
    text: PropTypes.string,
    size: PropTypes.number,
    colsize: PropTypes.number,
  }
  static defaultProps = {
    text: '生成二维码',
    size: 150,
    colsize: 6,
  }

  constructor(props) {
    super(props);

    this.state = {
      inputurl: '',
      qrcodeshow: 'none',
    };

  }


  showqrcode = () => {
    if (this.state.inputurl) {
      this.setState({ qrcodeshow: 'block' });
    } else {
      message.info('请输入转换内容');
      this.setState({ qrcodeshow: 'none' });
    }

  }

  onChange = (e) => {
    if (!e.target.value) {
      this.setState({ qrcodeshow: 'none' });
    }
    this.setState({ inputurl: e.target.value });
  }

  onPressEnter = () => {
    this.showqrcode();
  }
  render() {
    const { text, size, colsize } = this.props;
    const { inputurl, qrcodeshow } = this.state;
    const { showqrcode, onPressEnter, onChange } = this;
    return (
      <div>
        <Row>
          <Col span={colsize}>
            <Input placeholder="输入转换内容" onChange={onChange} onPressEnter={onPressEnter} />
          </Col>
          <Col span={colsize}>
            <Button onClick={showqrcode}>{text}</Button>
          </Col>
        </Row>
        <div style={{ display: qrcodeshow }}>
          <br />
          <QRCode size={size} value={inputurl} />
        </div>
      </div>
    );
  }
}

export default QRcode;