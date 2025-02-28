/**
 * Created by xiaojianli on 2017/2/23.
 */
import React from 'react';
import { Row, Col } from 'antd';

export default class PCFooter extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}/>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2016 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}/>
                </Row>
            </footer>
        )
    }
}