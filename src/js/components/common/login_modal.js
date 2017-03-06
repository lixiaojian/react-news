/**
 * Created by xiaojianli on 2017/2/24.
 */
import React from 'react';
import {message,Tabs,Form,Input,Button,Modal} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class LoginModal extends React.Component{
    constructor(){
        super();
        this.state = {
            modalVisible:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTab = this.changeTab.bind(this);
    };
    changeTab(key){
        this.props.setParentState({action:key});
    };
    //提交表单
    handleSubmit(e){
        const that = this;
        e.preventDefault();
        let myFetchOption = {
            method:'get'
        };
        let formData = that.props.form.getFieldsValue();
        let type = that.props.action;
        let url = "http://newsapi.gugujiankong.com/Handler.ashx?action=" + type;
        if(type === 'register'){
            url += '&r_userName='+formData.r_userName+'&r_password='+formData.r_passWord+'&r_confirmPassword'+formData.r_rePassWord;
        }else{
            url += '&username='+formData.userName+'&password='+formData.passWord;
        }
        fetch(url,myFetchOption)
            .then(resp => resp.json())
            .then((data) => {
                if(type === 'login'){
                    that.props.setParentState({
                        hasLogined:true,
                        userNickName:data.NickUserName,
                        userId:data.UserId
                    });
                    sessionStorage.setItem('userName',data.NickUserName);
                    sessionStorage.setItem('userId',data.UserId);
                }
                message.success('请求成功');
            });
        this.props.setParentState({modalVisible:false});
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal title="用户中心" warpClassName="vertical-center-modal" footer={null} visible={this.props.modalVisible} onCancel={()=>this.props.setParentState({modalVisible:false})} onOk={()=>this.props.setParentState({modalVisible:false})} okText="关闭">
                <Tabs type="card" onChange={this.changeTab} activeKey={this.props.action}>
                    <TabPane tab="登录" key="login">
                        <Form vertical onSubmit={this.handleSubmit}>
                            <FormItem label="账户">
                                {getFieldDecorator('userName')(
                                    <Input placeholder="请输入您的账户"/>
                                )}
                            </FormItem>
                            <FormItem label="密码">
                                {getFieldDecorator('passWord')(
                                    <Input type="password" placeholder="请输入您的密码"/>
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="register">
                        <Form vertical onSubmit={this.handleSubmit}>
                            <FormItem label="账户">
                                {getFieldDecorator('r_userName')(
                                    <Input placeholder="请输入您的账户"/>
                                )}
                            </FormItem>
                            <FormItem label="密码">
                                {getFieldDecorator('r_passWord')(
                                    <Input type="password" placeholder="请输入您的密码"/>
                                )}
                            </FormItem>
                            <FormItem label="确认密码">
                                {getFieldDecorator('r_rePassWord')(
                                    <Input type="password" placeholder="请再次输入您的密码"/>
                                )}
                            </FormItem>

                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form>
                    </TabPane>
                </Tabs>
            </Modal>
        );
    }
};

export default LoginModal = Form.create({})(LoginModal);