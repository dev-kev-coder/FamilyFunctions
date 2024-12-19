import React from 'react';

const GameCard = ({ FrontCardContent, BackCardContent }) => {
  return (
    <div className="card flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card-front-content">{FrontCardContent}</div>
        </div>

        <div className="flip-card-back">
          <div className="card-content">{BackCardContent}</div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
