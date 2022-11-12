import React from 'react';

function Card(props) {
    return (
      <div className=''>
          <div className="card col-4">
              <img src={require("../images/img-3.png")} className="card_img" alt="..."/>
        <div className="card_body">
          <h5 className="card_title">{props.title}</h5>
          <p className="card_text">{props.text}</p>
        </div>
      </div>
      </div>
    );
}

export default Card;