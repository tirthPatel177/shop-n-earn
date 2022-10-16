import React from "react";

const Tier = (props) => {
  return (
    <div>
      <div>Tier Name : {props.tierName}</div>
      <div> Tier Description : {props.tierDescription}</div>
      <div> Tier Reward : {props.tierReward}</div> 
    </div>
  );
};

export default Tier;
