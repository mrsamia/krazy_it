import React from 'react';

function HeroHeading(props) {
    return (
        <div>
            <h1 className='header'>{props.name}</h1>
        </div>
    );
}

export default HeroHeading;