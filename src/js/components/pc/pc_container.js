/**
 * Created by xiaojianli on 2017/2/27.
 */
import React from 'react';
import {Row, Col,Carousel,Tabs,Card} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCProduct from './pc_product';
const TabPane = Tabs.TabPane;

import carouselImg1 from '../../../images/carousel_1.jpg';
import carouselImg2 from '../../../images/carousel_2.jpg';
import carouselImg3 from '../../../images/carousel_3.jpg';
import carouselImg4 from '../../../images/carousel_4.jpg';

export default class PCContainer extends React.Component{
    render(){
        const carSet={
            autoplay:true
        };
        return (
            <Row className='container'>
                <Col span="2"></Col>
                <Col span="20">
                    <Row>
                        <Col span="7">
                            <div className="left_container">
                                <Carousel {...carSet}>
                                    <div><img src={carouselImg1} /></div>
                                    <div><img src={carouselImg2} /></div>
                                    <div><img src={carouselImg3} /></div>
                                    <div><img src={carouselImg4} /></div>
                                </Carousel>
                                <div className="img-news-list">
                                    <PCNewsBlock type="top" count="6" showType="img" imgWidth="33%"/>
                                </div>
                                <div className="img-news-list">
                                    <PCNewsBlock type="yule" count="6" showType="img" imgWidth="33%"/>
                                </div>
                            </div>
                        </Col>
                        <Col span="9">
                            <Tabs className="news-list">
                                <TabPane tab="头条新闻" key="top">
                                    <PCNewsBlock type="top" count="25" />
                                </TabPane>
                                <TabPane tab="社会新闻" key="shehui">
                                    <PCNewsBlock type="shehui" count="25" />
                                </TabPane>
                                <TabPane tab="国内新闻" key="guonei">
                                    <PCNewsBlock type="guonei" count="25" />
                                </TabPane>
                                <TabPane tab="国际新闻" key="guoji">
                                    <PCNewsBlock type="guoji" count="25" />
                                </TabPane>
                            </Tabs>
                        </Col>
                        <Col span="8">
                            <Tabs>
                                <TabPane tab="推荐产品" key="1">
                                    <Card>
                                        <PCProduct />
                                    </Card>
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'10px'}}>
                        <Col span="24">
                            <PCNewsBlock type="shehui" count="8" showType="img" imgWidth="12.5%"/>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'10px'}}>
                        <Col span="24">
                            <PCNewsBlock type="top" count="8" showType="img" imgWidth="12.5%"/>
                        </Col>
                    </Row>
                </Col>
                <Col span="2"></Col>
            </Row>
        )
    }
}