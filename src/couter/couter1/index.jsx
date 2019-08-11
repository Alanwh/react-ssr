import React from 'react';

class Couter1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            times: 0
        };
    }

    add = () => {
        this.setState({
            times: this.state.times+1
        })
    }

    subtract = () => {
        this.setState({
            times: this.state.times-1
        })
    }

    oddAdd = () => {
        this.state.times%2 && this.setState({
            times: this.state.times+1
        })
    }

    asyncAdd = () => {
        setTimeout(this.add, 1000)
    }

    render() {
        return(
            <div className="couter">
                <div>
                    clickTimes: {this.state.times}
                </div>
                <div className="btns-container">
                    <button onClick={this.add}>+</button>
                    <button onClick={this.subtract}>-</button>
                    <button onClick={this.oddAdd}>odd</button>
                    <button onClick={this.asyncAdd}>async</button>
                </div>
            </div>
        );
    }
    
}

export default Couter1;