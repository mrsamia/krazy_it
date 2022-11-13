import React from 'react';
import Icon from './Icon';

function TeamCardItems(props) {
    return (
        <div>
        <div className="card">
          <img src={props.img} className="card_img" alt="..." />
          <div className="team_card_body">
            <h5 className="team_card_title text-center">{props.name}</h5>
            <p className="font_25 text-center ">{props.title}</p>
          </div>
          <div className='d-flex justify-content-center'>
            <Icon img={require("../images/Instagram.png")}/>
            <Icon img={require("../images/Facebook.png")}/>
            <Icon img={require("../images/Twitter.png")}/>
            <Icon img={require("../images/WhatsApp.png")}/>
          </div>
        </div>
      </div>
    );
}

export default TeamCardItems;