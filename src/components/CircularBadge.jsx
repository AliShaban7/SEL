import React from 'react';
import './CircularBadge.css';

const CircularBadge = () => {
  return (
    <div className="circular-badge-container">
      <div className="circular-badge">
        <div className="rotating-text">
          <svg viewBox="0 0 200 200">
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%" textLength="472" lengthAdjust="spacing">
               • {" "} SAFLIK • KALİTE • GÜVEN • GELENEK • SEL İÇECEK  •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="central-circle">
          <img src="/gallery/SEL.png" alt="SEL" className="central-logo" />
        </div>
      </div>
    </div>
  );
};

export default CircularBadge;

