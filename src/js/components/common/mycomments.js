/**
 * Created by xiaojianli on 2017/3/3.
 */
import React from 'react';
import { Card } from 'antd';

export default class MyComments extends React.Component{
    constructor() {
        super();
        this.state = {
            usercomments: []
        };
    };
    componentDidMount() {
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + sessionStorage.userId, {method:'GET'})
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercomments:json});
            });
    };
     render(){
         const {usercomments} = this.state;
         const usercommentsList = usercomments.length ?
             usercomments.map((comment,index)=>(
                 <Card style={{marginBottom:'5px'}} key={index} title={`于 ${comment.datetime} 评论了文章`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                     <p>{comment.Comments}</p>
                 </Card>
             ))
             :
             '您还没有发表过任何评论。';
         return(
             <div>{usercommentsList}</div>
         )
     }
}