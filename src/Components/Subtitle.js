import React from 'react';

function Subtitle(props) {
    return (
        <div>
            <p className={props.className}>{props.content}</p>
        </div>
    );
}

export default Subtitle;