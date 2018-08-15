---
order: 0
title:
  zh-CN: 图片列表
  en-US: ImageLists
---

## zh-CN

用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。


````jsx
import { XUpload } from 'mhc-antd-admin'
import React ,{Component} from 'react'
import {Icon} from 'antd'
import '../index.less'
class UploadList extends Component{
    constructor(props){
        super(props)
        this.state={
            previewVisible: false,
            previewImage: '',
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
    handlePreview = (file) => {
        this.setState({
           previewImage: file.url || file.thumbUrl,
           previewVisible: true,
        });
    }
    handleCancel = () => this.setState({ previewVisible: false })
    render(){
         const uploadButton = (
            <div>
                <Icon type="upload"/>点击上传
            </div>
        );
        return(
            <XUpload
                 action="http://golf.maihaoche.com/uploadImage"
                 listType="picture-card"
                 fileList={this.state.fileList}
                 onChange={this.handleChange}
                 onPreview={this.handlePreview}
                 multiple={this.state.multiple} 
                 beforeUpload={this.beforeUpload}
                 previewVisible={this.state.previewVisible}
                 previewImage={this.state.previewImage}
                 onCancel={this.handleCancel}
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