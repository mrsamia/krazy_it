import React from 'react';

function FilledButton(props) {
    return (
        <div>
             <button className="contained_btn">{props.name}</button>
        </div>
    );
}

export default FilledButton;