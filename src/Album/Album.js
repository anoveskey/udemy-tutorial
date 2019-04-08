import React from 'react';
import './Album.css';

const Album = (props) => {
    return (
        <div className="album">
            <h4 onClick={props.click}>{props.title}</h4>
            <h5>by {props.artist}</h5>
            <input type="text" onChange={props.changed} value={props.title}/>
        </div>
    );
}

export default Album;
