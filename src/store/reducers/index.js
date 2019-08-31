import * as constant from '../constant';

const defaultState = {
    lists: ['reactjs', 'vuejs'],
    selected: 0,
    showList: false
}

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case constant.TOGGLE_LIST:
            return Object.assign({}, state, {showList: !state.showList});
        case constant.SELECT_ITEM:
            return Object.assign({}, state, {selected: action.payload, showList: false});
        default:
            return state;
    }
}