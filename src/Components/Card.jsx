import React from 'react';
import '../Pages/main/Main.css';

const Card = ({ val }) => {

  return (
    <div className="cardContainer" id={val.id}>
      <h2>{val.heading}</h2>
      <p>{val.review}</p>
      <img src={val.src} alt={val.name} width={'100px'} height={'100px'} />
      <h3>{val.name}</h3>
      <p>{val.location}</p>
    </div>
  )
}

export default Card
