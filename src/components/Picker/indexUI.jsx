import React from 'react';
import './index.css';

export default function Picker (props) {
    const {lists, selected, showList, selectItem, toggleLists} = props;
    return(
        <React.Fragment>
            <div className="default-select" onClick={toggleLists}>
                <div>{lists[selected]}</div>
            </div>
            <div className="picker-lists" style={{'display': showList?'block':'none'}}>
                {lists.map((item, index) => <div key={index} onClick={() => selectItem(index)}>{item}</div>)}
            </div>
        </React.Fragment>
    )
}