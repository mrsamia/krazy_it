import React from 'react';

function Card(props) {
  return (
    <div>
      <div className="">
        <img src={require("../images/img-3.png")} className="card_img" alt="..." />
        <div className="card_body text-center">
          <h5 className="card_title text-center">{props.title}</h5>
          <p className="card_text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;