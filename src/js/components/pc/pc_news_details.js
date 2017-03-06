/**
 * Created by xiaojianli on 2017/2/28.
 */
import React from 'react';
import {Row,Col,notification,Icon} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCHeader from './pc_header';
import Comments from '../common/comments';

export default class PCNewsDetails extends React.Component{
    constructor(){
      super();
      this.state = {
          newsItem:{}
      }
      this.startNew = this.startNew.bind(this);
    };
    componentDidMount(){
      fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.params.uniquekey,{method:'GET'})
          .then(resp => resp.json())
          .then(data => {
              this.setState({newsItem:data});
              document.title = data.title + ' - React News | React 驱动的新闻平台';
          })
    };
    startNew(){
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + sessionStorage.userId + "&uniquekey=" + this.props.params.uniquekey, {method:'GET'})
            .then(response => response.json())
            .then(json => {
                //收藏成功以后进行一下全局的提醒
                notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
            });
    };

    render(){
        return (
            <div>
                <PCHeader/>
                <Row>
                    <Col span="2"></Col>
                    <Col span="14">
                        {sessionStorage.userId?<div><Icon className="star-icon" type="star" onClick={this.startNew}/></div>:''}
                        <div className="article-container" dangerouslySetInnerHTML={{__html:this.state.newsItem.pagecontent}}></div>
                        <Comments uniqueKey={this.props.params.uniquekey}/>
                    </Col>
                    <Col span="6">
                        <PCNewsBlock type="yule" count="20" showType="img" imgWidth="50%"/>
                    </Col>
                    <Col span="2"></Col>
                </Row>
            </div>
        )
    }
}
