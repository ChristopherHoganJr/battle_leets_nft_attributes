import React, { useState, useEffect } from "react";

const GameSkill = ({ action, gameSkill, skillList }) => {
  console.log(gameSkill);
  return (
    <div className='buttonMapping'>
      <h3>{action}:</h3>
      <p>{skillList[gameSkill].skill}</p>
    </div>
  );
};

export default GameSkill;
