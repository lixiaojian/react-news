/**
 * Created by xiaojianli on 2017/3/1.
 */
import  React from 'react';
import {Form,Input,Button,Card} from 'antd';
const FormItem = Form.Item;

class Commonts extends React.Component{
    constructor(){
        super();
        this.state = {
            comments : []
        }
        this.submitHandle = this.submitHandle.bind(this);
    };
    componentDidMount(){
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey='+this.props.uniqueKey,{method:'GET'})
            .then(resp => resp.json())
            .then(data => this.setState({comments:data}))
    };
    submitHandle(e){
        e.preventDefault();
        const formData = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + sessionStorage.userId + "&uniquekey=" + this.props.uniqueKey + "&commnet=" + formData.comment, {method:'GET'})
            .then(response => response.json())
            .then(json => {
                this.componentDidMount();
            })
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length >0 ?
            comments.map((comment,index) =>
                    <Card style={{marginBottom:'8px'}} key={index} title={comment.UserName} extra={< a href = "#" > 发布于 {comment.datetime} </a>}>
                        <p>{comment.Comments}</p>
                    </Card>
            )
            :
            <div className="no-comment">该文章暂无评论</div>;
        const commentForm = sessionStorage.userId?
            <Form inline onSubmit={this.submitHandle}>
                <FormItem className='comment-input' label='' >
                    {getFieldDecorator('comment')(
                        <Input size="large" addonAfter={<Button type="primary" htmlType='submit'>提交评论</Button>} placeholder="您对这篇文章有什么看法" />
                    )}
                </FormItem>
            </Form>
            :
            <div style={{padding:'10px',color:'#999'}}>您登录后才可以发表评论</div>;
            return(
                <div className="comment">
                    <h3>评论列表</h3>
                    {commentList}
                    {commentForm}
                </div>
            )
    };
}

export default Commonts = Form.create({})(Commonts);