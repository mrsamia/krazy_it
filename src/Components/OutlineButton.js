import React from 'react';

function OutlineButton(props) {
    return (
        <div>
             <button className="outlined_btn">{props.name}</button>
        </div>
    );
}

export default OutlineButton;