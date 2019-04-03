import React from 'react';

const Album = (props) => {
    return (
        <div className="album" onClick={props.click}>
            <h4>{props.title}</h4>
            <h5>by {props.artist}</h5>
            <input type="text" onChange={props.changed} value={props.title}/>
        </div>
    );
}

export default Album;
