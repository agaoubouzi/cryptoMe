import React from 'react';


const CustomTooltip = ({ active, payload, label }) => {

  if (active) {
    return (
      <div className="tooltip-content">
        <div className="timeInfo">
          <span><i className="fa-solid fa-calendar"></i>{label}</span>
          <span><i className="fa-solid fa-clock"></i>{payload[0].payload.time}</span>
        </div>
        <div className="priceInfo">
          <span className="price"> <i className="fa-solid fa-sack-dollar"></i><strong>{payload[0].value.toFixed(2)}</strong> USD</span>
        </div>
      </div >
    );
  }
  return null;
}

export default CustomTooltip;