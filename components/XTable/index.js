import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Table, Divider, Checkbox, Popover, Button, Icon, Tooltip } from 'antd';
import ResizeableTableTitle from './ResizeableTableTitle.js';
import memoize from 'memoize-one';
import deepEqual from 'lodash/isEqual';
import './index.less';

const noop = () => {};
export default class XTable extends PureComponent {
  static propTypes = {
    toolbar: PropTypes.any,
    showSearchForm: PropTypes.bool,
    columnResizable: PropTypes.bool,
    showColumnSelection: PropTypes.bool,

    total: PropTypes.number,
    current: PropTypes.number,
    pageSize: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps ={
    toolbar: null,
    showSearchForm: false,
    columnResizable: false,
    showColumnSelection: false,
    total: 0,
    current: 0,
    pageSize: 30,
    onChange: noop,
  }

  constructor(props) {
    super(props);

    const { columnResizable, showColumnSelection, columns } = props;

    let realColumns = columns.map(v => {
      return { ...v, show: !v.hidden };
    });
    let components = null;
    if (columnResizable) {
      components = { header: { cell: ResizeableTableTitle }};
      realColumns = realColumns.map((col, index) => ({
        ...col,
        onHeaderCell: col.resizable === false ? noop : column => {
          return column.width ? { width: column.width, onResize: this.onColumnResize(index) } : {};
        }
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
      columnSelectOptions: columnSelection,
      columnCheckedValues,
      selectionVisible: false,
      components,
      showColumnSelection,
      originColumns: [],
    };
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

  filterShowColumnItems = memoize(list => list.filter(v => v.show), deepEqual)

  render() {
    const { toolbar, showSearchForm, total, current, columns, pageSize, onPageChange, children, pagination = {}, ...others } = this.props;
    const {
      columnSelectOptions, showColumnSelection, columns: columnState,
      columnCheckedValues, selectionVisible, components,
    } = this.state;

    const isShowSearchForm = children && showSearchForm;
    const filterColumns = this.filterShowColumnItems(columnState);

    const otherTableConfig = {
      pagination: { ...pagination, total, current, pageSize, onChange: onPageChange, onShowSizeChange: onPageChange }
    };

    if (components) otherTableConfig.components = components;

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
              <div className="tms-datatable-form">{children}</div>
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
          <Table {...otherTableConfig} columns={filterColumns} {...others} ></Table>
        </div>
      </div>
    );
  }
}
