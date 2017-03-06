/**
 * Created by xiaojianli on 2017/2/28.
 */
import React from 'react';
import {Row,Col,notification,Icon} from 'antd';
import MobileHeader from './mobile_header';
import Comments from '../common/comments';

export default class MobileNewsDetails extends React.Component{
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
              console.log(data);
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
                <MobileHeader/>
                {sessionStorage.userId?<div><Icon className="star-icon" type="star" onClick={this.startNew}/></div>:''}
                <div className="m-article-container" dangerouslySetInnerHTML={{__html:this.state.newsItem.pagecontent}}></div>
                <Comments uniqueKey={this.props.params.uniquekey}/>
            </div>
        );
    }
}