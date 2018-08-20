---
order: 1
title:
  zh-CN: 上传文件
  en-US: Basic
---

## zh-CN

上传文件之前使用beforeUpload函数判断文件的大小

## en-US

Upload Files.
````jsx
import { XUpload } from 'mhc-antd-admin'
import React ,{Component} from 'react'
import {Button} from 'antd'
import '../index.less'
class UploadList extends Component{
    constructor(props){
        super(props)
        this.state={
            fileList: [],
            multiple:true,
            maxFileSize: this.props.maxFileSize ? this.props.maxFileSize : 2,
        }
    }
    handleChange = ({fileList})=>{
        this.setState({
            fileList
        })
    }
    beforeUpload = (fileList) => {
        const maxFileSize = this.state.maxFileSize;
        if (maxFileSize) {
            const isLtMax = fileList.size / 1024 / 1024 < maxFileSize;
            console.log(isLtMax)
            if (!isLtMax) {
                message.error(`文件大小超过${maxFileSize}M限制`);
            }
            return isLtMax;
        }
   };
    render(){
         const uploadButton = (
            <div>
                 <Button type="primary" ghost>点击上传</Button>
            </div>
        );
        return(
            <XUpload
                 action="http://golf.maihaoche.com/uploadImage"
                 fileList={this.state.fileList}
                 onChange={this.handleChange}
                 multiple={this.state.multiple} 
                 beforeUpload={this.beforeUpload}
            >
            {this.state.fileList.length >= 9 ? null : uploadButton}
            </XUpload>
           
        )
    }
}
ReactDOM.render(
  <UploadList/>,
  mountNode
);
````