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
import { Fragment } from 'react';
import { Button, Input, Divider } from 'antd';
import { XTable, XRadioGroup } from 'mhc-antd-admin';
import axios from 'axios';

const { Search } = Input;

const STATES = [
  { value: '全部', key: '' },
  { value: '待处理', key: '1' },
  { value: '执行中', key: '2' },
  { value: '已完成', key: '3' },
];

const columns = [
  { title: '英文姓名', width: 80, dataIndex: 'name', fixed: 'left', resizable: false },
  { title: '颜色', width: 100, dataIndex: 'color' },
  { title: '英文标题', width: 110, dataIndex: 'title' },
  { title: '链接', width: 90, dataIndex: 'url' },
  { title: '邮箱', width: 100, dataIndex: 'email' },
  { title: '时间', width: 150, dataIndex: 'date' },
  { title: '汉字', width: 200, dataIndex: 'ctitle' },
  { title: '汉字姓名', width: 200, dataIndex: 'canme' },
  { title: '地址', width: 200, dataIndex: 'cadd' },
  { title: '手机号', width: 200, dataIndex: 'phone' },
  {
    title: '操作',
    fixed: 'right',
    width: 160,
    resizable: false,
    primay: true,
    render: () => (
      <Fragment>
        <a>修改</a>
        <Divider type="vertical" />
        <a>删除</a>
      </Fragment>
    ),
  },
];

class App extends React.Component {
  state = {
    currState: '',
    total: 0,
    current: 1,
    pageSize: 10,
    listLoading: false,
    dataList: [],
  }

  componentDidMount() {
    this.getList();
  }

  handleStatusChange = e => this.setState({ currState: e.target.value, current: 1 }, this.getList);

  onPageChange = (current, pageSize) => this.setState({ current, pageSize }, this.getList)

  getList = () => {
    const dataUrl = 'https://www.easy-mock.com/mock/5aec48722880ac6e857945db/example_1503654744662_copy/users';

    axios
      .get(dataUrl)
      .then(res => res.data)
      .then((res) => {
        const { list, total } = res;
        this.setState({ dataList: list, total, listLoading: false });
      })
      .catch(() => {
        this.setState({ listLoading: false });
      });
  }

  render() {
    const toolbar = (
      <Fragment>
        <div>
          <XRadioGroup
            style={{ marginRight: 8 }}
            current={this.state.currState}
            onChange={this.handleStatusChange}
            data={STATES}
            hasAll
          />
          <Search
            placeholder="请输入单号"
            onSearch={this.getList}
            style={{ width: 200 }}
          />
        </div>
        <div><Button type="primary">创建新用户</Button></div>
      </Fragment>
    );

    const { dataList, listLoading, total, current, pageSize } = this.state;

    const options = {
      size: 'middle',
      dataSource: dataList,
      columns,
      loading: listLoading,
      total,
      current,
      pageSize,
      onChange: this.onPageChange,
      scroll: { x: 1700 },
    };

    return (
      <XTable
        toolbar={toolbar}
        columnResizable
        showColumnSelection
        {...options}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
