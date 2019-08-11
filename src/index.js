import React from 'react';
import ReactDOM from 'react-dom';
import './couter/index.css';

// import Couter1 from './couter/couter1';
// ReactDOM.render(
//   <Couter1 />,
//   document.getElementById('root')
// );

// import Couter2 from './couter/couter2';
// import {store, constant} from './couter/store';
// const add = () => {
//   store.dispatch({
//       type: constant.INCREMENT
//   })
// }
// const subtract = () => {
//   store.dispatch({
//       type: constant.DECREMENT
//   })
// }
// const render = () => ReactDOM.render(
//   <Couter2 times={store.getState()} add={add} subtract={subtract} />,
//   document.getElementById('root')
// );
// render();
// store.subscribe(render);

import Couter3 from './couter/couter3'
import {Provider} from 'react-redux';
import {store} from './couter/store';
ReactDOM.render(
  <Provider store={store} >
    <Couter3 />
  </Provider>,
  document.getElementById('root')
);
