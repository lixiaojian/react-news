/**
 * Created by xiaojianli on 2017/3/3.
 */
import React from 'react';

import { Upload, Icon, Modal } from 'antd';

export default class HeadImgUpload extends React.Component{
    constructor(){
      super();
      this.state={
          handlePreview:'images/logo.png',
          previewVisible:false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    };
    handleChange(fileObj){
        this.setState({
            previewVisible:true,
            handlePreview:fileObj.file.thumbUrl
        })
    };
    handleCancel(){
        this.setState({
            previewVisible:false
        })
    };
    render(){
        const  uploadSetting = {
            action:'/upload.do',
            listType:'picture-card',
            onPreview:this.handlePreview,
            onChange:this.handleChange
        };
        return(
            <div className="clearfix">
                <Upload {...uploadSetting}>
                    <Icon type="plus" />
                    <div className="ant-upload-text">上传</div>
                </Upload>
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={this.state.handlePreview} />
                </Modal>
            </div>
        )
    }
}
