import Picker from './indexUI';
import {connect} from 'react-redux';
import {constant} from '../../store';

const mapStateToProps = (state) => {
    return{...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLists() {
            dispatch({
                type: constant.TOGGLE_LIST
            })
        },
        selectItem: (index) => {
            dispatch(({
                type: constant.SELECT_ITEM,
                payload: index
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker)
