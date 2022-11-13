import React from 'react';


function FooterItems(props) {
    return (
        <ul className='footer-items-container'>
            {props.items.map(item => (
                <li><a href='#'>{item.name}</a></li>
            ))}
        </ul>
    );
}

export default FooterItems;