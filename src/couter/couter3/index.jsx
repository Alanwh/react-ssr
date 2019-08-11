import React from 'react';
import {connect} from 'react-redux';
import {constant} from './../store';

class Couter3 extends React.Component {
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        times: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add() {
            dispatch({
                type: constant.INCREMENT
            })
        },
        subtract() {
            dispatch({
                type: constant.DECREMENT 
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Couter3);