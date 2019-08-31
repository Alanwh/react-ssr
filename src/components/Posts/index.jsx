import React from 'react';
import './index.css';

class Posts extends React.Component{

    state = {
        list: []
    }

    componentDidMount() {
        fetch('/api/restapi/soa2/14422/displayWindow', {
            method: 'POST',
            body: JSON.stringify({startCity: 59, siteID: 1, version: "B", catgoryID: 2, tabID: 100041})
        }).then((res)=>{
            if(res.ok) {
                return res.json();
            }
        }).then((data)=>{
            const list = data.displayWindowModels[0].tabList.filter(tab => tab.tabID!== 0);
            this.setState({
                list: list
            })
        }).catch((e)=>console.log("e is" , e))
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