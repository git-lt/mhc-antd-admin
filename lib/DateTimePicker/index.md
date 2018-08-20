---
category: Components
type: Data Display
subtitle: 日期控件
title: DateTimePicker
cols: 1
---


日期控件

## 何时使用

- 需要展示日期的页面


## 共同的 API
以下 API 为 DatePicker、MonthPicker、RangePicker, WeekPicker 共享的 API。
### DateTimePicker

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| type     | 日期格式(可以是DatePicker表示一般日期格式，MonthPicker表示月控件，RangePicker范围控件，WeekPicker星期控件)                                  |  string    | - |
| required | 是否必须                                  | bool | false |
| title    | 日期label提示                             | string  | - |
|allowClear|是否显示清除按钮|	boolean	| true
|autoFocus |自动获取焦点	|    boolean |false
|className	|选择器 |className	|string	|''
|dateRender	|自定义日期单元格的内容	|function(currentDate: moment, today: moment) => React.ReactNode|	-
|disabled	|禁用	|boolean	|false
|disabledDate |	不可选择的日期	|(currentDate: moment) => boolean	|无
|dropdownClassName	|额外的弹出日历 |className	string|	-
|getCalendarContainer	|定义浮层的容器，默认为 body 上新建 div	|function(trigger)	|无
|locale	|国际化配置	|object	|默认配置
|open	|控制弹层是否展开	|boolean	|-
|placeholder	|输入框提示文字	|string|RangePicker[]	|-
|popupStyle |	额外的弹出日历样式|	object	|{}
|size	|输入框大小，large 高度为 40px，small 为 24px，默认是 32px	|string	无
|style	|自定义输入框样式	|object	|{}
|onOpenChange	|弹出日历和关闭日历的回调	|function(status)	|无