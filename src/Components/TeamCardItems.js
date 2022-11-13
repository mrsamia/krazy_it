import React from 'react';

function TeamCardItems(props) {
    return (
        <div>
        <div className="card">
          <img src={props.img} className="card_img" alt="..." />
          <div className="team_card_body">
            <h5 className="team_card_title">{props.name}</h5>
            <p className="team_card_text">{props.title}</p>
          </div>
        </div>
      </div>
    );
}

export default TeamCardItems;