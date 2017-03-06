/**
 * Created by xiaojianli on 2017/2/23.
 */
import React from 'react';
import {Link} from 'react-router';
import {Icon,Menu,Dropdown} from 'antd';
const MenuItem = Menu.Item;
import LoginModal from '../common/login_modal';

export default class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current : 'top',
            action:'login',
            hasLogined:false,
            modalVisible:false,
            userNickName:'',
            userId:0
        };
        this.setMyState = this.setMyState.bind(this);
        this.logOut = this.logOut.bind(this);
    };
    setMyState(state){
        this.setState(state);
    };
    logOut(){
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userId');
        this.setState({hasLogined:false})
    };
    componentWillMount(){
        if(sessionStorage.userId){
            this.setState({
                hasLogined:true,
                userNickName:sessionStorage.userName,
                userId:sessionStorage.userId
            });
        }
    };
    render(){
        const menu = (
            <Menu>
                <MenuItem key="0">
                    <Link to="usercenter">个人中心</Link>
                </MenuItem>
                <Menu.Divider />
                <MenuItem key="3">
                    <a href="javascript:;" onClick={this.logOut}>退出登录</a>
                </MenuItem>
            </Menu>
        );
        const userShow = this.state.hasLogined?
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <Icon type="user" />
            </Dropdown>
            :
            <Icon type="setting" onClick={() =>this.setState({modalVisible:true})}/>;
        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                    <LoginModal {...this.state} setParentState={this.setMyState}/>
                </header>
            </div>
        );
    }
};