/**
 * Created by xiaojianli on 2017/2/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Router,Route,hashHistory} from 'react-router';


import PCFooter from './components/pc/pc_footer';
import PCIndex from './components/pc/pc_index';
import PCNewsDetails from './components/pc/pc_news_details';
import MobileFooter from './components/mobile/mobile_footer';
import MobileIndex from './components/mobile/mobile_index';
import MobileNewsDetails from './components/mobile/mobile_news_details';
import PCUsercenter from './components/pc/pc_usercenter';
import MobileUsercenter from './components/mobile/mobile_usercenter';
import 'antd/dist/antd.css';
import '../css/pc.css';
import '../css/mobile.css';


export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path='/' component={PCIndex} />
                        <Route path='/details/:uniquekey' component={PCNewsDetails}/>
                        <Route path='/usercenter' component={PCUsercenter}/>
                    </Router>
                    <PCFooter/>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path='/' component={MobileIndex} />
                        <Route path='/details/:uniquekey' component={MobileNewsDetails}/>
                        <Route path='/usercenter' component={MobileUsercenter} />
                    </Router>
                    <MobileFooter/>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(<Root/>,document.getElementById('mainContainer'));