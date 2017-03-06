/**
 * Created by xiaojianli on 2017/3/3.
 */
import React from 'react';
import { Card } from 'antd';

export default class MyStore extends React.Component {
    constructor() {
        super();
        this.state = {
            usercollection: []
        };
    };

    componentDidMount() {
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + sessionStorage.userId, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                this.setState({usercollection: json});
            });
    };

    render() {
        const {usercollection} = this.state;
        const usercollectionList = usercollection.length ?
            usercollection.map((uc,index)=>(
                <Card style={{marginBottom:'5px'}} key={index} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
                    <p>{uc.Title}</p>
                </Card>
            ))
            :
            '您还没有收藏任何的新闻，快去收藏一些新闻吧。';
        return <div>{usercollectionList}</div>;
    }
}
