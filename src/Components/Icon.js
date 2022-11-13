import React from 'react';

function Icon(props) {
    return (
        <div style={{padding:"10px"}}>
            <img className='social-icon' src={props.img}/>
        </div>
    );
}

export default Icon;