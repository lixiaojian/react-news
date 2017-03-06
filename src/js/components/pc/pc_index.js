/**
 * Created by xiaojianli on 2017/2/23.
 */
import React from 'react';
import PCHeader from './pc_header';
import PCContainer from './pc_container';

export default class PCIndex extends React.Component{
    render(){
        return (
            <div>
                <PCHeader/>
                <PCContainer/>
            </div>
        )
    }
}