import React from 'react';
import {requestDest} from '../../service';
import fetchJsonp from 'fetch-jsonp';
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