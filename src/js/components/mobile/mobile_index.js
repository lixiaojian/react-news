/**
 * Created by xiaojianli on 2017/2/23.
 */
import React from 'react';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import MobileHeader from './mobile_header';
import MobileNewsBlock from './mobile_news_block'

export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                <Tabs className="m_header_nav">
                    <TabPane tab="头条" key="top">
                        <Carousel>
                            <div><img src="./src/images/carousel_1.jpg" /></div>
                            <div><img src="./src/images/carousel_2.jpg" /></div>
                            <div><img src="./src/images/carousel_3.jpg" /></div>
                            <div><img src="./src/images/carousel_4.jpg" /></div>
                        </Carousel>
                        <MobileNewsBlock type="top" count="20"/>
                    </TabPane>
                    <TabPane tab="社会" key="shehui">
                        <MobileNewsBlock type="shehui" count="20"/>
                    </TabPane>
                    <TabPane tab="国际" key="guoji">
                        <MobileNewsBlock type="guoji" count="20"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="yule">
                        <MobileNewsBlock type="yule" count="20"/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
