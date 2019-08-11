import {createStore} from 'redux';
import reducer from './reducer';
import * as constant from './constant';

const store = createStore(reducer);

export {
    store,
    constant
};