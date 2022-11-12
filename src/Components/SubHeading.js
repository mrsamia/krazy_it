import React from 'react';

function SubHeading(props) {
    return (
        <div>
            <h3 className={props.className}>{props.name}</h3>
        </div>
    );
}

export default SubHeading;