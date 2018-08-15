import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Upload,Modal} from 'antd';

class XUpload extends Component{

    constructor(props){
        super(props)
    }
    static propTypes = {
        onChange: PropTypes.func,
        onCancel:PropTypes.func,
        multiple: PropTypes.bool,
        fileList: PropTypes.array,
        value: PropTypes.string,
        className:PropTypes.string, // 绑定 父容器
        maxLength:PropTypes.number
      }
    
      static defaultProps = {
        multiple: false,
        value: 'Upload',
        className: 'upload-button',
        fileList:[],
        action:"",
        onChange: () => null,
        onCancel:()=>null,
        server:false,
        maxLength:0
      }

    
    render(){
        const {fileList,value,onChange,onCancel,className,maxLength,previewImage,previewVisible,...props} = this.props;
        return(
            <div>
                <Upload
                fileList={fileList}
                onChange={onChange} 
                {...props}
                />
                <Modal visible={previewVisible} footer={null} onCancel={onCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
         </div>
        )
    }
}
export default XUpload