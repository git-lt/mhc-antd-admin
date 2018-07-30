import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Table, Divider, Checkbox, Popover, Button, Icon, Tooltip } from 'antd';
import ResizeableTableTitle from './ResizeableTableTitle.js';
import './index.less';

const noop = () => {};
export default class XTable extends PureComponent {
  static propTypes = {
    tableOptions: PropTypes.object,
    toolbar: PropTypes.any,
    searchFormNode: PropTypes.any,
    showSearchForm: PropTypes.bool,
    columnResizable: PropTypes.bool,
    showColumnSelection: PropTypes.bool,
    dataSource: PropTypes.array,
  }

  static defaultProps ={
    tableOptions: {},
    toolbar: null,
    searchFormNode: null,
    showSearchForm: false,
    columnResizable: false,
    showColumnSelection: false,
    dataSource: [],
  }

  constructor(props) {
    super(props);
    const { columnResizable, showColumnSelection, tableOptions } = props;

    const { columns, ...otherTableConfig } = tableOptions;
    let realColumns = columns.map(v => {
      return { ...v, show: !v.hidden };
    });
    let components = null;
    if (columnResizable) {
      components = { header: { cell: ResizeableTableTitle }};
      realColumns = realColumns.map((col, index) => ({
        ...col,
        onHeaderCell: col.resizable === false ? noop : column => ({
          width: column.width,
          onResize: this.onColumnResize(index),
        }),
      }));
    }

    let columnSelection = [];
    let columnCheckedValues = [];
    if (showColumnSelection) {
      columnSelection = realColumns.map((v, i) => {
        if (!v.hidden) columnCheckedValues.push(String(i));
        return {
          disabled: !!v.primary,
          value: String(i),
          label: v.title,
        };
      });
    }

    this.state = {
      columns: realColumns,
      otherTableConfig,
      columnSelectOptions: columnSelection,
      columnCheckedValues,
      selectionVisible: false,
      components,
      showColumnSelection,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.tableOptions !== prevState.tableOptions) {
      const { columns, ...otherTableConfig } = nextProps.tableOptions;
      return { otherTableConfig };
    }
    return null;
  }

  onColumnResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  }

  onColumnSelectChange = (selectedKeys) => {
    this.setState({ columnCheckedValues: selectedKeys });
  }

  onVisibleChange = (selectionVisible) => {
    this.setState({ selectionVisible });
  }

  onCancel = () => this.setState({ selectionVisible: false })

  onOk = () => {
    const { columns, columnCheckedValues } = this.state;
    columns.forEach((item, i) => {
      item.show = columnCheckedValues.indexOf(String(i)) > -1;
    });
    this.setState({ columns: [...columns], selectionVisible: false });
  }

  render() {
    const { toolbar, searchFormNode, showSearchForm, children } = this.props;
    const {
      columns, otherTableConfig, columnSelectOptions, showColumnSelection,
      columnCheckedValues, selectionVisible, components,
    } = this.state;

    const isShowSearchForm = (!!searchFormNode || children) && showSearchForm;

    const filterColumns = columns.filter(v => v.show);

    const columnSelectionCon = (<div className="tms-columns-selection__inner">
      <Checkbox.Group
        options={columnSelectOptions}
        value={columnCheckedValues}
        onChange={this.onColumnSelectChange}
      />
      <Divider style={{ marginTop: 8, marginBottom: 0 }} />
      <div className="tms-columns-selection__actions">
        <Button onClick={this.onCancel}>取消</Button>
        <Button type="primary" style={{ marginLeft: 8 }} onClick={this.onOk}>确定</Button>
      </div>
    </div>);

    return (
      <div className="tms-datatable">
        <div>
          {
            isShowSearchForm && (<Fragment>
              <div className="tms-datatable-form">{searchFormNode || children}</div>
              <Divider style={{ margin: 0 }} dashed />
            </Fragment>)
          }
        </div>
        {!!toolbar && <Row className="tms-datatable-tools" type="flex" justify="space-between">{toolbar}</Row>}

        <div className="tms-datatable-table">
          {
            showColumnSelection && <div className="tms-columns-selection">
              <Popover
                content={columnSelectionCon}
                title="选择显示字段"
                trigger="click"
                placement="bottomRight"
                visible={selectionVisible}
                onVisibleChange={this.onVisibleChange}
              >
                <Tooltip placement="top" title="设置显示字段">
                  <a><Icon type="setting" /></a>
                </Tooltip>
              </Popover>
            </div>
          }
          <Table {...otherTableConfig} columns={filterColumns} components={components}></Table>
        </div>
      </div>
    );
  }
}
