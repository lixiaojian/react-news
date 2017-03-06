/**
 * Created by xiaojianli on 2017/2/28.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class MobileNewsBlock extends React.Component {
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
        const {news} = this.state;
        const newsList = news.length > 0 ?
            news.map((newsItem, index) =>
                <li key={index} className="m_news_item_box">
                    <Link title={newsItem.title} to={`details/${newsItem.uniquekey}`}>
                        <Row>
                            <Col span="8">
                                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                            </Col>
                            <Col span="16">
                                <h3 className="m_news_title">{newsItem.title}</h3>
                                <p className="new-desc">
                                    <span className="news-type">{newsItem.realtype}</span>
                                    <span className="news-date">{newsItem.date}</span>
                                </p>
                            </Col>
                        </Row>
                    </Link>
                </li>
            )
            :
            <li>没有加载到任何数据</li>;
        return (
            <ul className="m_news_list">
                {newsList}
            </ul>
        )
    };
}