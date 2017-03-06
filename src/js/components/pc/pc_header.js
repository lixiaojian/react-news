/**
 * Created by xiaojianli on 2017/2/23.
 */
import React from 'react';
import { Row, Col,Menu, Icon,Button} from 'antd';
import {Link} from 'react-router';
import LoginModal from '../common/login_modal';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

import logoimg from '../../../images/logo.png';

export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current : 'top',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userId:0
        };
        this.handleClick = this.handleClick.bind(this);
        this.setMyState = this.setMyState.bind(this);
        this.logOut = this.logOut.bind(this);
    };
    //点击顶部导航
    handleClick(e){
        this.setState({current:e.key});
        if(e.key === 'register'){
            this.setState({modalVisible:true});
        }
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
        const userShow = this.state.hasLogined?
            <MenuItem key="logout" className="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button> &nbsp;&nbsp;
                <Link title="个人中心" to={`usercenter`}>
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link> &nbsp;&nbsp;
                <Button htmlType="button" onClick={this.logOut}>退出</Button>
            </MenuItem>
            :
            <MenuItem key="register" className="register">
                <Icon type="appstore"/> 注册/登录
            </MenuItem>;
        return(
            <header style={{paddingBottom:'10px'}}>
                <Row>
                    <Col span="2"/>
                    <Col span="4">
                        <a href="" className="logo">
                            <img src={logoimg} alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span="16">
                        <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                            <MenuItem key="top"><Icon type="appstore" />头条</MenuItem>
                            <MenuItem key="shehui"><Icon type="appstore" />社会</MenuItem>
                            <MenuItem key="guolei"><Icon type="appstore" />国内</MenuItem>
                            <MenuItem key="guoji"><Icon type="appstore" />国际</MenuItem>
                            <MenuItem key="yule"><Icon type="appstore" />娱乐</MenuItem>
                            <MenuItem key="tiyu"><Icon type="appstore" />体育</MenuItem>
                            <MenuItem key="keji"><Icon type="appstore" />科技</MenuItem>
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span="2"/>
                </Row>
                <LoginModal {...this.state} setParentState={this.setMyState}/>
            </header>
        )
    }
}