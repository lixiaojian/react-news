/**
 * Created by xiaojianli on 2017/3/2.
 */
import React from 'react';
import { Tabs,Row,Col } from 'antd';
const TabPane = Tabs.TabPane;
import PCHeader from './pc_header';
import HeadImgUpload from '../common/headimg_upload';
import MyStore from '../common/mystore';
import MyComments from '../common/mycomments';

export default class PCUsercenter extends React.Component{

    render(){
        return(
            <div>
                <PCHeader />
                <Row>
                    <Col span="2"></Col>
                    <Col span="20">
                        <Tabs>
                            <TabPane key="1" tab="我的收藏列表">
                                <MyStore />
                            </TabPane>
                            <TabPane key="2" tab="我的评论列表">
                                <MyComments />
                            </TabPane>
                            <TabPane key="3" tab="头像设置">
                                <HeadImgUpload />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span="2"></Col>
                </Row>
            </div>
        )
    }
}