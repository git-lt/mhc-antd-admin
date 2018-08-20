---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

````jsx
import { Input } from 'antd';
import { XForm } from 'mhc-antd-admin';

class App extends React.Component {
  state = {
    loading: false,
    data: {
      carUnique: 'WAS1231SAAA',
      odometer: 10,
    },
  }

  onSubmit = (values) => {
    console.log(values);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  onReset = (form) => {
    console.log(form);
    this.setState({ data: {} });
  }

  render() {
    const { data } = this.state;
    const items = [
      {
        label: '车架号',
        layout: { md: 12 },
        itemLayout: {
          labelCol: { md: { span: 4 } },
          wrapperCol: { md: { span: 18 } },
        },
        formItem: (getFieldDecorator) => {
          return getFieldDecorator('carUnique', {
            initialValue: data.carUnique || '',
            rules: [{ required: true, message: '请输入车架号' }],
          })(<Input placeholder="请输入车架号" />);
        },
      },
      {
        label: '公里数',
        layout: { md: 12 },
        itemLayout: {
          labelCol: { md: { span: 4 } },
          wrapperCol: { md: { span: 18 } },
        },
        formItem: (getFieldDecorator) => {
          return getFieldDecorator('odometer', {
            initialValue: data.odometer || 0,
            rules: [{ required: true, message: '请输入公里数' }],
          })(<Input placeholder="请输入公里数" />);
        },
      },
    ];
    const actionsConfig = {
      layout: { md: 24 },
      onSubmit: this.onSubmit,
      onReset: this.onReset,
      submitText: '查询',
    };

    return (
      <XForm
        items={items}
        actionsConfig={actionsConfig}
        loading={this.state.loading}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
