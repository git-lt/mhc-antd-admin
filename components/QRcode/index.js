import React, { Component } from 'react';
import { Button, Input, Row, Col, message } from 'antd';
const QRCode = require('qrcode.react');

class QRcode extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputurl: '',
      qrcodeshow: 'none',
      text: props.text || '二维码生成',
      size: props.size || 150,
      colsize: props.colsize || 6,
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
    const { inputurl, qrcodeshow, text, size, colsize } = this.state;
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