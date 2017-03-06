/**
 * Created by xiaojianli on 2017/2/27.
 */
import React from 'react';
import {Card, Tabs} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const TabPane = Tabs.TabPane;


export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: []
        };
    };

    componentWillMount() {
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.props.count, {method: 'GET'})
            .then(resp => resp.json())
            .then(datas => this.setState({news: datas}));
    };

    render() {
        let cardProps = {};
        const {news} = this.state;
        const newsList = news.length > 0 ?
            news.map((newsItem, index) => {
                if (this.props.showType === 'img') {
                    switch (this.props.type){
                        case 'top':
                            cardProps.title='头条新闻';
                            break;
                        case 'shehui':
                            cardProps.title='社会新闻';
                            break;
                        case 'guonei':
                            cardProps.title='国内新闻';
                            break;
                        case 'guoji':
                            cardProps.title='国际新闻';
                            break;
                        case 'yule':
                            cardProps.title='娱乐新闻';
                            break;
                    };
                    return(
                        <li style={{width:this.props.imgWidth,float:'left',padding:'4px'}} key={index}>
                            <Link title={newsItem.title} to={`details/${newsItem.uniquekey}`} target="_blank">
                                <img style={{width:"100%"}} src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                                <div>
                                    <h3 className="img-news-list-title">{newsItem.title}</h3>
                                    <p className="new-from">{newsItem.author_name}</p>
                                </div>
                            </Link>
                        </li>);
                } else {
                    return (
                        <li key={index} className="news-title">
                            <Link title={newsItem.title} to={`details/${newsItem.uniquekey}`}
                                  target="_blank">{newsItem.title}</Link>
                        </li>);
                }
            })
            :
            <li>没有加载到任何数据</li>;
        return (
            <Card {...cardProps}>
                <ul className="clearfix">
                    {newsList}
                </ul>
            </Card>
        )
    };
}
