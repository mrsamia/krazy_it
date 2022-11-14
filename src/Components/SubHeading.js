import React from 'react';

function SubHeading(props) {
    return (
        <div className='d-flex justify-content-center'>
            <h3 className={props.className}>{props.name}</h3>
        </div>
    );
}

export default SubHeading;