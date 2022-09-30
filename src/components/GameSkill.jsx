import React, { useState, useEffect } from "react";

const GameSkill = ({ action, gameSkill, skillList }) => {
  console.log(gameSkill);
  return (
    <div>
      <div className='d-flex gap-3'>
        <h4>{action}:</h4>
        <h4 className=''>{skillList[gameSkill].skill}</h4>
      </div>
      <p>{skillList[gameSkill].description}</p>
    </div>
  );
};

export default GameSkill;
