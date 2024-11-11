import React from 'react';
import './homecard.css';  // Import the CSS file

const HomeCard = ({title,description,data1,data2,data3}) => {
  return (
    <div class="container">
    <div class="box">
      <span class="title">{title}</span>
      <div>
        <strong>{description}</strong>
        <p>{data1}</p>
        <p>{data2}</p>
        <p>{data3}</p>
       
      </div>
    </div>
  </div>
  );
};

export default HomeCard;
