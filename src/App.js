import "./App.css";

import { useState } from "react";

// components
import AttributeSelector from "./components/AttributeSelector";
import GameSkill from "./components/GameSkill";

// attributes
import AntennaAttributes from "./attributes/AntennaAttributes.json";
import HeadAttributes from "./attributes/HeadAttributes.json";
import FaceAttributes from "./attributes/FaceAttributes.json";
import ChestAttributes from "./attributes/ChestAttributes.json";
import HandsAttributes from "./attributes/HandsAttributes.json";

function App() {
  const [antenna, setAntenna] = useState(0);
  const [head, setHead] = useState(0);
  const [face, setFace] = useState(0);
  const [chest, setChest] = useState(0);
  const [hands, setHands] = useState(0);

  return (
    <div className='App'>
      <h1>Battle Leets Skill Loadout</h1>
      <AttributeSelector
        heading={"Antenna"}
        attribute={antenna}
        setAttribute={setAntenna}
        attributeTypes={AntennaAttributes}
      />
      <AttributeSelector
        heading={"Head"}
        attribute={head}
        setAttribute={setHead}
        attributeTypes={HeadAttributes}
      />
      <AttributeSelector
        heading={"Face"}
        attribute={face}
        setAttribute={setFace}
        attributeTypes={FaceAttributes}
      />
      <AttributeSelector
        heading={"Chest"}
        attribute={chest}
        setAttribute={setChest}
        attributeTypes={ChestAttributes}
      />
      <AttributeSelector
        heading={"Hands"}
        attribute={hands}
        setAttribute={setHands}
        attributeTypes={HandsAttributes}
      />
      <hr />
      <GameSkill
        action={"Right Click"}
        gameSkill={antenna}
        skillList={AntennaAttributes}
      />
      <GameSkill
        action={"'W' Key"}
        gameSkill={head}
        skillList={HeadAttributes}
      />
      <GameSkill
        action={"'E' Key"}
        gameSkill={face}
        skillList={FaceAttributes}
      />
      <GameSkill
        action={"'R' Key"}
        gameSkill={chest}
        skillList={ChestAttributes}
      />
      <GameSkill
        action={"Left Click"}
        gameSkill={hands}
        skillList={HandsAttributes}
      />
    </div>
  );
}

export default App;
