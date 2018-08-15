import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { DatePicker, message } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.less'
const { MonthPicker, RangePicker,WeekPicker} = DatePicker;
class DateTimePicker extends Component {
  static propTypes = {
    hidden: PropTypes.bool, // 父容器是否隐藏
    type: PropTypes.string.isRequired, 
    required: PropTypes.bool,
    title: PropTypes.any, 
    placeholder: PropTypes.any,
    className: PropTypes.string, // 绑定 父容器
  }
  static defaultProps = {
    hidden:false,
    required: null,
    title: null,
    type:"DatePicker",
    placeholder:"请选择"
  }
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }
  Picker=(type)=>{
    const {
      title,hidden,required,...props
    } = this.props
    return (
      <div>
        <label className='labelTitle'>{title}<span hidden={!required} className="required"> *</span></label>
        {
          type=="DatePicker"&&<DatePicker {...props}/>
        }
        {
          type=="MonthPicker"&&<MonthPicker {...props}/>
        }
        {
          type=="RangePicker"&&<RangePicker {...props}/>
        }
        {
          type=="WeekPicker"&&<WeekPicker {...props}/>
        }
      </div>
    )
  }
  render() {
    const { type } = this.props
    return this.Picker(type)
  }
}
export default DateTimePicker