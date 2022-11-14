import React from 'react';
import { Link } from 'react-router-dom';

function PostCardItems(props) {
    return (
        <div>
            <div className="card cardBorder">
                <img src={props.img} className="card_img" />
                <div className="team_card_body">
                    <div className='padTB_30 '>
                        <h5 className="font_25">{props.title}</h5>
                    </div>
                    <p className="font_16 padRL_30">{props.date}</p>
                    <div className='padTB_30'>
                        <p className="font_16 text-black">{props.content}</p>
                    </div>
                    <div style={{ paddingBottom: "32px"}}>
                       <Link to="#/"style={{textDecoration:"none"}}> <h5 className='font_16 padRL_30' >READ MORE +</h5></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PostCardItems;