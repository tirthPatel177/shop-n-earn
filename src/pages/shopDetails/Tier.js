import React from "react";

const Tier = (props) => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl">Hello</h1>
      </div>
      <div>Tier Name : {props.tierName}</div>
      <div> Tier Description : {props.tierDescription}</div>
      <div> Tier Reward : {props.tierReward}</div> 
    </div>
  );
};

export default Tier;
