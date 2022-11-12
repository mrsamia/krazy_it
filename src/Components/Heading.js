import React from 'react';

function Heading(props) {
    return (
        <div>
            <h2 className={props.className}>{props.name}</h2>
        </div>
    );
}

export default Heading;