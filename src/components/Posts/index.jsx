import React from 'react';
import {requestDest} from '../../service';
import fetchJsonp from 'fetch-jsonp';
import MyPromise from '../../common/utils/myPromise'
import './index.css';

class Posts extends React.Component{

    state = {
        list: []
    }

    componentDidMount() {
        requestDest().then((data) => {
            this.setState({
                list: data.displayWindowModels[0].tabList
            })
        })

        fetchJsonp('http://localhost:8888/jsonp', {jsonpCallback: 'custom_callback'})
            .then((res)=>res.json())
            .then((json)=>console.log(json))
            .catch((ex) => console.log('parsing failed', ex))

        new MyPromise((resolve, reject)=>{
            console.log('开始执行excutor~~~~~~~');
            setTimeout(() => {
               console.log('结束执行excutor~~~~~~~');
               resolve('ok~');
            }, 1000);
        }).then((data)=>{
            console.log('执行then方法');
            console.log(data)
        })
    }

    render() {
        const {list} = this.state;
        return(
                <div className="posts">
                    {
                        (list.length && list.map((item) => <div key={item.name}>{item.name}</div>)) || 'loading...'
                    }
                </div>
        )
    }
}

export default Posts