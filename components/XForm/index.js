import React, { PureComponent } from 'react';
import { Form, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

const FormItem = Form.Item;
@Form.create()
export default class DataTable extends PureComponent {

  static propTypes = {
    items: PropTypes.array,
    loading: PropTypes.bool,
    actionsConfig: PropTypes.shape({
      layout: PropTypes.object,
      submitText: PropTypes.string,
      onSubmit: PropTypes.func,
      onReset: PropTypes.func,
      onCancel: PropTypes.func,
    })
  }

  static defaultProps ={
    items: null,
    actionsConfig: null,
    loading: false,
  }

  buildFormItems = () => {
    const { form, items } = this.props;
    const getFieldDecorator = form.getFieldDecorator;
    const itemLayout = {
      labelCol: { md: { span: 8 }},
      wrapperCol: { md: { span: 16 }}
    };

    return items.map((v, i) => {
      return (
        <Col {...v.layout} key={i}>
          <FormItem label={v.label} {...(v.itemLayout ? v.itemLayout : itemLayout)}>
            {v.formItem(getFieldDecorator)}
          </FormItem>
        </Col>
      );
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (err) return;
      const onSubmit = this.props.actionsConfig.onSubmit;
      onSubmit && onSubmit(values, form);
    });
  }

  handleReset = () => {
    const { form } = this.props;
    const onReset = this.props.actionsConfig.onReset;
    form.resetFields();
    onReset && onReset(form);
  }

  render() {
    const {
      layout, onSubmit, onCancel, submitText,
    } = this.props.actionsConfig || {};
    const loading = this.props.loading;

    const formOpt = {};
    if (onSubmit) formOpt.onSubmit = this.handleSubmit;
    return (
      <Form className="tms-standardform" layout="inline" {...formOpt}>
        <Row gutter={{ md: 4, lg: 4, xl: 8 }} type="flex">
          {this.buildFormItems()}
          {
            !!this.props.actionsConfig && <Col {...layout}>
              <div className={layout.md === 24 ? 'tms-standardform__submit_r' : 'tms-standardform__submit_l'}>
                {!!onCancel && <Button onClick={onCancel} style={{ marginLeft: 8 }}> 取消 </Button>}
                {!!onSubmit && <Button type="primary" htmlType="submit" loading={loading}>{submitText || '确定'}</Button>}
                {<Button onClick={this.handleReset} style={{ marginLeft: 8 }}> 重置 </Button>}
              </div>
            </Col >
          }
        </Row>
      </Form>
    );
  }
}