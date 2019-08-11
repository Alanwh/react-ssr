import React from 'react';

class Couter2 extends React.Component {
    oddAdd = () => {
        this.props.times%2 && this.props.add()
    }

    asyncAdd = () => {
        setTimeout(this.props.add, 1000)
    }

    render() {
        const {add, subtract} = this.props;
        return(
            <div className="couter">
                <div>
                    clickTimes: {this.props.times}
                </div>
                <div className="btns-container">
                    <button onClick={add}>+</button>
                    <button onClick={subtract}>-</button>
                    <button onClick={this.oddAdd}>odd</button>
                    <button onClick={this.asyncAdd}>async</button>
                </div>
            </div>
        );
    }
}

export default Couter2;