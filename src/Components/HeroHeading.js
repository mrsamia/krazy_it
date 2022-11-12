import React from 'react';

function HeroHeading(props) {
    return (
        <div>
            <h1 className='hero_header'>{props.name}</h1>
        </div>
    );
}

export default HeroHeading;