/**
 * Created by xiaojianli on 2017/3/2.
 */
import React from 'react';
import { Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import MobileHeader from './mobile_header';
import HeadImgUpload from '../common/headimg_upload';
import MyStore from '../common/mystore';
import MyComments from '../common/mycomments';

export default class MobileUsercenter extends React.Component{

    render(){
        return(
            <div>
                <MobileHeader />
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
            </div>
        )
    }
}